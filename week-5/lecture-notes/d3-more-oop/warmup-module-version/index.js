// Dog, Cat, Shelter, User
const { Dog, Cat } = require('./animal.js');
const Shelter = require('./shelter.js')
const { User } = require('./user')

// const result = require('./animal');
// const Dog = result.Dog;
// const Cat = result.Cat;

let bodhi = new Dog("bodhi", 5);
let pancake = new Cat("pancake", 9);
let shelter = new Shelter();
let alissa = new User("alissa", 25);
let bob = new User("bob", 10);



shelter.receiveAnimal(bodhi); // the shelter received a new Dog, bodhi
shelter.receiveAnimal(pancake); // the shelter received a new Cat, pancake
shelter.introduceAnimals();
// woof woof my name is bodhi
// meow meow my name is pancake
shelter.receiveApplication("bodhi", alissa); // alissa adopted a new pet, bodhi
shelter.receiveApplication("pancake", bob); 