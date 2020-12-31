import { Dog, Cat } from './animal.js';

// const { Dog, Cat } = require('./animal')

class Shelter {
	constructor(animals = []) {
		new Cat('bob')
		this.animals = animals;
	}

	receiveAnimal(animal) {
		this.animals.push(animal);
	}
}


export default Shelter;

// module.exports = Shelter