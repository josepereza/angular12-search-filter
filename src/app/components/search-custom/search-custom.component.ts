import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
@Component({
  selector: 'app-search-custom',
  templateUrl: './search-custom.component.html',
  styleUrls: ['./search-custom.component.scss']
})
export class SearchCustomComponent implements OnInit {
  searchTerm!: any;
  countries!: Country[];
  allCountries!: Country[];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Country[]>('./assets/data/countries.json')
    .subscribe((data: Country[]) => {
      this.countries = data;
      this.allCountries = this.countries;
    });
  }
  search(event: any): void {
    this.countries = this.allCountries.filter((val) => val.name.toLowerCase().includes(event.target.value));
  }

}
