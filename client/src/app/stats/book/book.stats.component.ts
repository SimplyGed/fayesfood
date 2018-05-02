import { Component, OnInit } from '@angular/core';
import { ChartData } from '../stats.chartdata';
import { Observable } from 'rxjs/Observable';
import { FoodService } from '../../food/food.service';
import { Recipe } from '../../food/food.model';
import { of } from 'rxJs/observable/of';

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
      .subscribe((data) => {
        const list = data.reduce((arr: ChartData[], v: Recipe) => {
          const author = this.createOrFindBook(arr, v);
          author.y += 1;

          return arr;
        }, new Array<ChartData>());

        this.chartData$ = of(list.sort((a, b) => b.y - a.y));
      });
  }

  private createOrFindBook(array: ChartData[], recipe: Recipe): ChartData {
    const name = (recipe.Link ? 'WEB' : recipe.Source);

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
