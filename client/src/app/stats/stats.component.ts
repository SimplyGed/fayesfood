import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food/food.service';
import { Recipe } from '../food/food.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ff-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  recipes$: Observable<Recipe[]>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {

    this.recipes$ = this.foodService.getAllReceipes();
  }

  // .pipe(
  //   reduce((arr: ByAuthor[], v: Recipe) =>
  //     (arr[v.Author] = (arr[v.Author] || 0) + 1, arr), {}}),
  //   tap((data: ByAuthor[]) => this.data = data),
  //   catchError(error => of(error))
  // )
  // .subscribe(
  //   val => console.log(val));
}
