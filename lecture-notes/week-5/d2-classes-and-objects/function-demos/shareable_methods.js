


// DEFINING SHAREABLE METHODS - THE BAD WAY


function Dog(name, age) {
  this.name = name;
  this.age = age;

  this.speak = function () {
    console.log(`hi my name is ${this.name}`);
	};

	this.bark = function() {
		console.log('bark bark bark')
	}
}

let bodhi = new Dog("bodhi", 5);

console.log(bodhi);

bodhi.weight = 100;

console.log(bodhi0)








// DEFINING SHAREABLE METHODS - THE RIGHT WAY

// function Dog(name, age) {
//   this.name = name;
//   this.age = age;
// }










