// INHERITANCE


// * TODO = CREATE PARENT CLASS FOR DOGS AND CATS CALLED ANIMAL
// - dogs and cats both have a name and age property
// - dogs and cats both have a speak method













































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

// class Animal {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   speak(word) {
//     console.log(`hi my name is ${this.name}, ${word}`);
//   }
// }

// TODO : OVERWRITE SPEAK METHOD TO ALSO PRINT "bark bark bark"

// class Dog extends Animal {
// 	speak() {
// 		super.speak('HELLO');
// 		console.log('bark bark bark');
// 	}
// }

// let bodhi = new Dog('bodhi', 5);
// bodhi.speak();