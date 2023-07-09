import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertismentService } from './advertisment.service';

@Component({
  selector: 'app-advertisment',
  templateUrl: './advertisment.component.html',
  styleUrls: ['./advertisment.component.css'],
})
export class AdvertismentComponent {
  advertisements: any[] = [];

  constructor(
    private advertismentService: AdvertismentService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.advertismentService.getAdvertisers().subscribe(
      (data: any[]) => {
        this.advertisements = data.filter(
          (account) => account.accountType === 'advertisers',
        );
      },
      (error) => {
        console.error('Error fetching advertisers:', error);
        // Add error handling logic or show an error message to the user
      },
    );
  }

  public goToProfile(advertiserId: string) {
    // Navigate to the profile page with the advertiserId as a route parameter
    this.router.navigate(['/profile', advertiserId]);
  }
}
