const Animal = require('./animal');

// const { Animal } = require('./animal');

class Cat extends Animal {

  speak() {
    console.log(`${this.name} meows`);
  }
}


module.exports = Cat;