window.addEventListener("DOMContentLoaded", event => {



	// NOT SO GREAT SOLUTION

	// let callback = (event) => {
	// 	console.log(div.id);
	// }

	// let divs = document.querySelectorAll('div');
	// divs.forEach(div => {
	// 	div.addEventListener('click', callback)
	// })

	// divs.forEach(div => {
	// 	div.addEventListener('click', (event) => {
	// 		console.log(div.id);
	// 	})
	// })




	let list = document.getElementById('grid');

	list.addEventListener('click', (event) => {
		console.log('event: ', event);

		// the target will be whichever element triggers event
		// (the element we click on)
		console.log('event.target : ', event.target);

		// can key into properties of that element
		console.log('event.target.id: ', event.target.id)

		// currentTarget is the element the eventListener is attached to 
		// thus, currenTarget will always be the UL in this example
		console.log('event.currentTarget : ', event.currentTarget);
	})

});