import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryService, Country } from 'src/app/services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries$!: Observable<Country[]>;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries$ = this.countryService.getAll();
  }
}
