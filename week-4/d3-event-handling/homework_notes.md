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






# LEARNINIG OBJECTIVES


# 1. 
Given an HTML page that includes <button id="increment-count">I have been clicked <span id="clicked-count">0</span> times</button>, write JavaScript that increases the value of the content of span#clicked-count by 1 every time button#increment-count is clicked.

```js

window.addEventListener("DOMContentLoaded", event => {

  // grab button and span elements by their id
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");
  
  // counter variable
  let clicks = 0;
  button.addEventListener("click", event => {

    // incremenet counter
    clicks += 1;
    count.innerHTML = clicks;
  });
});

```



# 2. 
Given an HTML page that includes <input type="checkbox" id="on-off"><div id="now-you-see-me">Now you see me</div>, write JavaScript that sets the display of div#now-you-see-me to "none" when input#on-off is checked and to "block" when input#on-off is not checked.


```js
window.addEventListener("DOMContentLoaded", event => {
  // store the elements we need in variables
  const checkbox = document.getElementById("on-off");
  const divShowHide = document.getElementById("now-you-see-me");

  // add an event listener for the checkbox click
  checkbox.addEventListener("click", event => {

    // use the 'checked' attribute of checkbox inputs
    // returns true if checked, false if unchecked
    if (checkbox.checked) {

      // if the box is checked, show the div
      divShowHide.style.display = "block";

      // else hide the div
    } else {
      divShowHide.style.display = "none";
    }
  });
});

```


# 3. 
Given an HTML file that includes <input id="stopper" type="text" placeholder="Quick! Type STOP">, write JavaScript that will change the background color of the page to cyan five seconds after a page loads unless the field input#stopper contains only the text "STOP".

```js

window.addEventListener("DOMContentLoaded", event => {
  const stopCyanMadness = () => {

    // get the value of the input field
    const inputValue = document.getElementById("stopper").value;

    // if value is anything other than 'STOP', change background color
    if (inputValue !== "STOP") {
      document.body.style.backgroundColor = "cyan";
    }
  };

  setTimeout(stopCyanMadness, 5000);
});
```







# 4. 
Given an HTML page with that includes <input type=”text” id=”fancypants”>, write JavaScript that changes the background color of the textbox to #E8F5E9 when the caret is in the textbox and turns it back to its normal color when focus is elsewhere.

```js

window.addEventListener("DOMContentLoaded", event => {
  const input = document.getElementById("fancypants");

  // when we click on the input
  input.addEventListener("focus", event => {
    event.target.style.backgroundColor = "#E8F5E9";
  });

  // when we click away from that input
  input.addEventListener("blur", event => {
    event.target.style.backgroundColor = "initial";
  });
});
```







# 5.
Given an HTML page that includes a form with two password fields, write JavaScript that subscribes to the forms submission event and cancels it if the values in the two password fields differ.

```js

window.addEventListener("DOMContentLoaded", event => {
  // get the form element
  const form = document.getElementById("signup-form");

  const checkPasswordMatch = event => {
    // get the values of the pw field and pw confirm field
    const passwordValue = document.getElementById("password").value;
    const passwordConfirmValue = document.getElementById("confirm-password")
      .value;
    // if the values are not equal, alert the user
    // otherwise, submit the form
    if (passwordValue !== passwordConfirmValue) {
      // prevent the default submission behavior
      event.preventDefault();
      alert("Passwords must match!");
    } else {
      alert("The form was submitted!");
    }
  };
  // listen for submit event and run password check
  form.addEventListener("submit", checkPasswordMatch);
});

```








# 6. 
Given an HTML page that includes a div styled as a square with a red background, write JavaScript that allows a user to drag the square around the screen.

```js
<div id="red-square" draggable="true"></div>
```

- dragstart handler: occurs when the user clicks the mouse and starts dragging
- dragenter handler: occurs when element enters drop zone
- dragover handler: occurs when the dragged element is over the drop target
- dragleave handler: occurs when the dragged element leaves the drop target
- drop handler: occurs when the user releases the mouse click and "drops" the element


# 7. 
Given an HTML page that has 300 DIVs, create one click event subscription that will print the id of the element clicked on to the console.

```js
window.addEventListener("DOMContentLoaded", event => {
  // Add a click event listener on the document’s body
  document.body.addEventListener("click", event => {
    // console.log the event target’s ID
    console.log(event.target.id);
  });
});
```


# 8. 
Identify the definition of the bubbling principle.

- when an event happens on an element, 
- it first runs the handlers on it, 
- then on its parent, 
- then all the way up on other ancestors.

```js
  <form onclick="alert('form')">
    form
    <div id="stopper" onclick="alert('div')">
      div
      <p onclick="alert('p')">
        P
      </p>
    </div>
  </form>
```