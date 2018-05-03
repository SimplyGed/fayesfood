import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../food/food.model';
import { ChartData } from '../stats.chartdata';
import { FoodService } from '../../food/food.service';
import { Observable } from 'rxjs/Observable';
import { reduce, map, flatMap, switchMap } from 'rxJs/operators';
import { of } from 'rxJs/observable/of';

@Component({
  selector: 'ff-author-stats',
  templateUrl: 'author.stats.component.html'
})
export class AuthorStatsComponent implements OnInit {
  public chartData$: Observable<ChartData[]>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getAllReceipes()
      .pipe(
        switchMap(data => data as Recipe[]),

        reduce((array: ChartData[], value: Recipe) => {
            const author = this.createOrFindAuthor(array, value);
            author.y += 1;

            return array;
          }, new Array<ChartData>()),

        map(data => this.chartData$ = of(data.sort((a, b) => b.y - a.y)))
      )
      .subscribe();
  }

  private createOrFindAuthor(array: ChartData[], recipe: Recipe): ChartData {
    const name = (recipe.Author.length > 0 ? recipe.Author : 'UNKNOWN');

    let found = array.find(i => i.name === name);

    if (!found) {
      const newData = new ChartData();
      newData.name = name;
      newData.y = 0;
      array.push(newData);

      found = newData;
    }

    return found;
  }
}
