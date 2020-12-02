
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  speak() {
    console.log(`hi my name is ${this.name}`);
	}
}


class Banana {

}



// console.log(module);

// EXPORT METHOD #1
module.exports = Animal;

// console.log(module.exports)




// EXPORT METHOD #2
// module.exports.Animal = Animal;
// module.exports.Banana = Banana;

// console.log(module.exports);

// OR
// module.exports = {
// 	Animal,
// 	Banana
// }

// OR
// module.exports = {
// 	Animal: Animal,
// 	Banana: Banana
// }

// console.log(module.exports);