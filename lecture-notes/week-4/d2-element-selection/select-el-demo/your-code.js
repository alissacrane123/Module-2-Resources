document.addEventListener('DOMContentLoaded', () => {



	// 1. getElementById returns an element
	let header = document.getElementById('my-header');


	// 2. getElementByClassName returns an HTMLCollection
	let colorItems = document.getElementsByClassName('color__item');



	// 3. querySelectorAll returns a NodeList
	// className (.className), id (#id), tagName(tagName)
	let numberItems = document.querySelectorAll('.number__item');
	// let colorUl = document.querySelectorAll('ul')



	// 4. getElementByTagName returns an HTMLCollection
	let lists = document.getElementsByTagName('ul');



	// 5. querySelector returns an Element
	let firstLabel = document.querySelector('label');



	// TODO = ITERATE THROUGH NODE LIST AND CONSOLE.LOG EACH ITEM



	// TODO = ITERATE THROUGH HTML COLLECTION AND CONSOLE.LOG EACH ITEM
})