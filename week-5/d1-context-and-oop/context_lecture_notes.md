
* TODO: CONTEXT IN JAVASCRIPT READING, CONTEXT LECTURE VIDEO



# CONTEXT IN JAVASCRIPT: (context/lecture-demos/context.js)


Context vs Scope
- all invoked funcs have both scope and context
- scope: visibiliity and availability of variables
- context: value of `this` keyword when code is executed

```js
// SCOPE : visibiliity and availability of variables

let count = 0;

function increment() {
	count++;
	console.log(count);
}

increment();
```













What about `this`
- method: func that is a value within an object and belongs to an object
- keyword `this` exists in every function
- evaluates to the object that is currently invoking that func
- thus, value of `this` relies entirely on where a func is invoked
- even funcs that are not defined explicitely on declared objects are run
  using the global object as their `this` and therefore, their context

```js

// CONTEXT : the object to which a function belongs
// - value of `this` keyword when code is executed


// context with regular functions
// - value of `this` depends on how a function is invoked
// - function style invocation: `this` set to global object
// - method style invocation: `this` set to object it is called on




// GLOBAL FUNCTIONS

function whatIsThis() {
	console.log(this);
}

// when we invoke a method function style, the context is automatically
// set to the global object

// whatIsThis(); // global





// OBJECT METHODS

let obj = {
	whatIsThis: function() {
		console.log(this)
	}
}

// when we invoke a method method-style, the context will be the object the
// method was called upon 

// obj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }






// ISOLATED OBJECT METHODS

// if we isolate this method by saving it to a variable and then invoke that
// variable function style, we lose our context and it will default back
// to the global object

let myFunc = myObj.whatIsThis;
// myFunc(); // global



```











# CONTEXT WITHIN OBJECTS  (context/lecture-demos/context.js)


Context and objects
- super useful when working with objects because we can use `this` to access
  other attributes and methods that exist on that object


```js

// ACCESSING PROPERTIES/METHODS USING THIS 

let dog = {
	name: 'bodhi',
	
	speak: function() {
		console.log(`hi my name is ${this.name}`);
	},

	changeName: function(newName) {
		this.name = newName;
		this.speak();
	}
}

dog.speak();
dog.changeName('lucy')

```














# ISSUES WITH SCOPE AND CONTEXT  (context/lecture-demos/context.js)


Context Issues
- sometimes we end up with unexpected issues if we're not careful about
  how we're invoking our methods
- any function invoked function style will have a context of the global object
  regardless of how it is defined 


```js

// METHODS WITH UNEXPECTED CONTEXT

let dog = {
	name: 'bodhi',
	speak: function() {
		console.log(`hi my name is ${this.name}`);
	},
	changeName: function(newName) {
		// console.log(this)
		this.name = newName;
		this.speak();
	}
}

// changeNameFunc is a reference to the changeName func itself so we lose our context
// - this inside the changeNameFunc is the global object since we're invoking
//   it function style
// - this results in typeError since global.speak is not a function
// - thus, we've actually changed a name property on the global object itself 

let changeNameFunc = dog.changeName;
changeNameFunc('lucy'); // TypeError: this.speak is not a function




dog.changeName('lucy');
console.log(dog); // { name: 'lucy', changeName: [Function: changeName] }
```
















# BINDING CONTEXT (context/lecture-demos/binding-context.js)


Binding Context with the `Function.bind` method
- method you call on functions that accepts a context
  as an argument and returns a bound function
- the returned function will be called with a specific `this` value
  regardless of how it is invoked


```js


// ASSIGNING CONTEXT USING BIND
// let aboundFunc = func.bind(context, arg1, arg2, etc..)


let cat = {
	name: 'pancake',
	speak: function() {
		console.log(`hi my name is ${this.name}`);
	}
}

// by invoking a method function style, we lose our context
let speakFunc = cat.speak;
speakFunc(); // hi my name is undefined


// we can fix this issue using the bind method to assign a specific context
// - bind is a method that you call on a function that returns a new function
//   that has a context bound to the object you pass in as the first argument
// - `this` will always be the cat object regardless of how func is invoked

let boundSpeakFunc = cat.speak.bind(cat);
boundSpeakFunc(); // hi my name is pancake

```







Binding Methods to Multiple objects
- can bind a single method to multiple objects, which provides a ton of
  flexibility and keeps our code dry

```js

// BINDING METHODS TO MULTIPLE OBJECTS


let animal = {
	speak: function() {
		console.log(`hi my name is ${this.name}`)
	}
}


let bodhi = {
	name: 'bodhi'
}

let pancake = {
	name: 'pancake'
}


// we always call bind on the method we want to assign a specific context to
// - here we want to bind the animal.speak method to two different objects
// - the bodhiSpeak method is a version of animal.speak that will aways have
//   a context of bodhi, thus `this` will always refer to bodhi
//   - `this.name` will be `bodhi.name`
// - the pancakeSpeak method is a version of animal.speak that will aways have
//   a context of pancake, thus `this` will always refer to pancake
//   - `this.name` will be `pancake.name`

let bodhiSpeak = animal.speak.bind(bodhi);
let pancakeSpeak = animal.speak.bind(pancake);


bodhiSpeak(); // hi my name is bodhi
pancakeSpeak(); // hi my name is pancake

```








Binding with Arguments
- `let aboundFunc = func.bind(context, arg1, arg2, etc..)`
- allows you to bind arguments to a function
- the func will always be invoked with the provided arguments
- can pass `null` as first argument if we don't want to bind a specific context,
  but want to bind specific arguments



```js

// BINDING WITH ARGUMENTS


function multiply (a,b) {
	return a * b;
}

let double = multiply.bind(null, 2);
let triple = multiply.bind(null, 3);

// multiply(2,5)
console.log(double(5)); // 10

// multiply(3,4)
console.log(triple(4)); // 12


// using `bind` like this gives us a lot of flexibility
// can create independent funcs that do similar things while keeping code dry
// - the first argument to the version of our multiply func we've bound with 2
//   will always be 2, thus doubling the next arg passed in
// - the first argument to the version of our multiply func we've bound with 3
//   will always be 3, thus tripling the next arg passed in

```









* TODO: CONTEXT CODE DEMO (ask for questions)



* TODO: ARROW FUNCTION READING AND VIDEO








# ARROW FUNCTIONS REVIEW


```js

// FUNCTION STYLE SYNTAX

function sayHello(name) {
	return ` hello ${name}`
}

// FAT ARROW SYNTAX

// non implicit return
const sayHello = (name) => {
	return ` hello ${name}`
}

// implicit return
const sayHello = (name) => `hello ${name}`
```


Code Summary
- fat arrows without curly brackets have an implicit return
- fat arrows with curly bracks need an explicit return












# ARROW FUNCTIONS AND CONTEXT






Arrow Functions
- `let func = () => { ... }`
- unlike normal functions, arrow funcs carry over context, binding `this` to context where func is defined
	- regular functions establish "this" based on how they are invoked
- `this` means the same thing inside an arrow func as it does outside
- value of `this` inside arrow func is not dependent on how it is invoked



```js
// ARROW FUNCTIONS AND CONTEXT


let user = {
	name: 'alissa',
	changeNameFunc: function() {
		console.log('value of this where arrow func is defined:\n', this);
		return (newName) => {
			console.log('value of this inside arrow func:\n', this);
			this.name = newName;
		}
	},

	noChangeNameFunc: function() {
		return function(newName) {
			console.log('value of this inside regular func:\n', this);
			this.name = newName;
		}
	} 
}

// noChangeName is a regular function, thus its context is set based on how it
// is invoked.
let noChangeName = user.noChangeNameFunc();

// we are invoking this method function style, so "this" will default to
// the global object, which doesnt have a "speak" method so we receive an error
noChangeName('bob'); // TypeError: this.speak is not a function

// changeName is a fat arrow function, thus its context is set to the context
// it was defined in, i.e the context within the "changeNameFunc" method
// which is the user object
let changeName = user.changeNameFunc();

// we can invoke this method function style and not have to worry about 
// context issues since the context has been bound to the user object
changeName('bob')

```





```js

// fat arrows defined directly in object literal have `this` bound to {}

let user = {
	name: 'alissa',

	arrowFunc: () => {
		console.log(this.name);
	},

	regularFunc: function() {
		console.log(this)
	}
}


user.arrowFunc() // {}

user.regularFunc() // user object

```







# NO BINDING WITH ARROW FUNCS



No binding in arrow functions
- you cannot reassign `this` in arrow funcs because they already have 
  a bound context
- the `this` in arrow funcs is always what it was at the time the arrow
  func was declared



```JS

// NO BINDING WITH ARROW FUNCTIONS


let bodhi = {
	name: 'bodhi'
}

let noReturnName = () => {
	console.log(this.name);
}

noReturnName() // undefined

let notBound = noReturnName.bind(bodhi);
notBound(); // undefined


let returnName = function() {
	console.log(this.name);
}

let bound = returnName.bind(bodhi);
bound() // bodhi

```





# SUMMARY (context/lecture-demos/summary.js)



