function Book (title, author, year) {
    let isAvailable = true;
    return {
        title: title,
        author: author,
        year: year,
        isAvailable: function () { return isAvailable; },
        getInfo: function() {
            return `title: ${title},
                    author: ${author},
                    year: ${year},`
        },
        borrowBook: function () {
            if (isAvailable) {
                isAvailable = false;
            }
            else {
                return "Book is already unavailable";
            }
        },
        returnBook: function () {
            if (!isAvailable) {
                isAvailable = true;
            }
            else {
                return "Book is already available"
            }
        },
        matchesAuthor: function (authorName) {
            if ( this.author.toLowerCase() === authorName.toLowerCase() ) {
                return true;
            }
        },
        matchesTitle: function (word) {
            if ( this.title.toLowerCase().includes(word.toLowerCase()) ) {
                return true;
            }
        }
    }
}

function Library () {
    let books = [];
    return {
        books: books,
        addBook: function (book) {
            books.push(book);
        },
        removeBook: function (title) {
            let index = books.findIndex(book => book.matchesTitle(title));
            if ( index !== 1 ) {
                books.splice(index,1);
            } 
        },
        findBookByTitle: function (title) {
            return books.find(book => book.matchesTitle(title)) || null;
        },
        findBooksByAuthor: function (authorName) {
            return books.filter ( book => book.matchesAuthor (authorName));
        },
        getAvailableBooks: function () {
            return books.filter (book => book.isAvailable());
        },
        borrowBook: function (title) {
            let book = this.findBookByTitle ( title );
            if ( book ) {
                let res = book.borrowBook();
                if (res) {
                    console.log(res);
                }
            }
            else {
                console.log(`Book with title "${title}" not found.`);
            }
        },
        returnBook: function (title) {
            let book = this.findBookByTitle ( title );
            if ( book ) {
                let res = book.returnBook();
                if (res) {
                    console.log(res);
                }
            }
            else {
                console.log(`Book with title "${title}" not found`);
            }
        },
        showAllBooks: function() {
            if (this.books.length === 0) {
                console.log("No books in the library.");
                return;
            }

            books.forEach(book => {
                console.log(book.getInfo());
            });
        },
        countBooks: function () {
            return books.length;
        },
        countAvailableBooks: function () {
            return this.getAvailableBooks().length;
        },
        searchBooks: function(word) {
            let results = [];
            for (let i = 0; i < this.books.length; i++) {
                let book = this.books[i];
                if (book.title.toLowerCase().includes(word.toLowerCase())) {
                    results.push(book);
                }
            }
            return results; 
        },
        getOldestBook: function () {
            if (this.books.length === 0 ) {
                return null;
            }
            let oldest = this.books[0];
            for ( let i = 1; i < this.books.length; ++i ) {
                if ( this.books[i].year < oldest.year ) {
                    oldest = this.books[i];
                }
            }
            return oldest;
        }
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
console.log(library.findBooksByAuthor("George Orwell"));

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