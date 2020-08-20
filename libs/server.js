'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const mongoose = require('mongoose');
const error = require('./middleware/404');
const time = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const serverError = require('./middleware/500');
const categories = require('./routes/categories');
const products = require('./routes/products');

app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());
app.use(time);
app.use(logger);
app.use(categories);
app.use(products);
app.use('*', error);
app.use('*', serverError);

const start = () => {
  mongoose.connect('mongodb://localhost:27017/apiserver', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(()=> {
      app.listen(PORT, () => console.log(`Started on ${PORT}`));
    });
};

module.exports = start;