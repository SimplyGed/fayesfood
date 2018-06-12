var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    id: Number,
    title: String,
    author: String,
    source: String,
    page: Number,
    link: { type: String, required: false }
});

module.exports = mongoose.model('Recipe', recipeSchema);
