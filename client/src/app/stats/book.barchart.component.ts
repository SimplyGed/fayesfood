import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../food/food.model';
import { Chart } from 'angular-highcharts';
import { ChartData } from './stats.chartdata';

@Component({
  selector: 'ff-book-barchart',
  templateUrl: 'book.barchart.component.html'
})
export class BookBarChartComponent implements OnInit {
  @Input() recipes: Recipe[];

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
          text: '# Books'
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
        name: 'Books',
        data: {}
      }]
    };
  }

  ngOnInit(): void {
    const list = this.recipes.reduce((arr: ChartData[], v: Recipe) => {
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
