
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.pets = [];
  }

  adoptPet(pet) {
    this.pets.push(pet);
    console.log(`${this.name} adopted a new pet, ${pet.name}`);
  }

  getAge() {
    return this.age;
  }
}

module.exports = { User };
// module.exports = User;