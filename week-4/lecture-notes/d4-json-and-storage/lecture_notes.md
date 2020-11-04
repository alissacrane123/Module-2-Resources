# JAVASCRIPT OBJECT NOTATAION (JSON)

Web Storage API
- available with HTML5 
- includes Local Storage and Session Storage
- data stored as JSON 



When to use Web Storage API?
- can store more data than cookies
- ideal for storing multiple key-value pairs
- data can only be saved as a string
- with web storage, data stored on users machine
	- only accessible client side
- cookies can be read both server and client side


JSON Overview
- JSON is just a string
- looks a lot like JS syntax 
- invented by avid JS developer (Douglas Crockford)
- commonly used to replace XML
  - used to be the common format for data sent between computers
  - XML looks a lot like HTML
	- not as user friendly as JSON 


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


JS vs JSON
- arrays: quotes surrounding string elements must be escaped
- objects: keys in JSON must be surrounded by escaped quotations



# WEB STORAGE API



Web Storage API
- available with HTML5 
- includes Local Storage and Session Storage
- data stored as JSON 



Session Storage (`sessionStorage`)
- stores data for a session (until browser window/tab is closed)
- never transfers data to server
- storage limit of 5MB (much bigger than cookie)



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



* TODO: SHOW STORAGE DEMO



```js

// FORM DEMO WITH LOCAL STORAGE

  let storedEmail = localStorage.getItem("email");
  let storedFirst = localStorage.getItem("first");
  let storedLast = localStorage.getItem("last");

  let email = document.getElementById("email");
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");

  email.value = storedEmail;
  firstName.value = storedFirst;
  lastName.value = storedLast;

  function storeLoginInformation(event) {
    event.preventDefault();

    localStorage.setItem("email", email.value);
    localStorage.setItem("first", firstName.value);
    localStorage.setItem("last", lastName.value);
  }

  let form = document.getElementById("my-form");

  form.addEventListener("submit", storeLoginInformation);


```


```js

// SESSION STORAGEE
// data in sessionStorage is cleared when the page session ends
// page session lasts as long as the browser is open, and survives over page reloads and restores


  let storedEmail = sessionStorage.getItem("email");
  let storedFirst = sessionStorage.getItem("first");
  let storedLast = sessionStorage.getItem("last");

  let email = document.getElementById("email");
  let firstName = document.getElementById("first");
  let lastName = document.getElementById("last");

  email.value = storedEmail;
  firstName.value = storedFirst;
  lastName.value = storedLast;

  function storeLoginInformation(event) {
    event.preventDefault();

    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("first", firstName.value);
    sessionStorage.setItem("last", lastName.value);
  }

  let form = document.getElementById("my-form");

  form.addEventListener("submit", storeLoginInformation);

```



# COOKIES AND WEB STORAGE

Cookie
- small file stored on users computer
- included with http requests
- server sends data to browser, sent back on next req


What are cookies used for?
- used to store stateful info about user
	- ex: personal info, browser history, form inputs
	- session cookie for user login/validation
- expire at specified time



Creating Cookies with Javascript
- `document` interface represents web page loaded in browser
- cookies stored in browser
- thus: can use `document` to get/set cookies


Deleting Cookies
- set cookie's expiration date to date in past
- can manually delete in chrome dev tools



* TODO: SHOW COOKIE DEMO





