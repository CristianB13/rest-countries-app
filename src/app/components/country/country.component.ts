import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Country, CountryService } from 'src/app/services/country.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  country$!: Observable<Country[]>;

  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location,
    private title: Title) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.country$ = this.countryService.getByCode(params.get("code") || "")
    })
    this.country$.subscribe(country => {
      this.title.setTitle(`RestCountriesApp | ${country[0].name.common}`)
    })
  }

  back(): void {
    this.location.back();
  }
}
