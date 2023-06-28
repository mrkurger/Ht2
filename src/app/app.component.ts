// app.component.ts
import { Component, OnInit } from '@angular/core';
import { AdvertismentService } from './advertisment/advertisment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Cleaning Services Classified Ads';
  advertisements: any[] = [];

  constructor(private advertismentService: AdvertismentService) {}

  ngOnInit() {
    this.fetchAdvertisers();
  }

  fetchAdvertisers() {
    this.advertismentService.getAdvertisers().subscribe(
      (data: any[]) => {
        this.advertisements = data;
      },
      (error) => {
        console.log('Error fetching advertisers:', error);
      }
    );
  }
}