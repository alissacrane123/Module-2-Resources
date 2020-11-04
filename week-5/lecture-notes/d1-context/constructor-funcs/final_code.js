function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;

  this.speak = function () {
    console.log("bark bark bark");
  };

}



function User(name, age, pets = []) {
  this.name = name;
  this.age = age;
  this.pets = pets;

  this.adoptPet = function (pet) {
    this.pets.push(pet);
    console.log(`${this.name} adopted a new pet, ${pet.name}`);
  };
}


function Shelter(adoptedAnimals = [], currentAnimals = []) {
  this.adoptedAnimals = adoptedAnimals;
  this.currentAnimals = currentAnimals;

  // adds new animal to currentAnimals array
  // accepts animal object as an argument
  this.receiveAnimal = function (animal) {
    this.currentAnimals.push(animal);
    console.log(`the shelter received a new animal, ${animal.name}`);
  };

  // accepts animal NAME as argument, not the animal object
  // accepts user OBJECT as an argument
  // - we have access to all props/methods defined on that object
  this.createAdoption = function (animalName, user) {
    let animal = this.findAnimal(animalName);
    this.removeAnimal(animalName);
    user.adoptPet(animal);
    this.adoptedAnimals.push(animal);
    console.log(`the shelter says goodbye to ${animalName}`);
  };

  // helper method to find specified animal
  // accepts animal NAME as argument, not the animal itself
  this.findAnimal = function (animalName) {
    for (let i = 0; i < this.currentAnimals.length; i++) {
      let animal = this.currentAnimals[i];
      if (animal.name === animalName) {
        return animal;
      }
    }
  };

  // helper function to remove adopted animal from currentAnimals array
  // accepts animal NAME as argument, not the animal itself
  this.removeAnimal = function (animalName) {
    this.currentAnimals = this.currentAnimals.filter((animal) => {
      if (animal.name !== animalName) {
        return animal;
      }
    });
  };
}


let pancake = new Dog("pancake", 10, "poodle");
let bob = new User("bob", 18);
let shelter = new Shelter();

console.log(bob);
console.log(shelter);

shelter.receiveAnimal(pancake); // the shelter received a new animal, pancake
shelter.createAdoption('pancake', bob); // bob adopted a new pet, pancake
																				// the shelter says goodbye to pancake


console.log(bob);
console.log(shelter);