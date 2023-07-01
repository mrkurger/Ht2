import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdvertismentService } from '../advertisment/advertisment.service';
import { Review } from '../models/review';
import { FavoritesService } from '../services/favorites.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [FavoritesService]
})
export class ProfileComponent implements OnInit {
  advertiserId!: string;
  advertiser: any;
  distance!: number;
  userReview: Review = { content: '', score: 0 };

  constructor(
    private route: ActivatedRoute,
    private advertismentService: AdvertismentService,
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.advertiserId = id;
        this.fetchAdvertiser();
      } else {
        console.error('Advertiser ID not found');
        // Handle the error or show an error message to the user
      }
    });
  }

  fetchAdvertiser() {
    this.advertismentService.getAdvertiser(this.advertiserId).subscribe(
      (advertiser: any) => {
        this.advertiser = advertiser;
        this.calculateDistance(); // Calculate the distance between user and advertiser
      },
      (error: any) => {
        console.error('Error fetching advertiser:', error);
        // Add error handling logic or show an error message to the user
      }
    );
  }
  
  

  calculateDistance() {
    // Implement the logic to calculate the distance between user and advertiser
    // Assign the calculated distance to the 'distance' property
    this.distance = 5; // Sample value, replace with actual calculation
  }

  addToFavorites() {
    this.authService.currentUser.subscribe((user) => {
      if (!user || !user.id) {
        console.error('User ID not found');
        // Implement error handling logic or show an error message to the user
        return;
      }

      const userId = user.id;

      this.favoritesService.updateFavorites(userId, this.advertiserId).subscribe(
        () => {
          console.log('Ad added to favorites');
          // Implement any additional logic after successfully updating the favorites
        },
        (error) => {
          console.error('Error adding ad to favorites:', error);
          // Implement error handling logic or show an error message to the user
        }
      );
    });
  }

  submitReview() {
    // Implement the logic to submit the user's review
    // You can use a service to save the review to the database
    console.log('User review:', this.userReview);
  }
}
