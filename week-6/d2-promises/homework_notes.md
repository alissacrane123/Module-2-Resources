# ASYNC / SYNC REVIEW

synchronous
- execution of additional JS code must wait until current command completes (blocking)
- there is an inherent order 


asynchronous
- can continue to execute another command even if current hasnt completed (non blocking)
- may not be guarenteed order 
- ex: fetching from an api, querying database, settimeout, setinterval


JS is single threaded
- handles new events only after current command has completed
- at any instance in program, only one command is executing


Call Stack
- structure used to track current function queues
	- tracks current task in progress
- where JS code is pushed and executed one by one 
- if statement is async, code is forwarded to message queue


Message Queue
- structure used to track handling of events (messages)
	- "waiting line for events" 
	- new items added to back of line (enqueue)
	- items removed from front of line (dequeue)
- add message to queue when event occurs 
	- ex: when setimeout invokes callback
- begin processing events when call stack is empty
- added one by one to callstack


Event Loop
- model of execution JS uses
- consists of call stack and message queue
- continuously adds messages from message queue to stack once stack is empty



asynchronous non-blocking Input/Output model
- JS uses callback mechanism to prevent blocking of main thread on I/O operations
- async operations specify a callback 
	- cb is func to be executed when result of async operation is ready
- callback added to message queue
	- processed when stack is empty 


"JavaScript Callback Hell"
- when result of cb makes another async call, we must nest callbacks
- must also handle errors for each I/O opertaion
- nested error handling and callbacks makes code hard to read

```js

function grindTheBeans(nextTask) {
  setTimeout(() => {
    console.log('done grinding the coffee beans');
    nextTask();
  }, 1000)
}

function heatTheWater(nextTask) {
  setTimeout(() => {
    console.log('done heating the water');
    nextTask();
  }, 500)
}

function addBeansToWater(nextTask) {
  setTimeout(() => {
    console.log('done adding beans to water');
    nextTask();
  }, 1000)
}

// callback craziness

function makeCoffee() {
	grindTheBeans(() => {
		heatTheWater(() => {
			addBeansToWater(() => {
				console.log('coffee is ready, enjoy')
			})
		})
	})
}

makeCoffee()

```


# PROMISES 

Overview 
- introduced in 2015 to encourage writing async code, in a way that appears synch
- issue with async code is it can be hard to figure out when everything is happening



The Problem
- issue with async code is there is no guareenteed order
- what if we want one async task to start only when another async task has completed?


The Callback Solution
- could use callbacks to solve the issue
- pass each step to previous step as a callback
- allows us to specify order asyc funcs are invoked
- issue: nested callbacks become difficult to read


The Promise Solution
- promise: object that may produce a single value some time in the future, either: 
	- resolved value (like reading a file or getting JSON from a Web site) 
	- reason that it’s not resolved (i.e file doesn't exist or the Web site is down)
- can attach callbacks to handle the fulfilled value or the reason for rejection




Promises
- receives callback parameter that accepts two callbacks as arguments:
	1. resolve: invoked when async operaataion waas successful
	2. reject: called whenever an error has occurred
- promises are eager:
	- starts executing code inside as soon as the promise constructor is invoked

```js

let promise = new Promise((resolve, reject) => {
	// some async code would go here
	resolve();
})

```



Promises have 3 states
1. Pending: The Promise obj has not been resolved yet
2. Fulfilled: Whatever operation the Promise represented succeeded and your success handler will get called
3. Rejected: Whatever operation the Promise represented failed and your error handler will get called

Promise objects have the following methods available on them:
1. `then(successHandler, errorHandler)`
2. `catch(errorHandler)`
- ways to handle promise when it leaves pending state
- handle the state change from pending to either fulfilled or rejected

Success Handler: function that has one parameter, the value that a fulfilled Promise has
Error Handler: function that has one parameter, the reason that the Promise failed



```js
const { readFile } = require("fs");

function readFilePromise(path) {
	return new Promise((resolve, reject) => {
		// third argument is callback function
		// cb is invoked when file has been read 
		readFile(path, 'utf8', (err, content) => {
			if (err) {
				// if error occurs, promise is rejected
				reject(err)
			} else {
				// if no error, promise resolves with content as value
				resolve(content);
			}
		})
	})
}

// readFilePromise returns a promise so can chain .then
readFilePromise('manifest.txt')
	// if promise is fulfilled, code in .then is executed
	.then(manifest => {
		const fileList = manifest.split('\n');
		console.log('Reading', fileList.length, 'files');
	});

```

above code is okay but still difficult to read...



# Chaining `then`s


- Each Promise has a then method that handles what happens when the Promise transitions out of the pending state

- Each then method returns a Promise that transitions out of its pending state when the then that created it completes

- ability to break apart the two lines of the success handler in the previous example to two one-line functions that do the same thing with less code



```js
// Get a Promise that fulfills when the file is read
// with the value of the content of the file.
const filePromise = readFilePromise("manifest.txt");

// Register a success handler that takes the fulfilled
// value of the filePromise in the parameter named "manifest",
// which is the content of the file, split it on newline
// characters, and return a Promise whose fulfilled value is
// list of lines.
const fileListPromise = filePromise.then(manifest => manifest.split("\n"));

// Register a success handler to the fileListPromise that
// receives the fulfilled value in the "fileList" parameter
// and returns a Promise whose fulfilled value is the length 
// of the fileList array.
const lengthPromise = fileListPromise.then(fileList => fileList.length);

// Register a success handler to the lengthPromise that
// receives the fulfilled value in the "numberOfFiles" parameter
// and uses it to print the number of files to be read.
lengthPromise.then(numberOfFiles =>
  console.log("Reading", numberOfFiles, "files")
);


```

What is happening?
- Each call to then creates a new Promise object
- Each promise resolves to value of output returned from previous success handler



# Handling failure with `then` - Incorrectly

```js
readFilePromise("manifest.txt")
  .then(
		// success handler
		manifest => manifest.split("\n"),
		// error handler
    reason => console.err("Badness happened", reason)
  )
  .then(fileList => fileList.length)
	.then(numberOfFiles => console.log("Reading", numberOfFiles, "files"));
	
```


if error occurs:
1. first Promise object goes into rejected state
2. err reason gets passed to the first `then`
3. err is printed
4. second promise is fulfilled b/c err handler completes w/o any issues
5. promise returned by first then does not get rejected
6. third promise resolves with value returned by `console.err` which is undefined
7. second then relies on obj with length prop => undefined doesnt so exception raised
8. causes promise returned by second then to be rejected
9. b/c promise is rejected, third then will try to run error handler but there isn't one
10. in browser nothing happens, in node `UnhandledPromiseRejectionWarning`


# Handling failure with `then` - Correctly

```js
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(
    numberOfFiles => console.log("Reading", numberOfFiles, "files"),
    reason => console.err("Badness happened", reason)
  );
```

if error occurs:
1. First then: I do not have an error handler. I will pass the error on and not run the success handler.
2. Second then: I do not have an error handler. I will pass the error on and not run the success handler.
3. Third then: I have an error handler and will run it.

code looks better but besides double handler code when passing in two funcs



# Handling failure with `catch`

solution to design issue
- `then` can  handle success and failure
- successHandler is called with value of the operation of the Promise when Promise is fulfilled
- errorHandler is called when error condition occurs, passing along the reason
- if Promise is rejected and no error handler exists, then that `then` is skipped
- if errorHandler is called and does not raise an exception, next Promise is fulfilled and successHandler called



```js
readFilePromise("manifest.txt")
  .then(manifest => manifest.split("\n"))
  .then(fileList => fileList.length)
  .then(numberOfFiles => console.log("Reading", numberOfFiles, "files"))
  .catch(reason => console.err("Badness happened", reason));
```


catch acts like an errorHandler
- if it doesnt throw an exception, then it returns a Promise in fullfilled state
with whatever return value is




# Using `Promise.all` for many future values


Imagine we have 3 files we want to read with `readFilePromise` method
- want to wait until all three are done
- want them to read files simultaniously
- how to manage 3 promises at once?



```js
const values = [
  readFilePromise("file-boop.txt"), // this is a Promise object: pending
  readFilePromise("file-doop.txt"), // this is a Promise object: pending
  readFilePromise("file-goop.txt"), // this is a Promise object: pending
];

const superPromise = Promise.all(values);
```



superPromise is a Promise object in pending state
- inside is an array of Promise objects in pending statese
- if any promise transitioned to rejeceted, then superPromise is rejected immediately
- superPromisee has same reason as inner Promise failed with
- when all 3 Promise objects transition are fulfilled, so will superPromise
- value will be array of all the resolved values of original array



```js
superPromise
  .then(values => console.log(values))
  .catch(reason => console.error(reason));
```



if function successfully reads file
- values passed to `then` come from values inside superPromise
- values = content of file-boop.txt, file-doop.txt, file-goop.txt


if something goes wrong
- `catch` is called with the error reason from Promise obj that first failed


`Promise.all`
- accepts array of values
- returns a new Promise obj in pending state
- converts all non-Promise values into Promise obj that are immed. fulfilled
- if any Promise transitions to rejected, superPromise is rejected with same reason
- if all inner promises fullfilled, superpromise transitions to fulfilled
- value is array populatedk in order, of resolved values of original array





# Flattening Promises


# Error Handling

problems with below code
- an error originating in save() will be caught by handleError
- an error originating in handleSuccess() will be swallowed
- promise returned from .then() will be rejected

```js
  save().then(
    handleSuccess,
    handleError
  );
```


below code is better because
- catch will handle rejections from either save() or handleSucces()


```js
  save()
    .then(handleSuccess)
    .catch(handleError)
  ;
```

what if you want errors to be handled differently?

```js
  save()
    .then(
      handleSuccess,
      handleSaveError
    )
    .catch(handleSuccessError)
  ;
```

best practice to always have a .catch()