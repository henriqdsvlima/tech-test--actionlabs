import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { IExchangeRateOverview } from '../../interfaces/exchange-rate';


@Component({
  selector: 'app-accordion',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true
})
export class AccordionComponent implements OnInit {
  activeIndex: number | null = null;
  closeDiff: number = 1.453254

  items: IExchangeRateOverview[] = [{
    date: '05-10-2023',
    open: '5.0666',
    close: '5.0038',
    high: '5.0689',
    low: '4.9836'
  }]

  constructor() { }

  ngOnInit(): void {
  }

  toggle(index: any): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
