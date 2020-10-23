# WEB STORAGE API



Web Storage API
- available with HTML5 
- includes Local Storage and Session Storage


Session Storage (`sessionStorage`)
- stores data for a session (until browser window/tab is closed)
- never transfers data to server
- storage limit of 5MB (much bigger than cookie)

```js
// Get the text field that we're going to track
let field = document.getElementById("field");

// See if we have an autosave value
// (this will only happen if the page is accidentally refreshed)
if (sessionStorage.getItem("autosave")) {
  // Restore the contents of the text field
  field.value = sessionStorage.getItem("autosave");
}

// Listen for changes in the text field
field.addEventListener("change", function () {
  // And save the results into the session storage object
  sessionStorage.setItem("autosave", field.value);
});

```


Local Storage (`localStorage`)
- stores data with no expiration date
- deleted when clearing the browser cache
- has max storage limit in browser



When to use Web Storage API?
- can store more data than cookies
- ideal for storing multiple key-value pairs
- data can only be saved as a string
- with web storage, data stored on users machine
	- only accessible client side
- cookies can be read both server and client side


Common Uses for Web Storage
- shopping cart
- input data on forms
- user preferences


Common Cookie Uses
- user's identification info
- users session ID after login











# JAVASCRIPT OBJECT NOTATAION (JSON)


Overview
- JSON is just a string
- looks a lot like JS syntax 
- invted by avid JS developer (Douglas Crockford)
- commonly used to replace XML
  - used to be the common format for data sent between computers
  - XML looks a lot like HTML
	- not as user friendly as JSON 



JavaScript Literals Review
- a JS literal is a value that you literally type
- ex literals: `true`, `7`, `["one", "two"]`, `{ key: value }`


JSON representations of JS literals
- turns JS literal into a string representation
- `true` => `"true"`
- `null` => `"null"`
- `12.34` => `"12.34"`


String literals in JSON
- JSON always uses double quotes for strings
- interior quotation marks are escaped with `\`
- JSON requires strings to be on one line
	- represent new line with `\n`

```JS
'this is "text"' => "this is \"text\""

```

Array literals in JSON
- same as JS but wrapped in quotes
- `[1,2,3]` => `"[1,2,3]"`


Object literals in JOSN
- keys in JSON must be surrounded by quotes and escaped
- `{ person: true, name: "Alissa" }` => `"{ \"person\": true, \"name\": \"Alissa\" }"`



Terminology
- serialization
  - turning data into string (or some value like "binary") so program can send data to other computer
- deserialization
	- take text and turn it into data



Built in JSON Object
- built in methods we can use to manipulate our data
- `JSON.stringify(value)`
	- turns value passed into it into a string
- `JSON.parse(str)`
  - turns JSON-formatted string into JS object

```js

let array = [1, 'hello, "world"', 3.14, { id: 17 }];
let jsonArray = JSON.stringify(array);
console.log(jsonArray); // [1, "hello, \"world\"", 3.14, {"id":17}]

console.log(JSON.parse(jsonArray)) //  [1, 'hello, "world"', 3.14, { id: 17 }];
```





# MORE WEB STORAGEE


Overview
- web storage exists in window as an object
- can access via `window.localStorage` or `window.sessionStorage`
- can omit "window" part


Interacting with Local Storage
```js

// setting items with local storage
// localStorage.setItem(key, value)

	localStorage.setItem('username', 'Alissa');
	localStorage.setItem('TAs', '["James", "Brad", "Kristen", "Senyo"]');


// retrieving items with local storage
// localStorage.getItem(key)

	const username = localStorage.getItem('username');
	const TAs = localStorage.getItem('TAs');

	console.log(username); 
	console.log(TAs); 


```


JSON and Local Storage
- data is stored as JSON (string)
- can parse JSON in order to work with it as a regular JS object
- `JSON.parse(string)` turns string into JS object

```js

	localStorage.setItem('TAs', '["James", "Brad", "Kristen", "Senyo"]');

	const TAs = localStorage.getItem('TAs');

	console.log(typeof TAs); // string

	const parsedTAs = JSON.parse(TAs);

	console.log(typeof parsedTAs); // object
```