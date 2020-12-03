

// USING CONSTRUCTOR FUNCTION

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(Dog);






// USING ES6 CLASSES 

// class Dog {
// 	constructor(name, age) {
// 		this.numLegs = 4;
// 		this.name = name;
// 		this.age = age;

// 		// console.log(this)
// 	}
// }


// console.log(Dog); // [Function: Dog]

// let frank = new Dog('frank', 5) // Dog { name: 'frank', age: 5 }


// console.log(frank) // Dog { name: 'frank', age: 5 }


















// DEFINING INSTANCE METHODS


// using constructor function

// function Dog(name, age) {
//   this.name = name;
// 	this.age = age;
//   this.tricks = [];
// }

// Dog.prototype.speak = function () {
//   console.log(`hi my name is ${this.name}`);
// };

// let bodhi = new Dog('bodhi', 5);
// bodhi.speak(); // hi my name is bodhi

// // DONT DO THIS 
// // Dog.speak()





// TODO: 
// - recreate using es6 classes
// - assign an additional property `tricks` initialized to empty array
// - create a new method called 'learnNewTrick(trick)`
//   - accepts a string as an argument
//   - adds new trick to `tricks` array
//   - console.log `New trick learned: ${trick}`
// - create a new method called 'performTricks`
//   - console.log `${this.name} performs trick: ${trick}` for each trick
//     in tricks array


// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.tricks = [];
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`);
// 	}

// 	learnNewTrick(trick) {
// 		this.tricks.push(trick);
// 		console.log(`${this.name} learned a new trick ${trick}`)
// 	}
// }

// let bodhi = new Dog('bodhi', 5);

// bodhi.speak();

// console.log(bodhi); // Dog { name: 'bodhi', age: 5, tricks: [] }

// bodhi.learnNewTrick('sit');

// console.log(bodhi); // Dog { name: 'bodhi', age: 5, tricks: [ 'sit' ] }



// let bodhi = new Dog("bodhi", 5);

// bodhi.speak(); // hi my name is bodhi

// bodhi.learnNewTrick('sit'); // New trick learned: sit

// bodhi.performTricks(); // bodhi performs trick: sit

// bodhi.learnNewTrick('roll over'); // New trick learned: roll over

// bodhi.performTricks(); // bodhi performs trick: sit
//                        // bodhi performs trick: roll over












// DEFINING STATIC METHODS


// using constructor function




// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Dog.findOldest = function(...dogs) {
// 	// dogs = [bodhi, lucy]
// 	let oldest = dogs[0];

// 	dogs.forEach(dog => {
// 		if (dog.age > oldest.age) {
// 			oldest = dog;
// 		}
// 	});
// 	console.log(`${oldest.name} is the oldest dog`)
// }


// let bodhi = new Dog("bodhi", 5);
// let lucy = new Dog("lucy", 10);
// Dog.findOldest(bodhi, lucy); // lucy is the oldest dog





// TODO = recreate using classes

// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.tricks = [];
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`)
// 	}

// 	static findOldest(...dogs) {
// 		let oldest = dogs[0];

// 		dogs.forEach(dog => {
// 			if (dog.age > oldest.age) {
// 				oldest = dog;
// 			}
// 		});
// 		console.log(`${oldest.name} is the oldest dog`)
// 	}
// }


// let bodhi = new Dog("bodhi", 5);
// let lucy = new Dog("lucy", 10);
// Dog.findOldest(bodhi, lucy); // lucy is the oldest dog

// bodhi.speak();










// HOISTING 

// functions are hoisted - below will work

// let penguin = new Penguin('sally');
// console.log(penguin); // Penguin { name: 'sally' }

// function Penguin(name) {
// 	this.name = name;
// }



// classes are not hoisted - below will not work 



// class Penguin {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let penguin = new Penguin("sally");
// console.log(penguin);







// CONTEXT AND CLASSES


// class Clock {
// 	constructor() {
// 		this.time = 0;
// 		// this.tick = this.tick.bind(this)
// 		this.start();
// 	}

// 	tick(){
// 		console.log(this.time)
// 		this.time++
// 	}

// 	start() {
// 		setInterval(this.tick, 1000)
// 	}
// }



