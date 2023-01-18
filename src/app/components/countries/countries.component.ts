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
  filterOptions: string[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  selectedRegions: Set<string> = new Set<string>;
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
    this.countries$ = this.countryService.getAll();
  }

  searchCountry(value: string): void {
    if (value === "") {
      this.countries$ = this.countryService.getAll();
    } else {
      this.countries$ = this.countryService.getByName(value);
    }
  }

  filterByRegionsFunc(regions: Set<string>): (item: any) => boolean   {
    return (item) => {
      if (regions.size === 0) return true;
      if (regions.has(item.region)) return true;
      return false;
    }
  }
}
