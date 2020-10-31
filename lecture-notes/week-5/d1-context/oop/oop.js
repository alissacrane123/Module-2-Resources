class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pet = null;
  }

  adoptAnimal(animal) {
    this.pet = animal;
	}
	
	listPet()  {
		if (this.pet) {
			console.log(`${this.name} has a pet named ${this.pet}`);
		} else {
			console.log(`${this.name} doesnt have any pets :(`)
		}
	}
}

class Application {
  constructor(adopter, animal) {
    this.adopter = adopter;
    this.animal = animal;
    this.valid = false;
  }

  validate() {
    if (this.adopter.age >= 18) {
      this.valid = true;
    } else {
			console.log(`sorry, ${this.adopter.name} isnt old enough to adopt`);
		}
  }

  isValid() {
    return this.valid;
  }
}

class Shelter {
  constructor(animals = []) {
    this.animals = animals;
    this.adopters = [];
  }

  createAdoption(user, pet) {
    let application = new Application(user, pet);
		application.validate();
		
    if (application.isValid()) {
      user.adoptAnimal(pet);
			this.animals = this.animals.filter((animal) => animal !== pet);
			console.log(`${user.name} adopted ${pet}`);
    }
  }

  receiveAnimal(animal) {
    this.animals.push(animal);
  }
}

let animals = ["bodhi", "lucy"]

let shelter = new Shelter(animals);
let alissa = new User('alissa', 25);

shelter.createAdoption(alissa, 'bodhi'); // alissa adopted bodhi
alissa.listPet(); // alissa has a pet named bodhi

let bob = new User('bob', 16); 

shelter.createAdoption(bob, 'lucy'); // sorry, bob isnt old enough to adopt
bob.listPet(); // bob doesnt have any pets :(