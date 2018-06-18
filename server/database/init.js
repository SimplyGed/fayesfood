const Recipe = require('./recipe');

const recipes = [
  {
    'id': 1,
    'title': 'Thai basil chicken',
    'author': 'Kate Percy',
    'source': 'Go Faster',
    'page': 68
  },
  {
    'id': 2,
    'title': 'Paneer spinach and onion wrap',
    'author': 'Anjum Anand',
    'source': 'Indian Made Easy',
    'page': 98
  },
  {
    'id': 3,
    'title': 'Stuffed chicken and parma ham',
    'author': 'Gordon Ramsay',
    'source': 'Healthy',
    'page': -1
  },
  {
    'id': 4,
    'title': 'Risotto with fennel and ricotta',
    'author': 'Jamie Oliver',
    'source': 'Jamie\'s Italy',
    'page': 145
  },
  {
    'id': 5,
    'title': 'Tumeric chicken kebabs',
    'author': 'Rick Stein',
    'source': 'Far Eastern Odyssey',
    'page': 66
  },
  {
    'id': 6,
    'title': 'Cod with crust',
    'author': 'Jamie Oliver',
    'source': 'Superfoods',
    'page': 184
  },
  {
    'id': 7,
    'title': 'Lentil bolognese',
    'author': 'Nigel Slater',
    'source': 'Eat',
    'page': 183
  },
  {
    'id': 8,
    'title': 'Paneer Curry',
    'author': 'Anjum Anand',
    'source': 'Indian Made Easy',
    'page': 98
  },
  {
    'id': 9,
    'title': 'Chicken with peas, mint and asparagus',
    'author': 'Jamie Oliver',
    'source': 'Superfoods',
    'page': 162
  },
  {
    'id': 10,
    'title': 'Cripsy beef and veg',
    'author': 'The Hairy Bikers',
    'source': 'Asian Bikers',
    'page': 20
  },
  {
    'id': 11,
    'title': 'Carrot and squash salad',
    'author': 'Jamie Oliver',
    'source': 'Superfoods',
    'page': 194
  },
  {
    'id': 12,
    'title': 'Gnocchi with pea, ham and mushroom ',
    'author': 'Gordon Ramsay',
    'source': 'Ultimate Cookery Course',
    'page': 150
  },
  {
    'id': 13,
    'title': 'Sprouting broccoli with sweet tahini',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 81
  },
  {
    'id': 14,
    'title': 'Marinated kale salad',
    'author': 'Ella Woodward',
    'source': 'Deliciously Ella',
    'page': 153
  },
  {
    'id': 15,
    'title': 'Easy roast veggies',
    'author': 'Ella Woodward',
    'source': 'Delciously Ella',
    'page': 128
  },
  {
    'id': 16,
    'title': 'Stuffed chestnut mushrooms',
    'author': 'Ella Woodward',
    'source': 'Deliciously Ella',
    'page': 150
  },
  {
    'id': 17,
    'title': 'Tomato risotto',
    'author': 'Theo Randall',
    'source': 'Theo\'s Italian',
    'page': 105
  },
  {
    'id': 18,
    'title': 'Squash with cardamom',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 172
  },
  {
    'id': 19,
    'title': 'Herb ricotta cakes',
    'author': 'Nigel Slater',
    'source': 'Eat',
    'page': 149
  },
  {
    'id': 20,
    'title': 'Parsnip rosti',
    'author': 'Nigel Slater',
    'source': 'Eat',
    'page': 111
  },
  {
    'id': 21,
    'title': 'Spelt, basil and ricotta cakes',
    'author': 'Nigel Slater',
    'source': 'Eat',
    'page': 131
  },
  {
    'id': 22,
    'title': 'Pepper and halloumi stew',
    'author': 'Anna Jones',
    'source': 'A Modern way to eat',
    'page': 87
  },
  {
    'id': 23,
    'title': 'Asparagus soup',
    'author': 'Jamie Oliver',
    'source': 'Jamie At Home',
    'page': -1
  },
  {
    'id': 24,
    'title': 'Herb rolls',
    'author': 'Nigel Slater',
    'source': 'Eat',
    'page': 15
  },
  {
    'id': 25,
    'title': 'Saffron and rosemary chicken',
    'author': 'Sabrina Ghayour',
    'source': 'Persiana',
    'page': 104
  },
  {
    'id': 26,
    'title': 'Cumin and honey roasted carrots',
    'author': 'Sabrina Ghayour',
    'source': 'Persiana',
    'page': 191
  },
  {
    'id': 27,
    'title': 'Butternut squash with pesto and feta',
    'author': 'Sabrina Ghayour',
    'source': 'Persiana',
    'page': 198
  },
  {
    'id': 28,
    'title': 'Veggie moussaka',
    'author': 'Jamie Oliver',
    'source': 'Jamie Oliver Website',
    'page': -1,
    'link': '//www.jamieoliver.com/recipes/vegetables-recipes/beautiful-veggie-moussaka',
  },
  {
    'id': 29,
    'title': 'Roasted mushroom soup',
    'author': 'Hugh Fearnley-Whittingstall',
    'source': 'Light and easy',
    'page': 126
  },
  {
    'id': 30,
    'title': 'Cauliflower, grape and cheddar salad',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 178
  },
  {
    'id': 31,
    'title': 'Pea and mint croquettes',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 198
  },
  {
    'id': 32,
    'title': 'Aubergine cheesecake',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 254
  },
  {
    'id': 33,
    'title': 'Squash, red onion and butter bean roast',
    'author': 'Hugh Fearnley-Whittingstall',
    'source': 'Light and Easy',
    'page': 302
  },
  {
    'id': 34,
    'title': 'Beetroot curry',
    'author': 'Jackie Kearney',
    'source': 'Vegan Street Food',
    'page': 87
  },
  {
    'id': 35,
    'title': 'Quinoa salad with walnut and mango',
    'author': 'Paul Rankin',
    'source': 'BBCFood Website',
    'page': -1,
    'link': '//www.bbc.com/food/recipes/quinoasaladwithavoca_84148',
  },
  {
    'id': 36,
    'title': 'Paneer stuffed peppers',
    'author': 'Meera Sodha',
    'source': 'Fresh India',
    'page': 161
  },
  {
    'id': 37,
    'title': 'Spicy mushroom and broccoli noodles',
    'author': '',
    'source': 'One Note',
    'page': -1
  },
  {
    'id': 38,
    'title': 'Spicy chipotle jackfruit tacos',
    'author': 'Richa Hingle',
    'source': 'Vegan Richa Website',
    'link': 'http://www.veganricha.com/2015/09/spicy-chipotle-garlic-jackfruit-tacos.html',
    'page': -1
  },
  {
    'id': 39,
    'title': 'Gnocchi with spinach',
    'author': 'Theo Randall',
    'source': 'Theo\'s Italian',
    'page': 95
  },
  {
    'id': 40,
    'title': 'Fish tacos with kiwi salsa',
    'author': 'Jamie Oliver',
    'source': 'Superfoods',
    'page': 86
  },
  {
    'id': 41,
    'title': 'Baked spring rolls',
    'author': 'Jackie Kearney',
    'source': 'Vegan Street Food',
    'page': 177
  },
  {
    'id': 42,
    'title': 'Spicy fried roti with veg',
    'author': 'Jackie Kearney',
    'source': 'Vegan Street Food',
    'page': 82
  },
  {
    'id': 43,
    'title': 'Maple peanut California wraps',
    'author': 'Anna Jones',
    'source': 'A Modern Way To Eat',
    'page': 60
  },
  {
    'id': 44,
    'title': 'Cauliflower korma',
    'author': 'Meera Sodha',
    'source': 'Fresh India',
    'page': 68
  },
  {
    'id': 45,
    'title': 'Carrot, sweetcorn and elderflower soup',
    'author': 'New Covent Garden Soup Company',
    'source': 'Soup For Everyday',
    'page': 204
  },
  {
    'id': 46,
    'title': 'Cod with parmentier potatoes',
    'author': 'Sunday Brunch',
    'source': 'Channel 4 Website',
    'link': 'http://www.channel4.com/programmes/sunday-brunch/articles/latest-recipes/cod-with-parmentier-potatoes-and-butter-sauce/5419',
    'page': -1
  },
  {
    'id': 47,
    'title': 'Squash, avocado and rocket salad',
    'author': 'Ella Woodward',
    'source': 'Deliciously Ella',
    'page': 145
  },
  {
    'id': 48,
    'title': 'Mushroom pithivier',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 278
  },
  {
    'id': 49,
    'title': 'Mango paneer skewers',
    'author': 'Meera Sodha',
    'source': 'Fresh Indian',
    'page': 158
  },
  {
    'id': 50,
    'title': 'Butternut squash and parmesan soup',
    'author': 'New Covent Garden Soup Company',
    'source': 'Soup For Everyday',
    'page': 293
  },
  {
    'id': 51,
    'title': 'Broccoli cheddar and wild rice',
    'author': '',
    'source': 'One Note',
    'page': -1
  },
  {
    'id': 52,
    'title': 'Spinach soup with rosemary',
    'author': '',
    'source': 'One Note',
    'page': -1
  },
  {
    'id': 53,
    'title': 'Butternut squash and kale tart',
    'author': 'Anna Jones',
    'source': 'A Modern Way To Eat',
    'page': 189
  },
  {
    'id': 54,
    'title': 'Smoky mushroom frittata',
    'author': 'Jamie Oliver',
    'source': '5 Ingredients',
    'page': 93
  },
  {
    'id': 55,
    'title': 'Mushroom curry',
    'author': 'Jamie Oliver',
    'source': 'Jamie Oliver Website',
    'link': 'https://www.jamieoliver.com/recipes/vegetable-recipes/mushroom-curry/',
    'page': -1
  },
  {
    'id': 56,
    'title': 'Edamame, bean and pea soup',
    'author': 'Gordon Ramsay',
    'source': 'Ultimate Fit Food',
    'page': 150
  },
  {
    'id': 57,
    'title': 'Miso cod',
    'author': 'Gordon Ramsay',
    'source': 'Ultimate Fit Food',
    'page': 64
  },
  {
    'id': 58,
    'title': 'Malaysian chicken satay',
    'author': '',
    'source': 'One Note',
    'page': -1
  },
  {
    'id': 59,
    'title': 'Quorn spaghetti bolognese',
    'author': '',
    'source': 'BBCFood Website',
    'link': 'https://www.bbcgoodfood.com/recipes/3028703/quorn-spaghetti-bolognese',
    'page': -1
  },
  {
    'id': 60,
    'title': 'Harissa squash salad',
    'author': 'Jamie Oliver',
    'source': '5 Ingredients',
    'page': 20
  },
  {
    'id': 61,
    'title': 'Pancetta cod',
    'author': 'Jamie Oliver',
    'source': '5 Ingredients',
    'page': 142
  },
  {
    'id': 62,
    'title': 'Cripsy garlic chicken',
    'author': 'Jamie Oliver',
    'source': '5 Ingredients',
    'page': 108
  },
  {
    'id': 63,
    'title': 'Corn and spring onion pancakes',
    'author': 'Yotam Ottolenghi',
    'source': 'Plenty',
    'page': 262
  },
  // {
  //   'id': 0,
  //   'title': '',
  //   'author': '',
  //   'source': '',
  //   'page': -1
  // },
  {
    'id': 64,
    'title': 'Potato soup',
    'author': 'Darina Allen',
    'source': 'BBCFood Website',
    'page': -1,
    'link': '//www.bbc.co.uk/food/recipes/potatosoup_11631',
  }
];

function init() {
  for (var i = 0; i < recipes.length; ++i) {

    const r = recipes[i];

    Recipe.findOne({ 'id': r.id }, (err, found) => {
      if (err) {
        console.log(err);
        return;
      }

      if (found) {
        console.log(`Updating ${found.id}`);
        const changes = new Recipe(r);
        changes._id = found._id;
        
        Recipe.update({ id: found.id }, changes, (err, updated) => {
          if (err) {
            console.log(`Could not update [${found.id}]`);
            console.log(err);
          } else {
            console.log(updated);
            console.log(`Updated ${updated.id}`);
          }
        });
      } else {
        console.log(`Creating new Recipe ${r.id}`);
        const recipe = new Recipe(r);

        recipe.save((err, recipe) => {
          if (err) {
            console.log(`Could not save [${this.id}]`);
            console.log(err);
          } else {
            console.log(`Saved ${recipe.id} - ${recipe.title}`);
          }
        });
      }
    });
  }
}

module.exports.init = init;