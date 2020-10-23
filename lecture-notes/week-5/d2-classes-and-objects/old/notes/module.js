// up until now we've used node to run a single javascript file that contains all our code
// - as code base gets larger we'll want to break our code up into multiple files
// - each file containing a logical unit of code that defines a module.
// - a module is just a javascript file


// EXPORTING FROM MODULE : module.exports
// - NODE initializes the module.exports property to an empty object

class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// METHOD 1
module.exports.Book = Book;
module.exports.Movie = Movie;

//  METHOD 2
module.exports = {
  Book,
  Movie
};

// SINGLE ITEM EXPORTS
module.exports = Book;

// IMPORTING FROM A MODULE

// Use the `require()` function to import the `classes` module.
const classes = require("./classes");

// Declare variables for each of the properties
// defined on the `classes` object.
const Book = classes.Book;
const Movie = classes.Movie;

const theGrapesOfWrath = new Book(
  "The Grapes of Wrath",
  null,
  "John Steinbeck"
);
const aNewHope = new Movie(
  "Episode 4: A New Hope",
  "Star Wars",
  "George Lucas"
);


// DECONSTRUCTING WHEN IMPORTING
const { Book, Movie } = require("./classes");