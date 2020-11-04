
function sayHello(name) {
console.log(this);  //  => the global object (or window)
console.log("hello " + name);
}

sayHello("tony");



// NARWHAL EXAMPLE 

const narwhal = {
	name: "Wally",
	age: 20,
	whatIsThis: function () {
			console.log(this);
	},
	sayAge: function () {
			console.log("Hello, I am " + this.age + " years old.");
	}
};

narwhal.whatIsThis();  // { name: 'Wally', age: 20, etc. }
narwhal.sayAge(); // "Hello, I am 20 years old."


const narwhal = {
	name: "Wally",
	age: 20,
	sayAge: function () {
			console.log("Hello, I am " + this.age + " years old.");
	}
};

const sayAgeFunc = narwhal.sayAge;
sayAgeFunc(); // "Hello, I am undefined years old."
//the context is not properly set, so we get undefined for the age property.



const narwhal = {
    name: "Wally",
    age: 20,
    sayAge: function () {
        console.log("Hello, I am " + this.age + " years old.");
		}
};

narwhal.sayAge()
const boundSayAgeFunc = narwhal.sayAge.bind(narwhal);
boundSayAgeFunc(); // "Hello, I am 20 years old."


const narwahl = {
	name: "Wally", 
	age: 20,
};

function sayAge () {
	console.log("Hello, I am " + this.age + " years old.");
}


const dog = {
	age: 4
};


const narwhalBoundFunc = sayAge.bind(narwhal);
narwhalBoundFunc();  // "Hello, I am 20 years old."
const dogBoundFunc = sayAge.bind(dog);
dogBoundFunc(); // "Hello, I am 4 years old."


