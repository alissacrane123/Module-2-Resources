# COMMON PAGE EVENTS


addEventListener() vs onclick
- onclick
	* just a property
	* will be overwrittene
	* inline JS is discouraged (highest specificity)
- addEventListenerr
	* bind event handler to element
	* can assign multiple handlers


```JS

// format for adding an event listener


// 1. using named callback
let callback = (event) => {
	// what to do when event occurs
}
element.addEventListener('<EVENT-NAME>', callback);


// 2. using anonymous callback
element.addEventListener('<EVENT-NAME>', (event) => {
	// what to do when event occurs
})

```

Common Events Overview
- "click" : fires when associated element has been clicked
- "input" : fires when value of INPUT, SELECT, or, TEXTAREA has changed





# INPUT FOCUS AND BLUR EVENTS


Events Overview
- "focus" : fires when element has received focus (when user clicks in field)
	 * typically used for inputs
- "blur" : fires when element has lost focus (user clicks away0)
	 * typically used for inputs



# FORM VALIDATION


the "submit" event
- forms have special behavior 
- clicking a button in a <form></form> element triggers a "submit" event on form
- attach eventlistener for "submit" to the form


summary
- clicking on the BUTTON triggers a "submit" event on the FORM



Default Actions
- some events have default behavior 
	- behavior that will occur when event fires, in addition to code in event handler
	- ex: default behavior for a form submission is to refresh the page
	- ex: default behavior of clicking on a link is to follow the URL
- sometimes we don't want the default behavior to occur
	- might not want the page to refresh
- `event.preventDefault()` : method called on event object to prevent default behavior




```html

<form id="my-form">
	<input type="text" placeeholder="Name" >
	<button>Submit</button>
</form>

```

```js

document.addEventListener('DOMContentLoaded', (event) => {

	let form = document.getElementById('my-form');

	form.addEventListener('submit', (event) => {
		// prevent default behavior of form submission (page refresh)
		event.preventDefault();
		// do something
	})
})

```


# DRAG AND DROP




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






# CLICK EVENTS WITH TARGETS





Event Target and Current Target
- `event.target`: element on which event occurred (ele you clicked on)
- `event.currentTarget`: element the event handler is attached to




# THE BUBBLING PRINCIPLE



The Bubbling Principle
- when event occurs on an element, it first will run the handlers on that element, then on its parent, then on that parents parent and so on
- i.e event bubbles up through DOM, causing other events to happen
- SOME events do not bubble (focus, blur)




`event.stopPropagation()`
- prevents event from bubbling to ancestors


* TODO : SHOW USING ONCLICK

```JS
	middleDiv.onclick = (event) => {
		event.stopPropagation();

		console.log('middle div event triggered');
	}
```




`event.stopImmediatePropagation()`
- prevents bubbling and prevents other handlers on current element from running
- no other handlers execute after




* TODO: SHOW USING MULTIPLE HANDLERS / STOP IMMEDIATE

```js
	middleDiv.addEventListener('click', event => {
		event.stopPropagation();
		// event.stopImmediatePropagation();
	})

	middleDiv.addEventListener('click', event => {
		console.log('middle div event triggered');
	})
```




```html

<body onclick="console.log('the event will not reach this handler')">
	<button onclick="event.stopPropagation()">Click Me</button>
</body>

```


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



