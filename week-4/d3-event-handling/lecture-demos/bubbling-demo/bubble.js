document.addEventListener('DOMContentLoaded', (event) => {

	let outerDiv = document.getElementById('outer');
	let middleDiv = document.getElementById('middle');
	let innerDiv = document.getElementById('inner');


	innerDiv.addEventListener('click', (event) => {
		event.stopPropagation();
		console.log('inner div event triggered')
	})

	middleDiv.addEventListener('click', (event) => {
		// event.stopPropagation();
		console.log('middle div event triggered')
	})

	outerDiv.addEventListener('click', (event) => {
		console.log('outer div event triggered');
	})















	// stopping propogation


	// innerDiv.addEventListener('click', (event) => {
	// 	// event.stopPropagation();
	// 	console.log('inner div event triggered')
	// })


	// middleDiv.addEventListener('click', event => {
	// 	event.stopPropagation();
	// 	// event.stopImmediatePropagation();
	// 	console.log('first middle div event triggered');
	// })

	// // middleDiv.addEventListener('click', event => {
	// // 	console.log('second middle div event triggered');
	// // })

	// outerDiv.addEventListener('click', (event) => {
	// 	// event.stopPropagation();
	// 	console.log('outer div event triggered')
	// })
})