# Constructor Functions

creating objects using literal notation / object initializer
- attributes of "Cat" object representeed by obj literal's keys

creating objects using constructor function
- "factory" for creating objects of a specific type
- calling a constructor function returns new object
- props initialized to provided argument values

Notice anything weird about this function?
- name is capitalized to help distinguish func as a constructor
- function doesn't explicitely return a value
- "this" references newly created object

invoking a constructor function with "new"
 1. new empty obj is created ({})
 2. new obj prototype is set to obj referenced by constructor funcs prototype prop
 3. constructor func is called and "this" is bound to new object
 4. new object is returned

understanding object type instances

invoking a constructor without the `new` keyword
- in strict mode: `this` will be undefined
- in non-strict mode: `this` will be global object

# Defining Shareable Methods

DONT define methods within constructor func
 - inefficient in terms of computer memory usage
 - each instance would ahve its own method definition
 - 100 instances = 100 method definitions

DO use prototypes and delegation
- a prototype is an object that is delegated to when a reference to an object property or method can't be resolved
- in JS you can make an object the prototype of another object
- when an object is a prototype of another object, it's properties and methods are made available to the other object.
- if prop or method isnt available on an obj, JS will look up prototypal chain

Object.setPrototypeOf(a, b)
- sets betaObject as prototype of alphaObject
- only used as example / debugging
- can have negative impact on app performance so avoid using

Object.getPrototypeOf(a)
- gets prototype of object passed in


The __proto__ property ("dunder proto")
- prior to ES2015 no official way to get/set obj internal prototype object
- many browsers made __proto__ property available
- only use for debugging, never in code
- not supported by all browsers, will stop working
- deprecated in favor of Object.setPrototypeOf
- references object that points to the prototype it was created from 

defining shareable methods on a constructor funcs `prototype` property

every constructor function has a `prototype` property
- represents object that'll be used as prototype for instances created by invoking the constructor function with the `new` keyword
- can confirm by comparing prototype for an instance to constructor functions prototype property

summary
- every instance created from constructor func has its prototype set to the object referenced by the constructor function's prototype property
- any method we define on constructor functions prototype will be shared across all instances of that object type

when speak() is called:
1. `fluffy` object is checked to see if  method is  defined on that object
2. when method isn't found, method call is delegated to instance's prototype
3. instance's prototype is set to `Dog` constructor funcs `prototype` property
4. this time, speak() method is found and called
- note: can use `this` to access properties on the instance we're calling method on (this refers to the instance of dog, fluffy)

problems with arrow functions
- don't have their own "this" binding
- they use "this" binding from lexical scope

instanceof operator uses prototypes to determine if obj is an instance of a specific constructor function
- checks if prototype of obj on left side of operator is set to prototype property of constructor function on the right side


# JAVASCRIPT CLASSES

javascript classes
- constructor funcs and prototypes mimic class behavior
- support for classes added to language in ES2015

ES2015 classes
- defines attributes and behavior for object type
- used to create instances of that type, just like constructor func
- begin with capital letter

constructor method not required, similar to constructor func
1. don't explicitly return a value, implicitly returns new obj instance
2. `this` keyword refrences newly created object instance

when instantiating an instance of class:
1. new empty obj is created
2. new obj prototype is set to class's `prototype` property 
3. `constuctor` method is called and `this` is bound to object
4. new obj is returned 

HOISTING
- in JS, you can call a function before it's declared


# INHERITANCE

javascript inheritance
- classes don't havee to be  defined and used in isolation from one another
- possible to base a class - a child class - upon another class - a parent class
- child class can inherit properties and methods defined within parent class

benefits of inheritance
- gives you a way to share code across classes
- prevents code duplication and keeps code DRY


understanding how `this` works
- `this` always references the instance object created using  `new`, regardless of where it is used
- allows constructor() method to initialize properties eon the instance  object

OVERRIDING METHODS IN PARENT CLASS
- simply define method in child class with same name

UNDERSTANDING HOW INHERITANCE WORKS
- implemented using prototypes