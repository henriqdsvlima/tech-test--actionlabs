import { ApiService } from 'src/app/core/services/api.service';
// home.component.ts

import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICurrentExchangeRate } from 'src/app/interfaces/current-exchange-rate';
import { IDailyExchangeRate } from 'src/app/interfaces/exchange-rate';
import { AccordionComponent } from '../../accordion/accordion.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  @ViewChild(AccordionComponent) accordionComponent!: AccordionComponent;
  searchForm: FormGroup;
  currentExchangeRate: ICurrentExchangeRate | null = null;
  dailyExchangeRate: IDailyExchangeRate[] | null = null;
  isLoading: boolean = false;
  errorMessage: string | null = null;
  overview: boolean = false
  closeDiff!: number

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {
    this.searchForm = this.formBuilder.group({
      currencyCode: ['', [Validators.required, Validators.pattern(/^[A-Z]{3}$/)]], // Inicialmente vazio
    });
  }



  ngOnInit(): void {
    this.currentExchangeRate = null;
  }

  onSearch(): void {
    // Verificar se o formulário é válido
    if (this.searchForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const currencyCode = this.searchForm.value.currencyCode;

      // Buscar a taxa de câmbio atual
      this.apiService.getCurrentExchangeRate(currencyCode, 'BRL').subscribe(
        (response: ICurrentExchangeRate) => {
          this.currentExchangeRate = response;
          console.log(this.currentExchangeRate);
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching current exchange rate:', error);
          this.isLoading = false;
          this.errorMessage = 'An error occurred while fetching the current exchange rate.';
        }
      );

      // Buscar a taxa de câmbio diária
      this.apiService.getDailyExchangeRateLast30Days(currencyCode, 'BRL').subscribe(
        (result: any) => {
          this.dailyExchangeRate = result.data.map((item: any, index: number, array: any[]) => {
            this.closeDiff = 0;

            // Se não for o último item, calcula a diferença de 'close' com o próximo item
            if (index < array.length - 1) {
              const currentClose = +item.close;
              const previousClose = +array[index + 1].close;
              this.closeDiff = ((currentClose - previousClose) / previousClose) * 100;
            }

            return {
              ...item,
              closeDiff: this.closeDiff.toFixed(2)
            };
          });

          console.log(this.dailyExchangeRate);
          this.isLoading = false;
        },
        (error: any) => {
          console.error('Error fetching daily exchange rate:', error);
          this.isLoading = false;
          this.errorMessage = 'An error occurred while fetching the daily exchange rate.';
        }
      );
      this.showOverview();
    } else {
      // O formulário não é válido, mostrar uma mensagem de erro ou fazer outra ação
      this.errorMessage = 'Please enter a valid currency code.';
    }
  }


  showOverview = () => {
    setTimeout(() => {
      this.overview = true
    }, 200)

  }

  onInputChange(event: any) {
    // Obtém o valor do campo de entrada
    const inputValue = event.target.value;

    // Converte o valor em maiúsculas
    const uppercaseValue = inputValue.toUpperCase();

    // Define o valor convertido de volta no campo de entrada
    this.searchForm.patchValue({ currencyCode: uppercaseValue });
  }

  ngOnDestroy(): void {
    this.showOverview()
  }


}
