var Book = require("../src/book.js");

function loadAllBooks() {
    return [
        new Book('HP001', 2, 8.00),
        new Book('HP002', 2, 8.00),
        new Book('HP003', 2, 8.00),
        new Book('HP004', 2, 8.00),
        new Book('HP005', 2, 8.00)
    ];
}

module.exports = loadAllBooks;
