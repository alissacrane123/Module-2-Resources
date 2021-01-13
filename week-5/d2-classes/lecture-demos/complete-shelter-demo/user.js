class User {
	constructor(name, age, currentPets = []) {
		this.name = name;
		this.age = age;
		this.pets = currentPets;
	}

	listPets() {
		console.log(`${this.name} has the following pets: `);

		this.pets.forEach(pet => {
			let petType = pet.constructor.name;
			console.log(`\ta ${petType} named ${pet.name}`)
		})
	}

	adoptPet(animalName, shelter) {
		let pet = shelter.createAdoption(animalName, this);

		// push new pet object into pets array
		this.pets.push(pet);

		console.log(`${this.name} adopts a new pet, ${pet.name}`)
	}


	giveUpPet(petName, shelter) {
		// find pet that you user is giving up
		let petToRemove = this.findPet(petName);

		// filter that pet out of pets array
		// (select all pets with name not equal to petName)
		let newPetsArray = this.pets.filter(pet => pet.name !== petName);

		// reassign pets attribute to new array
		this.pets = newPetsArray;

		// give pet to shelter
		shelter.receiveAnimal(petToRemove);

		console.log(`${this.name} says goodbye to ${petName}`)
	}

	findPet(petName) {
		// iterate through pets array to find pet with petName
		for (const pet of this.pets) {
			if (pet.name === petName) {
				return pet;
			}
		}
		return null;
	}
}



module.exports = User;