window.addEventListener("DOMContentLoaded", event => {



// BLUR/FOCUS DEMO


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






	// FORM VALIDATION DEMO 

	// get the form element
	const form = document.getElementById("signup-form");
	const password = document.getElementById("password");
	const passwordConfirm = document.getElementById("confirm-password");
	const email = document.getElementById('email');
	const name = document.getElementById('name');
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

	const checkEmail = event => {
		if (!email.value.includes('@')) {
			errors.push('Must provide a valid email')
		}
	}

	const checkInputs = event => {
		let myInputs = [password, passwordConfirm, email, name]

		for (let i = 0; i < myInputs.length; i++) {
			let input = myInputs[i];
			if (input.value.length < 1) {
				errors.push('A required field is empty'); 
				return;
			}
		};
	}

	// listen for submit event and run password check
	form.addEventListener("submit", (event) => {
		event.preventDefault(); // preventing page from refreshing

		let errorsContainer = document.getElementById('errors');
		errorsContainer.innerHTML = '';
		errors = [];

		checkPassword();
		checkEmail();
		checkInputs();


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