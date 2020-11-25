window.addEventListener("DOMContentLoaded", event => {



// BLUR/FOCUS DEMO
// - when an input receives focus, change backgroundColor 
// to '#00808042'
// - when an input loses focus, unset the backgroundColor

let inputs = document.querySelectorAll('.form__field')

inputs.forEach(input => {
	input.addEventListener('focus', event => {
		let curInput = event.target;
		curInput.style.backgroundColor = '#00808042'
	})

	input.addEventListener('blur', event => {
		let curInput = event.target;
		curInput.style.backgroundColor = 'unset'
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

	form.addEventListener('submit', event => {
		event.preventDefault();
		let errorsContainer = document.getElementById('errors');
		errors = [];
		errorsContainer.innerHTML = '';

		checkPassword();
		checkEmail();
		checkInputs();

		if (errors.length === 0) {
			body.innerHTML = '<h2>Your form was successfully submitted, woohoo</h2>'
		} else {

			errors.forEach(error => {
				let li = document.createElement('li');
				li.innerText = error;
				errorsContainer.appendChild(li);
			})
		}
	})


});