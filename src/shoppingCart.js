var allBooks = require("../spec/fixtures.js");

function ShoppingCart() {}

var discount = {
    1 : 0,
    2 : 0.05,
    3 : 0.1,
    4 : 0.2,
    5 : 0.25
};

var countMoney = function(books) {
    var money = 0;
    for(var i = 0; i < books.length; i++) {
        for(var j = 0; j < books[i].length; j++) {
            money += books[i][j].price * books[i][j].count * (1-discount[books[i].length]);
        }
    }

    return money.toFixed(1);
}

var sortBooks = function(books) {
    for(var i = 0; i < books.length; i++) {
        for(var j = 0; j < books.length; j++) {
            if(books[i].count > books[j].count) {
                var temp = books[i];
                books[i] = books[j];
                books[j] = temp;
            }
        }
    }

    return books;
}

var group = function(books) {
    var result = [];

    for(var i = 0; i < books.length; i++) {
        for(var j = 0; j < books[i].count; j++) {
            result[j] = result[j] || [];
            result[j][i] = books[i];
        }
    }

    for(var i = 0; i < result.length; i++) {
        for(var j = 0; j < result[i].length; j++) {
            result[i][j].count = 1;
        }
    }

    return result;
}

var bestGroup = function(books) {
    for(var i = 0; i < books.length; i++) {
        if(books[i].length == 5) {
            for(var j = 0; j < books.length; j++) {
                if(books[j].length == 3) {
                    for(var m = 0; m < books[i].length; m++) {
                        var exist = false;
                        for(var n = 0; n < books[j].length; n++) {
                            if(books[i][m] === books[j][n]) {
                                exist = true;
                            }
                        }
                        if(!exist) {
                            books[j].push(books[i][m]);
                            books[i].splice(m, 1);
                        }
                    }
                }
            }
        }
    }

    return books;
}

ShoppingCart.returnTest = function() {
    var orderBooks = sortBooks(allBooks());
    var groupResult = group(orderBooks);
    var okGroup = bestGroup(groupResult);
    return countMoney(okGroup);
}

module.exports = ShoppingCart;
