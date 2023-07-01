import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FavoritesService {
  constructor(private http: HttpClient) {}

  updateFavorites(userId: string, advertiserId: string) {
    const url = `/api/accounts/${userId}/favorites`;
    return this.http.patch(url, { advertiserId });
  }
}
