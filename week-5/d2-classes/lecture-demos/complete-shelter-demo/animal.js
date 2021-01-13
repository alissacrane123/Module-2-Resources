class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	speak() {
		console.log(`hi my name is ${this.name}`);
	}
	
	static everyoneSpeak(animals) {
		for (const animal of animals) {
			animal.speak();
		}
	}

	static oldestAnimal(animal1, animal2) {
		if (animal1.age > animal2.age) {
			return animal1;
		} else {
			return animal2;
		}
	}
}

module.exports = Animal;