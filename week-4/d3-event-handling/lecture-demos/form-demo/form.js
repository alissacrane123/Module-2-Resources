window.addEventListener("DOMContentLoaded", event => {



// BLUR/FOCUS DEMO
// - when an input receives focus, change backgroundColor 
// to '#00808042'
// - when an input loses focus, unset the backgroundColor








	// FORM VALIDATION DEMO 


	
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


});