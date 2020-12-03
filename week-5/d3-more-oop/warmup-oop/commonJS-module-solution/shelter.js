
class Shelter {
  constructor() {
    this.animals = [];
    this.adoptions = [];
  }

  receiveAnimal(animal) {
    this.animals.push(animal);
    console.log(`the shelter received a new animal, ${animal.name}`);
  }

  introduceAnimals() {
    this.animals.forEach((animal) => {
      animal.speak();
    });
  }

  receiveApplication(animalName, user) {
    let animal = this.findAnimal(animalName);
    let app = new Application(animal, user);
    if (app.isValid()) {
      this.adoptions.push(app);
      this.processAdoption(animal, user);
    } else {
      console.log(`sorry ${user.name}, you are not old enough to adopt`);
    }
  }

  processAdoption(animal, user) {
    this.removeAnimal(animal);
    user.adoptPet(animal);
  }

  removeAnimal(animal) {
    this.animals = this.animals.filter((a) => {
      if (a !== animal) return a;
    });
  }

  findAnimal(animalName) {
    let animal;
    this.animals.forEach((a) => {
      if (a.name === animalName) {
        animal = a;
      }
    });
    return animal;
  }
}

module.exports = Shelter;