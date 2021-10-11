import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent implements OnInit {
  searchText : string = "";
filterMetadata = { count: 0 };

  characters = [
  {
      name : "Daenerys",
      family : "Targaryen",
      gender : "Female"
  },
  {
      name : "Jaime",
      family : "Lannister",
      gender : "Male"
  },
  {
      name : "Sansa",
      family : "Stark",
      gender : "Female"
  },
  {
      name : "Arya",
      family : "Stark",
      gender : "Female"
  },
  {
      name : "Theon",
      family : "Greyjoy",
      gender : "Male"
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
