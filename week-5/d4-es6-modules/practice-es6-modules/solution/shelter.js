// must import the Dog class because we create a new instance
// of this class in our receiveDog method
import Dog from './dog.js';


class Shelter {
	constructor(dogs=[]) {
		this.dogs = dogs;
		// this.receiveDog = this.receiveDog.bind(this)
		// invoke this method as soon as shelter instance is created
		this.registerListeners();
	}

	registerListeners() {
		// grab the form with the id of "dog-form"
		let form = document.getElementById('dog-form');
		// invoke the receiveDog method when the form is submitted
		form.addEventListener('submit', event => this.receiveDog(event));
		// form.addEventListener('submit', this.receiveDog.bind(this));

	}

	receiveDog(event) {
		// must prevent the default behavior of a form submission which is to
		// refresh the page. 
		event.preventDefault();

		// grab the input elements from the dog form
		let name = document.getElementById('name');
		let age = document.getElementById('age');
		let imgSrc = document.getElementById('img-src');
		// create a new instance of the Dog class passing in the values
		// of the inputs above (the user input)
		let newDog = new Dog(name.value, age.value, imgSrc.value);

		// add the dog to the shelter's dogs array
		this.dogs.push(newDog);

		// clear the inputs by setting their values to an empty string
		name.value = '';
		age.value = '';
		imgSrc.value = '';

	}
}

export default Shelter;

