"use strict";




// OBJECT LITERAL NOTATAION


let dog = {
	name: 'Bodhi',
	bark: () => {
		console.log('bark bark')
	}
}

// dog.bark(); // bark bark 






// CONSTRUCTOR FUNCTIONS



function Dog(name, age, breed='dog') {
	// const this = Object.create(Dog.prototype)

	if (!Number.isInteger(age)) {
		throw new Error('age must be an integer')
	}

	this.name = name;
	this.age = age;
	this.breed = breed;
	this.numLegs = 4;

	// console.log(this)
	// return this
}


Dog.prototype.bark = function() {
	console.log('bark bark bark')
}

Dog.prototype.sayHello = function() {
	console.log(`hi my name is ${this.name}`)
}




console.log(Dog.prototype);

let bodhi = new Dog('bodhi', 10, 'german shepherd mix');

console.log(bodhi);

// bodhi.sayHello();

// let lucy = new Dog('lucy', 10);

// console.log(lucy);
// lucy.sayHello();


// lucy.bark();

// bodhi.bark();

// console.log(bodhi);
// console.log(lucy);

// console.log(bodhi.name);
// console.log(lucy.name);










// PROTOTYPE PROPERTY

// function Dog() {

// }

// console.log(Dog); // [Function: Dog]
// console.log(Dog.prototype); // Dog {}
// console.log(Dog.prototype.constructor === Dog) // true


// Dog.prototype.name = 'bodhi'
// console.log(Dog.prototype); // Dog { name: 'bodhi' }












// USING NEW KEYWORD


// function Dog(name) {
// 	// 1: const this = Object.create(Dog.prototype);
// 	this.name = name;
// 	// 2: return this;
// }


// let bodhi = new Dog('bodhi')
// console.log(bodhi) // Dog { name: 'bodhi' }
// console.log(bodhi.name) // 'bodhi'









// CHECK OBJECT TYPE USING INSTANCEOF

console.log(bodhi instanceof Dog) // true








// INVOKING CONSTRUCTOR WITHOUT NEW KEYWORD

// let doggy = Dog('dog', 8);







