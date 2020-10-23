document.addEventListener('DOMContentLoaded', () => {


	// 1. getElementById returns an element
	let header = document.getElementById('my-header');
	// console.log('getElementById: ', header);



	// 2. getElementByClassName returns an HTMLCollection
	let colorItems = document.getElementsByClassName('color__item');
	// console.log('getElementsByClassName: ', colorItems);




	// 3. querySelectorAll returns a NodeList
	// className (.className), id (#id), tagName(tagName)
	let numberItems = document.querySelectorAll('.number__item');
	console.log('querySelectorAll: ', numberItems);




	// 4. getElementByTagName returns an HTMLCollection
	let lists = document.getElementsByTagName('ul');
	console.log('getElementsByTagName: ', lists);



	// 5. querySelector returns an Element
	let firstLabel = document.querySelector('label');
	// console.log('querySelector: ', firstLabel)


	




	// ITERATING THROUGH HTML COLLECTIONS



	// method #1
	// for (let i = 0; i < colorItems.length; i++) {
	// 	console.log(colorItems[i])
	// }



	// // method #2
	// Array.from(colorItems).forEach(el => console.log(el));




	// this wont work 
	// colorItems.forEach(item => {
	// 	console.log(item);
	// })






	// ITERATING THROUGH NODE LIST

	// numberItems.forEach(item => console.log(item))







	// STATIC NODE LIST VS LIVE HTML COLLECTION

	// let colorList = document.getElementById('colors');


	// let colorCollection = document.getElementsByClassName('color__item');
	// let colorNodeList = document.querySelectorAll('.color__item');


	// let newItem = document.createElement('li');
	// newItem.innerText = 'Purple';
	// newItem.classList.add('color__item')
	// colorList.appendChild(newItem);


	// console.log('colorCollection Length', colorCollection.length);
	// console.log('colorNodeList Length', colorNodeList.length);

	// colorNodeList = document.querySelectorAll('.color__item');

})

