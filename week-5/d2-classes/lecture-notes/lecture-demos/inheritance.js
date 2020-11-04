// INHERITANCE


// * TODO = CREATE PARENT CLASS FOR DOGS AND CATS
// - dogs and cats both have a name and age property
// - dogs and cats both have a speak method

// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`)
// 	}
// }


// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name, age);
// 		this.tricks = [];
// 	}

// 	bark() {
// 		console.log('bark bark bark')
// 	}
// }

// class Cat extends Animal {
// 	// constructor(name, age) {
// 	// 	super(name, age);
// 	// }

// 	meow() {
// 		console.log('meow meow meow')
// 	}
// }

// let bodhi = new Dog('bodhi', 5);
// bodhi.speak(); // hi my name is bodhi
// console.log(bodhi) // Dog { name: 'bodhi', age: 5, tricks: [] }

// let pancake =  new Cat('pancake', 10);
// pancake.meow();
// pancake.speak();

// console.log(Dog);
// console.log(Animal);
































// LEAVING OFF CONSTRUCTOR FUNCTION


// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`);
// 	}
// }


// class Dog extends Animal {

// 	bark() {
// 		console.log("bark bark bark");
// 	}
// }

// let bodhi = new Dog('bodhi', 5);
// bodhi.speak();
// console.log(bodhi); // Dog { name: 'bodhi', age: 5 }












// CAN OVERWRITE AND ADD ONTO INHERITED METHODS

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak(word) {
    console.log(`hi my name is ${this.name}, ${word}`);
  }
}

// TODO : OVERWRITE SPEAK METHOD TO ALSO PRINT "bark bark bark"

class Dog extends Animal {
	speak() {
		super.speak('wah');
		console.log('bark bark bark');
	}
}

let bodhi = new Dog('bodhi', 5);
bodhi.speak();