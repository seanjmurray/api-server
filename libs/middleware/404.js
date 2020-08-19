'use strict';

module.exports = (req,res) => {
  res.status(404).send('Error page not found');
};