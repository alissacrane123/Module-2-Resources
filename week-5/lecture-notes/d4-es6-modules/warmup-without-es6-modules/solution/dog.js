class Dog {
	constructor(name, age, imgSrc) {
		this.name = name;
		this.age = age;
		this.imgSrc = imgSrc;

		this.addToDOM();
	}

	addToDOM() {
		let list = document.getElementById('dog-list');
		let li = document.createElement('li');
		let img = document.createElement('img');
		img.src = this.imgSrc;
		li.appendChild(img);
		let label = document.createElement('label');
		label.innerText = this.name;
		li.appendChild(label)
		list.appendChild(li);
	}
}



