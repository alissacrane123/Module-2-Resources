const { Animal } = require('./animal');

class Dog extends Animal {
  speak() {
    console.log(`woof woof my name is ${this.name}`);
  }
}

module.exports = Dog;