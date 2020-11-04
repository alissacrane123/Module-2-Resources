# INTRO TO OOP THINKING


OOP overview
- approach for breaking down large, complex products into simple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code



The Big Picture
- group data and related actions / behaviors together
- treat as single entity within a larger system



Terminology
- `object`: item containing data and behaviors
	- example: vehicle
- `properties`: pieces of relevant data (kind of like "adjectives")
	- example: vehicle model, status of engine (on or off), vehicle color
	- also called fields or attributes
- `methods`: relevant actions (kind of like "verbs")
	- accessor: presents data (properties)
	- mutator: modifies data
	- example: start engine



Classes and Constructors
- `class`: definition of an object with properties and methods
	- "blueprint" for object
	- framework for properties and methods (data and actions)
	- similar to how function definition is framework for function
	- doesnt do anything until it is instantiated (called)
- `instance` : specific object made from a class
	- object created from the "blueprint" defined in class definition
	- may have certain methods/properties set right away
	- example: if vehicle class has "color" property, instance of vehicle may have "red" assigned to this property
- `constructor`: special method that handles initial setup of instance
	- assigns relevant properties
	- assigns value "red" to "color" property


DRY (don't repeat yourself)
- classes allow us to keep our code dry
- may have many instances of our vehicle class in our program
- no need to write the same methods over and over again
* there should only ever be ONE copy of any important piece of code
	- if you have more than one copy, may be indication to refactor



OOP Design
- balance of resuse, sharing, duplication
- more on this to come




Pillars of OOP
1. Encapsulation
	 - the division of responsibility
	 - object is most useful when it hides complex functionality from other parts of code
	 - easier to test and build complex systems when each part of system has its own purpose
	 - example: 
	 	 - an ear doesnt need to know how an eye works
		 - break up roles into separate objects:
		 - ear: listens for sounds
		 - eye: looks for visual signals
		 - face: place eye and ear where they are useful
		 - brain: make sense of sensory signals
	 - objects interact with each other through properties/methods w/o needing to know how those actions are handled
2. Abstraction
	 - consideration of how objects are similar 
	 - hide implementation details within classes
	 - example: pens and pencils are similar, may be able to group certain properties into parent class
3. Inheritance
	 - classes can pass along properties & methods to other classes
	 - sometimes objects may have many similar properties
	 - indicate that a parent class could be beneficial
	 - example: cats and dogs
	 	 - cats and dogs share many properties
		 - both have a name, breed, color, owner, etc
		 - both may be able to perform certain tricks
		 - have different properties (dogs bark, cats meow)
		 - makes sense to create an Animal parent class that Dog and Cat can inherit from
4. Polymorphism
	 - one method can have different implementations because the result is equivalent
	 - accomplishing same result in another fashion
	 - example: pens and pencil classes may have "erase" method
	   - for pens, that would require the use of white out
		 - for pencisl, that would require the usee of an erasor
		 - the result is the same



# MORE OOP EXPLAINED


Object Oriented Programming
- computer programming model 
- organizes software design around data (or objects) rather than functions


What is an Object?
- data field that has unique attributes and behaviors
- self contained pieces of code


Classes vs Objects
- `object class`: definition of an object
	- similar to how function definition defines a function
	- blueprint for how function behaves
	- doesnt do anything until that function is invoked
- `object instannce`: the use of that object



Principles of OOP
1. encapsulation
2. inheritance
3. polymorphism
4. abstraction


Encapsulation
- "enclose something in a capsule"
- the bundling of data and the methods that act on that data so that 
	access is restricted from outside the bundle
- an object stores its state privately and only the object's methods
  have access to change it 
	- you dont change the encapsulated state directly
	- you call a method on the object which may update its state
	- code that uses thee methods doesnt have to worry about details



Inheritance
- data and methods defined on parent class are available on objects created
  from classes that inherit from those parent classes
- prevents duplication of code  
- typically applied to classes




Polymorphism 
- ability to create a property, function, or object that has more than one realization
- ability to substitute classes that have common functionality in sense of methods and data
- "if you can drive a car, you can drive any car"

```js

// polymorphism example 


const rectangle = {
	width: 4,
	height: 6,
	area() {
		return this.width * this.height;
	}
}

const triangle = {
	base: 4,
	height: 2,
	area() {
		return this.base * this.height / 2;
	}
}


const square = {
  side: 1,
  area() {
    return this.side**2;
  }
}


// each object has an area method
// we can use this method regardless of object type

function cumulateShapes(shapes) {

	let totalArea = 0;
	shapes.forEach(shape => {
		totalArea += shape.area();
	})
	return totalArea;
}

```



Abstraction
- display only essential information
- hide the details





# BASICS OF OOP DESIGN 


The problem
- design a system to track students and teachers accessing an online school
- consider how users will get through virtual door ("login")


Step 1 - Identify Potential classes
- think about how we can `encapsulate` our program
	- how can we break down our problem into smaller pieces
- authentication: how can we check they have the correct username/password
- communication: how can we recover lost password
- attendance: how can we keep track of students
- teacher schedule: how can we keep track of teachers


Step 2 - Specify Properties and methods for each class
- `Class Account`: what properties/methods do accounts need?
	- possible properties: username, password
	- possible methods: login, logout, resetPassword
- `Class Person`: what properties/methods do people need?
	- possible properties: email, mailingAddress, phoneNumber
	- possible methods: forgotPassword, changeEmail
- `Class Student`: what properties/methods do students need?
	- possible properties: schedule, attendanceRecord
	- possible methods: enroll, attend, dropout
- `Class Teacher`: what properties/methods to teachers need?
	- possible properties: schedule
	- possible methods: teach



Step 3 - Define relationships
- decidee how classes relate to eachother
- inheritance: can one class extend another by sharing/adding onto features?
	- `Student` and `Teacher` can likely inherit from `Person` class
- composition: can one class store another class as a property?
	- each `Person` will likely have an `Account` with the school
- MANY different possibilities when it comes to OOP design







# CONSTRUCTOR FUNCTIONS

creating objects using literal notation
- all we've done up until this point
- attributes of "Cat" object representeed by obj literal's keys

```js

// object literal notation

let dog = {
	name: 'Bodhi',
	bark: () => {
		console.log('bark bark')
	}
}

```

creating objects using constructor functions
- "factory" for creating objects of a specific type
- calling a constructor function returns new object
- props initialized to provided argument values


```js
function Dog (name, age) {
	this.name = name;
	this.age = age;
}

let dog = new Dog('bodhi', 5)

```


Notice anything weird about this function?
1. name is capitalized to help distinguish function as a constructor
2. function doesn't explicitely return a value
3. "this" references newly created object inside constructor func



invoking a constructor function with "new"
 1. new empty obj is created ({})
 2. new obj prototype is set to obj referenced by constructor funcs prototype prop
 3. constructor func is called and "this" is bound to new object
 4. new object is returned



invoking a constructor without the `new` keyword
- in strict mode: `this` will be undefined -> error
- in non-strict mode: `this` will be global object


```js
function Dog (name, age) {
	if (!(this instanceof Dog)) {
		throw new Error ('Dog must be called with new keyword')
	}
	this.name = name;
	this.age = age;
}

```







# Defining Shareable Methods

DONT define methods within constructor function
 - inefficient in terms of computer memory usage
 - each instance would have its own method definition
 - 100 instances = 100 of the same method definitions
 - should be defined inside the class after the constructor

```js

// defining shareable methods - the bad way 

function Dog (name, age) {
	this.name = name;
	this.age = age;
	this.speak = function() {
		console.log(`bark bark my name is ${this.name}`)
	}
}

let dog = new Dog('bodhi', 5);
dog.speak() // bark bark my name is bodhi

```


Prototype
- property of a class constructor
- reference to object that contains common attributes/properties across all instances
- specifies the object from which object inherits from 


DO use prototypes and delegation
- a prototype is an object that is delegated to when a reference to an object property or method can't be resolved
- in JS you can make an object the prototype of another object
- when an object is a prototype of another object, it's properties and methods are made available to the other object.
- if property or method isnt available on an obj, JS will look up prototypal chain


```js

// defining shareable methods - the proper way 

function Dog (name, age) {
	this.name = name;
	this.age = age;
}

Dog.prototype.speak = function() {
	console.log(`bark bark my name is ${this.name}`)
}

let bodhi = new Dog('bodhi', 5);
bodhi.speak() // bark bark my name is bodhi

```


every constructor function has a `prototype` property
- represents object that'll be used as prototype for instances created by invoking the constructor function with the `new` keyword
- can confirm by comparing prototype for an instance to constructor functions prototype property



summary
- every instance created from constructor function has its prototype set to the object referenced by the constructor function's prototype property
- any method we define on constructor functions prototype will be shared across all instances of that object type


when speak() is called:
1. `bodhi` object is checked to see if method is defined on that object
2. when method isn't found, method call is delegated to instance's prototype
3. instance's prototype is set to `Dog` constructor funcs `prototype` property
4. this time, speak() method is found and called
- note: can use `this` to access properties on the instance we're calling method on (this refers to the instance of dog, fluffy)


problems with arrow functions
- don't have their own "this" binding
- they use "this" binding from lexical scope


instanceof operator uses prototypes to determine if obj is an instance of a specific constructor function
- checks if prototype of object on left side of operator is set to prototype property of constructor function on the right side


# JAVASCRIPT CLASSES

javascript classes
- constructor functions and prototypes mimic class behavior
- support for classes added to language in ES2015

ES2015 classes
- defines attributes and behavior for object type
- used to create instances of that type, just like constructor functions
- begin with capital letter


```js

class Dog {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`bark bark my name is ${this.name}`)
	}
}

let bodhi = new Dog('bodhi', 5)
bodhi.speak() // bark bark my name is bodhi
```

constructor method not required, similar to constructor function
1. don't explicitly return a value, implicitly returns new obj instance
2. `this` keyword refrences newly created object instance

when instantiating an instance of class:
1. new empty obj is created
2. new obj prototype is set to class's `prototype` property 
3. `constuctor` method is called and `this` is bound to object
4. new obj is returned 

HOISTING
- in JS, you can call a function before it's declared


# INHERITANCE

javascript inheritance
- classes don't havee to be defined and used in isolation from one another
- possible to base a class - a child class - upon another class - a parent class
- child class can inherit properties and methods defined within parent class

benefits of inheritance
- gives you a way to share code across classes
- prevents code duplication and keeps code DRY

```js

class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name, age)
	}

	speak() {
		console.log(`bark bark my name is ${this.name}`)
	}
}

class Cat extends Animal {
	speak() {
		console.log(`meow meow my name is ${this.name}`)
	}
}

let bodhi = new Dog('bodhi', 5)
bodhi.speak() // bark bark my name is bodhi

let pancake = new Cat('pancake', 5);
pancake.speak() // meow meow my name is pancake

```


understanding how `this` works
- `this` always references the instance object created using  `new`, regardless of where it is used
- allows constructor() method to initialize properties eon the instance  object

OVERRIDING METHODS IN PARENT CLASS
- simply define method in child class with same name

