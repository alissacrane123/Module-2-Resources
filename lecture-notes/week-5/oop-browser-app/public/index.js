import Dog from '../../src/dog.js';
import User from '../../src/user.js'
import Shelter from '../../src/shelter.js';
import App from '../../src/app.js'

document.addEventListener('DOMContentLoaded', event => {

	let bodhi = new Dog('bodhi', 5, 'german shepherd');
	let user = new User('alissa', 25)
	let shelter = new Shelter([bodhi]);

	let ui = new App(shelter, user);

})