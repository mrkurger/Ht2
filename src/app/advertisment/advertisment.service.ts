import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {
  private apiUrl = 'api/advertisments'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAdvertisments(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
