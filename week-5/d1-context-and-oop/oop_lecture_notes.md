# OVERVIEW


What is an object?
- a unique entity which contains properties and methods
- properties: stored values that pertain to object
	- "adjectives that describe the object"
	- also called fields / attributes
- methods: funcs that describe what object can do
	- "verbs"
	- accessor: presents object data (properties)
	- mutator: modifies object data



What is OOP
- approach for breaking down large, complex products into simple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code
- we'll talk about the principles later in the week 



The Big Picture
- group data and related actions / behaviors together
- treat as single entity within a larger system



# A SIMPLE EXAMPLE



The PROBLEM
- designing a program where people can adopt animals
- we can break this program into smaller, manageable parts
	- each part has a specific responsibility
	- can test each part individually
	- if each part works, the program should work as a whole



How can we break this app into separate parts?


STEP 1: Identify Potential classes
1. `Dog` object: keeps track of their own information (name, age, breed)
2. `User` object: keeps track of their own information (name, age, pets, etc)
3. `Shelter` object: keeps track of aggregate info and interactions
4. `Adoption` object: keeps track of user/shelter/dog interactions


STEP 2: Specify Propreties and Methods for each class
1. `Dog`
	 - properties: `name`, `age`, `breed`
	 - methods: `speak`
2. `User`
	 - properties: `name`, `age`, `pets`
	 - methods: `adoptPet`
3. `Shelter`
	 - properties: `adoptions`, `currentAnimals`
	 - methods: `createAdoption`, `receiveAnimal`
4. `Adoption`
	 - properties: `user`, `animal`
	 - methods: `validateAdoption`


STEP 3 - Define Relationships
- `pets` property of `User` class contains instances of `Dog`
- `currentAnimals` property of `Shelter` class contains instances of `Dog`
- `adoptions` property of `Shelter` class contains instances of `Adoption`
- `user` property of `Class Adoption` contains an instance of `User`
- `animal` property of `Class Adoption` contains instance of `Dog`


* NOTE: FOR REST OF DEMO WE WILL FOCUS ON DOG CLASSES




# CONSTRUCTOR FUNCTIONS (oop/lecture-demos/constructor-funcs.js)


creating objects using literal notation
- all we've done up until this point
- attributes of "Cat" object representeed by obj literal's keys



```js

// OBJECT LITERAL NOTATION

let dog = {
	name: 'Bodhi',

	speak: function() {
		console.log(`hi my name is ${this.name}`);
	}
}

dog.speak(); // hi my name is Bodhi

```


The issue with creating objects using literal notation
- not an efficient way to create many objects of the same type



The Solution: Constructor Functions
- constructor funcs in JS handle the creation of an object
- "factory" or "blueprint" for creating many objects of a specific type



creating objects using constructor function
- "factory" for creating objects of a specific type
- calling a constructor function returns new object
- attributes initialized to provided argument values
- can access attribute using dot notation



```js

// CONSTRUCTOR FUNCTIONS


function Dog(name) {
	this.name = name;

	this.speak = function() {
		console.log(`hi my name is ${this.name}`)
	}
}

let bodhi = new Dog('bodhi');
let lucy = new Dog('lucy');

console.log(bodhi); // Dog { name: 'bodhi', speak: [Function] }
console.log(lucy); // Dog { name: 'lucy', speak: [Function] }

lucy.speak(); // hi my name is lucy



```



Constructor Function Syntax 
1. name of constructor function is always capitalized
	- conventional: lets us know this is a constructor function
2. function doesn't explicitely return a value
  - more on this in a moment...
3. `this` references newly created object inside constructor func
	- assign properties of object to `this`, i.e `this.name = name`
4. function invoked with `new` keyword
  - creates an instance of the object
	- more on this in a moment...
5. properties of object passed as argument to function




Defining Shareable Methods - THE BAD WAY
- can define `speak` method directly in constructor function (like we did above)
- inefficient in terms of memory usage
- each instance would have its own method definition
- 100 instances = 100 of the same method definitions
- both lucy and bodhi instances have a function called speak defined on them



Defining Shareable Methods - THE PROPER WAY
- use the `prototype` object



```js
// DEFINING SHAREABLE METHODS ON THE PROTOTYPE


function Dog(name) {
	// let this = Object.create(Dog.prototype);
	this.name = name;
	// return this
}


console.log(Dog.prototype); // Dog {}


Dog.prototype.speak = function() {
	console.log(`hi my name is ${this.name}`)
}

// Dog.prototype will contain all methods defined on it
console.log(Dog.prototype); // Dog { speak: [Function] }


// invoking with 'new' gives instance access to Dog.prototype and thus,
// all methods defined on that prototype
let bodhi = new Dog("bodhi");


// instance of Dog will only show properties defined in constructor but
// failed lookups are delegated to the Dog.prototype
console.log(bodhi); // Dog { name: 'bodhi' }
bodhi.speak(); // hi my name is bodhi


// all instances of Dog class will have access to methods defined on prototype
let lucy = new Dog('lucy');
lucy.speak(); // hi my name is lucy

```


Prototypes
- every function we define comes with a property called `prototype`
- allows us to define shareable methods across all instances of an object
  - basically a "blueprint" for instances of class
- invoking function with new keyword gives us access to `prototype` object
  - failed lookups delegated to this `prototype` object


What happens when function invoked with NEW
1. an new empty object is created using `Object.create`
   - i.e `Object.create(Dog.prototype)`
   - delegates failed lookups to constructor funcs prototype
2. newly created object is named `this`
3. newly created object is returned



How it works
- if property doesn't exist on instance of `Dog`:
	- failed lookup delegated to `Dog.prototype`
- if property is found on `Dog.prototype`:
  - `this` is bound to object the prop was called on (bodhi)


Why is this important?
- shareable methods should be defined on `prototype` object, not in the 
  constructor function, to optimize memory usage


SUMMARY
- DONT define methods within constructor func
  - inefficient in terms of computer memory usage
  - each instance would have its own method definition
  - 100 instances = 100 of the same method definitions
- DO use Prototype
  - property of a class constructor
  - reference to object that contians common attributes/properties across all instances
  - specifies the object from which object inherits from 
  - "blueprint" for instances of class



Another example
- can access any instance properties/methods using `this` keyword
- `this` is bound to instance of class created using `new` keyword

```js

// ANOTHER EXAMPLE 

function Cat(name) {
	this.name = name;
}

Cat.prototype.sayHello = function() {
	console.log(`my name is ${this.name}`);
}

Cat.prototype.changeName = function(newName) {
	this.name = newName;
	this.sayHello();
}

let myCat = new Cat('pancake');

myCat.sayHello(); // my name is pancake
myCat.changeName('bob'); // my name is bob

console.log(myCat) // Cat { name: 'bob' }



```







invoking a constructor without the `new` keyword
- no object is created
- in strict mode: `this` will be undefined -> error
- in non-strict mode: `this` will be global object



```js
// INVOKING CONSTRUCTOR WITHOUT NEW KEYWORD

"use strict";

function Dog(name) {
	// let this = Object.create(Dog.prototype);
	this.name = name;
	// return this
}


let doggy = Dog('dog', 8); // TypeError: Cannot set property 'name' of undefined


```




# VIDEO - CLASS DECLARATIONS (oop/lecture-demos/es6-classes.js)


Class Overview
- ES2015 class defines attributes and behaviors of object type
- used to create instances of that type just like constructor function
- "blueprint" for new data type


Class Constructors
- similar to constructor functions
- creates a new instance and assigns attributes to that newly created instance
  - `this` refers to newly created instance
- implicitly returns newly created object
  - NEVER explicitely return something from a constructor func 


Defining a class
1. the name of the class (capitalized)
2. constructor
   - same functionality as constructor function
	 - initializes new object and assigns relevant properties
3. instance variables
	 - properties (state) of the newly created object
4. instance methods
   - behavior of newly created object
	 - accessors: get data from obj
	 - mutators: change state of obj


```js

// USING CLASSES
class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

console.log(Dog);
let frank = new Dog('frank', 5)

```





Defining Instance Methods
- called in instance of class
- shared across all instances


```js

// DEFINE INSTANCE METHODS - USING CLASSES

class Dog {
  constructor(name, age) {
    this.name = name;
		this.age = age;
		this.tricks = [];
	}
	
  speak() {
    console.log(`hi my name is ${this.name}`);
	}
	
	learnNewTrick(trick) {
		this.tricks.push(trick);
		console.log(`New trick learned: ${trick}`)
	}

	performTricks() {
		this.tricks.forEach(trick => {
			console.log(`${this.name} performs trick: ${trick}`)
		})
	}
}


let bodhi = new Dog("bodhi", 5);
bodhi.speak();
bodhi.learnNewTrick('sit');
bodhi.performTricks();
bodhi.learnNewTrick('roll over')
bodhi.performTricks();



```

Defining Static Methods
- called on Class itself


```js

// DEFINE STATIC METHODS - USING CLASSES

class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static findOldest(...dogs) {
		let oldest = dogs[0];
		dogs.forEach((dog) => {
			if (dog.age > oldest.age) {
				oldest = dog;
			}
		});
		console.log(`${oldest.name} is the oldest dog`);
	}
}


let bodhi = new Dog("bodhi", 5);
let lucy = new Dog("lucy", 10);

Dog.findOldest(bodhi, lucy)


```



Hoisting
- functions are hoisted
- classes are not 

```js

// HOISTING 

// functions are hoisted - below will work

let penguin = new Penguin('sally');
console.log(penguin);

function Penguin(name) {
	this.name = name;
}

// classes are not hoisted - below will not work 

let penguin = new Penguin("sally");
console.log(penguin);

class Penguin {
	constructor(name) {
		this.name = name;
	}
}
```