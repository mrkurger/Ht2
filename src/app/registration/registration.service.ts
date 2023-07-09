import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  register(registrationData: any) {
    const endpoint = 'http://localhost:3000/api/accounts';
    return this.http.post(endpoint, registrationData);
  }
}
