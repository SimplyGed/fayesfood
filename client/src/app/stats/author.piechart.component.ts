import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Recipe } from '../food/food.model';
import { ChartData } from './stats.chartdata';
import { Observable } from 'rxjs/Observable';
import { reduce } from 'rxJs/operators';

@Component({
  selector: 'ff-author-piechart',
  templateUrl: 'author.piechart.component.html'
})
export class AuthorPieChartComponent implements OnInit, OnChanges {
  @Input() recipes: Observable<Recipe[]>;
  @Input() title: string;
  @Input() series: string;

  private authorsPie: Chart;
  private optionsPie: any;

  constructor() {

    this.optionsPie = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'not set'
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'not set',
        data: {}
      }]
    };
  }

  ngOnInit(): void {
    this.optionsPie.title.text = this.title;
    this.optionsPie.series[0].name = this.series;
  }

  ngOnChanges(): void {
    const list = this.recipes
      .subscribe(
        data => this.createChartData(data)
      );
  }

  private createChartData(data): void {
    const list = data.reduce((arr: ChartData[], v: Recipe) => {
      const author = this.createOrFindAuthor(arr, v);
      author.y += 1;

      return arr;
    }, new Array<ChartData>());

    this.optionsPie.series[0].data = list;

    this.authorsPie = new Chart(this.optionsPie);
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
