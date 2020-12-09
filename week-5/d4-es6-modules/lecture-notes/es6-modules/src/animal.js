
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`hi my name is ${this.name}`);
	}
}

export class Dog extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  speak() {
    console.log(`${this.name} barks`);
  }
}

export class Cat extends Animal {
  speak() {
    console.log(`${this.name} meows`);
  }
}

// module.exports = { Cat, Dog }

