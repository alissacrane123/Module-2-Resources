document.addEventListener('DOMContentLoaded', event => {

	let form = document.getElementById('todo-form');
	let input = document.getElementById('user-input');
	let list = document.getElementById('todo-list')

	form.addEventListener('submit', event => {
		event.preventDefault();
		let li = document.createElement('li')
		li.innerText = input.value;
		list.appendChild(li);
		input.value = '';
	});

})