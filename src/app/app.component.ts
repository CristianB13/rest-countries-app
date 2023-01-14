import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: {'[class.dark]': 'darkMode'}
})
export class AppComponent {
  title = 'rest-countries-app';
  darkMode: boolean = true;
}
