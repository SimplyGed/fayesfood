import { Component, OnChanges, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartData } from '../stats.chartdata';

@Component({
    selector: 'ff-book-piechart',
    templateUrl: 'book.piechart.component.html'
})
export class BookPieChartComponent implements OnChanges {
    @Input() data: ChartData[];

    private booksPie: Chart;
    private optionsPie: any;

    constructor() {

        this.optionsPie = {
            chart: {
                type: 'pie'
            },
            title: {
                text: 'Recipes By Book'
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'Book',
                data: {}
            }]
        };
    }

    ngOnChanges(): void {
        this.optionsPie.series[0].data = this.data;
        this.booksPie = new Chart(this.optionsPie);
    }
}
