// 1. AFTER THE DOM HAS LOADED DO THE FOLLOWING ACTIONS:

document.addEventListener('DOMContentLoaded', event => {

	// 2. Replace the inner text of the h3 tag with className 'your-name'
	//    with your name instead of 'YOUR NAME HERE'

	let yourNameH3 = document.querySelector('.your-name');
	yourNameH3.innerText = 'Alissa Crane';

	// 3. Replace the inner text of the h3 tag with className 'current-date'
	//    with the current date instead of 'CURRENT DATE HERE'

	let curDateH3 = document.querySelector('.current-date');
	curDateH3.innerText = 'Monday, January 5th, 2021';


	// 4. Grab the ul with the id of 'todo-list' and replace it's innerHTML
	//    with three li tags, each with its inner text set to some
	//    todo list item (i.e grocery shop) 
	//
	//    should look similar to html below:
  // 
	// 	  <ul id="todo-list">
	// 		  <li>grocery shop</li>
	// 		  <li>bake cookies</li>
	// 		  <li>buy a pony</li>
	//   </ul>

	let ul = document.getElementById('todo-list');
	ul.innerHTML = '';

	let todo1 = document.createElement('li');
	todo1.innerText = 'grocery shop';
	ul.appendChild(todo1)

	let todo2 = document.createElement('li');
	todo2.innerText = 'bake cookies';
	ul.appendChild(todo2)

	let todo3 = document.createElement('li');
	todo3.innerText = 'buy a pony';
	ul.appendChild(todo3)


})
