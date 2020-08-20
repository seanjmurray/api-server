const mongoose = require('mongoose');

const Products = mongoose.Schema({
  name: String,
  display_name: String,
  description: String,
  category: String,
});

module.exports = new mongoose.model('products', Products);