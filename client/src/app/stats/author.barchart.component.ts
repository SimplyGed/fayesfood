import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../food/food.model';
import { Chart } from 'angular-highcharts';
import { ChartData } from './stats.chartdata';

@Component({
    selector: 'ff-author-barchart',
    templateUrl: 'author.barchart.component.html'
})
export class AuthorBarChartComponent implements OnInit {
    @Input() recipes: Recipe[];

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

    ngOnInit(): void {
        const list = this.recipes.reduce((arr: ChartData[], v: Recipe) => {
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
