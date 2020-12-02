
class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`hi my name is ${this.name}`);
	}
}


class Cat extends Animal {

	speak() {
		console.log(`${this.name} meows`);
	}
}



class Dog extends Animal {
	constructor(name, age) {
		super(name, age)
		this.tricks = [];
	}

	speak() {
		console.log(`${this.name} barks`);
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






// OBJECT DESTRUCTURING EXAMPLE 

let object = { name: 'alissa', age: 25, salary: 25 };

// console.log(object.name);
// console.log(object.age);

let { name, age } = object;

// let name = object.name;
// let age = object.age;

console.log(name); // alissa
console.log(age); // 25



// let newObj = { name: name, age: age}
let newObj = { name, age };
console.log(newObj); // { name: 'alissa', age: 25 }














// console.log(Object.keys(object)) // [ 'name', 'age', 'salary' ]
// console.log(Object.values(object)) // [ 'alissa', 25, 25 ]