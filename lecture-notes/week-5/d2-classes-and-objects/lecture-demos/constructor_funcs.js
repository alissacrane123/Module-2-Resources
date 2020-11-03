"use strict";




// OBJECT LITERAL NOTATAION

let dog = {
	name: 'Bodhi',
	bark: function() {
		console.log('bark bark bark')
	},
	speak: function() {
		console.log(`hi my name is ${this.name}`);
		this.bark();
	}
}

// dog.bark(); // bark bark 
// dog.speak(); // hi my name is Bodhi






// CONSTRUCTOR FUNCTIONS

// function Dog(name) {
// 	// let this = Object.create(Dog.prototype);
// 	this.name = name;
// 	this.bark = function() {
// 		console.log('bark bark bark')
// 	}
// 	this.sayHello = function() {
// 		console.log(`hi my name is ${this.name}`);
// 		this.bark();
// 	}
// 	// return this;
// }

// let bodhi = new Dog('bodhi');
// let lucy = new Dog('lucy');

// console.log(bodhi);
// console.log(lucy);

// bodhi.bark();
// lucy.sayHello();

// console.log(Dog.prototype)




















// PROTOTYPE PROPERTY

// when Dog function is declared:
// - default property named `prototype` is created
// - `Dog.prototype` is an object we can define shareable methods on
// - basically a blueprint for future Dog instances

function Dog(name) {
	// let this = Object.create(Dog.prototype);
	this.name = name;
	// return this
}

console.log(Dog.prototype); // Dog {}

Dog.prototype.bark = function() {
	console.log('bark bark bark')
}

Dog.prototype.sayHello = function() {
	console.log(`hi my name is ${this.name}`)
}

// newly created object inherits all properties from Dog.prototype
let bodhi = new Dog("bodhi");
console.log(bodhi); 
bodhi.bark()
bodhi.sayHello();


let lucy = new Dog('lucy');
lucy.sayHello();

// Dog.prototype will contain all methods defined on it
// console.log(Dog.prototype); 






// INVOKING CONSTRUCTOR WITHOUT NEW KEYWORD

let doggy = Dog('dog', 8); // error













// CHECK OBJECT TYPE USING INSTANCEOF

// console.log(bodhi instanceof Dog) // true












