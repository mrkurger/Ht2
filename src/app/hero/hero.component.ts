import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  advertisers = [
    {
      id: 1,
      name: 'Advertiser 1',
      online: true
    },
    {
      id: 2,
      name: 'Advertiser 2',
      online: false
    },
    {
      id: 3,
      name: 'Advertiser 3',
      online: true
    }
  ];

  startChat(advertiserId: number) {
    // Start chat logic here...
    console.log(`Starting chat with advertiser ${advertiserId}`);
  }
}
