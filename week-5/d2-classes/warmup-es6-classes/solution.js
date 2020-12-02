
class Account {
	constructor(userName) {
		this.userName = userName;
		this.books = [];
	}

	receiveBook(book) {
		this.books.push(book);
	}
}


class User {
	constructor(name) {
		this.name = name;
		this.account = null;
	}

	signup(newAccount) {
		this.account = newAccount;
		console.log(`${this.name} signed up for a library account`)
	}

	rentBook(book) {
		this.account.receiveBook(book)
		console.log(`${this.name} received a new book, "${book}"`);
	}
}




class Library {
	constructor(books) {
		this.books = books;
	}

	signupUser(user) {
		if (user.account) {
			console.log(`${user.name} already has an account`)
		} else {
			let newAccount = new Account(user.name)
			user.signup(newAccount)
		}
	}

	removeBook(book) {
		this.books = this.books.filter(bookTitle => {
			return book !== bookTitle;
		});
	}

	loanBook(user, book) {
		if (!this.books.includes(book)) {
			console.log(`sorry we dont have the book "${book}"`);
		} else if (!user.account) {
			console.log(`sorry, ${user.name} does not have an account`);
		} else {
			user.rentBook(book);
			this.removeBook(book)	
		}
	}
}


let books = ['harry potter', 'to kill a mockingbird'];
let user = new User('alissa');
let library = new Library(books);

library.signupUser(user); // alissa signed up for a library account
library.loanBook(user, 'to kill a mockingbird') // alissa received a new book, "to kill a mockingbird"
library.loanBook(user, 'harry potter'); // alissa received a new book, "harry potter"
library.loanBook(user, 'the kite runner'); // sorry we dont have the book "the kite runner"
library.signupUser(user); // alissa already has an account

console.log(library)