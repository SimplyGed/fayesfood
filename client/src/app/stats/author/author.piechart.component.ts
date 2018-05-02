import { Component, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartData } from '../stats.chartdata';

@Component({
    selector: 'ff-author-piechart',
    templateUrl: 'author.piechart.component.html'
})
export class AuthorPieChartComponent implements OnChanges {
    @Input() data: ChartData[];

    private authorsPie: Chart;
    private optionsPie: any;

    constructor() {

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
    }

    ngOnChanges(): void {
        this.optionsPie.series[0].data = this.data;
        this.authorsPie = new Chart(this.optionsPie);
    }
}
