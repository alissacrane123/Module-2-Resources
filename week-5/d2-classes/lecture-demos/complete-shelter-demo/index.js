const Dog = require('./dog');
const Cat = require('./cat');
const AnimalShelter = require('./shelter');
const User = require('./user');
const Animal = require('./animal');

//* an array of instances
let animals = [
	new Dog("Bodhi", 5),
	new Dog("Lucy", 10),
	new Dog("Rue", 3),
	new Cat("Pancake", 11),
	new Cat("Whiskers", 8)
];

//* Create a shelter with the animal instances 
let shelter = new AnimalShelter();

shelter.animals = animals;

console.log(shelter);

// //* Maybe we have a simple list of dog POJOs?
const dogs = [
	{ name: 'Fido', age: 11 },
	{ name: 'Fluffy', age: 5 },
	{ name: 'BB-8', age: 4 }
];

//* We can use this static method to turn them into instances
const dogInstances = Dog.createDogs(dogs);

// //* And now we can recieve them into the shelter.
for (let dog of dogInstances) {
	shelter.receiveAnimal(dog);
}

// This calls the getter
console.log(shelter.animals);

//* This static method on Animal makes an array of any kind of animal speak
Animal.everyoneSpeak(dogInstances);

//* This static method is only on Dogs, but lets them all perform tricks
dogInstances[0].learnNewTrick('Sit');
dogInstances[1].learnNewTrick('Stay');
dogInstances[2].learnNewTrick('Catch');
Dog.everyonePerformsTricks(dogInstances);

//* This static method can give you the oldest animal, regardless of if it's
//* a cat or a dog.
const george = new Dog('George', 11);
const gracie = new Cat('Gracie', 4);
const oldest = Animal.oldestAnimal(george, gracie);
console.log("Oldest is", oldest.name);

//* What happens if we pass a non-animal to receiveAnimal?
//shelter.receiveAnimal({name: "Pojo", age: 12});

//* Create a user so they can adopt animals
let user = new User('Alissa', 25);

//* What happens if we pass a user into receiveAnimal?
//shelter.receiveAnimal(user);

//* List out the animals
shelter.listAnimals();

user.listPets();
//* Adopt pets by name
user.adoptPet('Bodhi', shelter);
shelter.listAnimals();
user.listPets();

user.adoptPet('Rue', shelter);

//* List out the user's pets
user.listPets();

//* List out the shelter's pets, we can see bodhi and rue are gone
shelter.listAnimals();

//* Give up Bodhi as he didn't get along with rue
user.giveUpPet('Bodhi', shelter)

//* Now you can see Bodhi is back at the shelter.
shelter.listAnimals();
