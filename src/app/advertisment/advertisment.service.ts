import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdvertiserService {
  private apiUrl = 'http://localhost:3000/advertisers';

  constructor(private http: HttpClient) { }

  getAdvertisers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}
