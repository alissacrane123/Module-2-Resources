// INHERITANCE


// * TODO = CREATE PARENT CLASS FOR DOGS AND CATS






























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

// TODO : OVERWRITE SPEAK METHOD TO ALSO PRINT "bark bark bark"