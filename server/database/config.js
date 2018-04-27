var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mongoDB = 'mongodb://localhost/fayesfood';
mongoose.connect(mongoDB)
    .then(() => console.log('connected to db'))
    .catch((error) => console.log(`failed to connect to databse: ${error}`));
