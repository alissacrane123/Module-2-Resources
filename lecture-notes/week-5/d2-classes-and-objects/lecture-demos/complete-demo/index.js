const Dog = require('./dog');
const Cat = require('./cat');
const AnimalShelter = require('../complete-demo/shelter');
const User = require('../complete-demo/user');


let animals = [
	new Dog("bodhi", 5),
	new Dog("lucy", 10),
	new Dog("rue", 3),
	new Cat("pancake", 11),
	new Cat("whiskers", 8)
]

let shelter = new AnimalShelter(animals);
let user = new User('alissa', 25);


// shelter.listAnimals();

user.adoptPet('bodhi', shelter);

user.adoptPet('rue', shelter);

user.listPets();

// shelter.listAnimals();

user.giveUpPet('bodhi', shelter)

// shelter.listAnimals();
