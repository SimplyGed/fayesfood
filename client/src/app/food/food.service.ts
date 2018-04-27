import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Observable';
import 'rxJs/add/observable/of';

import { Recipe } from '../food/food.model';
import { HttpClient } from '@angular/common/http';
import { map, tap, publishLast, refCount } from 'rxJs/operators';

@Injectable()
export class FoodService {

  constructor(private http: HttpClient) { }

  getAllReceipes(): Observable<Recipe[]> {
    console.log('getAllrecipes');
    return this.http.get<Recipe[]>('/api/recipe')
    .pipe(
      publishLast(),
      refCount()
    );
  }
}
