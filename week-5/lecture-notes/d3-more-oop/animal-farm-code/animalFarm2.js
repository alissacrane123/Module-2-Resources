class Animal {
  constructor(name, noise=null, move=null) {
    this.noise = noise;
    this.move = move;
    this.name = name;
  }

  makeMove() {
    console.log(`${this.name} ${this.move}.`);
  }

  makeNoise() {
    console.log(`${this.name} says ${this.noise}!`);
  }
}




class Horse extends Animal {
  constructor(name){
    super(name, 'neigh', 'gallops');
  }
}

class Pig extends Animal {
  constructor(name) {
    super(name, 'oink', 'trots');
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name, 'woof', 'runs');
  }
}



module.exports = {
  Horse,
  Dog, 
  Pig, 
};

