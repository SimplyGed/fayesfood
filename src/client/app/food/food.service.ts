import { Injectable } from '@angular/core';
import { Receipe } from './food.model';

@Injectable()
export class FoodService {

  constructor() { }

  getAllReceipes(): Array<Receipe> {
    return [
      new Receipe('Chicken Curry'),
      new Receipe('Vegetable Lasagne'),
      new Receipe('Cauliflower Pizza')
    ];
  }
}
