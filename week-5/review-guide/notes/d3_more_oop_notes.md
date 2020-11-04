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
	- any values stored in instance variabless of the object
	- any values stored in global variabless
- guideline: dont use more than one dot (not counting one after "this")
	* "the one dot rule"







# LECTURE EXAMPLE


## THE BAD VERSION:

```JS

// THE BAD VERSION
class User {
	constructor(name, age, address, imageUrl) {
		this.name = name;
		this.age = age;
		this.profile = new Profile(address, imageUrl)
	}

	updateAddress(address) {
		// this violates the law of demeter
		// 1. we've chained two dots (excluding the dot after `this`)
		// 2. the User class must be aware of the inner workings
		//    of the Address class in order to update an address
		this.profile.address.update(address)
		// let newAddress = this.profile.address;
		// newAddress.update(address)
	}
}


class Profile {
	constructor(address, imageUrl) {
		this.address = new Address(address);
		this.imageUrl = imageUrl;
	}
}


class Address {
	constructor(address) {
		this.street = address.street;
		this.zipcode = address.zipcode
	}

	update(newAddress) {
		this.street = newAddress.street;
		this.zipcode = newAddress.zipcode;
		return this
	}
}

```


## THE GOOD VERSION

```js

// THE GOOD VERSION

class User {
  constructor(name, age, address, imageUrl) {
    this.name = name;
    this.age = age;
    this.profile = new Profile(address, imageUrl);
  }

  updateAddress(newAddress) {
		// this fixes the issue 
		// - only chaining one dot (excluding the dot after `this`)
		// - the User class doesnt care about how the Address class
		//   updates the address, it only cares that the address gets 
		//   updated 
    this.profile.updateAddress(newAddress);
  }
}

class Profile {
  constructor(address, imageUrl) {
    this.address = new Address(address);
    this.imageUrl = imageUrl;
  }

  updateAddress(newAddress) {
    this.address.update(newAddress);
	}
}

class Address {
  constructor(address) {
		this.street = address.street;
		this.city = adddress.city;
    this.zipcode = address.zipcode;
  }

  update(newAddress) {
		this.street = newAddress.street;
		this.city = adddress.city;
    this.zipcode = newAddress.zipcode;
    return this;
  }
}


```







# HOMEWORK EXAMPLE


- airplane class is coupled to throttle class

THE BAD EXAMPLE:

```js

// THE BAD EXAMPLE

class Airplane {
  constructor() {
    this.engine = new PropEngine();
  }

  takeOff() {
		// bad - using two dots (not counting the dot after this)
		this.engine.getThrottle().open();
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


GOOD EXAMPLE:

```js

// GOOD EXAMPLE:

class Airplane {
  constructor() {
    this.engine = new PropEngine();
  }

  takeOff() {
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