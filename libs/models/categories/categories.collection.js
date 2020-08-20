'use strict';

const categories = require('./categories.schema');

class Categories {
  create(obj){
    const category = new categories({ ...obj });
    return category.save();
  }
  update(id,obj){
    return categories.findOneByIdAndUpdate(id,obj);
  }
  read(name){
    return name ? categories.find({ name: name }) : categories.find({}) ;
  }
  delete(id){
    return categories.findOneByIdAndDelete(id);
  }
}

module.exports = new Categories;