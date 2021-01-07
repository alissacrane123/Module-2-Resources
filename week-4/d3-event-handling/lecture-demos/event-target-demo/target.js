window.addEventListener("DOMContentLoaded", event => {


	// TODO = console.log the id of the specific div that i click on


	// const div1 = document.getElementById('grid__item-1');
	// // <div id="grid__item-1">One</div>

	// div1.addEventListener('click', event => {
	// 	console.log(event);
	// 	console.log(div1.id);
	// });

	let grid = document.getElementById('grid');

	grid.addEventListener('click', event => {

		console.log('event.currentTarget: ', event.currentTarget);
		console.log('event.target: ', event.target);
		console.log('event.target.id: ', event.target.id)
	})

});