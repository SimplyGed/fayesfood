import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from '../food/food.model';
import { Chart } from 'angular-highcharts';
import { ChartData } from './stats.chartdata';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'ff-book-piechart',
    templateUrl: 'book.piechart.component.html'
})
export class BookPieChartComponent implements OnInit, OnChanges {
    @Input() recipes: Observable<Recipe[]>;
    @Input() title: string;
    @Input() series: string;

    private booksPie: Chart;
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
                name: 'Book',
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
                data => this.createData(data)
        );
    }

    private createData(data): void {
        const list = data.reduce((arr: ChartData[], v: Recipe) => {
            const author = this.createOrFindBook(arr, v);
            author.y += 1;

            return arr;
        }, new Array<ChartData>());

        this.optionsPie.series[0].data = list;

        this.booksPie = new Chart(this.optionsPie);
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
