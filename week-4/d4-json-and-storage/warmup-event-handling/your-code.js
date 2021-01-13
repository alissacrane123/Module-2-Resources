document.addEventListener('DOMContentLoaded', event => {

	// TODO: 
	// when the FORM with id 'todo-form' is submitted:
	// - create a new LI element
	// - set the inner text of the newly created LI to the value the user typed
	//   into the INPUT with id 'user-input'
	// - append the LI to the UL with id 'todo-list'
	// - reset the value of the INPUT to be an empty string
	

	const form = document.getElementById('todo-form');
	const input = document.getElementById('user-input');
	const list = document.getElementById('todo-list');

	form.addEventListener('submit', event => {
		event.preventDefault();

		let li = document.createElement('li');
		li.innerText = input.value;
		list.appendChild(li);
		input.value = '';


	})

	
})