window.addEventListener("DOMContentLoaded", event => {



// BLUR/FOCUS DEMO
// - when an input receives focus, change backgroundColor 
// to '#00808042'
// - when an input loses focus, unset the backgroundColor

let inputs = document.querySelectorAll('.form__field');

inputs.forEach(input => {
	input.addEventListener('focus', event => {
		// let myInput = event.target;
		input.style.backgroundColor = '#00808042';
	});

	input.addEventListener('blur', event => {
		input.style.backgroundColor = 'unset'
	})
})






	// FORM VALIDATION DEMO 

	const form = document.getElementById('signup-form');
	const password = document.getElementById('password');
	const passwordConfirm = document.getElementById('confirm-password');
	const email = document.getElementById('email');
	const name = document.getElementById('name');
	const body = document.getElementById('body');

	let errors = [];
	
	const checkPassword = (event) => {
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

	form.addEventListener('submit', event => {
		event.preventDefault();

		errors = [];

		checkPassword();
		checkEmail();
		checkInputs();

		let errorsContainer = document.getElementById('errors');
		errorsContainer.innerHTML = '';

		if (errors.length > 0) {
			errors.forEach(err => {
				let li = document.createElement('li');
				li.innerText = err;
				errorsContainer.appendChild(li);
			})
		} else {
			// body.innerHTML = '<h2>your form was submitted</h2>'
			body.innerText = 'your form was submitted'
		}
	})




});