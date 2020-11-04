# ASYNC/SYNC REVIEW


synchronous
- execution of additional JS code must wait until current command completes (blocking)
- there is an inherent order 


asynchronous
- can continue to execute another command even if current hasnt completed (non blocking)
- may not be guarenteed order 
- ex: fetching from an api, querying database, settimeout, setinterval



Call Stack
- structure used to track current task in progress
- where JS code is pushed and executed one by one 
- if statement is async, code is forwarded to message queue


Message Queue
- "waiting line for events" 
- structure used to track handling of events (messages)
	- new items added to back of line (enqueue)
	- items removed from front of line (dequeue)
- events added to callstack one by one once stack is empty


Event Loop
- model of execution JS uses
- consists of call stack and message queue
- continuously adds messages from message queue to stack once stack is empty




# PROMISES



The problem
- sometimes we dont want one task to start until another task completes
- difficult with async code b/c there is no guarenteed order



The Callback Solutionn
- can use callbacks to assign order to async tasks
- issue: nested callbacks become difficult to read



Why promises?
- used to handle async operations in JS 
- easier to manage when dealing with multiple async ops
- allow us to present async code in sync fashion



What is a promise?
- object that may produce some value in the future
- produces resolved value or reason async code didn't resolve
- eager: will start doing task as soon as promise constructor invoked




# VIDEO 1 - part_1.js 





1. the problem
   - issue with async code is there is no guareenteed order
   - what if we want one async task to start only when another 
     async task has completed?
	 - tasks will not complete in order we're invoking them




2. callback solution
   - could use callbacks like so to solve the issue
   - pass each step to previous step is a callback
   - allows us to specify order asyc funcs are invoked


3. callback issue
   - this can get super complicated super quickly 



4. enter promises
   - promise: object that may produce single value some time in future
   - global JS object as of ES6
   - create a promise like any other obj, using new keyword



5. promise pseudo code
   - promise constructor takes a function
   - that function has two callback arguments, resolve and reject
     * invoking resolve fulfills the promise
     * invoking reject rejects the promise



How promises work
- exists in three possible states
1. fulfilled: resolve was called
2. rejected: reject was called
3. pending: not yet fulfilled or rejected
- once settled (rejected/fulfilled) cannot be changed



6. example
   - promises are eager, code starts executing as soon as constructor is called
     - function param invoked as soon as promise created
   - if we invoke resolve, we're fulfilling the promise
   - if we invoke reject, we're rejecting the promise
	 - promise is in pending state until it is either fulfilled or rejected
	 - code is async so putting this console.log statement below will always
     show the pending state



* SHOW CONSOLE.LOG(MYPROMISE) BEFORE/AFTER REJECT/RESOLVE (LINE 160)
* SHOW CONSOLE.LOG(MYPROMISE)  (LINE 165)




7. how can we use promises to manage this async behavior ? using then!
   - `.then()` is a built in method you can call on promises
   - `.then(onFulfilled, onRejected)` accepts two params: 
	 - onFulfilled invoked after promise is fulfilled
		 - value resolve invoked with is passed as argument to callback
	 - onRejected invoked if promise is rejected (optional)
	   - reason (error message) passed as argument to callback


Process
- code in promise constructor executes
- if that code resolves the promise, invoke success handler
	- value promise resolves with is passed as argument to success handler
- if that code rejected the promise, invoke error handler
	- value promise rejects with (error) is passed as arg to error handler 




8. if promise rejected and you dont have an onRejected handler
    - results in unhandled promise rejection warning



9. .then always returns a new promise
    - this makes it possible to chain promises
    - value returned from promise is argument passed to next promise
    - thens executed in sequence, simulates sync behavior
    - makes it super easy to control order operations will occur



10. previously saw how we could provide onRejected cb to handle promise rejection
    - what if onRejected throws an error ?
    - unhandled promise rejection b/c theres nothing to catch that rejection
		- could keep chaining .thens but where does it end ?



11. catch is another method you can call on promises
    - will catch any error that occurs



The difference
- first example:
  * error occuring in myPromise will be caught
  * error occuring in handleSuccess will not be caught
- second example:
  * catch() will handle rejections in either myPromise or handleSuccses




12. example
    - catch will handle promise rejection and any errors thrown in .then cb


* SHOW HOW IT CATCHES ANY ERRORS THAT OCCUR


```js

let firstOnFulfilled = (result) => {
	console.log("resolved #1: ", result);
	return 42;

	// throw Error("error occurred in firstOnFulfilled");
}

let secondOnFulfilled = (result) => {
	// console.log("resolved #2: ", result);

	throw Error("error occurred in secondOnFulfilled");
}

```




SUMMARY: good to end all promise chains with `.catch()`
- avoid unhandled promise rejections



13. what do promises look like in final state?






# VIDEO 2 - part_2.js



1. taken our original problem and made it so each func returns a promise
   - now that they return promises, we can use .then 
   - using promises and then allow us to write async code that looks sync
   - makes it easy for us to control order of these async funcs




problem: maybe we have three tasks
- want to wait until all tasks are finished before handling them
- want the tasks to be performed simulatniously


solution: promise.all




2. promise.all()
  - accepts array of values
  - returns a new Promise obj in pending state
  - if any Promise transitions to rejected, superPromise is rejected with same reason
  - if all inner promises fullfilled, superpromise transitions to fulfilled
  - returns array populated in order, of resolved values of original array








# VIDEO 3 - fetch.js


1. what is an api?
   - api = set of functions we can use as a service to get information
   - most common async action you'll do in js
   - async because we're grabbing data from external source
   - we're not sure how long its going to take to get that data
   - node = program we use to run our code
   - npm = used to manage packages, can install dependencies for project
   - npm install node-fetch => will create node_modules


2. what is fetch?
	 - npm package you must install
	 - just a function


3. what does fetch return?
	 - a promise 
	 - promise resolves with fetched content
	 - format of content is encoded and not easy to work with
	 - can use .text() or .json() to converT to string


4. tons of apis out there to play around with
   - they have different requriements to get used to reading docs
   - this is a fun one that returns movie info


5. api keys
	 - for most apis you will need a key
	 - api servers arent free to run so owners don't want
	 - anyone to be able to query their db whenever they want
	 - too many requests in short amount of time wont be allowed