import { AfterContentInit, Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class AccordionComponent {
  @Input() dailyExchange: IDailyExchangeRateOverview[] | null = null
  @Input() closeDiff!: string
  @Output() loadDailyExchangeEvent = new EventEmitter<void>();

  activeIndex: number | null = null;
  content: boolean = false


  constructor() { }

  onLoadDailyExchangeClick(): void {
    this.content = !this.content
    this.loadDailyExchangeEvent.emit();
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
