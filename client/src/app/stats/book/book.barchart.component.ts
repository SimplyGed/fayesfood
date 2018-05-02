import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartData } from '../stats.chartdata';

@Component({
  selector: 'ff-book-barchart',
  templateUrl: 'book.barchart.component.html'
})
export class BookBarChartComponent implements OnChanges {
  @Input() data: ChartData[];

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
        },
        tickInterval: 1
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

  ngOnChanges(): void {
    this.optionsBar.series[0].data = this.data;
    this.bookBar = new Chart(this.optionsBar);
  }
}
