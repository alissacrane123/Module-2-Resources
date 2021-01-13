const Animal = require('./animal');

class AnimalShelter {
	static maxUserAge = 18;

	constructor(animals = []) {
		this.verifyAnimals(animals);
		// we want this to be private so we use the _ convention
		this._animals = animals;
	}

	// This checks to make sure all the animals are actually Animals
	verifyAnimals(animals) {
		for (const animal of animals) {
			this.verifyAnimal(animal);
		}
	}

	// verifies a single animal to make sure it's an instance of the Animal class
	verifyAnimal(animal) {
		if (!(animal instanceof Animal)) {
			throw new Error(`${animal.constructor.name} wasn't an Animal`);
		}
	}

	// Gets a copy of the array of animals
	get animals() {
		return [...this._animals];
	}

  set animals(animals) {
		this.verifyAnimals(animals);
		this._animals = animals;
	}

	listAnimals() {
		console.log('This shelter has the following animals: ')

		this._animals.forEach(animal => {
			let animalType = animal.constructor.name;
			console.log(`\t${animal.age} year old ${animalType} named ${animal.name}`)
		})
	}

	createAdoption(animalName, user) {
		if (user.age >= AnimalShelter.maxUserAge) {
			// find specified animal
			let animal = this.findAnimal(animalName);

			// remove animal from shelter log
			this.removeAnimal(animalName);

			// return the adopted animal
			return animal;

		} else {
			throw new Error(`Sorry, must be at least ${AnimalShelter.maxUserAge} years old to adopt`)
		}
	}

	removeAnimal(animalName) {
		// find animal
		let animal = this.findAnimal(animalName);

		// create new array without selected animal
		let animals = this._animals.filter(animal => animal.name !== animalName);

		// reassign animals to reflect change
		this._animals = animals;

		return animal;
	}

	receiveAnimal(pet) {
		this.verifyAnimal(pet);
		// add pet to shelters pet array
		this._animals.push(pet);
	}

	findAnimal(animalName) {
		// iterate through animals to find animal with matching name
		for (const animal of this._animals) {
			if (animal.name === animalName) {
				return animal;
			}
		}
		return null;
	}

}


module.exports = AnimalShelter