# THE BROWSER OBJECT MODEL 


Document Object Model (DOM)
- contains collection of nodes (HTML elements)
- nodes can be accessed and manipulated
- `document` object is a web page
- DOM represents obj hierarchy of that `document`


Browser Object Model (BOM)
- hierarchy of browser objects
	- document object is part of that hierarchy
- `window` is chief browser objecet
	- contians props and methods we can use to access different objects


Window Object
- `window.navigator`: ref to nav obj
- `window.screen`: ref to screen obj assoc with window
- `window.history`: ref to history obj
- `window.location`: gets/sets location or current URL of window
- `window.document`: ref to document obj
- all methods can can be shorted to just name, ie `document`


The Browser Diagram

1. User Interface
   - what users interact with
	 - address bar, back/forward buttons, bookmarks, etc.
	 - everything except page content

2. Browser Engine
	 - manages interactions between UI and rendering engine

3. Render Engine
	 - displays requested page content
	 - parses HTML and CSS and renders parsed content

4. Networking
	- handles network calls like HTTP req

5. Javascript Interpreter
	 - parses and executes JS code

6. UI Backend
	 - used for drawing basic widgets

7. Data Storage
	 - persistence of data in browser (i.e cookies)






# REQUEST / RESPONSE CYCLE


Overview
- browsing web is series of req and res
- request: searching for info or navigating to page
- response: what we expect to receive from req



Request / Response Cycle Diagram

1. Client Side (browser)
	 - what user interacts with

2. Internet
	 - series of client req and server responses

3. Server side 
	 - handles req and sends res
	 - more on this later



The role of the browser
- used to make req to server
	- can view req/res in Network Tab of Developer Tools
- parses HTML, CSS, JS
- renders info to user by constructing & rendering DOM tree







# RUNNING JS SCRIPTS IN BROWSER


Using the Window API
- can execute window code in developer tools console



# Context, Scope, and Anonymous Functions


Overview
1. every function has a context and a scope
2. context refers to obj that owns the function
	 - value of `this` inside a given func
3. context is usually determined by how func is invoked


```js

// anonymous func is method of foo object
// `this` reeturns the object itself

const foo = {
	bar: function() {
		return this;
	}
}

console.log(foo.bar() === foo) // true



// unbound funcs or funcs not scoped inside another
// prints window obj if run in browser
(function() {
	console.log(this)
})() 

```


when func is called in global scope, `this` defaults to global context
-  when running code in browser, `window` object is global context



running a script on DOMContentLoaded
- runs when document has been loaded
- doesnt wait for stylesheets, images, subframes to load


running a script when `window.onload`
- waits for everything in document to load before running script


ways to prevent script from running until page loads
1. use DOMContentLoaded event in external JS file
2. put script at bottom of HTML file
	 - HTML builds DOM tree in order of how HTML file is structured
	 - whatever is on top will be loaded first
3.  add attribute to script tag like `async` or `defer`



using `async` to control when script is run
- script is fetch asynchronously
- after script is fetched, HTML parsing is paused to execute script, then resumes


using `defer`
- script is fetch asynchronously
- executed only after HTML parsing is finished







# COOKIES


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


```js
const firstCookie = "myDog=Bodhi";
document.cookie = firstCookie;

const secondCookie = "myOtherDog=Lucy";
document.cookie = secondCookie;

document.cookie //=> "myDog=Bodhi; myOtherDog=Lucy"

```


Deleting Cookies
- set cookie's expiration date to date in past
- can manually delete in chrome dev tools

```js

document.cookie = "myDog=; expires = Thu, 01 Jan 1970 00:00:00 GMT";
document.cookie //=> ""

```
