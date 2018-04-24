import { Component, OnInit, Input } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { Recipe } from '../food/food.model';
import { ChartData } from './stats.chartdata';

@Component({
    selector: 'ff-author-piechart',
    templateUrl: 'author.piechart.component.html'
})
export class AuthorPieChartComponent implements OnInit {
    @Input() recipes: Recipe[];

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

    ngOnInit(): void {
        const list = this.recipes.reduce((arr: ChartData[], v: Recipe) => {
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
