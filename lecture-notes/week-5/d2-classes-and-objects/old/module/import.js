// IMPORTING FROM A MODULE

// Use the `require()` function to import the `classes` module.
// const classes = require("./export");
// // Declare variables for each of the properties
// // defined on the `classes` object.
// const Book = classes.Book;
// const Movie = classes.Movie;

// DECONSTRUCTING WHEN IMPORTING
// const { Book, Movie } = require("./export");

const Book = require('./book')


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
