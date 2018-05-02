import { Component } from '@angular/core';

@Component({
  selector: 'ff-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent {

  constructor() {}

  // .pipe(
  //   reduce((arr: ByAuthor[], v: Recipe) =>
  //     (arr[v.Author] = (arr[v.Author] || 0) + 1, arr), {}}),
  //   tap((data: ByAuthor[]) => this.data = data),
  //   catchError(error => of(error))
  // )
  // .subscribe(
  //   val => console.log(val));
}
