/* two functions, `move` and `makeNoise` */

const move = function(name, animalType) {
  let verb;
  switch (animalType) {
    case 'horse':
      verb = 'gallops';
      break;
    case 'dog':
      verb = 'runs';
      break;
    case 'pig':
      verb = 'trots';
      break;
  }

  console.log(`${name} ${verb}.`);
};

const makeNoise = function (name, animalType) {
  let noise;
  switch (animalType) {
    case 'horse':
      noise = 'neigh';
      break;
    case 'dog':
      noise = 'woof';
      break;
    case 'pig':
      noise = 'oink';
      break;
  }

  console.log(`${name} says ${noise}!`);
};

// Lets make a horse move:
move('Bob', 'horse');         // Bob gallops.

// Lets make a dog named Clifford make noise:
makeNoise('Clifford', 'dog'); // Clifford says woof!

// Next step: make an animal class, use instance methods, like make noise, etc. 