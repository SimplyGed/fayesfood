import { Injectable } from '@angular/core';
import { Observable } from 'rxJs/Observable';
import 'rxJs/add/observable/of';

import { Recipe } from '../food/food.model';

@Injectable()
export class FoodService {

  constructor() { }

  getAllReceipes(): Observable<Recipe[]> {
    const data: Recipe[] = [
      {
        'Title': 'Thai basil chicken',
        'Author': 'Kate Percy',
        'Source': 'Go Faster',
        'Page': -1
      },
      {
        'Title': 'Paneer spinach and onion wrap',
        'Author': 'Anjum Anand',
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
        'Title': 'Risotto with fennel and ricotta',
        'Author': 'Jamie Oliver',
        'Source': 'Jamie\'s Italy',
        'Page': 145
      },
      {
        'Title': 'Tumeric chicken kebabs',
        'Author': 'Rick Stein',
        'Source': 'Far Eastern Odyssey',
        'Page': 66
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
        'Title': 'Paneer Curry',
        'Author': 'Anjum Anand',
        'Source': 'Indian Made Easy',
        'Page': 98
      },
      {
        'Title': 'Chicken with peas, mint and asparagus',
        'Author': 'Jamie Oliver',
        'Source': 'Superfoods',
        'Page': 162
      },
      {
        'Title': 'Cripsy beef and veg',
        'Author': 'The Hairy Bikers',
        'Source': 'Asian Bikers',
        'Page': 20
      },
      {
        'Title': 'Carrot and squash salad',
        'Author': 'Jamie Oliver',
        'Source': 'Superfoods',
        'Page': 194
      },
      {
        'Title': 'Gnocchi with pea, ham and mushroom ',
        'Author': 'Gordon Ramsay',
        'Source': 'Ultimate Cookery Course',
        'Page': 150
      },
      {
        'Title': 'Sprouting broccoli with sweet tahini',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 81
      },
      {
        'Title': 'Marinated kale salad',
        'Author': 'Ella Woodward',
        'Source': 'Deliciously Ella',
        'Page': 153
      },
      {
        'Title': 'Easy roast veggies',
        'Author': 'Ella Woodward',
        'Source': 'Delciously Ella',
        'Page': 128
      },
      {
        'Title': 'Stuffed chestnut mushrooms',
        'Author': 'Ella Woodward',
        'Source': 'Deliciously Ella',
        'Page': 150
      },
      {
        'Title': 'Tomato risotto',
        'Author': 'Theo Randall',
        'Source': 'Theo\'s Italian',
        'Page': 105
      },
      {
        'Title': 'Squash with cardamom',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 172
      },
      {
        'Title': 'Herb ricotta cakes',
        'Author': 'Nigel Slater',
        'Source': 'Eat',
        'Page': 149
      },
      {
        'Title': 'Parsnip rosti',
        'Author': 'Nigel Slater',
        'Source': 'Eat',
        'Page': 111
      },
      {
        'Title': 'Spelt, basil and ricotta cakes',
        'Author': 'Nigel Slater',
        'Source': 'Eat',
        'Page': 131
      },
      {
        'Title': 'Pepper and halloumi stew',
        'Author': 'Anna Jones',
        'Source': 'A Modern way to eat',
        'Page': 87
      },
      {
        'Title': 'Asparagus soup',
        'Author': 'Jamie Oliver',
        'Source': 'Jamie At Home',
        'Page': -1
      },
      {
        'Title': 'Herb rolls',
        'Author': 'Nigel Slater',
        'Source': 'Eat',
        'Page': 15
      },
      {
        'Title': 'Saffron and rosemary chicken',
        'Author': 'Sabrina Ghayour',
        'Source': 'Persiana',
        'Page': 104
      },
      {
        'Title': 'Cumin and honey roasted carrots',
        'Author': 'Sabrina Ghayour',
        'Source': 'Persiana',
        'Page': 191
      },
      {
        'Title': 'Butternut squash with pesto and feta',
        'Author': 'Sabrina Ghayour',
        'Source': 'Persiana',
        'Page': 198
      },
      {
        'Title': 'Veggie moussaka',
        'Author': 'Jamie Oliver',
        'Source': 'Jamie Oliver Website',
        'Page': -1,
        'Link': '//www.jamieoliver.com/recipes/vegetables-recipes/beautiful-veggie-moussaka',
      },
      {
        'Title': 'Roasted mushroom soup',
        'Author': 'Hugh Fearnley-Whittingstall',
        'Source': 'Light and easy',
        'Page': 126
      },
      {
        'Title': 'Cauliflower, grape and cheddar salad',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 178
      },
      {
        'Title': 'Pea and mint croquettes',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 198
      },
      {
        'Title': 'Aubergine cheesecake',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 254
      },
      {
        'Title': 'Squash, red onion and butter bean roast',
        'Author': 'Hugh Fearnley-Whittingstall',
        'Source': 'Light and Easy',
        'Page': 302
      },
      {
        'Title': 'Beetroot curry',
        'Author': 'Jackie Kearney',
        'Source': 'Vegan Street Food',
        'Page': 87
      },
      {
        'Title': 'Quinoa salad with walnut and mango',
        'Author': 'Paul Rankin',
        'Source': 'BBCFood Website',
        'Page': -1,
        'Link': '//www.bbc.com/food/recipes/quinoasaladwithavoca_84148',
      },
      {
        'Title': 'Paneer stuffed peppers',
        'Author': 'Meera Sodha',
        'Source': 'Fresh India',
        'Page': 161
      },
      {
        'Title': 'Spicy mushroom and broccoli noodles',
        'Author': '',
        'Source': 'One Note',
        'Page': -1
      },
      {
        'Title': 'Spicy chipotle jackfruit tacos',
        'Author': '',
        'Source': '',
        'Page': -1
      },
      {
        'Title': 'Gnocchi with spinach',
        'Author': 'Theo Randall',
        'Source': 'Theo\'s Italian',
        'Page': 95
      },
      {
        'Title': 'Fish tacos with kiwi salsa',
        'Author': 'Jamie Oliver',
        'Source': 'Superfoods',
        'Page': 86
      },
      {
        'Title': 'Baked spring rolls',
        'Author': 'Jackie Kearney',
        'Source': 'Vegan Street Food',
        'Page': 177
      },
      {
        'Title': 'Spicy fried roti with veg',
        'Author': 'Jackie Kearney',
        'Source': 'Vegan Street Food',
        'Page': 82
      },
      {
        'Title': 'Maple peanut California wraps',
        'Author': 'Anna Jones',
        'Source': 'A Modern Way To Eat',
        'Page': 60
      },
      {
        'Title': 'Cauliflower korma',
        'Author': 'Meera Sodha',
        'Source': 'Fresh India',
        'Page': 68
      },
      {
        'Title': 'Carrot, sweetcorn and elderflower soup',
        'Author': 'New Covent Garden Soup Company',
        'Source': 'Soup For Everyday',
        'Page': 204
      },
      {
        'Title': 'Cod with parmentier potatoes',
        'Author': 'Sunday Brunch',
        'Source': '',
        'Page': -1
      },
      {
        'Title': 'Squash, avocado and rocket salad',
        'Author': 'Ella Woodward',
        'Source': 'Deliciously Ella',
        'Page': 145
      },
      {
        'Title': 'Mushroom pithivier',
        'Author': 'Yotam Ottolenghi',
        'Source': 'Plenty',
        'Page': 278
      },
      {
        'Title': 'Mango paneer skewers',
        'Author': 'Meera Sodha',
        'Source': 'Fresh Indian',
        'Page': 158
      },
      {
        'Title': 'Butternut squash and parmesan soup',
        'Author': 'New Covent Garden Soup Company',
        'Source': 'Soup For Everyday',
        'Page': 293
      },
      {
        'Title': 'Broccoli cheddar and wild rice',
        'Author': '',
        'Source': 'One Note',
        'Page': -1
      },
      {
        'Title': 'Spinach soup with rosemary',
        'Author': '',
        'Source': 'One Note',
        'Page': -1
      },
      {
        'Title': 'Butternut squash and kale tart',
        'Author': 'Anna Jones',
        'Source': 'A Modern Way To Eat',
        'Page': 189
      },
      {
        'Title': 'Smoky mushroom frittata',
        'Author': 'Jamie Oliver',
        'Source': '5 Ingredients',
        'Page': 93
      },
      {
        'Title': 'Mushroom curry',
        'Author': 'Jamie Oliver',
        'Source': '',
        'Page': -1
      },
      {
        'Title': 'Edamame, bean and pea soup',
        'Author': 'Gordon Ramsay',
        'Source': 'Ultimate Fit Food',
        'Page': 150
      },
      {
        'Title': 'Miso cod',
        'Author': 'Gordon Ramsay',
        'Source': 'Ultimate Fit Food',
        'Page': 64
      },
      {
        'Title': 'Malaysian chicken satay',
        'Author': '',
        'Source': 'One Note',
        'Page': -1
      },
      {
        'Title': 'Quorn spaghetti bolognese',
        'Author': '',
        'Source': '',
        'Page': -1
      },
      {
        'Title': 'Harissa squash salad',
        'Author': 'Jamie Oliver',
        'Source': '5 Ingredients',
        'Page': 20
      },
      {
        'Title': 'Pancetta cod',
        'Author': 'Jamie Oliver',
        'Source': '5 Ingredients',
        'Page': 142
      },
      {
        'Title': 'Cripsy garlic chicken',
        'Author': 'Jamie Oliver',
        'Source': '5 Ingredients',
        'Page': 108
      },
      // {
      //   'Title': '',
      //   'Author': '',
      //   'Source': '',
      //   'Page': -1
      // },
      {
        'Title': 'Potato soup',
        'Author': 'Darina Allen',
        'Source': 'BBCFood Website',
        'Page': -1,
        'Link': '//www.bbc.co.uk/food/recipes/potatosoup_11631',
      }
    ];

    return Observable.of<Recipe[]>(data);
  }
}
