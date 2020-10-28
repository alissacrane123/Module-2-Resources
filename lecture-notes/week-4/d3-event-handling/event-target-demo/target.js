window.addEventListener("DOMContentLoaded", event => {



	// NOT SO GREAT SOLUTION



	// let myDivs = document.querySelectorAll('div');

	// myDivs.forEach(myDiv => {
	// 	myDiv.addEventListener('click', (event) => {
	// 		console.log(myDiv.id);
	// 	})
	// })

	
	let grid = document.getElementById('grid');

	grid.addEventListener('click', event => {
		console.log('event.target', event.target);

		console.log('event.target.id', event.target.id);

		console.log('event.currentTarget', event.currentTarget);
	})



	

});