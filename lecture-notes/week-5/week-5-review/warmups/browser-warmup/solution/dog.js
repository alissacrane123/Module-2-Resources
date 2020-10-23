class Dog {
	constructor(name, age, imgSrc) {
		this.name = name;
		this.age = age;
		this.imgSrc = imgSrc;

		// method invoked as soon as instance of Dog class
		// is instantiated
		this.addToDOM();
	}

	addToDOM() {
		// grab the ul with the id of "dog-list"
		let list = document.getElementById('dog-list');
		// create a new li element
		let li = document.createElement('li');
		// create a new image element
		let img = document.createElement('img');
		// set the image source equal to the newly created dog 
		// instance's imgSrc property
		img.src = this.imgSrc;
		// append the image to the li
		li.appendChild(img);
		// create a new label element
		let label = document.createElement('label');
		// set the text equal to the newly created dog's name property
		label.innerText = this.name;
		// append the label to the list item
		li.appendChild(label)
		// append the list item to the dog list
		list.appendChild(li);
	}
}

export default Dog;

