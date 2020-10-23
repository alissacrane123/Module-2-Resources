window.addEventListener("DOMContentLoaded", event => {


// 1. BLUR/FOCUS DEMO

// change the background color of the inputs with classname "form__field"
// to '#00808042' on focus. unset the background color on blur. 


let inputs = document.getElementsByClassName('form__field');

Array.from(inputs).forEach(input => {

	// when we click in input, change background to blue
	input.addEventListener('focus', (event) => {
		let input = event.target;
		input.style.backgroundColor = '#00808042';
	});

	// when we click away from input, change background back to white
	input.addEventListener('blur', (event) => {
		let input = event.target;
		input.style.backgroundColor = 'unset';
	});


})






	// 2. *BONUS*  VALIDATION DEMO

	// upon form submit: 
	// - validate that the password and password confirm values a user enters match
	// - validate that the password is at least 6 characters long
	// - append an li for each error messages to the ul with id "errors" on form
	// submission
	// - if there are no errors, replace the body element's inner html with the 
	// following element: "<h1>Your form was successfully submitted</h1>"


	const form = document.getElementById("signup-form");
	const password = document.getElementById("password");
	const passwordConfirm = document.getElementById("confirm-password");
	const body = document.querySelector('body')

	let errors = [];
	
	const checkPassword = event => {
		if (password.value !== passwordConfirm.value) {
			errors.push('Passwords must match')
		} 

		if (password.value.length < 6) {
			errors.push('Password must be at least 6 chars long')
		}
	};



	// listen for submit event and run password check
	form.addEventListener("submit", (event) => {
		event.preventDefault(); // preventing page from refreshing

		let errorsContainer = document.getElementById('errors');

		// reset the errors after each form submission
		// but before validations
		errorsContainer.innerHTML = '';
		errors = [];

		checkPassword();

		// if there are no errors...
		if (errors.length === 0) {
			body.innerHTML = "<h1>Your form was successfully submitted</h1>";
			
		} else {
			errors.forEach(error => {
				let el = document.createElement('li');
				el.innerText = error;
				errorsContainer.appendChild(el);
			})
		}
	});
});