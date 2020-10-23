// function Animal(age, name) {
//   this.age = age;
//   this.name = name;
// }

// console.log(Animal);
// console.log(Animal.prototype);

// adding meathod called speak to Animals prototype object
// Animal.prototype.speak = function() {
//   return `Hi my name is ${this.name}`
// }

// console.log(Animal);
// console.log(Animal.prototype);

// let pancake = new Animal('pancake', 10)

// console.log(pancake);
// console.log(Object.getPrototypeOf(pancake));
// console.log(Object.getPrototypeOf(pancake) === Animal.prototype);
// console.log(pancake.speak())





// ---------------------------------------------------------------------------------



class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    return `Hi my name is ${this.name}`
  }
}

let pancake = new Animal('pancake', 10)
let bob = new Animal('bob', 10)
console.log(Animal);
console.log(Animal.prototype);
console.dir(Animal.prototype.hasOwnProperty('speak'))
console.log(pancake.speak === bob.speak);