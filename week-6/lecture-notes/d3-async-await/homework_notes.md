# MODERN PROMISES WITH ASYNC/AWAIT


Overview
- designed to allow JS devs to write true synchronous code



```js

// USING .THEN
// - not very clean

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("happy dog");
    }, 1000);
  });
}

function doChores() {
  console.log("before walking the dog");
	walkTheDog()
		.then((res) => {
			console.log(res);
			console.log("after walking the dog");
  	});
}

doChores();



```


Function Declaration with `async`
- creates a function that returns an implicit promise containing the result
- allows us to utilize `await` keyword inside


Awaiting Promises with `await`
- used to wait for promise to be fulfilled or rejected
- rest of code in `async` func waits until promise is fulfilled to execute
- can only use inside an `async` function


```js

// USING ASYNC/AWAIT


function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("happy dog");
    }, 1000);
  });
}

async function doChores() {
	console.log("before walking the dog");
	const res = await walkTheDog();
	console.log(res);
	console.log("after walking the dog");
	return res.toUpperCase();
}


// async funcs return a promise
// return value is value promise fulfills with
// passed along to following .thens
doChores()
	.then(res => console.log(res))


```




Error Handling
- `async`/`await` results in synchronous execution
- can use normal `try...catch` block to handle errors if promise rejected


```js

function action() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('uh-oh'); // rejected
    }, 3000);
  });
}

async function handlePromise() {
  try {
    const res = await action();
    console.log('resolved with', res);
  } catch (err) {
    console.log('rejected because of', err);
  }
}

handlePromise();



```





# REVISITING BASICS OF HTML


Three Components of HTML:
1. tag
   - any text written between `<>` will not display in browser
	 - tells browser how to display text located between opening and closing tag
	 - most come in pairs (<h1></h1>) 
2. element
	 - the opening tag, closing tag, and content between opening and closing tags
3. attributes
	 - used to define additional info about aan element
	 - located inside opening tag
	 - usually come in key value pairs (`name="value"`)
	 - attributes common to ALL HTML elements `id` and `class`



Whitespace, tags, attributes, content
- browser ignores whitespace wheen parsing HTML doc
- dont put spaces between opening ankle bracket and tag name


```html

<!--  bad -->
< h1 name="value">content</h1>
```