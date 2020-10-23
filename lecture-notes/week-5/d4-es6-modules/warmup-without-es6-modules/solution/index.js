
document.addEventListener('DOMContentLoaded', event => {

	let bodhi = new Dog('bodhi', 5, './images/bodhi.jpg');
	let dogs = [bodhi];

	new Shelter(dogs);
})