// SCOPE : visibiliity and availability of variables


let count = 0;

function increment() {
	count++;
	console.log(count);
}

// increment();










// CONTEXT : the object to which a function belongs
// - value of `this` keyword when code is executed


function whatIsThis() {
	console.log(this);
}

// when we invoke a method function style, the context will be the global obj

// whatIsThis(); // global


let obj = {
	whatIsThis: function() {
		console.log(this)
	}
}

// when we invoke a method method-style, the context will be the object the
// method was called upon 

// obj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }










// ACCESSING PROPERTIES/METHODS USING THIS 















// METHODS WITH UNEXPECTED CONTEXT
























// ASSIGNING CONTEXT USING BIND
// let aboundFunc = func.bind(context, arg1, arg2, etc..)





















// BINDING WITH ARGUMENTS





















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