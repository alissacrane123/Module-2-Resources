const Application = require('./application')

class Shelter {
	constructor() {
    //setting the name and age instance variables to the name and age provided
    //when shelter is instatiated
		this.animals = [];
		this.adoptions = [];
	}

	introduceAnimals() {
    //call the speak method on each animal in the this.animals collection
		this.animals.forEach(animal => {
			console.log(animal.speak()) //`my name is ${this.name}`;
		})
	}

	receiveAnimal(animal) {
    //add the incoming animal to the instance variable and console log its name
		this.animals.push(animal);
		console.log(`the shelter received a new animal, ${animal.name}`);
	}

	processAdoption(animal, user) {
    //filter out the incoming animal from this.animals
		this.animals = this.animals.filter(a => {
			return a !== animal
    });
    //add the incoming animal to the user's list of pets
		user.adoptPet(animal);
	}

	receiveApplication(animalName, user) {
    // find the animal with name: animalName
    let animal = this.findAnimal(animalName)
    //instantiate a new Application
    let app = new Application(animal, user);
    //if this app is valid (user is of age), add this app to the list of
    //adoptions(this.adoptions) and run processAdoption() with the animal
    //(found by name) and the user. otherwise provide helpful message
		if (app.isValid()) {
			this.adoptions.push(app);
			this.processAdoption(animal, user);
		} else {
			console.log(`sorry ${user.name}, you're not old enough to adopt`)
		}
	}

	findAnimal(animalName) {
    //iterate through the list of animals and return the animal with name: animalName
		for (let i = 0; i < this.animals.length; i++) {
			let animal = this.animals[i];
			if (animal.name == animalName) return animal;
    }
	}
}


module.exports = Shelter;