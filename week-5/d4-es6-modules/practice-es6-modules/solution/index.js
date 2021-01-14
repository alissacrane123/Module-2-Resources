import Shelter from './shelter.js';
import Dog from './dog.js';



let bodhi = new Dog('bodhi', 5, './images/bodhi.jpg');
let dogs = [bodhi];

new Shelter(dogs);
