import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}
@Component({
  selector: 'app-search-pipe',
  templateUrl: './search-pipe.component.html',
  styleUrls: ['./search-pipe.component.scss']
})
export class SearchPipeComponent implements OnInit {
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
