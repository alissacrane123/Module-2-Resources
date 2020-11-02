# CONTEXT IN JAVASCRIPT

Context vs Scope
- all invoked funcs have both scope and context
- scope: visibiliity and availability of variables
- context: value of `this` keyword when code is executed


What about `this`
- method: func that is a value within an object and belongs to an object
- keyword `this` exists in every function
- evaluates to the object that is currently invoking that func
- thus, value of `this` relies entirely on where a func is invoked


```js

let dog = {
	name: 'Bowser',
	test: function() {
		return this === dog;
	}
}

console.log(dog.test()) // true

```

Code summary
- inside a method, `this` refers to object that is calling the method
- i.e what comes before the `.` before the method name


```js
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

cat.purrMore();
```

Code summary
- can refer to other values within an object using `this` keyword
- calling `this.purr()` inside the `cat.purMore` method is essentially the same
  as calling `cat.purr` because `this` inside the cat object is the cat


Method-style invocation
- `object.method(args)` -> `String.toUpperCase()`
- ensures that `this` inside the method will be the object that method was
  called upon


Context Summary
- context refers to the value of `this` within a function
- `this` refers to where a function is invoked


# ISSUES WITH SCOPE AND CONTEXT

```js

function testMe() {
	console.log(this);
}

testMe() // Object [global] { global: [Circular], etc. }

```

`this` with function style invocation
- each invoked func will have both a scope and context
- even funcs that are not defined explicitely on declared objects are run
  using the global object as their `this` and therefore, their context


```js
// METHODS WITH UNEXPECTED CONTEXT 

let dog = {
  name: "Bowser",
  changeName: function () {
    this.name = "Layla";
  },
};

// note this is **not invoked** 
// - we are assigning the function itself to the variable 'change'
let change = dog.changeName;
console.log(change()); // undefined

// our dog still has the same name
console.log(dog); // { name: 'Bowser', changeName: [Function: changeName] }

// instead of changing the dog we changed the global name!!!
console.log(this); // Object [global] {etc, etc, etc,  name: 'Layla'}
```

Code Summary
- we saved the functiion to the var `change` without invoking it
- when we invoke change, we're invoking it w/o the context of the `dog`
- JS uses only object available, which is global object


```js
// ISSUES WITH CALLING SOMETHING IN WRONG CONTEXT

let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let notACat = cat.purrMore;
console.log(notACat()); // TypeError: this.purr is not a function

```

Code Summary 
- we attempt to call the `purMore` func w/o the correct Object for context
- `this` inside the `purrMore` func is actually the global object
- the global object does not have a func called `purr` so we receive error


```js
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

global.setTimeout(cat.purrMore, 5000); // 5 seconds later: TypeError: this.purr is not a function

```

Code Summary
- setTimeout is technically a function on global, but you usually call it without
- when `global.setTimeout` attempts to call `cat.purrMore` after 5 seconds
  all it has reference to is the function itself
- `this` is no longer the cat, it is the global object


Strictly protecting the global object
- prevents accidental mutation of global object when invoking funcs in
  unintended contexts
- strict mode prevents you from accessing global object
- `this` will be undefined


```js
"use strict"

function hello() {
	console.log(this)
}

hello() // undefined


let dog = {
	name: 'bowser',
	changeName: function() {
		this.name = 'layla'
	}
}

let change = dog.changeName;
console.log(change()); 
```



Changing context using `bind`
- allows you to choose the context for your function
- you can bind functions to any context 
- `let aboundFunc = func.bind(context)`



```js
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

let sayMeow = cat.purrMore;
console.log(sayMeow()); // TypeError: this.purr is not a function

// we can now use the built in Function.bind to ensure our context, our `this`,
// is the cat object
let boundCat = sayMeow.bind(cat);

// we still *need* to invoke the function
boundCat(); // prints "meow"
```


the `Function.bind` method
- method you call on functions that accepts a context
  as an argument and returns a bound function
- the returned function will be called with a specific `this` value
  regardless of how it is called



```js
let cat = {
  name: "Meowser",
  sayName: function () {
    console.log(this.name);
  },
};

let dog = {
  name: "Fido",
};

let sayNameFunc = cat.sayName;

let sayHelloCat = sayNameFunc.bind(cat);
sayHelloCat(); // prints Meowser

let sayHelloDog = sayNameFunc.bind(dog);
sayHelloDog(); // prints Fido
```



Code Summary
- even though the `sayName` function belongs to the `cat` object, when we
  bind it to the `dog` object we change the value of `this` to reference the `dog`
- `this.name` inside the `sayName` function will now reference `dog.name` ('fido')
  instead of `cat.name`



```js
let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  },
};

// here we will bind the cat.purrMore function to the context of the cat object
const boundPurr = cat.purrMore.bind(cat);

global.setTimeout(boundPurr, 5000); // prints 5 seconds later: meow
```


Code Summary
- can fix our original issue with the `setTimeout` func by binding the
  `purMore` method to the `cat` before passing to setTimeout
- now, when `setTimeout` invokes the callback after 5 seconds, `this` will
  reference the `cat` instead of the `global` object



Binding With Arguments
- `let aboundFunc = func.bind(context, arg1, arg2, etc..)`
- allows you to bind arguments to a function
- the func will always be invoked with the provided arguments
- can pass `null` as first argument if we don't want to bind a specific context,
  but want to bind specific arguments


```js

const sum = function (a, b) {
  return a + b;
};

// here we are creating a new function named add3
// this function will bind the value 3 for the first argument
const add3 = sum.bind(null, 3);

// now when we invoke our new add3 function it will add 3 to
// one incoming argument
console.log(add3(10)); // 13
```

Code Summary
- we pass `null` as the first argument because we dont need to have a specific
  value for `this` in the `sum` method since it doesnt use `this` anywhere
- we pass `3` as the second argument so that whenever the `sum` func is invoked,
  `3` will always be the first argument



```js
const multiply = function (a, b) {
  return a * b;
};

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(3)); // 6
console.log(triple(3)); // 9

```

Code Summary
- using `bind` like this gives us a lot of flexibility
- can create independent funcs that do similar things while keeping code dry



# ARROW FUNCTIONS AND CONTEXT



Arrow Functions
- `let func = () => { ... }`
- unlike normal functions, arrow funcs carry over context, binding `this`
  to context where func is defined
- `this` means the same thing inside an arrow func as it does outside
- value of `this` niside arrow func is not dependent on how it is invoked




```js

let dog = {
	name: 'bodhi',
	changeNameFunc: function() {
		return () => {
			this.name = 'pancake';
			console.log(this);
		}
	},

	noChangeNameFunc: function() {
		return function() {
			this.name = 'pancake';
			console.log(this);
		}
	} 
}

let changeName = dog.changeNameFunc();
let noChangeName = dog.noChangeNameFunc();

changeName(); // { name: 'pancake', 
// changeNameFunc: [Function: changeNameFunc], 
// noChangeNameFunc: [Function: noChangeNameFunc] 
// }


noChangeName(); // // Object [global] {etc, etc, etc,  name: 'pancake'}

```


Code Summary
- an arrow function will always have the same context as the function
  that created it 
- this gives the arrow func access to variables available in that context, 
  i.e `this.name` in the dog object
- `this` inside the arrow function returned from the `changeNameFunc` will 
  have the same value as `this` inside the `changeNameFunc`, i.e the dog


```js

let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    return () => {
			this.purr();
		}
  }
};

global.setTimeout(cat.purrMore(), 1000); // 1 seconds later: meow

```

Code Summary
- by wrapping the call to `this.purr` in a fat arrow function, we have bound
  `this` inside the fat arrow func to the value of `this` in the `purrMore`
	func, i.e the cat
- we need to invoke `cat.purrMore` when we pass it to `setTimeout` since thee
  `purrMore` func now returns a function


```js

// ALTERNAT SOLUTION

let cat = {
  purr: function () {
    console.log("meow");
  },
  purrMore: function () {
    this.purr();
  }
};

global.setTimeout(() => cat.purrMore(), 1000); // 1 seconds later: meow

```

Code Summary
- when an arrow func is invoked, it carries over the context that it was
  orignially invoked with



No binding in arrow functions
- you cannot reassign `this` in arrow funcs because they already have 
  a bound context
- the `this` in arrow funcs is always what it was at the time the arrow
  func was declared

```js

let fido = {
	name: 'fido'
}

let noReturnName = () => {
	console.log(this.name);
}
noReturnName() // undefined

let notBound = noReturnName.bind(fido);
notBound(); // undefined


let returnName = function() {
	console.log(this.name);
}

let bound = returnName.bind(fido);
bound() // fido
```