# Week 5 Learning Objectives



## JavaScript Classes

  1. Declare a class in JavaScript.
    ```javascript
    class Book {
      constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
      }
    }
    ```
    
  2. Implement a constructor method in a javaScript class.
    ```javascript
    Book.prototype.getInformation = function () {
      if (this.series) {
        return `${this.title} (${this.series})`;
      } else {
        return this.title;
      }
    }
    ```

  3. Define an instance method on a class.
    ```javascript
    class Book {
      // constructor

      getInformation() {
        if (this.series) {
          return `${this.title} (${this.series})`;
        } else {
          return this.title;
        }
      }
    }
    ```
  
  4. Define a static method on a class.
    ```javascript
    class Book {
      // constructor

      static getUniqueAuthors(...books) {
        let authors = [];
        books.forEach(book => {
          if (!authors.includes(book.author)) {
            authors.push(book.author)
          }
        })
        return authors;
      }
    }
    ```
  
  5. Instantiate an instance of a class using the new keyword.
    ```javascript
    const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
    ```
  
  6. Implement inheritance using the ES6 extends syntax for an ES6 class.
    ```javascript
    class Book extends CatalogItem {
      // Book code
    }
    ```
  
  7. Utilize the super keyword in a child class to inherit from a parent class.
    ```javascript
    class CatalogItem {
      constructor(title, series) {
        this.title = title;
        this.series = series;
      }

      getInformation() {
        if (this.series) {
          return `${this.title} (${this.series})`;
        } else {
          return this.title;
        }
      }
    }

    class Book extends CatalogItem {
      constructor(title, series, author) {
        super(title, series);
        this.author = author;
      }
    }

    class Movie extends CatalogItem {
      constructor(title, series, director) {
        super(title, series);
        this.director = director;
      }

      // extending the functionality of the parent's getInformation()
      getInformation() {
        let result = super.getInformation();
        if (this.director) {
          result += ` [directed by ${this.director}]`;
        }
        return result;
      }
    }
    
    ```
  
  8. Utilize module.exports and require to import and export functions and class from one file to another.
    - In this first example, we are exporting a single item from each file. We are assigning that item to module.exports directly.
    ```javascript
    // catalog-item.js

    class CatalogItem {
      // CatalogItem code
    }

    module.exports = CatalogItem
    ```
    ```javascript
    // book.js

    const CatalogItem = require('./catalog-item');

    class Book extends CatalogItem {
      // Book code
    }

    module.exports = Book
    ```
    - In this next example, we are exporting a multiple items from a file. We are assigning an object to module.exports that contains each item we are exporting. When we import from this file, we can either import the whole object, or destructure right in our import
    ```javascript
    // classes.js

    class CatalogItem {
      // CatalogItem code
    }

    class Book extends CatalogItem {
      // Book code
    }

    class Movie extends CatalogItem {
      // Movie code
    }

    module.exports = { Book, Movie}
    ```
    ```javascript
    // index.js

    const classes = require('./classes');
    const Movie = classes.Movie;
    const Book = classes.Book;

    // Or, destructuring in the import statment:
    // const { Movie, Book } = require('./classes');

    const theGrapesOfWrath = new Book('The Grapes of Wrath', null, 'John Steinbeck');
    const aNewHope = new Movie('Episode 4: A New Hope', 'Star Wars', 'George Lucas');
    ```


## Object-Oriented Programming
    
  1. Conceptual understanding of OOP
    - The main concept behind OOP is the idea that you can group data and related 
      actions or behaviors together in order to treat them as a single entity within a larger system.
    - An item containing data and behaviors is called an object.
    - The data parts are called properties or fields of the object.
    - The action parts are called methods of the object.
    - In this way, properties are like an object's "adjectives", and methods are its "verbs".

  2. Basic design principles for OOP
      OOP overview
      - approach for breaking down large, complex products into simple solutions
      - smaller parts can be implemented and tested separately
      - results in higher confidence in overall solution
      - makes it easier to pinpoint issues with code
  
  
  3. Three pillars of OOP
    - Encapsulation:
      - Puts the behavior and data together behind methods that hide the specific implementation.
      - Code that uses these methods doesn't need to worry about the details.
    - Inheritance:
      - JavaScript supports a type of inheritance known as implementation inheritance through a mechanism known as prototypal inheritance.
        - Implementation inheritance: data and methods defined on a parent class are available on objects created from classes that inherit from those parent classes.
        - Prototypal inheritance: JavaScript uses prototype objects to make its implementation inheritance actually work.
      - The `this` property references the object that the call originally came from.
    - Polymorphism:
      - The ability to treat an object as if it were an instance of one of its parent classes.
      - We can use the methods of a parent class on an object of a child class.
  
  
  
  4. The Law of Demeter applied to OOP
    - A method of an object can only invoke the methods (or use the properties) of the following kinds of objects:
      - Methods on the object itself
      - Any of the objects passed in as parameters to the method
      - And object created in the method
      - Any values stored in the instance variables of the object
      - Any values stored in global variables
    - Changing the implementation of a class should not require a change in another class.
    - +++Don't use more than one dot (not counting the one after "this")+++
    - When to ignore the Law of Demeter:
      - Working with objects that come from code you didn't create
        ```javascript
          document
            .getElementById('that-link')
            .addEventListener('click', e => e.preventDefault());
        ```
      - Visualizations of our program (UI has to know about the structure of our data)

  5. SOLID principles of OOP (not tested on)
      - S: Single-Responsibility Principle (IMPORTANT)
        - A class/function/module should do one thing and do it well.
        - A class/function/module should have only one reason to change.
      - O: Open-Close Principle (less applicable)
        - A class is open for extension and closed for modification.
        - Creating new functionality can happen in child classes and not the original class.
      - L: Liskov Substitution Principle (IMPORTANT)
        - You can substitute child class objects for parent class objects and not cause errors.
        - The methods that you override in child classes must match the intent of the methods found on the parent classes.
      - I: Interface Segregation Principle (less applicable)
        - Method names should be grouped together into granular collections called "interfaces".
      - D: Dependency Inversion Principle (less applicable)
        - Functionality that your class depends on should be provided as parameters to methods rather than using new in the class to create a new instance.
