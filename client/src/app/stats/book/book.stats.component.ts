import { Component, OnInit } from '@angular/core';
import { ChartData } from '../stats.chartdata';
import { Observable } from 'rxjs/Observable';
import { FoodService } from '../../food/food.service';
import { Recipe } from '../../food/food.model';
import { of } from 'rxJs/observable/of';
import { reduce, switchMap } from 'rxJs/operators';

@Component({
  selector: 'ff-book-stats',
  templateUrl: 'book.stats.component.html'
})
export class BookStatsComponent implements OnInit {
  public chartData$: Observable<ChartData[]>;

  constructor(private foodService: FoodService) {

  }

  ngOnInit(): void {
    this.foodService.getAllReceipes()
      .pipe(
        switchMap(data => data as Recipe[]),

        reduce((arr: ChartData[], value: Recipe) => {
            const author = this.createOrFindBook(arr, value);
            author.y += 1;

            return arr;
          }, new Array<ChartData>()),

        switchMap(data => this.chartData$ = of(data.sort((a, b) => b.y - a.y)))
      )
      .subscribe();
  }

  private createOrFindBook(array: ChartData[], recipe: Recipe): ChartData {
    const name = (recipe.Link ? 'WEB' : recipe.Source);

    let found = array.find(i => i.name === name);

    if (!found) {
      const newData = { name: name, y: 0 };
      array.push(newData);
      found = newData;
    }

    return found;
  }
}
