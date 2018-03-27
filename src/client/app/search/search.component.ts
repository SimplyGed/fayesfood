import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food/food.service';

@Component({
  selector: 'ff-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FoodService]
})
export class SearchComponent implements OnInit {
  public results: any[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getAllReceipes().subscribe(data => this.results = data);
  }
}
