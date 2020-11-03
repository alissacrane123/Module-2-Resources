

// USING CONSTRUCTOR FUNCTION

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }

// console.log(Dog);




// USING ES6 CLASSES 

// class Dog {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// console.log(Dog);
// let frank = new Dog('frank', 5)













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
// 	 this.age = age;
//   this.tricks = [];
// }

// Dog.prototype.speak = function () {
//   console.log(`hi my name is ${this.name}`);
// };

// DONT DO THIS 
// Dog.speak()

// let bodhi = new Dog('bodhi', 5)
// bodhi.speak(); // hi my name is bodhi




// * TODO = using classes 

















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

// Dog.findOldest(bodhi, lucy);






// * TODO = using classes 











