var mongoose = require('mongoose');

var recipeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    author: String,
    source: String,
    page: Number,
    link: { type: String, required: false }
});

module.exports = mongoose.model('Recipe', recipeSchema);
