document.addEventListener('DOMContentLoaded', () => {

	// * TODO = ADD H1 TO HEADER

	// let head = document.createElement('header');
	// head.id = 'my-header';
	// let body = document.querySelectorAll('body');
	// body.appendChild(head);


	// method #1
	const header = document.getElementById('my-header');
	// const newHeader = document.createElement('h1');
	// newHeader.innerText = "Hello World";
	// header.appendChild(newHeader);


	// method #2
	header.innerHTML = '<h1>Hello World</h1>';

	// this wont work
	// header.innerText = '<h1>Hello World</h1>'


	// method #3
	// let h1 = document.createElement('h1');
	// let text = document.createTextNode('Hello World');
	// h1.appendChild(text);
	// header.appendChild(h1);
	

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

	let colors = ['Red', 'Green', 'Blue'];
	let parent = document.getElementById('colors');
	addItems(colors, parent, 'color__item');

	let nums = ['One', 'Two', 'Three'];
	let numParent = document.getElementById('numbers');
	addItems(nums, numParent, 'number__item')

})

