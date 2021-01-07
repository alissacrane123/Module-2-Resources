


# VIDEO 1 - EVENT TARGET


DOM Events
- notify code of interesting things that have taken place
- each event represented by an object
- events have additional properties/methods defined on them
	- can use to get additional information about what happened


Event Listeners
- attach an event listener to relevant element in the DOM
- `Element.addEventListener("<event-name>", eventHandler)`
- event handler function will be invoked when event occurs on specified el



Event Target and Current Target
- `event.target`: element on which event occurred (ele you clicked on)
- `event.currentTarget`: element the event handler is attached to



* TODO = console.log the id of the element we clicked on 


Note:
- could attach an event listener to each div, but thats a lot of code
- would have to remember to add event listners for any additional items
  you add to the collection
- much better to attach single event listener to parent element
- use event.target to access the div that triggered the event
- limiting num of eventListeners improves performance of application


```js
	let divs = document.querySelectorAll('div');

	divs.forEach(div => {
		div.addEventListener('click', () => {
			console.log(div.id)
		})
	})

	let list = document.getElementById('grid');

	list.addEventListener('click', (event) => {
		console.log('event: ', event)

		// the target will be whichever element triggers event
		// (the element we click on)
		console.log('event.target : ', event.target);

		// can key into properties of that element
		console.log('event.target.id: ', event.target.id)
		
		// currentTarget is the element the eventListener is attached to 
		// thus, currenTarget will always be the UL in this example
		console.log('event.currentTarget : ', event.currentTarget);


	});



	// removing elements 
	// let div2 = document.getElementById('grid__item-2')
	// grid.removeChild(div2)
	// div2.remove()
```




# VIDEO 2 - COMMON PAGE EVENTS


Common Events Overview
- "click" : fires when associated element has been clicked
- "input" : fires when value of INPUT, SELECT, or, TEXTAREA has changed



1. update click count via span


```js

	// method #1
	let button = document.getElementById("my-button");
	let span = document.getElementById("my-span");

  button.addEventListener("click", (event) => {
    span.innerHTML = `${event.detail}`;
  });
	

	// method #2
	let button = document.getElementById("my-button");
	let span = document.getElementById("my-span");
  let count = 0;
  button.addEventListener("click", (event) => {
    count++;
    span.innerText = count;
  });

```





2. create dog image when button is clicked


```js


  let showDogButton = document.getElementById("show-dog-button");
  let dogDiv = document.getElementById("dog-img");

  showDogButton.addEventListener("click", (event) => {

    // METHOD #1
    let img = document.createElement("img");
    img.src = "./dog-pic.jpg";

    // only add the image if there isn't already one there
    if (dogDiv.innerHTML === "") {
      dogDiv.appendChild(img);
    }


    // METHOD #2
    // let img = '<img src="./dog-pic.jpg" >';
    // dogDiv.innerHTML = img;
	});


```


3. handling user input


```js
  let userInput = document.getElementById("user-input");
  let myDiv = document.getElementById("my-div");


  userInput.addEventListener("input", (event) => {
    let value = event.target.value;

    // if (validColors.includes(value)) {
      myDiv.style.backgroundColor = value;
    // }
  });

```

4. pizza demo

```js
	// 4. pizza demo using classes

  let options = document.getElementById("options");

  options.addEventListener("click", (event) => {

    if (event.target.type === "checkbox") {
			let checkbox = event.target;
			// event.target.id = 'mushroom'
      let toppings = document.getElementsByClassName(event.target.id);
			
      if (checkbox.checked) {
				let array = Array.from(toppings);
        array.forEach((item) => {
          item.classList.remove("invisible");
				});
				
				// for (let i = 0; i < toppings.length; i++) {
				// 	let item = toppings[i];
				// 	item.classList.remove('invisible')
				// }
      } else {
        Array.from(toppings).forEach((item) => {
          item.classList.add("invisible");
        });
      }
    }
  });

```


5. go over difference between addEventListener and onclick
- onclick
	* just a property
	* will be overwritten
	* inline JS is discouraged (highest specificity)
- addEventListenerr
	* bind event handler to element
	* can assign multiple handlers

```js

	let otherButton = document.getElementById('other-button');

	// using onclick
	otherButton.onclick = () => console.log('the button was clicked!')
	otherButton.onclick = () => console.log('we will only see this')


	// using event listenerr
	otherButton.addEventListener('click', () => console.log('we will see this!'))
	otherButton.addEventListener('click', () => console.log('we will see this too'))

```









# VIDEO 3 - FORM VALIDATION




Events Overview
- "focus" : fires when element has received focus (when user clicks in field)
	 * typically used for inputs
- "blur" : fires when element has lost focus (user clicks away0)
	 * typically used for inputs
- "submit" : fires when form's submit button is clicked
	 * attach event listener to form element



* TODO: SHOW THEM FOCUS / BLUR INPUT EVENTS

```js

// BLUR/FOCUS DEMO
// - when an input receives focus, change backgroundColor 
// to '#00808042'
// - when an input loses focus, unset the backgroundColor

let inputs = document.querySelectorAll('.form__field')

inputs.forEach(input => {
	input.addEventListener('focus', event => {
		input.style.backgroundColor = '#00808042'
	})

	input.addEventListener('blur', event => {
		input.style.backgroundColor = 'unset'
	})
})
```

the "submit" event
- forms have special behavior 
- clicking a button in a <form></form> element triggers a "submit" event on form
- attach eventlistener for "submit" to the form




Default Actions
- some events have default behavior 
	- behavior that will occur when event fires, in addition to code in event handler
	- ex: default behavior for a form submission is to refresh the page
	- ex: default behavior of clicking on a link is to follow the URL
- sometimes we don't want the default behavior to occur
	- might not want the page to refresh
- `event.preventDefault()` : method called on event object to prevent default behavior




* TODO: SHOW THEM FORM SUBMISSION EVENT AND VALIDATIONS



```js

	// FORM VALIDATION DEMO 

	form.addEventListener('submit', event => {
		event.preventDefault();
		let errorsContainer = document.getElementById('errors');
		errors = [];
		errorsContainer.innerHTML = '';

		checkPassword();
		checkEmail();
		checkInputs();

		if (errors.length === 0) {
			body.innerHTML = '<h2>Your form was successfully submitted, woohoo</h2>'
		} else {

			errors.forEach(error => {
				let li = document.createElement('li');
				li.innerText = error;
				errorsContainer.appendChild(li);
			})
		}
	});
	
```


# VIDEO 4 - BUBBLING PRINCIPLE




Event Bubbling
- event bubbles up through DOM, causing other events to happen



Event Propogation
- blanket term for event bubbling and event capturing
- phases:
	1. Event Capture Phase
	   - event works from window to target
		 - capturer listeners are called
		 - capturer: listener registered with third param as `true`
	2. Event Target Phase
		 - listeners registered on event target will be called
	3. Event Bubbling Phase
		 - event bubbles up through DOM
		 - invokes registered event handlers on ancestor elements






# VIDEO 5 - DRAG AND DROP



Drag Events
- dragstart handler: occurs when the user clicks the mouse and starts dragging
- dragenter handler: occurs when element enters drop zone
- dragover handler: occurs when the dragged element is over the drop target
- dragleave handler: occurs when the dragged element leaves the drop target
- drop handler: occurs when the user releases the mouse click and "drops" the element



Drag and Drop Process
1. add attribute `draggable="true"` to element you want to drag
2. register `dragstart` event on draggable element
   - fires when user clicks the mouse and starts dragging
   - event handler should set relevant data in `dataTransfer` object
3. can subscribe to four events in "drop zone"
	 - `dragenter`, `dragover`, `dragleave`, `drop`
   - must `preventDefault` on `dragenter` and `dragover` events in order for `drop` event to fire



Data Transfer Object
- includes drag event's state (i.e type of drag being done - move/copy)
- includes drag's data (one or more items)


