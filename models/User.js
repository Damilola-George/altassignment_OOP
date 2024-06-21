class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    // Borrow a book
    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            return false;
        }
        if (book.isBorrowed) {
            return false;
        }
        book.isBorrowed = true;
        this.borrowedBooks.push(book);
        return true;
    }

    // Return a book
    returnBook(book) {
        const bookIndex = this.borrowedBooks.findIndex(b => b.ISBN === book.ISBN);
        if (bookIndex !== -1) {
            book.isBorrowed = false;
            this.borrowedBooks.splice(bookIndex, 1);
            return true;
        }
        return false;
    }
}

module.exports = User;