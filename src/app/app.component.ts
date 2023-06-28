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

  constructor(private advertismentService: AdvertismentService) { }

  ngOnInit() {
    this.advertismentService.getAdvertisments().subscribe(
      (data: any[]) => {
        this.advertisements = data;
      }
    );
  }
}

