'use strict';

const products = require('./products.schema');

class Products {
  create(obj){
    const product = new products({ ...obj });
    return product.save();
  }
  update(id,obj){
    return products.findOneAndUpdate(id,obj);
  }
  read(name){
    return name ? products.find({ name: name }) : products.find({}) ;
  }
  delete(id){
    return products.findOneAndDelete(id);
  }
}

module.exports = new Products;