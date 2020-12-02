
# VIDEO 1 - INTRO TO OBJECT ORIENTED PROGRAMMING

What is OOP
- approach for breaking down large, complex products into siimple solutions
- smaller parts can be implemented and tested separately
- results in higher confidence in overall solution
- makes it easier to pinpoint issues with code


The Big Picture
- group data and related actions / behaviors together
- treat as single entity within a larger system


Encapsulation
- the practice of bundling related properties and behaviors into
  one class
- each class has a purpose and is responsible for keeping track of 
  properties related to that purpose and providing the methods 
  necessary to manage those properties



Inheritance
- mechanism that passes traits of a parent class to its descendants
- prevents duplication of code



Polymorphism
- provides a way to perform a single action in different forms by
  calling the same method on different objects


Abstraction
- implemented to hide unnecessary data and withdraw relevant data




# VIDEO 2 - INHERITANCE (lecture-demos/inheritance.js)


Inheritance
- base a class (child class) upon another class (parent class)
- child class will have access to properties and methods defined within parent
- use `extends` keyword to extend Child class from Parent class
- typically applied to classes




* TODO : CREATE ANIMAL PARENT CLASS FOR DOGS AND CATS
	- dogs and cats both have a name and age property
	- dogs and cats both have a speak method









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


