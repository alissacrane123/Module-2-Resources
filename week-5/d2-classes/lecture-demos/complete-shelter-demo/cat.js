const Animal = require('./animal');

class Cat extends Animal {

	//? overrides Animal.prototype.speak()
	speak() {
		console.log(`${this.name} meows`);
	}
}


module.exports = Cat;