# OOP PILLARS

Encapsulation
- the practice of bundling related properties and behaviors into
  one class


Inheritance
- mechanism that passes properties and methods of a parent class to classes
  that inherit from those parent classes
- prevents duplication of code 


Polymorphism
- provides a way to perform a single action in different forms by
  calling the same method on different objects
- ability to substitute classes that havee common functionality in sense of methods and data


Abstraction
- implemented to hide unnecessary data and withdraw relevant data



# THE LAW OF DEMETER



Coupling
- the degree of interdependence betweeen two or more classes
- the fewer the connections, less chance for ripple effect
	- one small change causes other changes and so on
- changing one class should not require a change of another class
	- if it does, the class is too "coupled" or interdependent
- to reduce coupling, reduce num of clases a given class must know to operate



The Law Of Demeter
- a method of an object can only invoke methods or use props of the following
	- methods on object itself
	- any of objects pasaseed in as params to the method
	- an object created in the method
	- any values stored in instance vars of the object
	- any values stored in global vars
- guideline: dont use more than one dot (not counting one after "this")



# LECTURE EXAMPLE



```JS

// THE BAD SOLUTION

class User {
	constructor(name, age, address, imageUrl) {
		this.name = name;
		this.age = age;
		this.profile = new Profile(address, imageUrl)
	}

	updateAddress(address) {
		// this violates the law of demeter
		// 1. we've chained two dots (excluding the dot after `this`)
		// 2. the user class must be aware of the inner workings
		//    of the Address class
		// 3. if there was a change to the Address class
		//    (such as renaming the method `update`)
		//    we would have to update both the Profile
		//    and User classes
		this.profile.address.update(address)
	}

}

// THE GOOD SOLUTION

class User {
  constructor(name, age, address, imageUrl) {
    this.name = name;
    this.age = age;
    this.profile = new Profile(address, imageUrl);
  }

  updateAddress(newAddress) {
		// this fixes the issue 
		// - only chaining one dot (excluding the dot after `this`)
		// - a change to the Address class wouldnt require
		//   a change to the Profile or User classes
		// - the only thing that might change is the value
		//   passed as the argument
    this.profile.updateAddress(newAddress);
  }
}

```


# HOMEWORK EXAMPLE


- airplane class is coupled to throttle class

```js

class Airplane {
  constructor() {
    this.engine = new PropEngine();
  }

  takeOff() {
    // this.engine is a value stored in an instance variable
		this.engine.getThrottle().open();
		// let throttle = this.engine.getThrottle();
		// throttle.open();


    // two dots^     and     ^
  }
}

class PropEngine {
  constructor() {
    this.throttle = new Throttle();
  }

  getThrottle() {
    return this.throttle;
  }
}

class Throttle {
  open() {
    return "VROOOOM"!;
  }
}



```


GOOD EXAMPLE

```js
class Airplane {
  constructor() {
    this.engine = new PropEngine();
  }

  takeOff() {
		// this.engine.getThrottle().open();
    this.engine.openThrottle();
  }
}

class PropEngine {
  constructor() {
    this.throttle = new Throttle();
  }

  openThrottle() {
    return this.throttle.open();
  }
}

class Throttle {
  open() {
    return "VROOOOM"!;
  }

```


When to ignore the Law of Demeter
- when working with objects that come from code you didnt create
- sometimes UIs 


```js
document.getElementById('myId').addEventListener('click', () => {
	
})


```