
class AnimalShelter {
	constructor(animals = []) {
		this.animals = animals;
		this.adoptions = [];
	}

	listAnimals() {
		console.log('this shelter has the following animals: ')

		this.animals.forEach(animal => {
			let animalType = animal.constructor.name;
			console.log(`${animal.age} year old ${animalType} named ${animal.name}`)
			animal.speak();
		})
	}


	createAdoption(animalName, user) {
		if (user.age >= 18) {
			// find specified animal
			let animal = this.findAnimal(animalName);

			// remove animal from shelter log
			this.removeAnimal(animalName);

			// return the adopted animal
			return animal;

		} else {
			throw new Error('Sorry, must be at least 18 years old to adopt')
		}
	}

	removeAnimal(animalName) {
		// find animal
		let animal = this.findAnimal(animalName);

		// create new array without selected animal
		let animals = this.animals.filter(animal => animal.name !== animalName);

		// reassign animals to reflect change
		this.animals = animals;

		return animal;
	}

	receiveAnimal(pet) {
		// add pet to shelters pet array
		this.animals.push(pet);
	}

	findAnimal(animalName) {
		// iterate through animals to find animal with matching name
		for (const animal of this.animals) {
			if (animal.name === animalName) {
				return animal;
			}
		}
		return null;
	}

}


module.exports = AnimalShelter