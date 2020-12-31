// we're exporting multiple things from the animal.js file
// so we must use curly brackets to deconstruct the exported content
// import { Dog, Cat } from './animal.js';

// we're export defaulting the shelter class so we dont need curlies
import Shelter from './shelter.js';

// const Shelter = require('./shelter')

// let bodhi = new Dog('bodhi', 5);
// let pancake = new Cat('pancake', 10);

let shelter = new Shelter();


// remember that in order to get browser support for ES6 module syntax
// we must use a server to open our files in the browser
// - open the index.html file with live server
// - open the browser dev tools
// you should see "bodhi barks" and "pancake meows" in the console

// bodhi.speak();
// pancake.speak();

// shelter.receiveAnimal(bodhi);
// shelter.receiveAnimal(pancake);


