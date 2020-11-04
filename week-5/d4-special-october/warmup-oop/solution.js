class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		return `my name is ${this.name}`
	}
}

class Dog extends Animal {
	speak() {
		let superString = super.speak();
		return `woof woof ${superString}`
	}
}

class Cat extends Animal {
	speak() {
		let superString = super.speak();
		return `meow meow ${superString}`;
	}
}

class User {
	constructor(name, age) {
		this.name = name;
		this.age = age;
		this.pets = [];
	}

	adoptPet(pet) {
		this.pets.push(pet);
		console.log(`${this.name} adopted a new pet, ${pet.name}`)
	}

	getAge() {
		return this.age;
	}
}

class Application {
	constructor(animal, applicant) {
		this.animal = animal;
		this.applicant = applicant;
	}

	isValid() {
		if (this.applicant.getAge() >= 18) {
			return true
		}
		return false;
	}
}

class Shelter {
	constructor() {
		this.animals = [];
		this.adoptions = [];
	}

	introduceAnimals() {
		this.animals.forEach(animal => {
			console.log(animal.speak())
		})
	}

	receiveAnimal(animal) {
		this.animals.push(animal);
		console.log(`the shelter received a new animal, ${animal.name}`);
	}

	processAdoption(animal, user) {
		this.animals = this.animals.filter(a => {
			if (a !== animal) return a;
		});
		user.adoptPet(animal);
	}

	receiveApplication(animalName, user) {
		let animal = this.findAnimal(animalName)
		let app = new Application(animal, user);
		if (app.isValid()) {
			this.adoptions.push(app);
			this.processAdoption(animal, user);
		} else {
			console.log(`sorry ${user.name}, you're not old enough to adopt`)
		}
	}

	findAnimal(animalName) {
		for (let i = 0; i < this.animals.length; i++) {
			let animal = this.animals[i];
			if (animal.name == animalName) return animal;
		}
	}
}

let bodhi = new Dog('bodhi', 5);
let pancake = new Cat('pancake', 9);
let shelter = new Shelter();
let alissa = new User('alissa', 100);
let bob = new User('bob', 10);

shelter.receiveAnimal(bodhi); // the shelter received a new animal, bodhi
shelter.receiveAnimal(pancake); // the shelter received a new animal, pancake


shelter.introduceAnimals();
// woof woof my name is bodhi
// meow meow my name is pancake
shelter.receiveApplication('bodhi', alissa); // alissa adopted a new pet, bodhi
shelter.receiveApplication('pancake', bob); // sorry bob, you are not old enough to adopt

