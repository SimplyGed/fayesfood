import { Component, OnInit, OnDestroy } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FoodService } from '../food/food.service';
import { reduce, catchError, tap } from 'rxJs/operators';
import { Recipe } from '../food/food.model';
import { map } from 'rxjs/operators';
import { ByAuthor } from './stats.byauthor';
import { of } from 'rxJs/observable/of';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ff-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, OnDestroy {
  optionsPie: any;
  authorsPie: Chart;

  optionsBar: any;
  authorsBar: Chart;

  receipeSubscription: Subscription;

  constructor(private foodService: FoodService) {
    this.optionsPie = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Recipes By Author'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Recipes',
        data: {}
      }]
    };

    this.optionsBar = {
      chart: {
        type: 'column'
      },
      title: {
        text: null
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: '# Recipes'
        }
      },
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          groupPadding: 0,
          shadow: false
        }
      },
      series: [{
        name: 'Recipes',
        data: {}
      }]
    };
  }

  ngOnInit() {

    this.receipeSubscription = this.foodService.getAllReceipes()
      .subscribe(
      data => {
        const list = data.reduce((arr: ByAuthor[], v: Recipe) => {
          const author = this.createOrFindAuthor(arr, v);
          author.y += 1;

          return arr;
        }, new Array<ByAuthor>());

        this.optionsPie.series[0].data = list;

        this.optionsBar.series[0].data = list.sort((a, b) => b.y - a.y);

        this.authorsPie = new Chart(this.optionsPie);
        this.authorsBar = new Chart(this.optionsBar);
      });
  }

  private createOrFindAuthor(array: ByAuthor[], recipe: Recipe): ByAuthor {
    const name = (recipe.Author.length > 0 ? recipe.Author : 'UNKNOWN');

    let found = array.find(i => i.name === name);

    if (!found) {
      const newAuthor = new ByAuthor();
      newAuthor.name = name;
      newAuthor.y = 0;
      array.push(newAuthor);

      found = newAuthor;
    }

    return found;
  }

  ngOnDestroy(): void {
    this.receipeSubscription.unsubscribe();
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
