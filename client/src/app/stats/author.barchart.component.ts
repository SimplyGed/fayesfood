import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../food/food.model';
import { Chart } from 'angular-highcharts';
import { ChartData } from './stats.chartdata';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ff-author-barchart',
    templateUrl: 'author.barchart.component.html'
})
export class AuthorBarChartComponent implements OnInit, OnChanges {
    @Input() recipes: Observable<Recipe[]>;
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
        const list = this.recipes
            .subscribe(
                data => this.createData(data)
            );
    }

    private createData(data): void {
        const list = data.reduce((arr: ChartData[], v: Recipe) => {
            const author = this.createOrFindAuthor(arr, v);
            author.y += 1;

            return arr;
        }, new Array<ChartData>());

        this.optionsBar.series[0].data = list.sort((a, b) => b.y - a.y);

        this.authorsBar = new Chart(this.optionsBar);
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
