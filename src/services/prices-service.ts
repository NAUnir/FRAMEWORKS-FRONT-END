import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  /*baseUrl = 'https://reqres.in/api/users?page=2';*/
  baseUrl = 'https://mock.apidog.com/m1/1069422-1057565-default/books';

  constructor(private httpClient: HttpClient) {}

  getPrices() {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('x-api-key', 'reqres-free-v1');
    return this.httpClient.get(this.baseUrl, { headers });
  }
}
