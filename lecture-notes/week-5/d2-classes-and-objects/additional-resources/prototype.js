
// // constructor function

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }


// Dog.prototype.bark = function () {
// 	console.log("bark bark bark")
// }


// Dog.prototype.speak = function () {
// 	console.log(`hi my name is ${this.name}`);
// }


// let bodhi = new Dog("bodhi", 5);

// console.log('Dog: ')
// console.log(Dog)

// console.log('Dog.prototype: ')
// console.log(Dog.prototype)

// console.log('bodhi: ')
// console.log(bodhi);

// console.log('bodhi.__proto__: ')
// console.log(bodhi.__proto__)


// console.log(Dog.prototype === bodhi.__proto__);
// console.log(Dog.prototype.constructor === Dog);
// console.log(bodhi instanceof Dog)

// console.log(Function.prototype === Dog.__proto__ );
// console.log(Function.prototype.constructor === Function)
// console.log(Dog instanceof Function)



// // console.log(Object.prototype);
// // console.log(Function.prototype);
// // console.log(Object.__proto__);
// // console.log(Function.__proto__);








// const animal = {
// 	name: null,
// 	speak: function() {
// 		console.log(this);
// 		console.log(`hi my name is ${this.name}`)
// 	}
// }

// const dog = Object.create(animal);
// dog.name = 'bodhi'
// dog.speak()


// const animalMethods = {
// 	speak: function () {
// 		console.log(this);
// 		console.log(`hi my name is ${this.name}`)
// 	}
// }

// function Animal(name) {
// 	let animal = Object.create(animalMethods);
// 	animal.name = name;

// 	return animal;
// }





// function Animal(name) {
// 	this.name = name;
// }

// Animal.prototype.speak = function () {
// 	console.log(this);
// 	console.log(`hi my name is ${this.name}`)
// }

// const dog = new Animal('bodhi');
// dog.speak()


// function Animal() {

// }

// console.log(Animal); // [Function: Animal]
// console.log(Animal.prototype); // Animal {}
// console.log(Animal.__proto__) // [Function]
// console.log(Animal.__proto__ === Function.prototype) // true

// console.log(Animal.prototype.__proto__)
// console.log(Animal.prototype.__proto__ === Object.prototype)





// function myFunc() {

// }

// console.log(myFunc);
// console.log(myFunc.prototype.__proto__);

// console.log(myFunc.__proto__ == Function)

// console.log(myFunc.__proto__)
// console.log(Function)
// console.log(Function.__proto__)
// console.log(new Function() instanceof Function)

// console.log(myFunc instanceof Function)


function Animal(name) {
	// 1: const this = Object.create(Animal.prototype);

	console.log(this) // Animal {}

	this.name = name;

	console.log(this) // Animal { name: 'bodhi' }

	// 2: return this;
}

// newly created object inherits all properties from `Animal.prototype`
let dog = new Animal('bodhi')
console.log(dog) // Animal { name: 'bodhi' }
console.log(dog.name) // 'bodhi'