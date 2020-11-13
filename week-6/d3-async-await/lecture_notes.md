
# PROMISE-WARMUP





# VIDEO - ASYNC/AWAIT



overview
- enable async, promise-based behavior to be written in cleaner style
- avoids the need to explicitely configure promise chains
- dont need to worry about scoping issues

Function Declaration with `async`
- creates a function that returns an implicit promise containing the result
- allows us to utilize `await` keyword inside


Awaiting Promises with `await`
- used to wait for promise to be fulfilled or rejected
- rest of code in `async` func waits until promise is fulfilled to execute
- can only use inside an `async` function



# DESSERT DEMO: lecture-demos/dessert.js


TODO: create a function called prepareDough
- should console.log 'start preparing dough' as soon as it is invoked
- should return a promise that resolves after one second with a value
of 'done preparing dough'


```js
function prepareDough() {
	console.log('start preparing dough');

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('done preparing dough')
		}, 1000)
	})
}
```


TODO: create a function called bakeCookies
- should console.log 'start baking cookies' as soon as it is invoked
- should return a promise that resolves after two seconds with a value
of 'done baking cookies'

```js
function bakeCookies() {
	console.log('start baking cookies')

	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('done baking cookies')
		}, 2000)
	})
}

```


TODO: create a function called makeDessert
- should use .then statements to ensure that we begin baking cookies
when we're done preparing the dough
- should console.log the value each promise fulfills with
- should console.log 'dessert is ready' when we're done baking cookies

```js

function makeDessert() {
	prepareDough()
		.then(res => console.log(res))
		.then(bakeCookies)
		.then(res => console.log(res))
		.then(() => console.log('dessert is ready!!!'))
	  .catch(err => console.log('ERROR: ', err))
}

```

TODO: recreate makeDessert method using async & await

```js
async function makeDessert() {
	let res1 = await prepareDough();
	console.log(res1);
	let res2 = await bakeCookies();
	console.log(res2);
	console.log("dessert is ready!!!");
}

```

# FETCH DEMO: lecture-demos/fetch.js


```js

// must create a fetchHarryPotter function wrapper so we can use async/await

async function fetchHarryPotter() {
	try {
		let url = `http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`;

		let res = await fetch(url);
		let jsonRes = await res.json();

		console.log('fetch successful!');
		console.log(jsonRes);

	} catch (err) {

		console.log('error: ', err);
	}
}

fetchHarryPotter();

```

# ASYNC-AWAIT-PRACTICE


# STAR WARS REFACTOR

```JS
async function getPerson(id) {
	let res = await fetch(`${baseUrl}${id}`);
	let person = await res.json();
	
	let films = person.films;
	let homeworldUrl = person.homeworld;

	let homeworldRes = await fetch(homeworldUrl);
	let homeworldObj = await homeworldRes.json();

	let promises = films.map(film => fetch(film));
	let resArray = await Promise.all(promises);

	promises = resArray.map(res => res.json())
	let filmsArray = await Promise.all(promises);


	let filmTitles = filmsArray.map(film => film.title);
	let personName = person.name;
	let homeworld = homeworldObj.name;

	let stringFilms = filmTitles.join(', ');

	let string = `Hi my name is ${personName} and I am from ${homeworld}. I starred in the following film: ${stringFilms}`

	await fs.writeFile('star-wars.txt', string, 'utf-8')

	console.log('the file is finished being written');

	let contents = await fs.readFile(`star-wars.txt`, "utf-8");
	console.log(contents)
}

getPerson(1)
```

# OTHER ERROR EXAMPLE


```js

function bakeCookies() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			reject(new Error('uh oh, burnt cookies!'))
		}, 1000)
	})
}

async function makeDessert() {
	try {
		let res = await bakeCookies();
		console.log(res);
		return 'dessert is ready!!!'
	} catch (e) {
		throw new Error(`I couldn't make dessert because: ${e.message}`);
	}
}

makeDessert()
	.then(res => console.log(res))
	.catch(err => console.log(err))


```


# EVENT LOOP REVIEW


Overview
- the event loop has one job: moniter the call stack and callback queue
- when call stack is empty, first event from queue is pushed to the call stack


Promises
- introduced in ES6	
- make writing async code easier


Job Queue
- new concept introduced in ES6 along with Promises
- promise reaction jobs (run by promise settlement) are placed in the job queue
- have higher priority than those in the callback queue
- added to call stack as soon as current thread of JS has run to completion
  - as soon as all sync code has been executed
- items from callback queue added to call stack after the job queue is empty





```js

// ASYNC / AWAIT VERSION

const hello = () => console.log('hello');
const bye = () => console.log('bye');

function timeoutFunction() {
	setTimeout(() => {
		console.log('set timeout cb executes')
	}, 0);
}

async function firstPromiseFunction() {
	let res = await new Promise((resolve, reject) => {
		resolve('first promise resolves');
	});
	console.log(res);
}

async function secondPromiseFunction() {
	let res = await new Promise((resolve, reject) => {
		resolve('first promise resolves');
	});
	console.log(res);
}

async function second() {
	let res = await new Promise((resolve, reject) => {
		resolve('second promise resolves');
	});
	console.log(res);
}

timeoutFunction();
firstPromiseFunction();
secondPromiseFunction();
hello();
bye();

// PRINTS: 
// 	hello
// 	bye
// 	first promise resolves
// 	second promise resolves
// 	set timeout cb executes


```








```js

// .THEN VERSION

const hello = () => console.log('hello');
const bye = () => console.log('bye');

function timeoutFunction() {
	setTimeout(() => {
		console.log('set timeout cb executes')
	}, 0);
}

function firstPromiseFunction() {
	new Promise((resolve, reject) => {
		resolve('first promise resolves');
	})
		.then(res => console.log(res))
		.catch(err => console.log(err))
}

function secondPromiseFunction() {
	new Promise((resolve, reject) => {
		resolve('second promise resolves');
	})
		.then(res => console.log(res))
		.catch(err => console.log(err))
}

timeoutFunction();
firstPromiseFunction();
secondPromiseFunction();
hello();
bye();

// PRINTS: 
// 	hello
// 	bye
// 	first promise resolves
// 	second promise resolves
// 	set timeout cb executes

```