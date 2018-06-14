var express = require('express');
var router = express.Router();
const Recipe = require('../database/recipe');
const dbInit = require('../database/init');

router.get('/recipe', function (req, res) {
    Recipe.find({}, (err, recipes) => {
        if (err) {
            res.status(500).send(err);
        }

        res.status(200).json(recipes);
    });
});

router.get('/recipe/init', function(req, res) {
    dbInit.init();

    res.status(200).json({"result": "success"});
});

router.get('/recipe/:id', function (req, res) {
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

module.exports = router;
