import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryComponent } from './components/country/country.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes: Routes = [
  {path: ':code', component: CountryComponent},
  {path: '', component: CountriesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    CountryCardComponent,
    CountryComponent,
    DropdownComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
