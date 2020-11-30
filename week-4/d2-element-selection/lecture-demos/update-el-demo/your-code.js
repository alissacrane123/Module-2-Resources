document.addEventListener('DOMContentLoaded', () => {

	// TODO = CAPITALIZE H1 TEXT

	// method #1
	let h1 = document.querySelector('h1');
	let oldText = h1.innerText;
	h1.innerText = oldText.toUpperCase();


	// TODO = CAPITALIZE LABELS

	// method #1 - nodelist
	const labels = document.querySelectorAll('label');
	labels.forEach(label => {
		// let text = label.innerText;
		label.innerText = label.innerText.toUpperCase();
	});

	// method #2 - htmlcollection
	// const labels = document.getElementsByTagName('label');
	// for (let i = 0; i < labels.length; i++) {
	// 	let label = labels[i];
	// 	let text = label.innerText.toUpperCase(); // COLOR LIST
	// 	label.innerText = text;
	// 	// label.innerText = label.innerText.toUpperCase();
	// }



	// TODO = CAPITALIZE LIST ITEMS FOR COLORS AND NUMBERS

	const items = document.getElementsByTagName('li');
	for (let i = 0; i < items.length; i++) {
		let item = items[i];
		let text = item.innerText.toUpperCase();
		item.innerText = text;
	}

	// const numberUl = document.getElementById('numbers');
	// console.log(numberUl.childNodes)
	
})