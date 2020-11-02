

// CONTEXT : the object to which a function belongs
// - the object that is currently invoking a function
// - depends entirely on how/where a function is invoked
// - the value of 'this' at time of execution


// CONTEXT WITH REGULAR FUNCTIONS
// - value of `this` depends on how a function is invoked
// - function style invocation: `this` set to global object
// - method style invocation: `this` set to object it is called on



function whatIsThis() {
	console.log(this);
}

// when we invoke a function function-style, the default context is the
// global object

// whatIsThis(); // global


// CONTEXT WITH OBJECT METHODS


let myObj = {
	whatIsThis: function() {
		console.log(this);
	}
}

// we are invoking the method method-style on myObj, thus that method belongs 
// to myObj so the context will be myObj

// myObj.whatIsThis(); // myObj { whatIsThis: [Function: whatIsThis] }


// if we isolate this method by saving it to a variable and then invoke that
// variable function style, we lose our context and it will default back
// to the global object

let myFunc = myObj.whatIsThis;
// myFunc(); // global















// CONTEXT WITHIN OBJECT METHODS
// - we can access any methods/properties of an object using 'this'


let duck = {
	name: 'sally',
	quack: function() {
		console.log('quack quack quack');
	},
	speak: function() {
		console.log(`hi my name is ${this.name}`);
		this.quack();
	}
}

duck.speak(); // hi my name is sally 
							// quack quack quack













// ISSUES WITH CONTEXT AND SOLVING THOSE ISSUES WITH BIND


let dog = {
	name: 'bodhi',
	age: 5,
	speak: function() {
		console.log(`hi my name is ${this.name} and I am ${this.age} years old`)
	}
}


dog.speak(); // hi my name is bodhi and I am 5 years old


// by invoking a method function style, we lose our context
let noSpeakFunc = dog.speak;
noSpeakFunc(); // hi my name is undefined and I am undefined years old


// we can fix this issue using the bind method to assign a specific context
let boundSpeakFunc = dog.speak.bind(dog);
boundSpeakFunc() // hi my name is bodhi and I am 5 years old













// BINDING METHODS TO MULTIPLE OBJECTS


let animal = {
	speak: function() {
		console.log(`hi my name is ${this.name}`)
	}
}


let bodhi = {
	name: 'bodhi'
}

let pancake = {
	name: 'pancake'
}


// we always call bind on the method we want to assign a specific context to
// - here we want to bind the animal.speak method to two different objects
// - the bodhiSpeak method is a version of animal.speak that will aways have
//   a context of bodhi, thus `this` will always refer to bodhi
//   - `this.name` will be `bodhi.name`
// - the pancakeSpeak method is a version of animal.speak that will aways have
//   a context of pancake, thus `this` will always refer to pancake
//   - `this.name` will be `pancake.name`

let bodhiSpeak = animal.speak.bind(bodhi);
let pancakeSpeak = animal.speak.bind(pancake);


bodhiSpeak(); // hi my name is bodhi
pancakeSpeak(); // hi my name is pancake












// CONTEXT AND ARROW FUNCTIONS
// - arrow functions establish "this" based on the scope the Arrow function 
//   is defined within
// - regular functions establish "this" based on how they are invoked


let cat = {
	name: 'pancake',
	age: 5,
	speak: function() {
		console.log(`hi my name is ${this.name} and I am ${this.age} years old`)
	},
	changeNameFunc: function() {
		return (newName) => {
			this.name = newName;
			this.speak();
		}
	},
	noChangeNameFunc: function() {
		return function(newName) {
			this.name = newName;
			this.speak();
		}
	}
}

// noChangeName is a regular function, thus its context is set based on how it
// is inovoked.
let noChangeName = cat.noChangeNameFunc();

// we are invoking this method function style, so "this" will default to
// the global object, which doesnt have a "speak" method so we receive an error
// noChangeName('bob'); // error

// changeName is a fat arrow function, thus its context is set to the context
// it was defined in, i.e the context within the "changeNameFunc" method
// which is the cat
let changeName = cat.changeNameFunc();

// we can invoke this method function style and not have to worry about 
// context issues since the context has been bound to the cat object
changeName('bob'); // hi my name is bob and I am 5 years old