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

let obj = {
	whatIsThis: function() {
		console.log(this)
	}
}

// when we invoke a method method-style, the context will be the object the
// method was called upon 

// obj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }






// ISOLATED OBJECT METHODS

// if we isolate this method by saving it to a variable and then invoke that
// variable function style, we lose our context and it will default back
// to the global object

let myFunc = myObj.whatIsThis;
// myFunc(); // global











// ACCESSING PROPERTIES/METHODS USING THIS IN OBJECT METHODS 
// - we can access any methods/properties of an object using 'this'














// METHODS WITH UNEXPECTED CONTEXT
























// ASSIGNING CONTEXT USING BIND
// let aboundFunc = func.bind(context, arg1, arg2, etc..)



















// BINDING METHODS TO MULTIPLE OBJECTS





















// BINDING WITH ARGUMENTS



















// ARROW FUNCTION REVIEW






















// ARROW FUNCTIONS AND CONTEXT


let user = {
	name: 'alissa',
	changeNameFunc: function() {
		console.log('value of this where arrow func is defined:\n', this);
		return (newName) => {
			console.log('value of this inside arrow func:\n', this);
			this.name = newName;
		}
	},

	noChangeNameFunc: function() {
		return function(newName) {
			console.log('value of this inside regular func:\n', this);
			this.name = newName;
		}
	} 
}


let noChangeName = user.noChangeNameFunc();
// noChangeName('bob');


let changeName = user.changeNameFunc();
// changeName('bob')














// NO BINDING WITH ARROW FUNCTIONS


let bodhi = {
	name: 'bodhi'
}


let noReturnName = () => {
	console.log(this.name);
}
noReturnName() // undefined

let notBound = noReturnName.bind(bodhi);
notBound(); // undefined


let returnName = function() {
	console.log(this.name);
}

let bound = returnName.bind(bodhi);
bound() // bodhi