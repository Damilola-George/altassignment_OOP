// Library management system
const Book = require('./models/Book');
const Library = require('./models/Library')
const User = require('./models/User')

// Example Usage
const library = new Library();

// Adding Books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', '123456789');
const book2 = new Book('1984', 'George Orwell', '987654321');
const book3 = new Book('To Kill a Mockingbird', 'Harper Lee', '123456785');
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);

// Registering Users
const user1 = new User('John Doe', '1');
const user2 = new User('Jane Doe', '2');
library.registerMember(user1);
library.registerMember(user2);

// Borrowing Books
library.borrowBook('1', '123456789'); // John borrows The Great Gatsby
library.returnBook('1', '123456789'); // John returns The Great Gatsby


library.returnBook(book1, user1);
library.borrowBook(book1, user2);
console.log(user1);
console.log(book1);
console.log(user2);