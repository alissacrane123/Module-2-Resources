// SCOPE : visibility and availability of variables


let count = 0;

function increment() {
	count++;
	console.log(count);
	
}

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
// 		this.name = newName;
// 		this.speak();
// 		// console.log(this)
// 	}
// }


// let changeNameFunc = dog.changeName;
// changeNameFunc('bob');
// console.log(dog);


// dog.changeName('bob');
// console.log(dog);














// ASSIGNING CONTEXT USING BIND
// let aboundFunc = func.bind(context, arg1, arg2, etc..)

// let cat = {
// 	name: 'pancake',
// 	speak: function() {
// 		console.log(`hi my name is ${this.name}`);
// 	}
// }

// let boundSpeakFunc = cat.speak.bind(cat);
// boundSpeakFunc(); // hi my name is pancake

// let speakFunc = cat.speak;
// speakFunc(); // hi my name is undefined

















// BINDING METHODS TO MULTIPLE OBJECTS


// let animal = {
// 	speak: function() {
// 		console.log(`hi my name is ${this.name}`);
// 	}
// }

// let dog = {
// 	name: 'bodhi'
// }

// let cat = {
// 	name: 'pancake'
// }


// let dogSpeakFunc = animal.speak.bind(dog);
// let catSpeakFunc = animal.speak.bind(cat);

// dogSpeakFunc(); // hi my name is bodhi
// catSpeakFunc(); // hi my name is pancake















// BINDING WITH ARGUMENTS


function multiply (a,b) {
	return a * b;
}

let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

// console.log(double(5)); // 10
// multiply(2,5)

// console.log(triple(3)); // 9
// multiply(3,3)
















// ARROW FUNCTION REVIEW

// function sayHello(name) {
// 	return `hello ${name}`;
// }


// const sayHello = (name) => {
// 	return `hello ${name}`
// }


// const sayHello = (name) => `hello ${name}`

// console.log(sayHello('alissa'))
















// ARROW FUNCTIONS AND CONTEXT


let user = {
	name: 'alissa',
	changeNameFunc: function() {
		// console.log('value of this where arrow func is defined:\n', this);
		return (newName) => {
			// console.log('value of this inside arrow func:\n', this);
			this.name = newName;
		}
	},

	noChangeNameFunc: function() {
		return function(newName) {
			// console.log('value of this inside regular func:\n', this);
			this.name = newName;
		}
	} 
}


let noChangeName = user.noChangeNameFunc();
// noChangeName('bob');
// console.log(user);



let changeName = user.changeNameFunc();
// changeName('bob');
// console.log(user);












// NO BINDING WITH ARROW FUNCTIONS


let bodhi = {
	name: 'bodhi'
}


let noReturnName = () => {
	console.log(this.name);
}
// noReturnName() // undefined




let notBound = noReturnName.bind(bodhi);
// notBound(); // undefined


let returnName = function() {
	console.log(this.name);
}

let bound = returnName.bind(bodhi);
// bound() // bodhi












// SUMMARY

let duck = {
	name: 'sally',
	age: 5,
	quack: function() {
		console.log('quack quack quack')
	},
	sayAge: function() {
		console.log(`i am ${this.age} years old`)
	},
	speakFunc: function() {
		return () => {
			console.log(`hi my name is ${this.name}`);
			this.quack();
		}
	},
	noSpeakFunc: function() {
		return function() {
			console.log(`hi my name is ${this.name}`);
			this.quack();
		}
	}
}

// we preserve our context by invoking the sayAge func method style
// duck.sayAge();

// we lose our context if we isolate our func and call it function style
// let sayAgeFunc = duck.sayAge;
// sayAgeFunc(); // i am undefined years old


// we can fix this issue by using bind to set the context to the duck obj
// let boundSayAgeFunc = duck.sayAge.bind(duck);
// boundSayAgeFunc(); // i am 5 years old


// we can bind a method to other objects with similar properties
// let otherDuck = {
// 	name: 'howard',
// 	age: 10
// }
// let howardSayAgeFunc = duck.sayAge.bind(otherDuck);
// howardSayAgeFunc(); // i am 10 years old


// we can use fat arrow functions to set a specific context
// - the context within the fat arrow func will be the same as the context
//   where it is defined, regardless of how it is invoked
// let fatArrowSpeak = duck.speakFunc();
// fatArrowSpeak()


// if we use a regular function, we will lose its context when we invoke
// it function style
// let noSpeak = duck.noSpeakFunc();
// noSpeak();

// we can solve this issue by binding
// let boundSpeak = duck.noSpeakFunc().bind(duck);
// boundSpeak();





// REAL WORLD EXAMPLE

let stopwatch = {
	time: 0,
	tick: function () {
		this.time++;
		console.log(this.time);
	},
	start: function() {

		setInterval(this.tick.bind(this), 1000)
	}
}

// stopwatch.start();




