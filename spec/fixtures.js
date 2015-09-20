var Book = require("../src/book.js");

function loadAllBooks() {
    return [
        new Book('HP001', 1, 8.00),
        new Book('HP002', 2, 8.00),
        new Book('HP003', 3, 8.00),
        new Book('HP004', 4, 8.00),
        new Book('HP005', 5, 8.00)
    ];
}

module.exports = loadAllBooks;
