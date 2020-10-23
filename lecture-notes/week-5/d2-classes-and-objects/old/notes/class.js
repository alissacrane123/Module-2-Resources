// JAVASCRIPT CLASSES
// - constructor funcs and prototypes mimic class behavior
// - support for classes added to language in ES2015

// CONSTRUCTOR FUNCTION REVIEW

// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }

// DEFINING ES2015 CLASS
// - defines attributes and behavior for object type
// - used to create instances of that type, just like constructor func
// - begin with capital letter

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// constructor method not required, similar to constructor func
// 1. don't explicitly return a value, implicitly returns new obj instance
// 2. `this` keyword refrences newly created object instance

// INSTANTIATING AN INSTANCE OF A CLASS

// const fido = new Dog('fido', 10)
// console.log(fido) // Dog { name: 'fido', color: 10 }

// when instantiating an instance of class:
// 1. new empty obj is created
// 2. new obj prototype is set to class's `prototype` property 
// 3. `constuctor` method is called and `this` is bound to object
// 4. new obj is returned 

// instantiating without `new` keyword results in runtime error


// -------------------------------------------------------------------------------------------------


// HOISTING

// in JS, you can call a function before it's declared

// test();

// function test() {
//   console.log('this works')
// }

// unlike funcs, class declarations aren't hoisted
// - referenceError: Book is not defined

// const harryPotter = new Book('Harry Potter');

// class Book {
//   constructor(title) {
//     this.title = title;
//   }
// }

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
    return cats.map((kitty) => kitty.name);
  }
}

const pancake = new Cat('pancake', 4)
const fluffy = new Cat('fluffy', 5)
console.log(pancake.meows())  // Meow my name is fluffy

const kitties = Cat.getCats(pancake, fluffy)
console.log(kitties) // ['pancake', 'fluffy']


