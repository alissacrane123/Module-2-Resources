class Dog {
	constructor(name, age, tricks=[]) {
		this.name = name;
		this.age = age;
		this.tricks = tricks;
	}

	haveBirthday() {
		this.age++;
		return this.age;
	}

	learnTrick(trick) {
		this.tricks.push(trick);
		return this.numTricks();
	}

	numTricks() {
		return this.tricks.length;
	}

}


module.exports = Dog;