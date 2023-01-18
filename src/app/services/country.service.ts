import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Country {
  name: {
    common: string,
    official: string,
    nativeName: {
      [key: string]: {
        official: string,
        common: string
      }
    }
  },
  tld: string[],
  cca2: string,
  ccn3: string,
  cca3: string,
  cioc: string,
  independent: boolean,
  status: string,
  unMember: boolean,
  currencies: {
    [key: string]: {
      name: string,
      symbol: string
    }
  },
  idd: {
    root: string,
    suffixes: string[]
  },
  capital: string[],
  altSpellings: string[],
  region: string,
  subregion: string,
  languages: {
    [key: string]: string
  },
  translations: {
    [key: string]: {
      official: string,
      common: string
    }
  },
  latlng: number[],
  demonyms: {
    [key: string]: {
      f: string,
      m: string
    }
  },
  landlocked: boolean,
  borders: string[],
  area: number,
  callingCodes: string[],
  flag: string,
  maps: {
    [key: string]: string
  },
  population: number,
  gini: {
    [key: string]: string
  },
  fifa: string,
  car: {
    signs: string[],
    side: string
  },
  timezones: string[],
  continents: string[],
  flags: {
    [key: string]: string
  },
  coatOfArms: {
    [key: string]: string
  },
  startOfWeek: string,
  capitalInfo: {
    [key: string]: string
  },
  postalCode: {
    format: string,
    regex: string
  },
  [propName: string]: any
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiUrl: string = "https://restcountries.com/v3.1"

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/all`);
  }

  getByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/name/${name}`);
  }

  getByCode(code: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/alpha/${code}`);
  }
}
