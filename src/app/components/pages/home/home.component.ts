import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  data: any[] = []

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private apiService:ApiService) {

  }

  getAllData() {
    return this.apiService.getAll<any>('articles').subscribe(response => {
      if (response.success) {
        this.data = response.data;
      }
    });
  }



}
