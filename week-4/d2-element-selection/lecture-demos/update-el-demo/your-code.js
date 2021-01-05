document.addEventListener('DOMContentLoaded', () => {

	// innerHTML vs innerText

	// let otherHeader = document.getElementById('other-header');
	// otherHeader.innerText = '<h1>Woohoo</h1>';
	// otherHeader.innerHTML = '<h1>Woohoo</h1>';



	// TODO = CAPITALIZE H1 TEXT

	// method #1

	// let h1 = document.querySelector('h1'); // <h1>Hello World</h1>
	// let oldText = h1.innerText; // 'Hello World'
	// h1.innerText = oldText.toUpperCase();
	// h1.innerText = h1.innerText.toUpperCase();


	// method #2

	let header = document.querySelector('header');
	console.log(header);
	header.innerHTML = '<h1 class="my-class">HELLO WORLD</h1>'



	// TODO = CAPITALIZE LABELS

	// method #1 nodelist

	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		// label: <label>Color List</label>
		let oldText = label.innerText; // 'Color List'
		label.innerText = oldText.toUpperCase();
	});


	// method #2 htmlCollection

	// let labels = document.getElementsByTagName('label');

	// for (let i = 0; i < labels.length; i++) {
	// 	let label = labels[i];
	// 	label.innerText = label.innerText.toUpperCase();
	// }

	



	// TODO = CAPITALIZE LIST ITEMS FOR COLORS AND NUMBERS


	let listItems = document.querySelectorAll('li');
	listItems.forEach(li => {
		let oldText = li.innerText;
		li.innerText = oldText.toUpperCase();
	})









	// HTML COLLECTION VS NODE LIST 
	
	// let htmlCollection = document.getElementsByClassName('animal__item');
	// let nodeList = document.querySelectorAll('.animal__item');

	// let listItems = document.querySelectorAll('li')
	
	// let animalList = document.getElementById('animals');
	// // 	<ul id="animals">
	// // 		<li class="animal__item">dogs</li>
	// // 		<li class="animal__item">cats</li>
	// // </ul>
	// let newItem = document.createElement('li');
	// // <li></li>
	// newItem.innerText = 'pony';
	// // <li>pony</li>
	// newItem.setAttribute('class', 'animal__item');
	// // <li class="animal__item">pony</li>
	// animalList.appendChild(newItem);


	// console.log('htmlCollection', htmlCollection);
	// console.log('nodeList', nodeList);





	// REMOVING ELEMENTS

	// let animalList = document.getElementById('animals');
	// animalList.remove()

	// let firstItem = document.querySelector('.animal__item');
	// animalList.removeChild(firstItem);
	// firstItem.remove();


})