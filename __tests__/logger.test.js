const loggerMiddleware = require('../libs/middleware/logger');

// Tested middleware needs to either be exported from the server or a separate module
describe('logger middleware', () => {

  let consoleSpy;
  let req = {};
  let res = {};
  let next = jest.fn(); // spy on next method
  
  it('properly logs some output', () => {
    const spy = jest.spyOn(console, 'log');
    loggerMiddleware(req, res, next);
    expect(spy).toHaveBeenCalled();
  });

  it('properly moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    // toHaveBeenCalled() is not enough, we need to make sure it was called with no args
    expect(next).toHaveBeenCalledWith();
  });

});