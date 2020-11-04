class Shelter {
	constructor(dogs=[]) {
		this.dogs = dogs;

		this.registerListeners();
	}

	registerListeners() {
		let form = document.getElementById('dog-form');
		form.addEventListener('submit', event => this.receiveDog(event))
	}

	receiveDog(event) {
		event.preventDefault();

		let name = document.getElementById('name');
		let age = document.getElementById('age');
		let imgSrc = document.getElementById('img-src');
		let newDog = new Dog(name.value, age.value, imgSrc.value);
		this.dogs.push(newDog);

		name.value = '';
		age.value = '';
		imgSrc.value = '';

	}
}



