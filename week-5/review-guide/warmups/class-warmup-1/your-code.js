// 1. Create an 'Account` Class
// - PROPS: 
//   - userName (passed in as parameter)
//   - books (initially set to an empty array)
// - METHODS:
//   - receiveBook(book):
//     - adds `book` to `books` array





// 2. Create a 'User' Class
// - PROPS: 
//   - name (passed in as parameter)
//   - account (initially set to null)
// - METHODS:
//   - signup(newAccount):
//     - receives an instance of Account class as an argument
//     - assigns `account` property to `newAccount` object
//     - console.logs `${this.name} signed up for a library account`
//   - rentBook(book):
//     - receives a book as an argument
//     - calls the `receiveBook` method on their account property, passing the
//       book as an argument
//     - console.logs `${this.name} received a new book, "${book}"`







// 3. Create a 'Library' Class
// - PROPS: 
//   - books (array of book titles passed in as a parameter)
// - METHODS:
//   - signupUser(user):
//     - receives an instance of User class as an argument
//     - if the user already has an account: 
//       - console.log `${user.name} already has an account`
//     - if the user doesnt have an account yet:
//     	 - create a new instance of the Account class, passing in the 
//         user's name as a parameter
//       - call the user's signup method passing the newly created instance
//         of the Account class as an argument
//   - removeBook(book):
//     - receives a book title as an argument
//     - removes the book title from the library's books array property
//   - loanBook(user, book)
//     - receives an instance of user class and a book title as arguments
//     - if the library doesnt have that book: 
//       - console.log `sorry we dont have the book "${book}"`
//     - if the user doesnt have an account yet: 
//       - console.log `sorry, ${user.name} does not have an account`
//     - if the library has the book and the user has an account:
//       - call the user's rentBook method, passing the book as an argument
//       - call the library's removeBook method passing in the book as an arg




// TESTING
// - run the file with node and compare your outputs 

let books = ['harry potter', 'to kill a mockingbird'];
let user = new User('alissa');
let library = new Library(books);

library.signupUser(user); // alissa signed up for a library account
library.loanBook(user, 'to kill a mockingbird') // alissa received a new book, to kill a mockingbird
library.loanBook(user, 'harry potter'); // alissa received a new book, harry potter
library.loanBook(user, 'the kite runner'); // sorry we dont have the book the kite runner
library.signupUser(user); // alissa already has an account
