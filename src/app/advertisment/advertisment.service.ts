import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertismentService {
  constructor(private http: HttpClient) {}

  getAdvertisers(): Observable<any> { // Update this line
    return this.http.get<any>('http://localhost:3000/api/accounts');
  }
}
