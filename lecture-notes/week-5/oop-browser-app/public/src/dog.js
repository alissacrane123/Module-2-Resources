import Animal from './animal.js'

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age, breed);
    this.tricks = [];
  }

  learnNewTrick(trick) {
    this.tricks.push(trick);
    console.log(`New trick learned: ${trick}`);
  }

  performTricks() {
    this.tricks.forEach((trick) => {
      console.log(`${this.name} performs trick: ${trick}`);
    });
  }
}

export default Dog;
