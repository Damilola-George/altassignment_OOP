class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    // Add a new book to the library
    addNewBook(book) {
        this.books.push(book);
    }

    // Register a new member
    registerMember(user) {
        this.members.push(user);
    }

    // Borrow a book from the library
    borrowBook(userId, ISBN) {
        const user = this.members.find(member => member.id === userId);
        const book = this.books.find(b => b.ISBN === ISBN);
        if (user && book) {
            return user.borrowBook(book);
        }
        return false;
    }

    // Return a book to the library
    returnBook(userId, ISBN) {
        const user = this.members.find(member => member.id === userId);
        const book = this.books.find(b => b.ISBN === ISBN);
        if (user && book) {
            return user.returnBook(book);
        }
        return false;
    }
    
}

module.exports = Library;