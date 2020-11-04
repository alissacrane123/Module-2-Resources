
// using document.querySelector
// grabbing by className => document.querySelector('.<className>');
// grabbing by ID  => document.querySelector('#<id>');
// grabbing by tagname => document.querySelector('<tagname>');


document.addEventListener('DOMContentLoaded', () => {



	// TODO = CAPITALIZE H1 TEXT

	let h1 = document.querySelector('h1');
	let oldText = h1.innerText;
	h1.innerText = oldText.toUpperCase();



	
	// TODO = CAPITALIZE LABELS

	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		let text = label.innerText;
		label.innerText = text.toUpperCase();
	})



	// let labels = document.getElementsByTagName('label');
	// Array.from(labels).forEach(label => {
	// 	let text = label.innerText;
	// 	label.innerText = text.toUpperCase();
	// })


	// for (let i = 0; i < labels.length; i++) {
	// 	let label = labels[i];
	// 	let text = label.innerText;
	// 	label.innerText = text.toUpperCase();
	// }




	// TODO = CAPITALIZE LIST ITEMS FOR COLORS AND NUMBERS

	let items = document.querySelectorAll('li');
	items.forEach(item => {
		item.innerText = item.innerText.toUpperCase();
	})


})