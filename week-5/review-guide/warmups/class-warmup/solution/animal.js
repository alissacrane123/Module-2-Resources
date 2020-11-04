class Animal {
  constructor(name, age) {
    //setting the name and age instance variables to the name and age provided
    //when animal is instatiated
    this.name = name;
    this.age = age;
  }

  speak() {
    return `my name is ${this.name}`;
  }
}
//inheriting Animal in the Dog class
class Dog extends Animal {
  speak() {
    // calling parent classes' super method which returns a string
    // "my name is <object-name>"
    let superString = super.speak();
    return `woof woof ${superString}`;
  }
}

//inheriting Animal in the Cat class
class Cat extends Animal {
  speak() {
    // calling parent classes' super method which returns a string
    // "my name is <object-name>"
    let superString = super.speak();
    return `meow meow ${superString}`;
  }
}

//exporting both Cat and Dog classes (we can destructure on import)
//note how we don't need to export the parent Animal class
module.exports = { Cat, Dog };
