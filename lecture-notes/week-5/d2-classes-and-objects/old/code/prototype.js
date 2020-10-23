// DEFINING SHAREABLE METHODS

// DONT define methods within constructor func

function Duck(name) {
  this.name = name;

  this.quacks = function () {
    return `My name is ${this.name}, quack quack quack`;
  };
}


// DO use prototypes and delegation

const alphaObject = {
  alpha() {
    return 'Alpha';
  }
};

const betaObject = {
  beta() {
    return 'Beta';
  }
};

// only call to alpha succceeds b/c `beta` is not defined on alphaObject
console.log(alphaObject.alpha()); // Alpha
console.log(alphaObject.beta()); // error

// Object.setPrototypeOf(a, b)
// - sets betaObject as prototype of alphaObject
Object.setPrototypeOf(alphaObject, betaObject);
console.log(alphaObject.alpha()); // Alpha
console.log(alphaObject.beta()); // Beta


// Object.getPrototypeOf(a)
// - gets prototype of object passed in
console.log(Object.getPrototypeOf(alphaObject)) // { beta: [Function: beta] }


// The __proto__ property ("dunder proto")
// - references object that points to the prototype it was created from 

console.log(alphaObject.__proto__) // { beta: [Function: beta] }


// defining shareable methods on a constructor funcs `prototype` property

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

let fluffy = new Dog('Fluffy', 5);
let spot = new Dog('Spot', 7);

// get prototype for `Dog` instances
let fluffyPrototype = Object.getPrototypeOf(fluffy);
let spotPrototype = Object.getPrototypeOf(spot);

// compare to `Dog` constructor funcs `prototype` property
console.log(fluffyPrototype === Dog.prototype) // true
console.log(spotPrototype === Dog.prototype) //true

// every instance's prototype references same object
console.log(fluffyPrototype === spotPrototype) //true


// any method we define on constructor functions prototype will be shared across all instances of that object type
Dog.prototype.speak = function () {
  return `Woof my name is ${this.name}`
}

// let fluffy = new Dog('Fluffy', 5);

// when speak() is called:
console.log(fluffy.speak()) // Woof my name is Fluffy


// problems with arrow functions
Dog.prototype.bark = () => `Woof woof my name is ${this.name}`
console.log(fluffy.bark()) // Woof woof my name is undefined


// instanceof operator uses prototypes to determine if obj is an instance of a specific constructor function
console.log(fluffy instanceof Dog) // true