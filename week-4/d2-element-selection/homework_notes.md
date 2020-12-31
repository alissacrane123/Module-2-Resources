# ELEMENT SELECTION 1


Document Object Modal (DOM)
- object oriented representation of HTML doc or web page
- doc represented as objects or nodes
- allows us to access manpulate our doc using javascript
- depicted as tree with speceific hierarchy



DOM API
- used to reference, create, update DOM elements
- methods:
	1. `document.getElementById("<id>")`
		 - returns single element
	2. `document.querySelectorAll("<query>")`
	   - returns NodeList (static)
	3. `document.getElementsByClassName("<class-name>")`
		 - returns HTMLCollection (live)
	3. `document.getElementsByTagName("<tag-name>")`
		 - returns HTMLCollection (live)



NodeList vs HTML Collection
- collections of nodes
- NodeList:
	* similar to array but cant use most array methods
	* can use forEach, check length
	* can convert to array using `Array.from()`
- HTMLCollection:
	* two methods: `item` && `namedItem`
	* cannot call forEach



Creating New DOM Elements

```js

const addElement = () => {
  // create a new div element
  const newElement = document.createElement("h1"); // <h1></h1>

  // set the h1's id
  newElement.setAttribute("id", "sleeping-giant");

  // and give it some content
  const newContent = document.createTextNode("Jell-O, Burled!");
  // add the text node to the newly created div
	newElement.appendChild(newContent);
	

	// same as createTextNode
	newElement.innerText = "Jell-O, Burled!";




  // add the newly created element and its content into the DOM
  document.body.appendChild(newElement);
};
// run script when page is loaded
window.onload = addElement;

```



# ELEMENT SELECTION 3

window.onload
- waits for page to load
- waits for stylesheets, images, scripts, links, etc
- dont need to wait for stylesheets, images bc JS isnt dependent on them
	* could take a long time for big images


DOMContentLoaded
- event fires when html doc has loaded and parsed
- doesnt wait for stylesheets, images, subframes


```js

// add CSS after elements are loaded

window.addEventListener('DOMContentLoaded', () => {
	document.body.className = 'i-got-loaded';
})

```

# ELEMENT SELECTION 4




Element.innerHTML
- used to get/set HTML contained within an element


```js





// generate a random number for each list item
const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};

// listen for DOM ready event
window.addEventListener("DOMContentLoaded", event => {
  // push 6 LI elements into an array and join
  const liArr = [];
  for (let i = 0; i < 6; i++) {
    liArr.push("<li>" + getRandomInt(10) + "</li>"); // <li>5</li>
  }
	const liString = liArr.join(" "); // "<li>5</li> <li>5</li> <li>5</li> <li>5</li>"

  // insert string into the DOM using innerHTML
  const listElement = document.getElementById("your-worst-enemy");
  listElement.innerHTML = liString;
});







```



Inserting Date Object


```js

window.addEventListener("DOMContentLoaded", event => {
  const title = document.getElementById("title");
  const time = () => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    title.innerHTML = hours + ":" + minutes + ":" + seconds;
  };
  setInterval(time, 1000);
});
```