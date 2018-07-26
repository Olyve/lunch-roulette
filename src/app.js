const express = require('express');
const morgan = require('morgan');

const app = express();

// Only use morgan logging when not testing
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'));
}

module.exports = app;
