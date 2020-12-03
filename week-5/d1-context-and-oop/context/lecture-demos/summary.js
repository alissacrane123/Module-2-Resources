
// CONTEXT SUMMARY 


// context refers to the value of 'this' when code is executed


let duck = {
	name: 'sally',
	age: 5,
	sayAge: function() {
		console.log(`my name is ${this.name} and I am ${this.age}`)
	}
}

// when we invoke a regular function method style the context 
// is bound to the object we are calling the method on
// - `this` is the 'duck' object
// - `this.name` is Sally, `this.age` is 5
// duck.sayAge();


// we lose our context if we isolate our func and call it function style
// - `this` will default to the global object
// - `this.name` will be undefined, `this.age` is undefined
// const sayAgeFunc = duck.sayAge;
// sayAgeFunc();


// we can fix this issue by using the `bind` method to set the context to 
// the object we pass in as the first argument
// - `this` is now the 'duck' object
// - `this.name` is Sally, `this.age` is 5
// let boundSayAgeFunc = duck.sayAge.bind(duck);
// boundSayAgeFunc(); 


// we can bind a method to other objects that contain the relevant properties
// - `this` is now the 'otherDuck' object
// - `this.name` is howard, `this.age` is 10
// let otherDuck = {
// 	name: 'howard',
// 	age: 10
// }
// let howardSayAgeFunc = duck.sayAge.bind(otherDuck);
// howardSayAgeFunc(); 




// ARROW FUNCS


let cow = {
	name: 'george',
	moo: function() {
		console.log('moo moo moo')
	},
	speakFunc: function() {
		// value of `this` is cow object
		return () => {
			console.log(`hi my name is ${this.name}`);
			this.moo();
		}
	},
	noSpeakFunc: function() {
		return function() {
			console.log(`hi my name is ${this.name}`);
			this.moo();
		}
	}
}



// we can use fat arrow functions to set a specific context
// - the context within the fat arrow func will be the same as the context
//   where it is defined, regardless of how it is invoked
let fatArrowSpeak = cow.speakFunc();
// fatArrowSpeak()

// let noSpeak = cow.speakFunc;
// let noArrowSpeak = noSpeak();
// noArrowSpeak();


// if we use a regular function, we will lose its context when we invoke
// it function style
// let noSpeak = cow.noSpeakFunc();
// noSpeak();


// we can solve this issue by binding
let boundSpeak = cow.noSpeakFunc().bind(cow);
// boundSpeak();







// REAL WORLD EXAMPLE

let stopwatch = {
	time: 0,
	tick: function () {
		this.time++;
		console.log(this.time);
	},
	start: function() {

		// setInterval(this.tick.bind(this), 1000);
		setInterval(this.tick, 1000);
	}
}

// stopwatch.start();