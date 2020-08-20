'use strict';
const mongoose = require('mongoose');

const Categories = mongoose.Schema({
  name: String,
  display_name: String,
  description: String,
});

module.exports = new mongoose.model('categories', Categories);