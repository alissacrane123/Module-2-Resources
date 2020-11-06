# Week 5 Learning Objectives

## NPM
  1. Explain what "npm" stands for.
    - Node Package Manager
    - It allows us to, through the CLI, add packages (pieces of code) from other developers to our project and use them as building blocks.
    - The registry is a central location for these packages to reside, which allows us to more easily add them to our projects

  2. Explain the purpose of the package.json file and node_modules directory.
    - package.json specifies which packages we want to use within the app as well as semantic versioning ranges to say what versions of that app are acceptable
    - package-lock.json specifies the exact version of the package that we have installed in our node_modules directory, where we got that package from, and dependencies of that package
    - node_modules is a directory that contains all of the actual code for packages that we have added to our project

  3. Given multiple choices, identify the difference between npm's package.json and package-lock.json files.
    - exact version of each package installed and where it was downloaded from
      - package-lock.json
    - range of acceptable versions for each dependency
      - package.json
    - automatically created or updated when `npm init` is run
      - package.json
    - automatically created or updated when `npm install` is run
      - package-lock.json
    - should be manually edited to set required versions of packages
      - package.json

  4. Use npm --version to check what version is currently installed and use npm to update itself to the latest version.
    - `npm -v`
    - `npm install -g npm@latest`
      - -g tells us to add as a global package
      - @latest says to install the latest version

  5. Use npm init to create a new package and npm install to add a package as a dependency. Then use require to import the module and utilize it in a JavaScript file.
    - `npm init` creates our package.json
    - `npm install moment` adds the moment package as a dependency
    - `const moment = require('moment');` imports the module into our code so that we can use the moment variable and call any methods on it that exist in the module;
      - `moment.().format('dddd');` for example
    
    - We can also install a dependency as a dev dependency:
      - `npm install --save-dev nodemon` adds the nodemon package as a dev dependency

  6. Given a package version number following the MAJOR.MINOR.PATCH semantic versioning spec that may include tilde (~) and caret (^) ranges, identify the range of versions of the package that will be compatible.
    - *: latest version
    - >1.2.3: any version above 1.2.3
    - ^1.2.3: any version in the major version 1 range (1.x.x)
    - ~1.2.3: any version in the minor version 1.2 range (1.2.x)
    - 1.2.3: exactly version 1.2.3

  7. Explain the difference between a dependency and a development dependency.
    - A dependency is a package that is required by our app in order to run.
    - A development dependency is only required when we are running our code in a development environment, as opposed to a production environment.
      - An example of a dev dependency would be a special logging package that logs the state of our application to the console. This would be useful during development, but not wanted in production. Adding the dependency as development would ensure that that package is not installed when hosted as a production app.

  8. Given an existing GitHub repository, clone the repo and use npm to install it's dependencies.
    - `git clone <repo-url>`
    - cd into repo
    - `npm install`
  
  9. Use npm uninstall to remove a dependency.
    - `npm uninstall chai-spies`
  
  10. Use npm update to update an out-of-date dependency.
    - `npm update chai-spies`
  
  11. Given a problem description, use the npm registry to find a reputable package (by popularity and quality stats) that provides functionality to solve that problem.
    - npmjs.com
    - search for keywords about the functionality of the package
    - judge based on:
      - Does it perform the functionality that I need?
      - How popular is it? (Downloads per week, quality)
      - How often is it being maintained (regular maintenance = more robust code)
  
  12. Given a package with vulnerabilities due to outdated dependency versions, use npm audit to scan and fix any vulnerabilities.
    - `npm audit` will show vulnerabilities and short description
    - `npm audit fix` will update those dependencies if not restricted by package.json semver (semantic version number)
    - `npm audit fix --force` will update the package even if it includes a major update, which would typically be restricted by the package.json
    - Important to note that if a package specifies its own dependency with a semver that has a vulnerability, that package would need to update what it depends on on its own, since updating to be outside of the range may break functionality of the package.
  
  13. Write and run an npm script.
    - Writing: in the package.json:
     ```javascript
      "scripts": {
        "watch": "nodemon index.js"
      }
     ```
     This script, called `watch`, will run the command `nodemon index.js`
    - Running: in the terminal:
      - `npm run watch`

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
