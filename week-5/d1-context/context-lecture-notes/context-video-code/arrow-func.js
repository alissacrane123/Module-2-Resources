
// Arrow Functions!

// Write a function sayHello that can intake a name and say "hello name!"
function sayHello(name) {
    return "hello " + name;
}

// const sayHello = (name) => {
//   return "hello " + name;
// }


// const sayHello = name => "hello " + name 

// sayHello();


// myFilter accepts an array and a callback and will only return elements where
// the result of calling the callback is true
function myFilter(array, cb) {
	let filtered = [];
	array.forEach(function (ele, i) {
			if (cb(ele)) {
					filtered.push(ele);
			}
	});
	return filtered;
}


// const myFilter = (array, cb) => {
// 	let filtered = [];
// 	array.forEach((ele) => {
// 		if (cb(ele)) {
// 				filtered.push(ele);
// 		}
// 	});
// 	return filtered;
// };





// Scoping with Arrow Functions

const pony = {
	name: "Lucy",
	arrowSayName: () => {
		// console.log(this);
		console.log("Hello my name is " + this.name);
	},
	wrappedArrowSayName: function () {
		// console.log(this);
		return () => {
			// console.log(this);
			console.log("Hello my name is " + this.name);
		};
	}
};

// unable to bind with arrow functions
const howOld = () => this.age;

howOld(); // undefined

let tryToBind = howOld.bind({ age: "Party Wolf" });

tryToBind(); // undefined
