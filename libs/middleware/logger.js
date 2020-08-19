'use strict';
const chalk = require('chalk');
const log = console.log;

module.exports = (req,res,next) => {
  log(`${chalk.bgGreen(' REQUEST ')} Method: ${chalk.green(req.method)} Route: ${chalk.red(req.path)} Time: ${req.requestTime}`);
  next();
};
