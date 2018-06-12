var express = require('express');
var router = express.Router();
const Recipe = require('../database/recipe');

router.get('/recipe', function (req, res, next) {
    Recipe.find({}, (err, recipes) => {
        if (err) {
            res.status(500).send(err);
        }

        res.status(200).json(recipes);
    });
});

router.get('/recipe/:id', function (req, res, next) {
    var id = req.params('id');

    Recipe.find({ Id: id }, (err, recipes) => {
        if (err) {
            res.status(500).send(err);
        }

        res.status(200).json(recipes);
    });
});

router.post('/recipe/add', function (req, res) {
    let newRecipe = new Recipe(req.body);
    Recipe.save((err, recipe) => {
        if (err) {
            res.status(500).send(err);
        }

        res.status(201).json(recipe);
    });
});

const dbInit = require('../database/init');

router.get('/recipe/init', function(req, res) {
    dbInit();

    res.status(200);
});

module.exports = router;
