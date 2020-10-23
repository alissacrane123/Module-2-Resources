# INTRO TO OBJECT ORIENTED PROGRAMMING

What is an object?
- a unique entity which contains properties and methods
- properties: stored values that pertain to object
	- "adjectives that describe the object"
	- also called fields / attributes
- methods: funcs that describe what object can do
	- "verbs"
	- accessor: presents object data (properties)
	- mutator: modifies object data



Object Oriented Programming Overview
- approach for breaking down large, complex products into simple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code



The Big Picture
- group data and related actions / behaviors together
- treat as single entity within a larger system



# A SIMPLE EXAMPLE

Overview
- designing a program where people can adopt animals
- we can break this program into smaller, manageable parts
	- each part has a specific responsibility
	- can test each part individually
	- if each part works, the program should work as a whole


How can we break this app into separate parts?
1. `Dog` object: keeps track of their own information (name, age, breed)
2. `User` object: keeps track of their own information (name, age, pets, etc)
3. `Shelter` object: keeps track of aggregate info and interactions


What methods and properties should each object have?
1. `Dog`
	 - properties: `name`, `age`, `breed`
	 - methods: `speak`
2. `User`
	 - properties: `name`, `age`, `pets`
	 - methods: `adoptPet`
3. `Shelter`
	 - properties: `adoptedAnimals`, `currentAnimals`
	 - methods: `createAdoption`, `receiveAnimal`



We will come back to this example soon...



# CONSTRUCTOR FUNCTIONS

Review: creating objects using literal notation
- all we've done up until this point
- attributes of "Dog" object representeed by obj literal's keys

```js

// OBJECT LITERALS

let dog = {
  name: 'Bodhi',
  speak: () => {
    console.log('bark bark');
  },
};


console.log(dog.name) // 'Bodhi'
dog.speak(); // 'bark bark bark'

```


The issue with creating objects using literal notation
- not an efficient way to create many objects of the same type


Enter: Constructor Functions
- constructor funcs in JS handle the creation of an object
- "factory" or "blueprint" for creating many objects of a specific type


```js

// CONSTRUCTOR FUNCTIONS

// #1 / #2 (notes below)
function Dog(name) {
	// #3
	this.name = name;
	this.speak = function() {
		console.log('bark bark bark')
	}
}

// #4
let bodhi = new Dog('Bodhi');
console.log(bodhi) // Dog { name: 'Bodhi', speak: [Function] }
console.log(bodhi.name);
bodhi.speak();


let lucy = new Dog('Lucy');
console.log(lucy.name);
lucy.speak();

```


Constructor Function Syntax (notes ref example above)
1. name of constructor function is always capitalized
	- conventional: lets us know this is a constructor function
2. properties of object passed as argument to function
3. `this` references newly created object inside constructor func
	- assign properties of object to `this`, i.e `this.name = name`
4. create instance of object by invoking function with `new` keyword





# BACK TO OUR EXAMPLE


Lets use our newfound knowledge of constructor funcs to create our app!


1. `Dog`
	 - properties: `name`, `age`, `breed`
	 - methods: `speak`

```js

function Dog(name, age, breed) {
  this.name = name;
  this.age = age;
  this.breed = breed;
  this.speak = function () {
    console.log("bark bark bark");
  };

}


let bodhi = new Dog('bodhi', 5, 'german shepherd')
bodhi.speak(); // bark bark bark 
console.log(bodhi); 

```




2. `User`
	 - properties: `name`, `age`, `pets`
	 - methods: `adoptPet`


```js

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
alissa.adoptPet(bodhi); // alissa adopted a new pet, bodhi

```




3. `Shelter`
	 - properties: `adoptedAnimals`, `currentAnimals`
	 - methods: `createAdoption`, `receiveAnimal`


```js

function Shelter(adoptedAnimals=[], currentAnimals=[]) {
	this.adoptedAnimals = adoptedAnimals;
	this.currentAnimals = currentAnimals;

	this.receiveAnimal = function(animal) {
		// add new animal object to shelters currentAnimals array
		this.currentAnimals.push(animal);
		console.log(`the shelter received a new animal, ${animal.name}`)
	}

	// accepts animal NAME as argument, not the animal object
	// accepts user OBJECT as an argument
	// - we have access to all props/methods defined on that object
	this.createAdoption = function(animalName, user) {
		// find the specified animal
		let animal = this.findAnimal(animalName);
		// remove that animal from the currentAnimals array
		this.removeAnimal(animalName);
		// pass the selected animal to the users adoptPet method which adds
		// the animal to the users pets array
		user.adoptPet(animal);
		// add the newly adopted animal to the shelters adoptedAnimals array
		this.adoptedAnimals.push(animal);
		console.log(`the shelter says goodbye to ${animalName}`)
	}

	// helper method to find specified animal
	// accepts animal NAME as argument, not the animal itself
	this.findAnimal = function(animalName) {
		// iterate through currentAnimals array
		for (let i = 0; i < this.currentAnimals.length; i++) {
			let animal = this.currentAnimals[i];
			// if the current animals name matches the animalName
			// we've passed in as an argument, return that animal object
			if (animal.name === animalName) {
				return animal;
			}
		}
	}

	// helper function to remove adopted animal from currentAnimals array
	// accepts animal NAME as argument, not the animal itself
	this.removeAnimal = function(animalName) {
		// filter currentAnimals array for only the animals that dont have
		// the adopted animals name 
		this.currentAnimals = this.currentAnimals.filter(animal => {
			if (animal.name !== animalName) {
				return animal;
			}
		})
	}
}


// PUTTING IT ALL TOGETHER

let pancake = new Dog('pancake', 10, 'poodle');
let bob = new User('bob', 18);
let shelter = new Shelter();


shelter.receiveAnimal(pancake); // the shelter received a new animal, pancake
shelter.createAdoption('pancake', bob); // bob adopted a new pet, pancake
																				// the shelter says goodbye to pancake

```



# DEFINING SHAREABLE METHODS (THE PROPER WAY)


Defining Shareable Methods - THE BAD WAY
- can define `speak` method directly in constructor function (like we did below)
- inefficient in terms of memory usage
- each instance would have its own method definition
- 100 instances = 100 of the same method definitions



```js

function Dog(name) {
	this.name = name;
	this.speak = function() {
		console.log('bark bark bark')
	}
}

```


Defining Shareable Methods - THE PROPER WAY
- use the `prototype`
	- property of a class constructor
- reference to object that contians common attributes/properties across all instances
- specifies the object from which object inherits from 
- "blueprint" for instances of class


```js
function Dog(name) {
  this.name = name;
}

// add shared method Dog#speak to prototype
Dog.prototype.speak = function() {
	console.log('bark bark bark');
}

let bodhi = new Dog('Bodhi');
bodhi.speak() // bark bark bark
```


How it works
- if property doesn't exist on instance of Dog:
	- failed lookup delegated to Dog.prototype
- if property is found on Dog.prototype:
  - "this" is bound to object the prop was called on (bodhi)
