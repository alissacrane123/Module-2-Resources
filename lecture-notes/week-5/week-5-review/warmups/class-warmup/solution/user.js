class User {
	constructor(name, age) {
    //setting the name and age instance variables to the name and age provided,
    //and pets instance variable to an empty array when user is instatiated
		this.name = name;
		this.age = age;
		this.pets = [];
	}

	adoptPet(pet) {
    //add incoming pet to this.pests collection, and display helpful message
		this.pets.push(pet);
		console.log(`${this.name} adopted a new pet, ${pet.name}`)
	}

	getAge() {
    //return the age of the user
		return this.age;
	}
}

module.exports = User;