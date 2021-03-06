var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var display=require('./routes/display');
var device1=require('./routes/device1');
var device2=require('./routes/device2');
var users = require('./routes/users');
var getDataPointer=require('./routes/getData');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.get('/display',display.display);
app.get('/device1',device1.device1);
app.get('/device2',device2.device2);



app.use('/users', users);

app.post('/getData', getDataPointer.getData);

app.get('/signup', function(req, res, next) {
  res.render('signup');
});

app.get('/login', function(req, res, next) {
  res.render('login');
});

app.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

app.get('/devices', function(req, res, next){
  res.render('devices');
});

app.get('/newdevice', function(req, res, next){
  res.render('newdevice');
});

app.get('/success', function(req, res, next){
  res.render('success');
});

app.get('/failure', function(req, res, next){
  res.render('failure');
});





// catch 404 and forward to error handler
/*
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
*/

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
