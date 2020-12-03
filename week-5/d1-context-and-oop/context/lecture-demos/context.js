// SCOPE : visibility and availability of variables



function increment() {
	let count = 0;
	count++;
	console.log(count);
}

// console.log(count)

// increment();










// CONTEXT : the object to which a function belongs
// - value of `this` keyword when code is executed


// context with regular functions
// - value of `this` depends on how a function is invoked
// - function style invocation: `this` set to global object
// - method style invocation: `this` set to object it is called on


// GLOBAL FUNCTIONS

function whatIsThis() {
	console.log(this);
}

// when we invoke a method function style, the context is automatically
// set to the global object

// whatIsThis(); // global



// OBJECT METHODS

let myObj = {
	whatIsThis: function() {
		console.log(this)
	}
}

// when we invoke a method method-style, the context will be the object the
// method was called upon 

// myObj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }



// ISOLATED OBJECT METHODS

// if we isolate this method by saving it to a variable and then invoke that
// variable function style, we lose our context and it will default back
// to the global object

let myFunc = myObj.whatIsThis;
// myFunc(); // global











// ACCESSING PROPERTIES/METHODS USING THIS IN OBJECT METHODS 
// - we can access any methods/properties of an object using 'this'

// let dog = {
// 	name: 'bodhi',
// 	speak: function() {
// 		console.log(this)
// 		console.log(`hi my name is ${this.name}`);
// 	},
// 	changeName: function(newName) {
// 		this.name = newName;
// 		this.speak();
// 	}
// }

// dog.speak(); // hi my name is bodhi
// dog.changeName('pancake'); // hi my name is pancake
// console.log(dog);











// METHODS WITH UNEXPECTED CONTEXT

// let dog = {
// 	name: 'bodhi',
// 	speak: function() {
// 		console.log(`hi my name is ${this.name}`);
// 	},
// 	changeName: function(newName) {
// 		console.log(this)
// 		this.name = newName;
// 		this.speak();
// 	}
// }

// // this wont work as expected
// let changeNameFunc = dog.changeName;
// changeNameFunc('bob');


// dog.changeName('bob');
// console.log(dog);














