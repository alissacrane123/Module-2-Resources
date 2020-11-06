# VIDEO 1 - select / create demo

Document Object Modal (DOM)
- object oriented representation of HTML doc or web page
- doc represented as objects or nodes
- allows us to access manpulate our doc using javascript
- depicted as tree with speceific hierarchy



* TODO: ASK WHAT EACH METHOD RETURNS, SHOW CONSOLE LOGS



1. getElementById returns element
2. getElementByClassName returns HTML COLLECTION
3. querySelectorAll returns NODE LIST
4. getElementByClassName returns HTML COLLECTION
5. querySelector returns first matching element



NodeList vs HTML Collection
- collections of nodes
- NodeList:
	* similar to array but cant use most array methods
	* can use forEach, check length
	* static: does not update after changes made
- HTMLCollection:
	* two methods: `item` && `namedItem`
	* cannot call forEach
	* can convert to array using `Array.from()`
	* live: updates itself when it detects a change in items detected by methodd



* TODO: ITERATE THROUGH HTML COLLECTION

```js

// method #1 
for (let i = 0; i < colorItems.length; i++) {
	console.log(colorItems[i])
}

// method #2
Array.from(colorItems).forEach(el => console.log(el))

```





* TODO: ITERATE THROUGH NODE LIST

```js

numberItems.forEach(el => console.log(el))

```



```js
	let colorList = document.getElementById('colors');


	let colorCollection = document.getElementsByClassName('color__item');
	let colorNodeList = document.querySelectorAll('.color__item');


	let newItem = document.createElement('li');
	newItem.innerText = 'Purple';
	newItem.classList.add('color__item')
	colorList.appendChild(newItem);


	console.log('colorCollection Length', colorCollection.length);
	console.log('colorNodeList Length', colorNodeList.length);
	
```








# VIDEO 2 - APPENDING ELEMENTS


* TODO: RECREATE HTML FORM FIRST EXAMPLE






1. Add H1 to header

```js

// method #1
header.innerHTML = '<h1>HELLO WORLD</h1>'


// method #2
let h1 = document.createElement('h1');
h1.innerText = 'HELLO WORLD';
header.appendChild(h1);


// show them this does not work 
header.innerText = '<h1>HELLO WORLD</h1>'


// method #3
let h1 = document.createElement('h1');
let text = document.createTextNode("HELLO WORLD");
h1.append(text);
header.appendChild(h1);

```









2. add list items to colors and numbers lists


```js

function addItems(items, parent, className) {
	items.forEach(item => {
		let li = document.createElement('li');
		li.setAttribute('class', className);

		li.innerText = item;

		parent.appendChild(li);
	})
}



let colors = ['Red', 'Green', 'Blue'];
let numbers = ['One', 'Two', 'Three']



addItems(colors, colorList, 'color__item');
addItems(numbers, numberList, 'number__item');

```









3. Show them embedded javascript script


```html
	<script type="text/javascript">
		const createDiv = () => {
			let div = document.createElement('div');
			div.setAttribute('id', 'my-div');
			div.innerText = 'Hello, I am a DIV';
			document.body.appendChild(div);
		}
		// runs after DOM has loaded (not including stylesheets, images)
		document.addEventListener('DOMContentLoaded', createDiv);

		// runs after page loads
		// window.onload = createDiv;
	</script>

```









4. show them alternative to async/defer in script


```js

// after page loads
window.onload = () => {

}


// after dom loads
document.addEventListener("DOMContentLoaded", () => {

})

```









# VIDEO 3 - UPDATING ELEMENTS


* TODO: CAPITALIZE ALL TEXT 



1. capitalize h1 text "hello world"

```js

	// method #1 - query selector
	let h1 = document.querySelector('h1');
	let oldText = h1.innerText;
	h1.innerText = oldText.toUpperCase();


	// method #2 - tag name
	let h1 = document.getElementsByTagName('h1')[0];
	let oldText = h1.innerText;
	h1.innerText = oldText.toUpperCase();


```









2. capitalize labels


```js

	// method #1 - querySelectorAll (nodelist)
	let labels = document.querySelectorAll('label');
	labels.forEach(el => {
		let text = el.innerText;
		el.innerText = text.toUpperCase();
	})


	// method #1 - getElementsByTagName (html collection)
	let labels = document.getElementsByTagName('label');
	Array.from(labels).forEach(el => {
		let prevText = el.innerText;
		el.innerText = prevText.toUpperCase();
	})


	// method #2 with hTMLCollection
	let labels = document.getElementsByTagName('label');
	for (let i = 0; i < labels.length; i++) {
		let label = labels[i];
		let text = label.innerText;
		label.innerText = text.toUpperCase();
	}


```









3. capitalize list items for colors and numbers


```js

	// htmlCollection method #1
	let items = document.getElementsByTagName('li');
	for (let i = 0; i < items.length; i++) {
		let el = items[i];
		let prevText = el.innerText;
		el.innerText = prevText.toUpperCase();
	}

	// nodeList method 
	let items = document.querySelectorAll('li');
	items.forEach(item => {
		item.innerText = item.innerText.toUpperCase();
	})


```