'use strict';

const express = require('express');
const router = express.Router();
const Category = require('../models/categories/categories.collection');


router.get('/categories', (req,res,next) => {
  Category.read()
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.post('/categories', (req,res,next) => {
  Category.create(req.body)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
router.get('/categories/:id', (req,res,next) => {
  Category.create(req.params.id)
    .then(dbData => {
      const resObj = {
        count: dbData.length,
        results: dbData,
      };
      res.send(resObj);
    });
});
// router.put('/categories/:id',);
// router.delete('/categories/:id', );


module.exports = router;