class User {
	constructor(name, age, pets=[]) {
		this.name = name;
		this.age = age;
		this.pets = pets;
	}

	adoptPet(pet) {
		this.pets.push(pet);
		this.addPetItem(pet);
	}

	setPetItems() {
		let list = document.getElementById("user-animal-list");
    list.innerHTML = "";
    this.pets.forEach((pet) => {
      this.addPetItem(pet);
    });
	}

	addPetItem(pet) {
		let list = document.getElementById("user-animal-list");
		let li = document.createElement("li");
		let label = document.createElement("label");
    label.innerText = pet.name;
    li.appendChild(label);
    let button = document.createElement("button");
    button.innerText = "Give Up Pet";
    button.className = "give-up";
    button.id = `give-up-${pet.name}`;
    li.appendChild(button);
		li.className = "animal-item";
		li.id = pet.name;
		list.appendChild(li);
	}

	giveUpPet(petName) {
		let animal;
		this.pets = this.pets.filter((pet) => {
			if (pet.name !== petName) {
				return pet;
			} else {
				animal = pet;
			}
		});
		this.setPetItems();
		return animal;
	}
}

export default User;