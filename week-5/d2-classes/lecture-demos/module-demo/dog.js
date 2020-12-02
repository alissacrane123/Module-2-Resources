// IMPORT METHOD #1
// create a variable, set it equal to module.exports from specified file
const Animal = require("./animal.js");



// IMPORT METHOD #2
// const { Animal, Banana } = require('./animal'); 
// OR
// const content = require('./animal') // { Animal: [Function: Animal], Banana: [Function: Banana] }
// console.log(content);
// const Animal = content.Animal; // [Function: Animal],
// const Banana = content.Banana;


class Dog extends Animal {
	constructor(name, age) {
		super(name, age)
		this.tricks = [];
	}

	learnNewTrick(trick) {
		this.tricks.push(trick);
		console.log(`New trick learned: ${trick}`)
	}

	performTricks() {
		this.tricks.forEach(trick => {
			console.log(`${this.name} performs trick: ${trick}`)
		})
	}
}


module.exports = Dog;



// const bodhi = new Dog('bodhi', 8);
// bodhi.speak();



