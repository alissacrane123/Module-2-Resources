
// CONSTRUCTOR FUNCTION REVIEW

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;

//   // this.meows = function() {
//   //   // ...
//   // }
// }

// Cat.prototype.meows = function() {
//   return `${this.name} meows`
// }

// // DEFINING ES2015 CLASS

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   barks() {
//     return `${this.name} barks woof `
//   }
// }

// // // INSTANTIATING AN INSTANCE OF A CLASS

// const fido = new Dog('fido', 10)
// console.log(fido) // Dog { name: 'fido', color: 10 }
// fido.barks() // 'Fido barks woof

// // instantiating without `new` keyword results in runtime error
// const spot = Dog('spot', 5)
// console.log(spot) 
// spot.barks() // spot barks woof

// -------------------------------------------------------------------------------------------------


// HOISTING
//  - in JS, you can call a function before it's declared

test(); // 'this works'

function test() {
  console.log('this works')
}

// unlike funcs, class declarations aren't hoisted
// - referenceError: Book is not defined

const harryPotter = new Book('Harry Potter'); // referenceError

class Book {
  constructor(title) {
    this.title = title;
  }
}

// -------------------------------------------------------------------------------------------------


// DEFINING METHODS
// - two kinds: static and instance
// - so far we've only seen instance methods

// defining instance methods
// - invoked on instance of the class
// - made available to all instances via shared prototype object
// - just like constructors, prevents unnecessary duplication of method def

// defining static methods
// - invoked directly on a class, not an instance
// - trying to invoke in an instance results in runtime error

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.meows = function() {
  return `${this.name} meows`
}



class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meows() {
    // `this` will refer to instance of cat
    return `Meow my name is ${this.name}`
  }

  // rest parameter capturse params as an array of values
  static getCats(...cats) {
    // cats = [ Cat { name: 'pancake', age: 4}, Cat { name:'fluffy', age:5}]
    return cats.map((kitty) => kitty.name); ['panacake', 'fluffy']
  }
}

const pancake = new Cat('pancake', 4)
pancake.name // 'pancake'
pancake.age // 4

const fluffy = new Cat('fluffy', 5)
fluffy.name // 'fluffy'

console.log(pancake.meows()) // Meow my name is pancake

const kitties = Cat.getCats(pancake, fluffy)
console.log(kitties) // ['panacake', 'fluffy']

