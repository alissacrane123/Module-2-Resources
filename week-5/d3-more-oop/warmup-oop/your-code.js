
// 1. CREATE CAT CLASS
// - props: name, age
// - methods:
//   - speak():
//     - should return a string "meow meow my name is <cat-name>"




// 2. CREATE DOG CLASS
// - props: name, age
// - methods:
//   - speak():
//     - should return a string "woof woof my name is <dog-name>"




// * HINT: notice any way we can optimize the code above?


// 3. CREATE USER CLASS	
// - props: name, age, pets (initialized to empty array)
// - methods:
//   - getAge(): 
//     - should return user's age
//   - adoptPet(pet): 
//     * accepts an animal object (cat or dog) as an argument
//     - should add pet to user's pets array and console.log "<user-name> 
//       adopted a new pet, <pet-name>"





// 4. CREATE APPLICATION CLASS
// - props: applicant (user object), animal (cat or dog object)
// - methods:
//   - isValid(): 
//     - should return true if applicant is at least 18, false otherwise






// 5. CREATE SHELTER CLASS
// - props: animals, adoptions (both initialized to empty arrays)
// - methods:
//   - introduceAnimals(): 
//     - should console.log the return value of calling the speak() method
//       on each animal in the shelter's animals array
//   - receiveAnimal(animal): 
//     * receives animal object as an argument
//     - should add animal to animals array
//     - should console.log "shelter received a new animal, <animal-name>"
//   - processAdoption(animal, user):
//     * receives animal object and user object as arguments
//     - remove animal from animals array and add animal to user's pet array
//   - receiveApplication(animalName, user): 
//     * accepts animal name (string) and user object as arguments
//     - should find the animal with specified name
//     - should create a new instance of Application class
//     - should check if application is valid, if valid should add application 
//       to adoptions array and invoke the processAdoption method, 
//       if not valid should console.log "sorry <user-name>, you are not old 
//       enough to adopt"








// TESTING

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