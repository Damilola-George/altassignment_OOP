class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isBorrowed = false;
    }

    // Check if the book is borrowed
    isBorrowed() {
        return this.isBorrowed;
    }
}

module.exports = Book;