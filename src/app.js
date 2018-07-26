const express = require('express');
const morgan = require('morgan');
const createError = require('http-errors');
const path = require('path');

const app = express();

// Setup view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Only use morgan logging when not testing
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Route setup

// catch 404 and forward to error handler
app.use((req, res, next) => next(createError(404)));

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
