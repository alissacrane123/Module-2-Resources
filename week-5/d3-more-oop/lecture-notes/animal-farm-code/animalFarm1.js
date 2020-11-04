
class Horse {
  constructor(name) {
    this.name = name; 
  }

  gallop() {
    console.log(`${this.name} gallops.`);
  }

  neigh() {
    console.log(`${this.name} says neigh!`);
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
  
  run() {
    console.log(`${this.name} runs.`);
  }

  woof() {
    console.log(`${this.name} says woof!`);
  }
}

class Pig {
  constructor(name) {
    this.name = name;
  }

  trot() {
    console.log(`${this.name} trots.`);
  }

  oink() {
    console.log(`${this.name} says oink!`);
  }
}

// Lets make some Horses, Dogs, and Pigs:
const bob = new Horse('Bob');
const clifford = new Dog('Clifford');
const pinky = new Pig('Pinky');

// Lets make our instances speak:
bob.neigh(); // Bob The Horse says neigh!
clifford.woof(); // Clifford says woof!
pinky.oink(); // Pinky says oink!

// How do we refactor all of the above to use inheritance and polymorphism?