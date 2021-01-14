/********Week 5 Practice Test - Problem 1 **************************************

Let's create an class to represent a Dragon! 🐲

1. Define an ES2015 class named `Dragon` containing a constructor method that
   accepts two arguments that initialize the following properties:

* name - the name of the dragon (like "Puff" or "Toothless")
* color - the color of the dragon ( like "green" or "black")

2. Define an instance method to the `Dragon` class. The method should be named
   `breathesFire` and return a string that uses the `name` property value
   formatted as `${name} breathes fire everywhere! BURN!!!!`.

3. Also define a static method to the `Dragon` class. The method should be named
   `getDragons` and accept any number of instances of the `Dragon` class that
   are passed in to it as separate arguments.  The "getDragons" static method
   should return an array of all the dragon names from the instances that were
   passed in to it as arguments.


In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command: `node
problems/01-make-dragons.js`

Examples:

const puff = new Dragon("Puff", "green"); console.log(puff);
console.log(puff.breathesFire());

// Should print...

// Dragon {//   name: 'Puff', //   color: 'green'
// }
// "Puff breathes fire everywhere! BURN!!!!"

const toothless = new Dragon("Toothless", "black"); 
console.log(toothless);
console.log(toothless.breathesFire());

// Should print...

// Dragon {//   name: 'Toothless', //   color: 'black'
// }
// "Toothless breathes fire everywhere! BURN!!!!"

console.log(Dragon.getDragons(puff, toothless));

// Should print... // [ 'Puff', 'Toothless' ]

*************** YOUR CODE BELOW ***************************************/

class Dragon {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`;
  }

  // Here we create a static method on the Dragon class that will accept any
  // number of instances of that class as parameters, using the rest parameter,
  // which will accept any number of parameters passed to the function and store
  // them in an array.  We can then map through that aray and return an new
  // array of just the names of each instaced passed into the method.  (Remember
  // when you call this methond you have to call it on the class, not an
  // instance of the class)
  static getDragons(...dragons) {
    return dragons.map((dragon) => dragon.name);
  }

};

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
