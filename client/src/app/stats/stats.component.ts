import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { FoodService } from '../food/food.service';
import { reduce, catchError, tap } from 'rxJs/operators';
import { Recipe } from '../food/food.model';
import { map } from 'rxjs/operators';
import { ByAuthor } from './stats.byauthor';
import { of } from 'rxJs/observable/of';

@Component({
  selector: 'ff-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit, AfterViewInit {
  series: any[];

  ngAfterViewInit(): void {
    console.log(this.data);
  }

  authors: Chart = new Chart({
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
      data: this.series
      // [{
      //   name: 'Jamie Oliver',
      //   y: 5
      // }, {
      //   name: 'Gordon Ramsay',
      //   y: 3
      // }, {
      //   name: 'Anne Jones',
      //   y: 11
      // }]
    }]
  });

  data: ByAuthor[];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.foodService.getAllReceipes()
      .subscribe(
        data => {
          this.data = data.reduce((arr: ByAuthor[], v: Recipe) =>
            (arr[v.Author] = (arr[v.Author] || 0) + 1, arr), new Array<ByAuthor>());
            
          this.data.forEach(ba => {
            this.series.push(ba);
          });
        });
  }

  // .pipe(
  //   reduce((arr: ByAuthor[], v: Recipe) =>
  //     (arr[v.Author] = (arr[v.Author] || 0) + 1, arr), {}}),
  //   tap((data: ByAuthor[]) => this.data = data),
  //   catchError(error => of(error))
  // )
  // .subscribe(
  //   val => console.log(val));
}
