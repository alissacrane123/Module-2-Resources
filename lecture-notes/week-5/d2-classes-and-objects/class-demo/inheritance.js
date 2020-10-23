// INHERITANCE


// * TODO = CREATE PARENT CLASS FOR DOGS AND CATS


// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak() {
// 		console.log(`${this.name} says hello`);
// 	}
// }


// // class Cat extends Animal {

// // }

// // let pancake = new Cat('pancake', 10)
// // console.log(pancake);


// class Dog extends Animal {
// 	constructor(name, age, tricks=[]) {
// 		super(name, age);
// 		this.tricks = tricks;
// 	}
// }

// let bodhi = new Dog('bodhi', 5)

// bodhi.speak();
// console.log(bodhi);




























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













// CAN OVERWRITE AND ADD ONTO INHERITED METHODS

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
  }
}


class Dog extends Animal {
  constructor(name, age) {
		super(name, age);
    this.tricks = [];
  }

  speak() {
		
		console.log("bark bark bark");
		super.speak() // console.log(`hi my name is ${this.name}`);
  }
}


let bodhi = new Dog('bodhi', 5);
bodhi.speak();