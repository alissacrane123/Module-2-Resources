"use strict";




// OBJECT LITERAL NOTATAION

// let dog = {
// 	name: 'Bodhi',

// 	speak: function() {
// 		console.log(`hi my name is ${this.name}`);
// 	}
// }

// dog.speak(); // hi my name is Bodhi






// CONSTRUCTOR FUNCTIONS


// function Dog(name) {
// 	this.name = name;

// 	this.speak = function() {
// 		console.log(`hi my name is ${this.name}`)
// 	}
// }

// let bodhi = new Dog('bodhi');
// let lucy = new Dog('lucy');

// console.log(bodhi); // Dog { name: 'bodhi', speak: [Function] }
// console.log(lucy); // Dog { name: 'lucy', speak: [Function] }

// lucy.speak(); // hi my name is lucy











// DEFINING SHAREABLE METHODS ON THE PROTOTYPE


// function Dog(name) {
// 	// let this = Object.create(Dog.prototype);
// 	this.name = name;


// 	// return this
// }


// // console.log(Dog.prototype); // Dog {}



// Dog.prototype.speak = function() {
// 	console.log(`hi my name is ${this.name}`)
// }

// // Dog.prototype will contain all methods defined on it
// console.log(Dog.prototype); // Dog { speak: [Function] }


// // invoking with 'new' gives instance access to Dog.prototype and thus,
// // all methods defined on that prototype
// let bodhi = new Dog("bodhi");

// let lucy = new Dog('lucy')

// console.log(bodhi, lucy);
// bodhi.speak(); // hi my name is bodhi


// // instance of Dog will only show properties defined in constructor but
// // failed lookups are delegated to the Dog.prototype
// console.log(bodhi); // Dog { name: 'bodhi' }
// bodhi.speak(); // hi my name is bodhi


// // all instances of Dog class will have access to methods defined on prototype
// let lucy = new Dog('lucy');
// lucy.speak(); // hi my name is lucy


// // can define as many shared methods as we need 
// Dog.prototype.bark = function() {
// 	console.log('bark bark bark')
// }

// console.log(Dog.prototype) // Dog { speak: [Function], bark: [Function] }
// bodhi.bark() // bark bark bark





// MONKEY PATCHING
// Array.prototype.removeSecondElement = function() {
// 	let newArray = []
// 	this.forEach((el, i) =>  {
// 		if (i !== 1)  {
// 			newArray.push(el)
// 		}
// 	});
// 	return newArray;
// }

// let array = [1,2,3,4,5];
// let newArr = array.removeSecondElement();
// console.log(newArr)





// ANOTHER EXAMPLE 

// function Cat(name) {
// 	this.name = name;
// }

// Cat.prototype.sayHello = function() {
// 	console.log(`my name is ${this.name}`);
// }

// Cat.prototype.changeName = function(newName) {
// 	this.name = newName;
// 	this.sayHello();
// }

// let myCat = new Cat('pancake');

// myCat.sayHello(); // my name is pancake
// myCat.changeName('bob'); // my name is bob

// console.log(myCat) // Cat { name: 'bob' }










// INVOKING CONSTRUCTOR WITHOUT NEW KEYWORD


// function Dog(name) {
// 	// let this = Object.create(Dog.prototype);
// 	this.name = name;
// 	// return this
// }


// let doggy = Dog('dog', 8); // TypeError: Cannot set property 'name' of undefined













// CHECK OBJECT TYPE USING INSTANCEOF

// console.log(bodhi instanceof Dog) // true















