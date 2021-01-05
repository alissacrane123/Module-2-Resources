document.addEventListener('DOMContentLoaded', () => {


	// 1. getElementById returns an element
	// let header = document.getElementById('my-header');
	// console.log(header);


	// 2. getElementByClassName returns an HTMLCollection
	let colorItems = document.getElementsByClassName('color__item');
	// console.log(colorItems);


	// 3. querySelectorAll returns a NodeList
	//    - className (.className), id (#id), tagName(tagName)
	let numberItems = document.querySelectorAll('.number__item');
	// console.log(numberItems)

	// let header = document.querySelectorAll('#my-header')
	// let uls = document.querySelectorAll('ul');



	// 4. getElementByTagName returns an HTMLCollection
	let lists = document.getElementsByTagName('ul');
	// console.log(lists);


	// 5. querySelector returns an Element
	let firstLabel = document.querySelector('label');
	// console.log(firstLabel)



	// TODO = ITERATE THROUGH NODE LIST AND CONSOLE.LOG EACH ITEM

	// method #1 - using forEach
	// numberItems.forEach(el => {
	// 	console.log(el);
	// });


	// method #2 - for loop 
	// for (let i = 0; i < numberItems.length; i++) {
	// 	let el = numberItems[i];
	// 	console.log(el);
	// }




	// TODO = ITERATE THROUGH HTML COLLECTION AND CONSOLE.LOG EACH ITEM

	// error - cannot call forEach on an html collection
	// colorItems.forEach(el => {
	// 	console.log(el);
	// });

	for (let i = 0; i < colorItems.length; i++) {
		let el = colorItems[i];
		console.log(el);
	}
})