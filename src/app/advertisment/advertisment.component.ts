import { Component, OnInit } from '@angular/core';
import { AdvertiserService } from './advertisment.service';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css']
})
export class AdvertismentComponent implements OnInit {
  advertisers: any[] = [];

  constructor(private advertiserService: AdvertiserService) { }

  ngOnInit() {
    this.advertiserService.getAdvertisers().subscribe(
      (data: any[]) => {
        this.advertisers = data;
      },
      (error) => {
        console.log('Error fetching advertisers:', error);
      }
    );
  }
}
