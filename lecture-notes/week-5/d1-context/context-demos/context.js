// Function.prototype.myBind = function(ctx, ...bargs) {
// 	let that = this;
// 	return function(...cargs) {
// 		that.call(ctx, ...bargs.concat(cargs))
// 	}
// }

// let cat = {
// 	name: 'pancake',
// 	speak: function(arg, other) {
// 		console.log(`${this.name} says hi and ${arg} and ${other}`)
// 	}
// }

// let dog = {
// 	name: 'bodhi'
// }


// let dogSpeak = cat.speak.myBind(dog, 'bob')
// dogSpeak('sam')


// const sum = function (a, b) {
//   return a + b;
// };

// // here we are creating a new function named add3
// // this function will bind the value 3 for the first argument
// const add3 = sum.bind(null, 3);

// // now when we invoke our new add3 function it will add 3 to
// // one incoming argument
// console.log(add3(10)); // 13



let animal = {
	name: 'bob',

	printName: function() {
		return () => {
			console.log(this.name)
		}
	},

	printNoName: function() {
		return function() {
			console.log(this.name)
		}
	}
}

let noName = animal.printNoName();
let arrowName = animal.printName();

// noName();
// arrowName();


// let cat = {
//   purr: function () {
//     console.log("meow");
//   },
//   purrMore:  () => {
// 		console.log(this);
//     this.purr();
//   },
// };

// let func = cat.purrMore;
// func();


// let dog = {
// 	name: 'bodhi',
// 	changeNameFunc: function() {
// 		return () => {
// 			this.name = 'pancake';
// 		}
// 	} 
// }

// let change = dog.changeNameFunc();
// console.log(change()); 
// console.log(dog)
// // console.log(this)


// let dog = {
// 	name: 'bodhi',
// 	changeNameFunc: function() {
// 		return () => {
// 			this.name = 'pancake';
// 			console.log(this);
// 		}
// 	},
// 	noChangeNameFunc: function() {
// 		return function() {
// 			this.name = 'pancake';
// 			console.log(this);
// 		}
// 	} 
// }

// let changeName = dog.changeNameFunc();
// let noChangeName = dog.noChangeNameFunc();

// changeName(); // { name: 'pancake', 
// // changeNameFunc: [Function: changeNameFunc], 
// // noChangeNameFunc: [Function: noChangeNameFunc] 
// // }


// noChangeName(); // // Object [global] {etc, etc, etc,  name: 'pancake'}



// let cat = {
//   purr: function () {
//     console.log("meow");
//   },
//   purrMore: function () {
//     return () => this.purr();
//   },
// };

// // global.setTimeout(cat.purrMore(), 5000); // 5 seconds later: TypeError: this.purr is not a function



// const fido = {
// 	name: 'fido'
// }

// const noReturnName = () => console.log(this.name);
// noReturnName() // undefined

// let tryToBind = noReturnName.bind(fido);
// tryToBind(); // undefined


// const returnName = function() {
// 	console.log(this.name);
// }

// let bound = returnName.bind(fido);
// bound() // fido




// const narwhal = {
// 	name: "Wally",
// 	age: 20,
// 	whatIsThis: function () {
// 		console.log(this);
// 	},
// 	sayAge: function () {
// 		console.log(`my name is ${this.name} and i am ${this.age}`);
// 	}
// };

// // let sayAgeFunc = narwhal.sayAge;

// // sayAgeFunc() 

// // let boundSayAgeFunc = narwhal.sayAge.bind(narwhal);
// // boundSayAgeFunc();



const narwhal = {
	name: 'wally',
	age: 20
}

const dog = {
	name: 'bodhi',
	age: 5
}

function sayAge() {
	console.log(`my name is ${this.name} and i am ${this.age}`);
}

// let narwhalBoundFunc = sayAge.bind(narwhal);
// let dogBoundFunc = sayAge.bind(dog);

// narwhalBoundFunc(); // my name is wally and i am 20
// dogBoundFunc(); // my name is bodhi and i am 5


// const pony = {
//   name: "Lucy",
//   sayName: function () {
//     console.log("Hello my name is " + this.name);
//   }
// };

// let sayNameFunc = pony.sayName;
// sayNameFunc(); // 


// let boundSayNameFunc = pony.sayName.bind(pony);
// boundSayNameFunc();

// const lizard = {
//   name: "Lionel"
// };

// let lizardSayName = pony.sayName.bind(lizard);
// lizardSayName();


// let cat = {
//   purr: function () {
//     console.log("meow");
//   },
//   purrMore: function () {
//     this.purr();
//   }
// };

// global.setTimeout(() => cat.purrMore(), 1000); // 1 seconds later: meow


const pony = {
	name: "Lucy",
	wrappedSayName: function () {
		return function () {
			console.log(this); // GLOBAL
			console.log("Hello my name is " + this.name);
		}
	},
	wrappedArrowSayName: function () {
		console.log(this); // { name: 'lucy', ... }
		return () => {
			console.log(this); // { name: 'lucy', ... }
			console.log("Hello my name is " + this.name);
		};
	}
};

let wrapped = pony.wrappedSayName();
let arrowWrapped = pony.wrappedArrowSayName();

wrapped();
arrowWrapped()