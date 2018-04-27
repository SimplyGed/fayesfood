import { Component, OnInit } from '@angular/core';

import { FoodService } from '../food/food.service';
import { map, tap } from 'rxJs/operators';
import { Recipe } from '../food/food.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ff-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [FoodService]
})
export class SearchComponent implements OnInit {
  public recipes$: Observable<Recipe[]>;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.recipes$ = this.foodService.getAllReceipes();
  }
}
