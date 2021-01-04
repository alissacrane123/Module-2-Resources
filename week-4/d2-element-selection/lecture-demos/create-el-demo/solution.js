
document.addEventListener('DOMContentLoaded', (event) => {

	
	// * TODO = ADD H1 TO HEADER
	
	let header = document.getElementById('my-header');
	
	// method #1
	// header.innerHTML = '<h1>Hello World</h1>';

	// this won't work
	// header.innerText = '<h1>Hello World</h1>';


	// method #2
	// let h1 = document.createElement('h1');
	// h1.innerText = 'Hello World';
	// header.appendChild(h1)


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
			li.innerText = item;
			li.setAttribute('class', className);
			parent.appendChild(li);
		})
	}

	let colors = ['Red', 'Green', 'Blue']
	let colorUl = document.getElementById('colors')
	let colorClass = "color__item"

	addItems(colors, colorUl, colorClass);

	let nums = ['One', 'Two', 'Three'];
	let numUl = document.getElementById('numbers');
	let numClass = 'number__item';

	addItems(nums, numUl, numClass)

	
});











// // SEPARATE EXAMPLE BELOW


// 	function addItem(parentName) {
// 		let body = document.querySelector(parentName);
// 		body.innerHTML = '<div>hello</div>';
// 	}



// window.onload = addItem;

// let callback = (parent) => {
// 	addItem(parent);
// }

// document.addEventListener('DOMContentLoaded', callback);



