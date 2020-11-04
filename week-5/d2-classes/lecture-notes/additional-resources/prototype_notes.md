
# PROTOTYPES


Preview

```js
// every function we define comes with a property called `prototype`
// allows us to define shareaable methods across all instances

function Dog(name) {

}

console.log(Dog); // [Function: Dog]
console.log(Dog.prototype); // Dog {}
console.log(Dog.__proto__) // [Function]
console.log(Dog.__proto__ === Function.prototype) // true

console.log(Dog.prototype.__proto__) // {}
console.log(Dog.prototype.__proto__ === Object.prototype) // true

```







The NEW keyword
- when we invoke a function with `new` keyword:
	1. an object is created that delegates failed lookups to its constructor function's prototype
	2. this object is named `this`
	3. newly created object is returned


```js

// when invoked with "new" keyword, 2 things happen under the hood

function Dog(name) {
	// 1: const this = Object.create(Dog.prototype);

	console.log(this) // Dog {}

	this.name = name;

	console.log(this) // Dog { name: 'bodhi' }

	// 2: return this;
}

// add shared methods to prototype
Dog.prototype.speak = function() {
	console.log(`hi my name is ${this.name}`)
}

// newly created object inherits all properties from `Dog.prototype`
let dog = new Dog('bodhi')
dog.speak()

```




What is prototype?
- property that every function in JS has
- allows us to share metehods aacross all isntances of a function





```js

// OBJECT LITERAL INSTANTIATION

// Object.create(parent)
// - creates object which will delegate to another object on failed lookups

const Dog = {
	name: null,
	speak: function() {
		console.log(this);
		console.log(`hi my name is ${this.name}`)
	}
}

const dog = Object.create(Dog);
dog.name = 'bodhi'
dog.speak()



// FUNCTIONAL INSTANTIATION WITH OBJECT CREATE

const DogMethods = {
	speak: function() {
		console.log(this);
		console.log(`hi my name is ${this.name}`)
	}
}

function Dog(name) {
	let Dog = Object.create(DogMethods);
	Dog.name = name;

	return Dog;
}
const dog = Dog('bodhi');
dog.speak()






// FUNCTIONAL INSTANTIATION WITH PROTOTYPEE


function Dog(name) {
	let Dog = Object.create(Dog.prototype);
	Dog.name = name;

	return Dog;
}

Dog.prototype.speak = function() {
	console.log(this);
	console.log(`hi my name is ${this.name}`)
}

const dog = Dog('bodhi');
dog.speak()


// to create an object with shareable methods
// 1. create constructor func
// 2. add methods to constructor funcs prototype
// 3. use Object.create to delegate failed lookups to funcs prototype
// 4. return newly created object






// FUNCTIONAL INSTANTIATION WITH NEW KEYWORD

// - handles #3 and #4 for us under the hood
// - object that is created is called "this" 


function Dog(name) {
	this.name = name;
}

Dog.prototype.speak = function() {
	console.log(this);
	console.log(`hi my name is ${this.name}`)
}

const dog = new Dog('bodhi');
dog.speak()

```



