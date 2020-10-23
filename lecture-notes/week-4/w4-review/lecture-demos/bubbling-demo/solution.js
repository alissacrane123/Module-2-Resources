document.addEventListener('DOMContentLoaded', (event) => {

	let outerDiv = document.getElementById('outer');
	let middleDiv = document.getElementById('middle');
	let innerDiv = document.getElementById('inner');




	// 1. STOP A CLICK EVENT ON THE INNER DIV FROM BUBBLING UP PAST THE MIDDLE DIV


	innerDiv.addEventListener('click', (event) => {
		console.log('inner div event triggered')
	})


	middleDiv.addEventListener('click', event => {
		event.stopPropagation();
		console.log('you SHOULD see this if you click on the inner div');
	})



	outerDiv.addEventListener('click', (event) => {
		console.log('you SHOULDNT see this if you click on the inner div')
	})





})