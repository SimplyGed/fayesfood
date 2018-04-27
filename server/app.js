
var https = require('https');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

var database = require('./database/config');

// var facebookRouter = require('./auth/facebook');
var indexRouter = require('./routes/index');
const databaseRouter = require('./routes/database');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req,res,next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.use('/', indexRouter);
app.use('/api', databaseRouter);

// app.use('/auth', facebookRouter);

// 404 - NotFound
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500).send(err);
});


var port = process.env.PORT || 3000;

// const options = {
//   key: fs.readFileSync('./certs/server.key'),
//   cert: fs.readFileSync('./certs/server.crt')
// };

// https.createServer(options, app).listen(port);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
