var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var settings = require('./settings');

mongoose.connect(settings.database)
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(`failed to connect to databse: ${error}`));

// require("./init.js");
