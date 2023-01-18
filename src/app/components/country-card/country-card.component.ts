import { Component, HostBinding, Input } from '@angular/core';
import { Country } from 'src/app/services/country.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country!: Country;
}
