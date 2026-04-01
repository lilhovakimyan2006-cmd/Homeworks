class Book {
    constructor ( title, author, year ) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
    getInfo() {
        return `title: ${this.title},
                    author: ${this.author},
                    year: ${this.year},`
    }
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
        }
        else {
            console.log("Book is already unavailable");
        }
    }
    returnBook() {
        if (!this.isAvailable) {
            this.isAvailable = true;
        }
        else {
            console.log("Book is already available");
        }
    }
    matchesAuthor(authorName) {
        return this.author.toLowerCase() === authorName.toLowerCase()
    }
    matchesTitle(word) {
        return this.title.toLowerCase().includes(word.toLowerCase());
    }
}

class Library {
    constructor () {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    removeBook(title) {
        let index = this.books.findIndex(book => book.title === title);
        if (index === -1) {
            return "Book not found";
        }
        this.books.splice(index,1);
    }
    findBookByTitle(title) {
        return this.books.find(book => book.matchesTitle(title)) || null;
    }
    findBookByAuthor(authorName) {
        return this.books.filter(book => book.matchesAuthor(authorName));
    }
    getAvailableBooks() {
        return this.books.filter(book => book.isAvailable);
    }
    borrowBook(title) {
        if (this.findBookByTitle(title)) {
            this.findBookByTitle(title).borrowBook();
        } 
        else {
            console.log(`Book with title ${title} not found`);
        }
    }
    returnBook(title) {
        if (this.findBookByTitle(title)) {
            this.findBookByTitle(title).returnBook();
        }
        else {
            console.log(`Book with title ${title} not found`);
        }
    }
    showAllBooks() {
        if (this.books.length !== 0) {
            this.books.forEach(book => {
                console.log(book.getInfo());
            })
        }
    }
    countBooks() {
        return this.books.length;
    }
    countAvailableBooks() {
        return this.getAvailableBooks().length; 
    }
    searchBooks(word) {
       return this.books.filter(book =>
            book.title.toLowerCase().includes(word.toLowerCase())
        );
    }
    getOldestBook() {
        if (this.books.length === 0) return null;
        let oldest = this.books[0];
        for (let i = 1; i < this.books.length; i++) {
            if (this.books[i].year < oldest.year) {
                oldest = this.books[i];
            }
        }
        return oldest;
    }
}

const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBookByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();