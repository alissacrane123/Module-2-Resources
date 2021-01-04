window.addEventListener("DOMContentLoaded", event => {

	// console.log(event)

	// TODO = console.log the id of the specific div that i click on

	// let divs = document.querySelectorAll('div');

	// divs.forEach(div => {
	// 	div.addEventListener('click', () => {
	// 		console.log(div.id)
	// 	})
	// })

	const grid = document.getElementById('grid');
	grid.addEventListener('click', (event) => {
		console.log(event)
		console.log('event.target: ', event.target);
		console.log('event.currentTarget: ', event.currentTarget);
		console.log('event.target.id: ', event.target.id )
	});




	// removing elements 
	// let div2 = document.getElementById('grid__item-2')
	// grid.removeChild(div2)
	// div2.remove()

});