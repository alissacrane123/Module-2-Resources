
# CONTEXT IN JAVASCRIPT


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


function whatIsThis() {
	console.log(this);
}

// when we invoke a method function style, the context will be the global obj

whatIsThis(); // global


let obj = {
	whatIsThis: function() {
		console.log(this)
	}
}

// when we invoke a method method-style, the context will be the object the
// method was called upon 

obj.whatIsThis(); // { whatIsThis: [Function: whatIsThis] }


// method-style invocation you've seen before

let string = 'hello';
let newString = string.toUpperCase();
console.log(newString);

```


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



# ISSUES WITH SCOPE AND CONTEXT


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
		this.name = newName;
		// this.speak();
	}
}


// changeNameFunc is a reference to the changeName func itself so we lose our context
// - this inside the changeNameFunc is the global object since we're invoking
//   it function style
// - thus, we've actually changed a name property on the global object itself 

let changeNameFunc = dog.changeName;
changeNameFunc('lucy');
console.log(dog); // { name: 'bodhi', changeName: [Function: changeName] }



dog.changeName('lucy');
console.log(dog); // { name: 'lucy', changeName: [Function: changeName] }
```





# BINDING CONTEXT USING FUNCTION.BIND METHOD


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

let speakFunc = cat.speak;
speakFunc(); // hi my name is undefined


// bind is a method that you call on a function that returns a new function
// with a context that is bound to the object you pass in as the first argument
// - `this` will always be the cat object regardless of how func is invoked

let boundSpeakFunc = cat.speak.bind(cat);
boundSpeakFunc(); // hi my name is pancake

```



Binding with Arguments
- `let aboundFunc = func.bind(context, arg1, arg2, etc..)`
- allows you to bind arguments to a function
- the func will always be invoked with the provided arguments
- can pass `null` as first argument if we don't want to bind a specific context,
  but want to bind specific arguments



```js

// BINDING WITH ARGUMENTS


function multiply(a,b) {
	return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(3)); // 6
console.log(triple(3)); // 9


// using `bind` like this gives us a lot of flexibility
// can create independent funcs that do similar things while keeping code dry
// - the first argument to the version of our multiply func we've bound with 2
//   will always be 2, thus doubling the next arg passed in
// - the first argument to the version of our multiply func we've bound with 3
//   will always be 3, thus tripling the next arg passed in

```





# ARROW FUNCTIONS AND CONTEXT



Arrow Functions
- `let func = () => { ... }`
- unlike normal functions, arrow funcs carry over context, binding `this`
  to context where func is defined
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


let noChangeName = user.noChangeNameFunc();
noChangeName('bob');


let changeName = user.changeNameFunc();
// changeName('bob')

```