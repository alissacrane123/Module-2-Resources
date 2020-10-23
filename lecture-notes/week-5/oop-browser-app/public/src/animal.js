

class Animal {
  constructor(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
  }
}

export default Animal