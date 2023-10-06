import { Component, HostListener, Input, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IDailyExchangeRate, IDailyExchangeRateOverview } from '../../interfaces/exchange-rate';
import { ApiListResponse } from 'src/app/core/responses/api.models';


@Component({
  selector: 'app-accordion',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true
})
export class AccordionComponent implements OnInit {
  @Input() dailyExchange: IDailyExchangeRateOverview[] | null = null
  @Input() closeDiff!: string
  activeIndex: number | null = null;



  constructor() { }

  ngOnInit(): void {
    console.log('AccordionComponent Initialized');
    // Lógica de inicialização, se necessário.
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }





  toggle(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }


  getCloseDiffClass(closeDiff: number | undefined): string {
    if (closeDiff === undefined) {
      return '';  // ou uma classe padrão para quando closeDiff é undefined
    }
    return closeDiff > 0 * 100 ? 'text-green-500' : 'text-red-500';
  }
}
