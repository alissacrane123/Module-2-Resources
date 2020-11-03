# OVERVIEW


What is OOP
- approach for breaking down large, complex products into siimple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code


The Big Picture
- group data and related actions / behaviors together
- treat as single entity within a larger system



The PROBLEM
- designing a program where people can adopt animals
- we can break this program into smaller, manageable parts
	- each part has a specific responsibility
	- can test each part individually
	- if each part works, the program should work as a whole


* WHAT ARE STEPS WE CAN TAKE TO DESIGN OUR APPLICATION


STEP 1: Identify Potential classes
- `Class User`
	- responsible for keeping track of user props/behavior
- `Class Dog`	
	- responsible for keeping track of dog props/behavior
- `Class Cat`	
	- responsible for keeping track of cat props/behavior
- `Class Animal`
	- dogs and cats have many similar props/behavior
	- can group those shared behaviors into a parent class
- `Class Adoption`
	- responsible for keeping track of user/animal interactions
- `Class AnimalShelter`
	- responsible for keeping track of aggregate dog/cat info
	- responsible for keeping track of adoptions



STEP 2: Specify Propreties and Methods for each class
- `Class User`
	- props: name, currentPets, age
	- methods: adoptAnimal
- `Class Dog`
	- props: isHousetrained, learnedTricks, animalFriendly
	- methods: bark, learnNewTrick
- `Class Cat`
	- methods: meow
- `Class Animal`
	- props: name, age, breed
	- methods: speak
- `Class Adoption`
	- props: user, animal
	- methods: validateAdoption
- `Class AnimalShelter`
	- props: currentAnimals, maxCapacity, adoptions
	- methods: acceptNewAnimal, createAdoption



STEP 3 - Define Relationships
- `Class Dog` extends `Class Animal`
- `Class Cat` extends `Class Animal`
- currentPets property of `Class User` contains instances of `Cat` & `Dog`
- currentAnimals property of `Class AnimalShelter` contains instances of `Cat` & `Dog`
- adoptions property of `Class AnimalShelter` contains instances of `Adoption`
- user property of `Class Adoption` contains an instance of `User`
- animal property of `Class Adoption` contains instance of `Cat` or `Dog`



* NOTE: FOR REST OF DEMO WE WILL FOCUS ON DOG, CAT, AND ANIMAL CLASSES




# CONSTRUCTOR FUNCTIONS (lecture-demos/constructor_funcs.js)

creating objects using literal notation
- all we've done up until this point
- attributes of "Cat" object representeed by obj literal's keys



```js

// OBJECT LITERAL NOTATION

let dog = {
	name: 'Bodhi',
	bark: function() {
		console.log('bark bark bark')
	},
	speak: function() {
		console.log(`hi my name is ${this.name}`)
	}
}

dog.bark(); // bark bark 
dog.speak(); // hi my name is Bodhi

```



creating objects using constructor function
- "factory" for creating objects of a specific type
- calling a constructor function returns new object
- attributes initialized to provided argument values
- can access attribute using dot notation



```js

// CONSTRUCTOR FUNCTIONS


function Dog(name) {
	this.name = name;
	this.bark = function() {
		console.log('bark bark bark')
	}
	this.sayHello = function() {
		console.log(`hi my name is ${this.name}`)
	}
}

let bodhi = new Dog('bodhi');
let lucy = new Dog('lucy');

console.log(bodhi);
console.log(lucy);

bodhi.bark();
lucy.sayHello();


```



Notice anything weird about this function?
1. name is capitalized to help distinguish func as a constructor
2. function doesn't explicitely return a value
3. "this" references newly created object inside constructor func
   - more on this in a minute
4. function invoked with `new` keyword




Prototypes
- every function we define comes with a property called `prototype`
- allows us to define shareable methods across all instances


In order to give instances of function access to prototype
- invoke function with new keyword


What happens when function invoked with NEW
1. an new empty object is created using `Object.create`
   - i.e `Object.create(Dog.prototype)`
   - delegates failed lookups to constructor funcs prototype
2. newly created object is named `this`
3. newly created object is returned




```js

// PROTOTYPE PROPERTY

// when Dog function is declared:
// - default property named `prototype` is created
// - `Dog.prototype` is an object we can define shareable methods on
// - basically a blueprint for future Dog instances

function Dog(name) {
	this.name = name;
}

console.log(Dog.prototype); // Dog {}

Dog.prototype.bark = function() {
	console.log('bark bark bark')
}

Dog.prototype.sayHello = function() {
	console.log(`hi my name is ${this.name}`)
}
// newly created object inherits all properties from Dog.prototype
let bodhi = new Dog("bodhi", 5);
console.log(bodhi); //Dog { name: 'bodhi' }

// Dog.prototype will contain all methods defined on it
console.log(Dog.prototype); // Dog { bark: [Function], sayHello: [Function] }




```


DONT define methods within constructor func
 - inefficient in terms of computer memory usage
 - each instance would have its own method definition
 - 100 instances = 100 of the same method definitions



DO use Prototype
- property of a class constructor
- reference to object that contians common attributes/properties across all instances
- specifies the object from which object inherits from 
- "blueprint" for instances of class


How Prototype work
- if property doesn't exist on object:
	- failed lookup delegated to Dog.prototype
- if property is found on Dog.prototype:
 - "this" is bound to object the prop was called on (bodhi)




invoking a constructor without the `new` keyword
- no object is created
- in strict mode: `this` will be undefined -> error
- in non-strict mode: `this` will be global object



```js

// INVOKING CONSTRUCTOR WITHOUT NEW KEYWORD

let doggy = Dog('dog', 8);

```




# VIDEO 1 - CLASS DECLARATIONS (lecture-demos/classes.js)


Class Overview
- ES2015 class defines attributes and behaviors of object type
- used to create instances of that type just like constructor function
- "blueprint" for new data type


Class Constructors
- similar to constructor functions
- dont explicitly return a value
- assigns attributes to newly created instance
- `this` refers to newly created instance



Defining a class
1. the name of the class (capitalized)
2. constructor
	 - initializes an object
	 - communicates data required to initialize object
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


# VIDEO 2 - INHERITANCE (lecture-demos/inheritance.js)



* TODO : CREATE ANIMAL PARENT CLASS FOR DOGS AND CATS
	- dogs and cats both have a name and age property
	- dogs and cats both have a speak method


![classes](./images/class_def.jpg)





Inheritance
- base a class (child class) upon another class (parent class)
- child class will have access to properties and methods defined within parent
- use `extends` keyword to extend Child class from Parent class



Using super
- calls parent classes constructor function with specified arguments
- calling `super(name, age)` assigns `this.name` and `this.age` prop to dog instance


```js

// INHERITANCE

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
  }
}


class Dog extends Animal {
	constructor(name, age) {
		super(name, age);
		this.tricks = []
	}

	bark() {
		console.log("bark bark bark");
	}
}

let bodhi = new Dog('bodhi', 5);
bodhi.speak();



```


Leaving off constructor
- if there arent any additional attributes, can leave off constructor func
- automatically runs parents constructor function


```js

// LEAVING OFF CONSTRUCTOR FUNCTION

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`hi my name is ${this.name}`);
	}
}


class Dog extends Animal {

	bark() {
		console.log("bark bark bark");
	}
}

let bodhi = new Dog('bodhi', 5);
bodhi.speak();

```


Overwriting and adding onto inherited methods 
- without `super` => overwrites
- calling `super.method(args)` is essentially copying code from parent method into the specified location


```js
// TODO : OVERWRITE SPEAK METHOD TO ALSO PRINT "bark bark bark"

class Dog extends Animal {
  constructor(name, age) {
		super(name, age);
    this.tricks = [];
  }

  speak() {
		console.log("bark bark bark");
		super.speak() // console.log(`hi my name is ${this.name}`);
  }
}


let bodhi = new Dog('bodhi', 5);
bodhi.speak();
```

THIS
- always references the instance object (obj created with new keyword)






# VIDEO 3 - COMMMON JS MODULES (./lecture-demo/module-demo)


Overview
- up until now we've put all our code in single JS file
- as code base gets larger we'll want to break our code up into multiple files
- each file containing a logical unit of code that defines a module.



Modules
- a module is just a javascript file
- local module: defined within your project
- core modules: native modules contained within Node.js
	- don't have to npm install
	- ex: `path`, `readline`, `fs`
- third party modules: imported using npm 




Module systems
- recent node versions contain two different systems
	1. CommonJS (legacy system)
	2. ES Modules (newer system)
- conceptually similar
- syntax/implementation details differ





The Module Object
- each module in node has access to a `module` object
- represents current module
- contains number of properties with info about current module



* TODO: SHOW CONSOLE.LOG(MODULE) IN ANIMAL.JS


The `module.exports` Property
- object used to export items from the module


* TODO: SHOW CONSOLE.LOG(MODULE.EXPORTS) IN ANIMAL.JS


To Export a Single Item:
- set `module.exports` equal to that item
- OR
- define properety for that item on the `module.exports` obj


