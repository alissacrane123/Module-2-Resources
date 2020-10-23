document.addEventListener('DOMContentLoaded', (event) => {



	// 1. CHANGEE THE BELOW CODE SO THAT A CLICK EVENT ON THE INNER DIV IS 
	// PREVENTED FROM BUBBLING UP PAST THE MIDDLE DIV


	innerDiv.addEventListener('click', (event) => {
		console.log('inner div event triggered')
	})


	middleDiv.addEventListener('click', event => {
		console.log('you SHOULD see this if you click on the inner div');
	})



	outerDiv.addEventListener('click', (event) => {
		console.log('you SHOULDNT see this if you click on the inner div')
	})





})