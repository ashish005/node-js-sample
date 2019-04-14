const express = require('express');
const createError = require('http-errors');
const initApp = require('./config/express');
const path = require('path');

const app = initApp(express);

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    //intercepts OPTIONS method
    if ('OPTIONS' === req.method) {
        //respond with 200
        res.send(200);
    }
    else {
        //move on
        next();
    }
});

// Extend view in a seperate file
//app.use('/', require('./server/routes/index')(express));
app.use('/api/', require('./server/routes/api.routes')(express, app));
app.use('/auth/', require('./server/routes/auth.routes')(express));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//     next(createError(404));
// });
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
