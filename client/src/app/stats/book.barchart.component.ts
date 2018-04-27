import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../food/food.model';
import { Chart } from 'angular-highcharts';
import { ChartData } from './stats.chartdata';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ff-book-barchart',
  templateUrl: 'book.barchart.component.html'
})
export class BookBarChartComponent implements OnInit, OnChanges {
  @Input() recipes: Observable<Recipe[]>;
  @Input() title: string;
  @Input() series: string;

  private bookBar: Chart;
  private optionsBar: any;

  constructor() {

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
          text: 'not set'
        },
        tickInterval: 2
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
        name: 'not set',
        data: {}
      }]
    };
  }

  ngOnInit(): void {
    this.optionsBar.title.text = this.title;
    this.optionsBar.series[0].name = this.series;
  }

  ngOnChanges(): void {
    this.recipes.subscribe(
      data => this.createData(data)
    );
  }

  private createData(data): void {
    const list = data.reduce((arr: ChartData[], v: Recipe) => {
      const author = this.createOrFindBook(arr, v);
      author.y += 1;

      return arr;
    }, new Array<ChartData>());

    this.optionsBar.series[0].data = list.sort((a, b) => b.y - a.y);

    this.bookBar = new Chart(this.optionsBar);
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
