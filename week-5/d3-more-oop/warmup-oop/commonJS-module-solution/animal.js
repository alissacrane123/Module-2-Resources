class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi, my name is ${this.name}`);
  }
}

// class Dog extends Animal {
//   speak() {
//     console.log(`woof woof my name is ${this.name}`);
//   }
// }

class Cat extends Animal {
  speak() {
    console.log(`meow meow my name is ${this.name}`);
  }
}

module.exports = { Animal, Cat }






