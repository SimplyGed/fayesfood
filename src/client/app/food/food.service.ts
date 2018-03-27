import { Injectable } from '@angular/core';

import { Recipe } from '../food/food.model';

@Injectable()
export class FoodService {

  constructor() { }

  getAllReceipes(): Array<Recipe> {
    return [
      {
        'Title': 'Thai basil chicken',
        'Author': '',
        'Source': 'Faster',
        'Page': 133
      },
      {
        'Title': 'Panner spinach and onion wrap',
        'Author': '',
        'Source': 'Indian Made Easy',
        'Page': 98
      },
      {
        'Title': 'Stuffed chicken and parma ham',
        'Author': 'Gordon Ramsay',
        'Source': 'Healthy',
        'Page': -1
      },
      {
        'Title': 'Cod with crust',
        'Author': 'Jamie Oliver',
        'Source': 'Superfoods',
        'Page': 184
      },
      {
        'Title': 'Lentil bolognese',
        'Author': 'Nigel Slater',
        'Source': 'Eat',
        'Page': 183
      },
      {
        'Title': 'Carrot and squash salad',
        'Author': 'Jamie Oliver',
        'Source': 'Superfoods',
        'Page': 194
      },
      {
        'Title': 'Panner spinach and onion',
        'Author': '',
        'Source': 'Indian Made Easy',
        'Page': 98
      },
      {
        'Title': 'Pepper and halloumi stew',
        'Author': '',
        'Source': 'Modern way to eat',
        'Page': 60
      },
      {
        'Title': 'Potato soup',
        'Author': '',
        'Source': 'http://www.bbc.co.uk/food/recipes/potatosoup_11631',
        'Page': -1
      }
    ];
  }
}
