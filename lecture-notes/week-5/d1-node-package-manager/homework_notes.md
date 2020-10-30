# CONTEXT IN JAVASCRIPT

Context vs Scope
- all invoked funcs have both scope and context
- scope: visibiliity and availability of variables
- context: value of `this` keyword when code is executed


What about `this`
- method: func that is a value withiin an object and belongs to an object
- keyword `this` exists in every function
- evaluates to the object that is currently invoking that func
- thus, value of `this` reliies entirely on where a func is invoked


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
- ensures that `this` inside the method will be the objecet that method was
  called upon


Context Summary
- context refers to the value of `this` withiini a function
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





# INTRO TO NODE PACKAGE MANAGER (NPM)


Overview
- NPM: default package manager for JavaScript runtime environment, Node.js
- consists of:
	1. command line client (npm)
	2. online database of public & paid-for packages



Package Management
- package is collection of files & configurations wrapped up
- can rely on work of other developers to move our projects along
- can create our own packages and share with the world
- dependencies: packages our app depends on


Package Managers
- apps that accept code and provide services like versioning, change management, etc
- const of at least two parts:
	1. command line interface (CLI)
		 - enables us to download, install/uninstall packages
	2. registry
		 - database of package information


JavaScript Package Management
- before npm: embedded script tags used to share code
- Node.js released in 2010 with npm
  - most widely used package manager


Getting Started with NPM
- dont have to install since its part of Node.js
- `npm init`: generates `package.json` file
- `npm install [-g] <package-name>`: installs package into your project
	- optional -g (--global) flag installs package globally (everywhere in system)




# NPM AND DEPENDENCY MANAGEMENT


```js

{
	
	"name": "npm-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "some code to run test files"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mocha": "^8.1.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}

// KEYS:
// name: name of module this package.json is describing
// version: denotes the current version of the module
// description: contains a human-readable description about the module
// main: direction to the entry point to the module
// scripts: 
// - keys in these key/value pairs is the name of a command that can be run
// - correseponding value of each key is the actual command that is run
// keywords: can help identify a package, related modules and software, and concepts
// author: author of module
// license: license for module
// dependencies: defines the other modules that this module uses in production
// devDependenciese: define the dependencies the module needs to run in development


```