import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Country, CountryService } from 'src/app/services/country.service';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit, OnDestroy {
  country$!: Observable<Country[]>;
  private subscription!: Subscription;

  constructor(private countryService: CountryService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    private title: Title) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.country$ = this.countryService.getByCode(params.get("code") || "")
    })
    this.subscription = this.country$.subscribe(country => {
      this.title.setTitle(`RestCountriesApp | ${country[0].name.common}`)
    }, error => {
      this.router.navigate([""], {replaceUrl: true});
    })
  }

  back(): void {
    this.location.back();
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
