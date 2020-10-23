// // OBJECT LITERAL NOTATION

// let dog = {
//   name: 'Bodhi',
//   speak: () => {
//     console.log('bark bark');
//   },
// };


// console.log(dog.name) // 'Bodhi'
// dog.speak(); // 'bark bark bark'





// // CONSTRUCTOR FUNCTION

// function Dog(name) {
// 	this.name = name;
// 	this.speak = function() {
// 		console.log('bark bark bark')
// 	}
// }

// let bodhi = new Dog('Bodhi');
// console.log(bodhi.name); // 'Bodhi'
// bodhi.speak(); // 'bark bark bark'


// let lucy = new Dog('Lucy');
// console.log(lucy.name); // 'Lucy'
// lucy.speak(); // 'bark bark bark'








// BACK TO OUR EXAMPLE


// 1. CREATE `Dog` EXAMPLE
// 	 - properties: `name`, `age`, `breed`
// 	 - methods: `speak`

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;

  this.speak = function () {
    console.log("bark bark bark");
  };
}

let bodhi = new Dog('bodhi', 5, 'german shepherd')

// console.log(bodhi);

// bodhi.speak(); // bark bark bark 

// console.log(bodhi); 






// 2. CREATE `User` CONSTRUCTOR
// 	 - properties: `name`, `age`, `pets`
// 	 - methods: `adoptPet`


function User(name, age, pets=[]) {
	this.name = name;
	this.age = age;
	this.pets = pets;

	this.adoptPet = function(pet) {
		this.pets.push(pet);
		console.log(`${this.name} adopted a new pet, ${pet.name}`)
	}
}

let alissa = new User('alissa', 25);

// alissa.adoptPet(bodhi); // alissa adopted a new pet, bodhi







// 3. CREATE `Shelter` CONSTRUCTOR
// 	 - properties: `adoptedDogs`, `currentDogs`
// 	 - methods: `createAdoption`, `receiveDog`


function Shelter(adoptedAnimals=[], currentAnimals=[]) {
  this.adoptedAnimals = adoptedAnimals;
  this.currentAnimals = currentAnimals;

	// adds new animal to currentAnimals array
	// accepts animal object as an argument
  this.receiveAnimal = function (animal) {
    // add new animal object to shelters currentAnimals array
    this.currentAnimals.push(animal);
    console.log(`the shelter received a new animal, ${animal.name}`);
  };

  // accepts animal NAME as argument, not the animal object
  // accepts user OBJECT as an argument
  // - we have access to all props/methods defined on that object
  this.createAdoption = function (animalName, user) {
    // find the specified animal
    let animal = this.findAnimal(animalName);
    // remove that animal from the currentAnimals array
    this.removeAnimal(animalName);
    // pass the selected animal to the users adoptPet method which adds
    // the animal to the users pets array
    user.adoptPet(animal);
    // add the newly adopted animal to the shelters adoptedAnimals array
    this.adoptedAnimals.push(animal);
    console.log(`the shelter says goodbye to ${animalName}`);
  };

  // helper method to find specified animal
  // accepts animal NAME as argument, not the animal itself
  this.findAnimal = function (animalName) {
    // iterate through currentAnimals array
    for (let i = 0; i < this.currentAnimals.length; i++) {
      let animal = this.currentAnimals[i];
      // if the current animals name matches the animalName
      // we've passed in as an argument, return that animal object
      if (animal.name === animalName) {
        return animal;
      }
    }
  };

  // helper function to remove adopted animal from currentAnimals array
  // accepts animal NAME as argument, not the animal itself
  this.removeAnimal = function (animalName) {
    // filter currentAnimals array for only the animals that dont have
    // the adopted animals name
    this.currentAnimals = this.currentAnimals.filter((animal) => {
      if (animal.name !== animalName) {
        return animal;
      }
    });
  };
}


// PUTTING IT ALL TOGETHER

let pancake = new Dog('pancake', 10, 'poodle' );
let bob = new User('bob', 18);
let shelter = new Shelter();

// console.log(bob);
// console.log(shelter);			

shelter.receiveAnimal(pancake); // the shelter received a new animal, pancake
shelter.createAdoption('pancake', bob); // bob adopted a new pet, pancake
																				// the shelter says goodbye to pancake


// console.log(bob);
// console.log(shelter);																				