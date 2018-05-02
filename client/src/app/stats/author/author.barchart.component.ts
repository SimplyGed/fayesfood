import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { ChartData } from '../stats.chartdata';

@Component({
    selector: 'ff-author-barchart',
    templateUrl: 'author.barchart.component.html'
})
export class AuthorBarChartComponent implements OnInit, OnChanges {
    @Input() data: ChartData[];
    @Input() title: string;
    @Input() series: string;

    private authorsBar: Chart;
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
        this.optionsBar.yAxis.title = this.title;
        this.optionsBar.series[0].name = this.series;
    }

    ngOnChanges(): void {
        this.optionsBar.series[0].data = this.data;
        this.authorsBar = new Chart(this.optionsBar);
    }
}
