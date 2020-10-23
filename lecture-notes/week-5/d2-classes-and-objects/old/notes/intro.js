// creating objects using literal notation / object initializer

const whiskers = {
  name: 'Whiskers',
  age: 10
};

// creating objects using constructor function


// this constructor func defines a "Dog" object type
function Dog(name, color) {
  this.name = name;
  this.color = color;
}

// invoking a constructor function with "new"

let fido = new Dog('fido', 'brown');
let snowball = new Dog('snowball', 'white');

// logging each instance shows each is a "Dog" objec type

console.log(fido) // Dog { name: 'fido', color: 'brown' }
console.log(snowball) // Dog { name: 'snowball', color: 'white' }

// comparing shows that each is a unique object, although they are both object type "Dog"

console.log(fido === snowball) // false

// can use instanceOf operator to check an objects type

console.log(fido instanceof Dog) // true


// invoking a constructor without the `new` keyword

function Penguin(name) {
  // 'use strict';
  this.name = name;
}

let pancake = Penguin('pancake')
console.log(pancake) //  undefined

