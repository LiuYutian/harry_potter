var allBooks = require("../spec/fixtures.js");

function ShoppingCart() {}

ShoppingCart.returnTest = function() {
    return allBooks();
}

module.exports = ShoppingCart;
