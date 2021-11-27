const path = require('path');
const cookies = require('cookie-parser');
const express = require('express');
const jwt = require('express-jwt');
const logger = require('morgan');
const jsdoc = require('swagger-jsdoc');
const swagger = require('swagger-ui-express');

const app = express();

app.use(
  '/docs',
  swagger.serve,
  swagger.setup(jsdoc(require('./swagger')), { explorer: true }),
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookies());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/', require('./routes/auth'));
app.use(
  '/api',
  jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
  }),
  require('./routes/users'),
);

module.exports = app;
