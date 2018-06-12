const Recipe = require('./recipe');

const recipes = [
  {
    'Id': 1,
    'Title': 'Thai basil chicken',
    'Author': 'Kate Percy',
    'Source': 'Go Faster',
    'Page': -1
  },
  {
    'Id': 2,
    'Title': 'Paneer spinach and onion wrap',
    'Author': 'Anjum Anand',
    'Source': 'Indian Made Easy',
    'Page': 98
  },
  {
    'Id': 3,
    'Title': 'Stuffed chicken and parma ham',
    'Author': 'Gordon Ramsay',
    'Source': 'Healthy',
    'Page': -1
  },
  {
    'Id': 4,
    'Title': 'Risotto with fennel and ricotta',
    'Author': 'Jamie Oliver',
    'Source': 'Jamie\'s Italy',
    'Page': 145
  },
  {
    'Id': 5,
    'Title': 'Tumeric chicken kebabs',
    'Author': 'Rick Stein',
    'Source': 'Far Eastern Odyssey',
    'Page': 66
  },
  {
    'Id': 6,
    'Title': 'Cod with crust',
    'Author': 'Jamie Oliver',
    'Source': 'Superfoods',
    'Page': 184
  },
  {
    'Id': 7,
    'Title': 'Lentil bolognese',
    'Author': 'Nigel Slater',
    'Source': 'Eat',
    'Page': 183
  },
  {
    'Id': 8,
    'Title': 'Paneer Curry',
    'Author': 'Anjum Anand',
    'Source': 'Indian Made Easy',
    'Page': 98
  },
  {
    'Id': 9,
    'Title': 'Chicken with peas, mint and asparagus',
    'Author': 'Jamie Oliver',
    'Source': 'Superfoods',
    'Page': 162
  },
  {
    'Id': 10,
    'Title': 'Cripsy beef and veg',
    'Author': 'The Hairy Bikers',
    'Source': 'Asian Bikers',
    'Page': 20
  },
  {
    'Id': 11,
    'Title': 'Carrot and squash salad',
    'Author': 'Jamie Oliver',
    'Source': 'Superfoods',
    'Page': 194
  },
  {
    'Id': 12,
    'Title': 'Gnocchi with pea, ham and mushroom ',
    'Author': 'Gordon Ramsay',
    'Source': 'Ultimate Cookery Course',
    'Page': 150
  },
  {
    'Id': 13,
    'Title': 'Sprouting broccoli with sweet tahini',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 81
  },
  {
    'Id': 14,
    'Title': 'Marinated kale salad',
    'Author': 'Ella Woodward',
    'Source': 'Deliciously Ella',
    'Page': 153
  },
  {
    'Id': 15,
    'Title': 'Easy roast veggies',
    'Author': 'Ella Woodward',
    'Source': 'Delciously Ella',
    'Page': 128
  },
  {
    'Id': 16,
    'Title': 'Stuffed chestnut mushrooms',
    'Author': 'Ella Woodward',
    'Source': 'Deliciously Ella',
    'Page': 150
  },
  {
    'Id': 17,
    'Title': 'Tomato risotto',
    'Author': 'Theo Randall',
    'Source': 'Theo\'s Italian',
    'Page': 105
  },
  {
    'Id': 18,
    'Title': 'Squash with cardamom',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 172
  },
  {
    'Id': 19,
    'Title': 'Herb ricotta cakes',
    'Author': 'Nigel Slater',
    'Source': 'Eat',
    'Page': 149
  },
  {
    'Id': 20,
    'Title': 'Parsnip rosti',
    'Author': 'Nigel Slater',
    'Source': 'Eat',
    'Page': 111
  },
  {
    'Id': 21,
    'Title': 'Spelt, basil and ricotta cakes',
    'Author': 'Nigel Slater',
    'Source': 'Eat',
    'Page': 131
  },
  {
    'Id': 22,
    'Title': 'Pepper and halloumi stew',
    'Author': 'Anna Jones',
    'Source': 'A Modern way to eat',
    'Page': 87
  },
  {
    'Id': 23,
    'Title': 'Asparagus soup',
    'Author': 'Jamie Oliver',
    'Source': 'Jamie At Home',
    'Page': -1
  },
  {
    'Id': 24,
    'Title': 'Herb rolls',
    'Author': 'Nigel Slater',
    'Source': 'Eat',
    'Page': 15
  },
  {
    'Id': 25,
    'Title': 'Saffron and rosemary chicken',
    'Author': 'Sabrina Ghayour',
    'Source': 'Persiana',
    'Page': 104
  },
  {
    'Id': 26,
    'Title': 'Cumin and honey roasted carrots',
    'Author': 'Sabrina Ghayour',
    'Source': 'Persiana',
    'Page': 191
  },
  {
    'Id': 27,
    'Title': 'Butternut squash with pesto and feta',
    'Author': 'Sabrina Ghayour',
    'Source': 'Persiana',
    'Page': 198
  },
  {
    'Id': 28,
    'Title': 'Veggie moussaka',
    'Author': 'Jamie Oliver',
    'Source': 'Jamie Oliver Website',
    'Page': -1,
    'Link': '//www.jamieoliver.com/recipes/vegetables-recipes/beautiful-veggie-moussaka',
  },
  {
    'Id': 29,
    'Title': 'Roasted mushroom soup',
    'Author': 'Hugh Fearnley-Whittingstall',
    'Source': 'Light and easy',
    'Page': 126
  },
  {
    'Id': 30,
    'Title': 'Cauliflower, grape and cheddar salad',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 178
  },
  {
    'Id': 31,
    'Title': 'Pea and mint croquettes',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 198
  },
  {
    'Id': 32,
    'Title': 'Aubergine cheesecake',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 254
  },
  {
    'Id': 33,
    'Title': 'Squash, red onion and butter bean roast',
    'Author': 'Hugh Fearnley-Whittingstall',
    'Source': 'Light and Easy',
    'Page': 302
  },
  {
    'Id': 34,
    'Title': 'Beetroot curry',
    'Author': 'Jackie Kearney',
    'Source': 'Vegan Street Food',
    'Page': 87
  },
  {
    'Id': 35,
    'Title': 'Quinoa salad with walnut and mango',
    'Author': 'Paul Rankin',
    'Source': 'BBCFood Website',
    'Page': -1,
    'Link': '//www.bbc.com/food/recipes/quinoasaladwithavoca_84148',
  },
  {
    'Id': 36,
    'Title': 'Paneer stuffed peppers',
    'Author': 'Meera Sodha',
    'Source': 'Fresh India',
    'Page': 161
  },
  {
    'Id': 37,
    'Title': 'Spicy mushroom and broccoli noodles',
    'Author': '',
    'Source': 'One Note',
    'Page': -1
  },
  {
    'Id': 38,
    'Title': 'Spicy chipotle jackfruit tacos',
    'Author': 'Richa Hingle',
    'Source': 'Vegan Richa Website',
    'Link': 'http://www.veganricha.com/2015/09/spicy-chipotle-garlic-jackfruit-tacos.html',
    'Page': -1
  },
  {
    'Id': 39,
    'Title': 'Gnocchi with spinach',
    'Author': 'Theo Randall',
    'Source': 'Theo\'s Italian',
    'Page': 95
  },
  {
    'Id': 40,
    'Title': 'Fish tacos with kiwi salsa',
    'Author': 'Jamie Oliver',
    'Source': 'Superfoods',
    'Page': 86
  },
  {
    'Id': 41,
    'Title': 'Baked spring rolls',
    'Author': 'Jackie Kearney',
    'Source': 'Vegan Street Food',
    'Page': 177
  },
  {
    'Id': 42,
    'Title': 'Spicy fried roti with veg',
    'Author': 'Jackie Kearney',
    'Source': 'Vegan Street Food',
    'Page': 82
  },
  {
    'Id': 43,
    'Title': 'Maple peanut California wraps',
    'Author': 'Anna Jones',
    'Source': 'A Modern Way To Eat',
    'Page': 60
  },
  {
    'Id': 44,
    'Title': 'Cauliflower korma',
    'Author': 'Meera Sodha',
    'Source': 'Fresh India',
    'Page': 68
  },
  {
    'Id': 45,
    'Title': 'Carrot, sweetcorn and elderflower soup',
    'Author': 'New Covent Garden Soup Company',
    'Source': 'Soup For Everyday',
    'Page': 204
  },
  {
    'Id': 46,
    'Title': 'Cod with parmentier potatoes',
    'Author': 'Sunday Brunch',
    'Source': 'Channel 4 Website',
    'Link': 'http://www.channel4.com/programmes/sunday-brunch/articles/latest-recipes/cod-with-parmentier-potatoes-and-butter-sauce/5419',
    'Page': -1
  },
  {
    'Id': 47,
    'Title': 'Squash, avocado and rocket salad',
    'Author': 'Ella Woodward',
    'Source': 'Deliciously Ella',
    'Page': 145
  },
  {
    'Id': 48,
    'Title': 'Mushroom pithivier',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 278
  },
  {
    'Id': 49,
    'Title': 'Mango paneer skewers',
    'Author': 'Meera Sodha',
    'Source': 'Fresh Indian',
    'Page': 158
  },
  {
    'Id': 50,
    'Title': 'Butternut squash and parmesan soup',
    'Author': 'New Covent Garden Soup Company',
    'Source': 'Soup For Everyday',
    'Page': 293
  },
  {
    'Id': 51,
    'Title': 'Broccoli cheddar and wild rice',
    'Author': '',
    'Source': 'One Note',
    'Page': -1
  },
  {
    'Id': 52,
    'Title': 'Spinach soup with rosemary',
    'Author': '',
    'Source': 'One Note',
    'Page': -1
  },
  {
    'Id': 53,
    'Title': 'Butternut squash and kale tart',
    'Author': 'Anna Jones',
    'Source': 'A Modern Way To Eat',
    'Page': 189
  },
  {
    'Id': 54,
    'Title': 'Smoky mushroom frittata',
    'Author': 'Jamie Oliver',
    'Source': '5 Ingredients',
    'Page': 93
  },
  {
    'Id': 55,
    'Title': 'Mushroom curry',
    'Author': 'Jamie Oliver',
    'Source': 'Jamie Oliver Website',
    'Link': 'https://www.jamieoliver.com/recipes/vegetable-recipes/mushroom-curry/',
    'Page': -1
  },
  {
    'Id': 56,
    'Title': 'Edamame, bean and pea soup',
    'Author': 'Gordon Ramsay',
    'Source': 'Ultimate Fit Food',
    'Page': 150
  },
  {
    'Id': 57,
    'Title': 'Miso cod',
    'Author': 'Gordon Ramsay',
    'Source': 'Ultimate Fit Food',
    'Page': 64
  },
  {
    'Id': 58,
    'Title': 'Malaysian chicken satay',
    'Author': '',
    'Source': 'One Note',
    'Page': -1
  },
  {
    'Id': 59,
    'Title': 'Quorn spaghetti bolognese',
    'Author': '',
    'Source': 'BBCFood Website',
    'Link': 'https://www.bbcgoodfood.com/recipes/3028703/quorn-spaghetti-bolognese',
    'Page': -1
  },
  {
    'Id': 60,
    'Title': 'Harissa squash salad',
    'Author': 'Jamie Oliver',
    'Source': '5 Ingredients',
    'Page': 20
  },
  {
    'Id': 61,
    'Title': 'Pancetta cod',
    'Author': 'Jamie Oliver',
    'Source': '5 Ingredients',
    'Page': 142
  },
  {
    'Id': 62,
    'Title': 'Cripsy garlic chicken',
    'Author': 'Jamie Oliver',
    'Source': '5 Ingredients',
    'Page': 108
  },
  {
    'Id': 63,
    'Title': 'Corn and spring onion pancakes',
    'Author': 'Yotam Ottolenghi',
    'Source': 'Plenty',
    'Page': 262
  },
  // {
  //   'Id': 0,
  //   'Title': '',
  //   'Author': '',
  //   'Source': '',
  //   'Page': -1
  // },
  {
    'Id': 64,
    'Title': 'Potato soup',
    'Author': 'Darina Allen',
    'Source': 'BBCFood Website',
    'Page': -1,
    'Link': '//www.bbc.co.uk/food/recipes/potatosoup_11631',
  }
];

function init() {
  recipes.forEach(r => {

    if (!find(r.Id)) {
      let newRecipe = new Recipe(r);
      newRecipe.save((err, recipe) => {
        if (err) {
          console.log(`Could not save [${r.Id}]`);
          console.log(err);
        } else {
          console.log(`Saved ${r.Id} - ${r.Title}`);
        }
      })
    } else {
      console.log(`Recipe ${r.Id} already exists`);
    }
  });

  function find(id) {
    Recipe.find({ Id: id }, (err, recipe) => {
      if (err) {
        console.log(`Cound not find [${id}] - ${err}`);
        return false;
      }

      console.log(`Found recipe ${id} (${recipe})`)
      return recipe !== undefined;
    });
  }

};

module.exports = init;