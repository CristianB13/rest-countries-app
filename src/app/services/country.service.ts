import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  getAll(): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.apiUrl}/all`);
  }

  getByName(name: string): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.apiUrl}/name/${name}`);
  }

  getByCode(code: string): Observable<unknown[]> {
    return this.http.get<unknown[]>(`${this.apiUrl}/alpha/${code}`);
  }
}
