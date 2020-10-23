

class Shelter {
	constructor(currentAnimals = []) {
		this.currentAnimals =  currentAnimals;
		this.adoptedAnimals = [];

		this.setAnimalItems();
	}

	receiveAnimal(animal) {
		this.currentAnimals.push(animal);
		this.addAnimalItem(animal);
	}

	addAnimalItem(animal) {
		let list = document.getElementById("shelter-animal-list");
		let li = document.createElement("li");
		let label = document.createElement('label');
		label.innerText = animal.name;
		li.appendChild(label);
		let button = document.createElement('button');
		button.innerText = 'Adopt Pet';
		button.className = 'adopt';
		button.id = `adopt-${animal.name}`;
		li.appendChild(button)
		li.className = "animal-item";
		li.id = `${animal.name}-item`
		list.appendChild(li);
	}


  setAnimalItems() {
		let list = document.getElementById('shelter-animal-list');
		list.innerHTML = '';
		this.currentAnimals.forEach(animal => {
			this.addAnimalItem(animal);
		})
	}

	removeAnimal(animalName) {
		let adoptedAnimal;
		this.currentAnimals = this.currentAnimals.filter(animal => {
			if (animal.name !== animalName) {
				return animal;
			} else {
				adoptedAnimal = animal;
			}
		});
		this.adoptedAnimals.push(adoptedAnimal);
		this.setAnimalItems();
		return adoptedAnimal
	}
}

export default Shelter;