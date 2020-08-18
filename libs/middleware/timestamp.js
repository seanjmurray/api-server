'use strict';

module.exports = (req,res,next) => {
  req.requestTime = new Date().toString().slice(0,24);
  next();
};
