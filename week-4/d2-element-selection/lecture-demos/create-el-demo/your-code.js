document.addEventListener('DOMContentLoaded', () => {

	// * TODO = ADD H1 TO HEADER

	// method #1
	let header = document.getElementById('my-header');
	header.innerHTML = '<h1>Hello World</h1>';

	// method #2
	// let h1 = document.createElement('h1');
	// // console.log(h1)
	// h1.innerText = 'hello world';
	// // console.log(h1);
	// header.appendChild(h1);


	// method #3
	// let h1 = document.createElement('h1');
	// let text = document.createTextNode('hello world');
	// h1.appendChild(text);
	// header.appendChild(h1);

	

	// * TODO = ADD ITEMS TO COLOR AND NUMBER LISTS WITH CLASS NAME


	// example items = ['Red', 'Green', 'Blue']
	// example parent = colorList
	// example className = 'color__item';

	function addItems(items, parent, className) {
		items.forEach(item => {
			let li = document.createElement('li');
			// <li></li>
			li.setAttribute('class', className);
			// <li class="color__item"></li>
			li.innerText = item;
			// <li class="color__item">Red</li>
			parent.appendChild(li);
		});
	}

	// document.getElementsByClassName('color__item')

	let colors = ['Red', 'Green', 'Blue'];
	let colorList = document.getElementById('colors');
	let colorClass = 'color__item';
	addItems(colors, colorList, colorClass);


	let nums = ['one', 'two', 'three'];
	let numberList = document.getElementById('numbers');
	let numClass = 'number__item';
	addItems(nums, numberList, numClass);












	// let span = document.querySelector('span');
	// let text = document.createTextNode(' Crane');
	// span.appendChild(text);

	// // span.innerText = ' Crane'

})

