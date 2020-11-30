
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
			this.speak()
		}
	},

	noChangeNameFunc: function() {
		return function(newName) {
			// console.log('value of this inside regular func:\n', this);
			this.name = newName;
			this.speak()
		}
	}, 

	speak: function() {
		console.log(`hi my name is ${this.name}`)
	}
}


let noChangeName = user.noChangeNameFunc();
// noChangeName('bob');



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











