import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../food/food.model';
import { ChartData } from '../stats.chartdata';
import { FoodService } from '../../food/food.service';
import { of } from 'rxJs/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ff-author-stats',
  templateUrl: 'author.stats.component.html'
})
export class AuthorStatsComponent implements OnInit {
  public chartData$: Observable<Array<ChartData>>;

  constructor(private foodService: FoodService) {
  }

  ngOnInit(): void {
    this.foodService.getAllReceipes()
      .subscribe((data) => {
        const list = data.reduce((arr: ChartData[], v: Recipe) => {
          const author = this.createOrFindAuthor(arr, v);
          author.y += 1;

          return arr;
        }, new Array<ChartData>());

        this.chartData$ = of(list.sort((a, b) => b.y - a.y));
      });
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
