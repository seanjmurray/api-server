'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
const error = require('./middleware/404');
const time = require('./middleware/timestamp');
const logger = require('./middleware/logger');
const serverError = require('./middleware/500');

const categories = [];
const products = [];
app.use(express.urlencoded({
  extended: true,
}));

app.use(time);
app.use(logger);

app.get('/', (req,res,next) => {
  res.send('hello');
});
app.route('/categories')
  .get((req,res,next) => {
    const resObj = {
      count: categories.length,
      results: categories,
    };
    res.send(resObj);
  })
  .post((req,res,next) => {
    const { id, name, display_name, description } = req.query;
    const item ={
      id: id,
      name: name,
      display_name: display_name,
      description: description,
    };
    categories.push(item);
    console.log(categories, item);
    const resObj = {
      count: categories.length,
      results: categories,
    };
    res.send(resObj);
  });
app.route('/categories/:id')
  .get((req,res,next) => {
    let results = categories.filter(val => {
      return val.id === req.params.id ? val : false ;
    });
    res.send(results);
  })
  .put()
  .delete();
app.route('/products')
  .get()
  .post();
app.route('products/:id')
  .get()
  .put()
  .delete();

app.use('*', error);
app.use('*', serverError);

const start = () => {
  app.listen(PORT, () => console.log(`Started on ${PORT}`));
};

module.exports = start;