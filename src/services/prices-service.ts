import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PricesService {
  /*baseUrl = 'https://reqres.in/api/users?page=2';*/
  baseUrl = 'https://mock.apidog.com/m1/1069422-1057565-default/books';
  baseUrlPost = 'https://reqres.in/api/users';

  constructor(private httpClient: HttpClient) {}

  getPrices() {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('x-api-key', 'reqres-free-v1');
    return this.httpClient.get(this.baseUrl, { headers }).pipe(
      catchError((error) => {
        console.error('Error fetching prices:', error);
        return throwError(() => new Error('Error fetching prices'));
      })
    );
  }

  getPricesbyId(id: number) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('x-api-key', 'reqres-free-v1');
    return this.httpClient.get(this.baseUrl + '/' + id, { headers });
  }

  postUser(data: any) {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('x-api-key', 'reqres-free-v1');
    return this.httpClient.post(this.baseUrlPost, data, { headers });
  }
}
