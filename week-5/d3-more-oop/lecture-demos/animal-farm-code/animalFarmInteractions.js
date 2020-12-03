
// CommonJS module import:

const { Horse, Pig, Dog } = require('./animalFarm2.js');


const bob = new Horse('Bob');
const clifford = new Dog('Clifford');
const pinky = new Pig('Pinky');

bob.makeNoise();        // Bob says neigh!
pinky.makeMove();       // Pinky trots.
clifford.makeNoise();   // Clifford says woof!
clifford.makeMove();    // Clifford runs.
