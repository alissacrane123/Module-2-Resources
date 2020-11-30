document.addEventListener('DOMContentLoaded', () => {


// window.onload = () => {

// }
	// 1. getElementById returns an element
	let header = document.getElementById('my-header');
	// console.log(header);

	// 2. getElementByClassName returns an HTMLCollection
	let colorItems = document.getElementsByClassName('color__item');
	// console.log(colorItems);


	// 3. querySelectorAll returns a NodeList
	// className (.className), id (#id), tagName(tagName)
	let numberItems = document.querySelectorAll('.number__item');
	// let header = document.querySelectorAll('#my-header')
	// let uls = document.querySelectorAll('ul');



	// 4. getElementByTagName returns an HTMLCollection
	let lists = document.getElementsByTagName('ul');
	// console.log(lists);


	// 5. querySelector returns an Element
	let firstLabel = document.querySelector('label');



	// TODO = ITERATE THROUGH NODE LIST AND CONSOLE.LOG EACH ITEM

	numberItems.forEach(item => {
		console.log(item);
	})

	for (let i = 0; i < numberItems.length; i++) {
		let item = numberItems[i];
		console.log(item)
	}

	// TODO = ITERATE THROUGH HTML COLLECTION AND CONSOLE.LOG EACH ITEM

	// colorItems.forEach(item => {
	// 	console.log(item)
	// })

	for (let i = 0; i < colorItems.length; i++) {
		let item = colorItems[i];
		console.log(item)
	}
})