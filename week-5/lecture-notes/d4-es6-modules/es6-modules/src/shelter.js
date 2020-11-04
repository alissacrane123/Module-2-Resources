
class Shelter {
	constructor(animals = []) {
		this.animals = animals;
	}

	receiveAnimal(animal) {
		this.animals.push(animal);
	}
}


export default Shelter;