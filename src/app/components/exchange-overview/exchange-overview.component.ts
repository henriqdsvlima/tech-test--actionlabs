import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';


@Component({
  selector: 'app-exchange-overview',
  templateUrl: './exchange-overview.component.html',
  styleUrls: ['./exchange-overview.component.scss'],
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    AccordionComponent
  ]
})
export class ExchangeOverviewComponent {

}
