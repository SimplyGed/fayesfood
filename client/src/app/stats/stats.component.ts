import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodService } from '../food/food.service';
import { Recipe } from '../food/food.model';

@Component({
  selector: 'ff-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private foodService: FoodService) {
  }

  ngOnInit() {

    this.foodService.getAllReceipes()
      .subscribe(
        data => {
          this.recipes = data;
        });
  }

  ngOnDestroy(): void {
    // this.receipeSubscription.unsubscribe();
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
