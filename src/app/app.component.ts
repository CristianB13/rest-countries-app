import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'rest-countries-app';
  @HostBinding('class')
  theme: string = "";

  ngOnInit(): void {
    this.theme = localStorage.getItem("theme") || "dark"
  }

  toggleTheme(): void {
    if (this.theme === "dark") {
      this.theme = "light";
    } else {
      this.theme = "dark";
    }
    localStorage.setItem("theme", this.theme);
  }
}
