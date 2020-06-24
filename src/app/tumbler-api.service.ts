import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TumblerApiService {
  // inject the HttpClient as http so we can use it in this class
  constructor(private http: HttpClient) {}

  // return what comes back from this http call
  get(subDomain: string) {
    return this.http.get(`${environment.apiUrl}/tumblr/${subDomain}`);
  }
}
