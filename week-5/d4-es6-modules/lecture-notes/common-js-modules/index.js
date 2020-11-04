const { Cat, Dog } = require('./animal.js')
const Shelter = require('./shelter.js');

let bodhi = new Dog("bodhi", 5);
let pancake = new Cat("pancake", 10);
let shelter = new Shelter();

// since we're using COMMON JS modules you must run this file
// using node to see the console.logs in your terminal
// i.e `node index.js`
bodhi.speak();
pancake.speak();

shelter.receiveAnimal(bodhi);
shelter.receiveAnimal(pancake);