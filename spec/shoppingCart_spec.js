'use strict';

var ShoppingCart = require('../src/shoppingCart.js');

describe('test', function () {
  it('test shoppingCart get books', function() {

    var result = ShoppingCart.returnTest();
    expect(result).toEqual("100.0");
  });
});
