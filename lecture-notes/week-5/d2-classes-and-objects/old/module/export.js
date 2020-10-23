
class CatalogItem {
  // Contents removed for brevity.
}

class Book extends CatalogItem {
  // Contents removed for brevity.
}

class Movie extends CatalogItem {
  // Contents removed for brevity.
}

// {}

// METHOD 1
module.exports.Book = Book;
module.exports.Movie = Movie;

//  METHOD 2
module.exports = {
  Book,
  Movie
};