

// USING CONSTRUCTOR FUNCTION

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(Dog);

class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

}

console.log(Dog);

// Dog.prototype.bark = function() {
// 	console.log('bark bark ')
// }

// console.log(Dog.prototype);

// let bodhi = new Dog('bodhi', 5)

// console.log(bodhi)

// bodhi.weight = 100

// console.log(bodhi)



// * TODO = USING CLASSES


// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// }

// // console.log(Dog.prototype)

// let bodhi = new Dog('bodhi', 5)

// console.log(bodhi.age);









// HOISTING 

// functions are hoisted - below will work

// let penguin = new Penguin('sally');
// console.log(penguin);

// function Penguin(name) {
// 	this.name = name;
// }



// classes are not hoisted - below will not work 

// let penguin = new Penguin("sally");
// console.log(penguin);

// class Penguin {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }


















// DEFINING INSTANCE METHODS


// using constructor function

// function Dog(name, age) {
//   this.name = name;
// 	this.age = age;
	
// }

// Dog.prototype.speak = function () {
//   console.log(`hi my name is ${this.name}`);
// };

// Dog.prototype.bark = function () {
//   console.log("bark bark bark");
// };

// // DONT DO THIS 
// // Dog.bark()

// let bodhi = new Dog('bodhi', 5)
// bodhi.speak();




// * TODO = using classes 


// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 		this.tricks = [];
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`);
// 	}

// 	bark() {
// 		console.log('bark bark bark')
// 	}

// 	learnNewTrick(trick) {
// 		this.tricks.push(trick);
// 		console.log(`${this.name} learned a new trick, ${trick}`)
// 	}

// 	performAllTricks() {
// 		this.tricks.forEach(trick => {
// 			console.log(`${this.name} performs trick, ${trick}`)
// 		})
// 	}
// }

// let bodhi = new Dog('bodhi', 5);


// bodhi.performAllTricks();

// bodhi.learnNewTrick('sit');















// DEFINING STATIC METHODS


// using constructor function

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }


// Dog.findOldest = function(...dogs) {
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

// Dog.findOldest(bodhi, lucy)





// * TODO = using classes 

// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	bark() {
// 		console.log('bark bark bark')
// 	}

// 	// static findOldest(...dogs) {
// 	// 	let oldest = dogs[0];
// 	// 	console.log(this);
// 	// 	dogs.forEach(dog => {
// 	// 		if (dog.age > oldest.age) {
// 	// 			oldest = dog;
// 	// 		}
// 	// 	});
// 	// 	console.log(`${oldest.name} is the oldest dog`)
// 	// }

// 	findOldest(...dogs) {
// 		let oldest = this;
// 		console.log(this);
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

// Dog.findOldest(bodhi, lucy);

// bodhi.findOldest(lucy);




// let props = Object.getOwnPropertyNames(Dog.prototype);
// console.log(props)