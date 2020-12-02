// INHERITANCE


// * TODO = CREATE PARENT CLASS FOR DOGS AND CATS CALLED ANIMAL
// - Dog:
//   - properties: name, age, tricks=[]
//   - methods: speak, bark, learnTrick(trick)
// - Cat:
//   - properties: name, age
//   - methods: speak, meow 



// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`)
// 	}
// }


// class Dog extends Animal {
// 	constructor(name, age) {
// 		super(name, age);
// 		// this.name = name;
// 		// this.age = age;
// 		this.tricks = [];
// 	}

// 	bark() {
// 		console.log('bark bark bark');
// 	}

// 	learnTrick(trick) {
// 		this.tricks.push(trick)
// 	}
// }

// class Cat extends Animal {
// 	constructor(name, age) {
// 		super(name, age);
// 	}

// 	meow() {
// 		console.log('meow meow meow')
// 	}
// }

// let pancake = new Cat('pancake', 6);
// console.log(pancake);


// let bodhi = new Dog('bodhi', 5);
// console.log(bodhi); // Dog { name: 'bodhi', age: 5, tricks: [] }

// bodhi.speak(); // hi my name is bodhi

// bodhi.learnTrick('sit');

// console.log(bodhi)





























// LEAVING OFF CONSTRUCTOR FUNCTION
// - can leave off constructor if child class has exact same 
//   properties as parent class


// class Animal {
// 	constructor(name, age) {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	speak() {
// 		console.log(`hi my name is ${this.name}`);
// 	}
// }


// class Dog extends Animal {

// 	bark() {
// 		console.log("bark bark bark");
// 	}
// }

// let bodhi = new Dog('bodhi', 5);
// bodhi.speak();
// console.log(bodhi); // Dog { name: 'bodhi', age: 5 }
















// CAN OVERWRITE AND ADD ONTO INHERITED METHODS

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak(word) {
    console.log(`hi my name is ${this.name}, ${word}`);
  }
}


// TODO: OVERWRITE CAT SPEAK METHOD TO JUST PRINT 'MEOW MEOW MEOW'

class Cat extends Animal {
	speak() {
		console.log('meow meow meow')
	}
}

const pancake = new Cat('pancake', 5);
pancake.speak(); //meow meow meow




// TODO : ADJUST DOG SPEAK METHOD TO ALSO PRINT "bark bark bark"

class Dog extends Animal {
	speak(word) {
		super.speak(word);
		console.log('bark bark bark');
	}
}

let bodhi = new Dog('bodhi', 5);
bodhi.speak('hello');