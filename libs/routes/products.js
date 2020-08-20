'use strict';

const express = require('express');
const router = express.Router();
const Product = require('../models/products/products.collection');


router.get('/products', (req,res,next) => {
  Product.read()
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.post('/products', (req,res,next) => {
  Product.create(req.body)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.get('/products/:id', (req,res,next) => {
  Product.create(req.params.id)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.put('/products/:id',(req,res,next) => {
  Product.update(req.params.id, req.body)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.delete('/products/:id', (req,res,next) => {
  Product.delete(req.params.id)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});


module.exports = router;