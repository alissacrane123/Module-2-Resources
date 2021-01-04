
// using document.querySelector
// grabbing by className => document.querySelector('.<className>');
// grabbing by ID  => document.querySelector('#<id>');
// grabbing by tagname => document.querySelector('<tagname>');


document.addEventListener('DOMContentLoaded', () => {



	// TODO = CAPITALIZE H1 TEXT

	let h1 = document.querySelector('h1');
	let newText = h1.innerText.toUpperCase();
	h1.innerText = newText;

	// h1.innerText = h1.innerText.toUpperCase();


	
	// TODO = CAPITALIZE LABELS

	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		// let text = label.innerText; // 'Color List'
		// label.innerText = text.toUpperCase();

		label.innerText = label.innerText.toUpperCase();
	})

	// method #2 - htmlcollection
	// const labels = document.getElementsByTagName('label');
	// for (let i = 0; i < labels.length; i++) {
	// 	let label = labels[i];
	// 	let text = label.innerText.toUpperCase(); // COLOR LIST
	// 	label.innerText = text;
	// 	// label.innerText = label.innerText.toUpperCase();
	// }




	// TODO = CAPITALIZE LIST ITEMS FOR COLORS AND NUMBERS

	let items = document.getElementsByTagName('li');
	Array.from(items).forEach(item => {
		item.innerText = item.innerText.toUpperCase();
	})


})