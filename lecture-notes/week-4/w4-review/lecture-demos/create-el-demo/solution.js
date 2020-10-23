document.addEventListener('DOMContentLoaded', () => {

	
	// * TODO = ADD H1 TO HEADER
	
	let header = document.getElementById('my-header');
	
	// method #1
	// let h1 = document.createElement('h1');
	// let text = document.createTextNode('Hello World');
	// h1.appendChild(text);
	// header.appendChild(h1);
	


	// method #2
	header.innerHTML = '<h1>Hello World</h1>'


	// method #3
	// let h1 = document.createElement('h1');
	// h1.innerText = 'Hello World';
	// header.appendChild(h1);


	// not able to do this
	// header.innerText = '<h1>Hello World</h1>'



// * TODO = ADD ITEMS TO COLOR AND NUMBER LISTS WITH CLASS NAME

// example items = ['Red', 'Green', 'Blue']
// example parent = colorList
// example className = 'color__item';

	function addItems(items, parent, className) {
		items.forEach(item => {
			let li = document.createElement('li');
			li.setAttribute('class', className);
			li.innerText = item;
			parent.appendChild(li);
		})
	}

	let colors = ['Red', 'Green', 'Blue']
	let colorUl = document.getElementById('colors')
	let colorClass = "color__item"

	addItems(colors, colorUl, colorClass);

	let numbers = ['One', 'Two', 'Three'];
	let numberUl = document.getElementById('numbers')
	let numberClass = 'number__item'

	addItems(numbers, numberUl, numberClass);
	
});






