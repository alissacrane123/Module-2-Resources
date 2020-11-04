# ALL ABOUT TESTING


Why do we test?
1. To make sure everything works
2. To increase flexibility and reduce fear
   - oftentimes we have to go back and refactor code
   - w/o tests you'd be walking on eggshells, frightened of breaking stuff
   - w/  tests you can refactor w/ confidence 
   - if anything  breaks, you'll know
3. Make collaboration easier
   - you have expectations for the module youre working on
   - specs are effective form of communication
   - as long as you meet the specs you should be good to go
4. Produce documentation
   - if well writtene, specs can be documentation for code base
   - not sure what a module does? look at specs


Testing Framework vs Assertion Library
- testing framework: runs tests and presents them to a user
- assertion library: the code we use to write our tests
	- does heavy lifting of comparing and verifying our code
- some frameworks have built in assertion libraries, some you will need to require



Mocha
- testing framework: runs tests and presents them to user
- supports variety of assertion libraries
- has DSL that provides structure for writing tests
	- DSL: computer language specialized for particular purpose
	- i.e provides structure for written tests




What do we test?
* "think less about the code and more about the use cases the code supports"
- use case coverage: how many use cases our code supports


The Testing Pyramid
1. Unit Tests
   - smallest unit of testing
   - tests smallest pieces of app in isolation to ensure each piece works before you put those pieces toegether
   - should focus on testing one thing
2. Integration Tests
   - after unit tests are in place, test the interaction of those pieces
   - ensure units work coherently together
3. End-to-End (E2E) Tests
   - test the whole of your application
   - closest automated tests come to testing actual user experience


Test Pyramid Chess Example
1. Unit test
   - test each class in isolation
   - ensure each piece's instance methods work before involving other pieces
2. Integration Test
   - ensure each piece instance interacts with Board class correctly
3. E2E Testing
   - testing a round of chess
   - test that Game, Piece, Board interact correctly



Reading Tests
- most important thing is that test is readable and understandable
- use descriptive strings to explain what they teest and how



# Test-Driven Development (TDD)



What is TDD
- software development process
- tests should be written before you write the code
- code should only be written to pass existing tests
- repeat following cycle:
1. determine what code should do
2. write tests for that behavior
3. write actual code


TDD Motivations
1. Writing tests before code ensurese that the code written will work
2. Only required code is written
3. Helps enforce code modularity
4. Enforces better understanding of what thee code  should be doing


TDD Process - "Red, Green, Refactor"
1. Red: write tests and watch them fail
2. Green: write minimum amt of code to ensure tests pass
3. Refactor: refactor code you just wrote so its easy to maintain and read




# JavaScript Error Types


JavaScript Errors
- `Error` constructor func creates instances of `Error` objects
- type of error thrown attempts to communicate why error occurred


Creating your own errors
- can use constructor func to create new `Error` object instances with syntax
- can call with or without `new` keyword

```js
  // new Error([message[, fileName[, lineNumber]]])

  let myError = new Error("I am an error")
```


Throwing your own errors
- use `throw` keyword to throw runtime errors and stop program execution
- can use `try...catch` block to throw errors w/o stopping execution

```js
  function safeDivide(a, b) {
    if (b === 0) {
      throw new Error("cannot divide by zero");
    } else {
      return a / b;
    }
  }

  try {
    // statements that will be attempted
    console.log(safeDivide(30, 0)); 
  } catch (error) {
    // if an error is thrown it will be "caught"
    // allows program to continue execution
    // statements here will  be run and program will continue
    console.error(error.name + ": " + error.message); // Error: cannot divide by zero
  }

  // above code will be caught and program can continue
  console.log("hello"); // prints hello
```


Syntax Errors
- thrown when JS engine attempts to parse code that doesn't conform to syntax of JS language
- many cant be caught by `try...catch` blocks b/c they happen at compile time, not at run time
- any error that happens at compile time cant be caught


Refernece Errors
- represents  error when non-existent variable is referenced


Type Error
- when operation cannot be performed b/c operand is value of wrong type
- when attempting to modify value that cannot be changed (`const`)


Catching Known Errors
- can catch specific error types using `instanceof`

```js
function callThatArg(arg) {
  arg(); // this will cause a TypeError because callThatArg is being passed a number
}

try {
  callThatArg(42);
  console.log("call successful"); // this line never executes
} catch (error) {
  if (error instanceof TypeError) {
    console.error(`Wrong Type: ${error.message}`); // prints: Wrong Type: arg is not a function
  } else {
    console.error(error.message); // prints out any errors that aren't TypeErrors;
  }
}

console.log("done"); // prints: done
```




# Writing Tests


Mocha
- one of JS's most popular test frameworks
	- what we've been using in nour projects

Chai
- assertion library commonly used with Mocha
- provides funcs/methods that help you compare output of test with expected val


Assert
- node's built in assertion library


Chai provides three assertion styles you can choose from
  1. Assert style
    ```js 
      let assert = require('chai').assert
      let nums = [1,2,3,4]
      assert.isArray(nums, 'is array of nums')
    ```
  2. Expect style
    ```js 
      let expect = require('chai').expect
      let nums = [1,2,3,4]
      expect(nums).to.be.an('array').that.includes(2);
    ```
  3. Should style
    ```js 
      let should = require('chai').should
      let nums = [1,2,3,4]
      nums.should.be.an('array').that.includes(2);
    ```


Mocha interface system
- allows us to choose style of DSL
- BDD, TDD, EXPORTS, etc.
- we will use BDD
  * describe(), context(), it(), specify(), before(), beforeEach(), after(), afterEach()



Part Zero: Testing File Structure
- mocha CLI automatically looks for directory named `test`
- file structure should mirror files you want to test

```
testing-demo
  └──
  problems
    └── reverse-string.js
  test
    └── reverse-string-spec.js
```



Part One: Writing Tests with Mocha and Assert
- mocha: test framework specializing in running tests and presenting them in useer friendly way
- assert: assertion library module, responsible for actually verifying things (does heavy lifting)
  * `describe()`: way to group tests, can deeply nest
  * `context()`: alias for describe, providse additional grouping
  * `it()`: provides the test case
  * `before()`: run once before all tests in a `describe`
  * `beforeEach()`: run before each test in a `describe`
  * `after()`: run once after all tests in a `describe`
  * `afterEach()`: run after each test in a `describe`



```js
  // test/reverse-string-spec.js
  const assert = require("assert");
  const reverseString = require("../problems/reverse-string.js")

  // function used to describe what we're testing
  // cb argument will hold actual tests
  describe("reverseString()", function() {

    // it is organization func used to wrap each test we write
    it("should reverse the input string", function() {
      let test = reverseString("hello");
      let result = "olleh";

      assert.strictEqual(test, result);
    })
  })
```



Part Two: Testing Errors
- must pass uninvoked method call to error testing 
- ensure error wont be throw until `assert.throws` is ready to catch it

```js
  context("given an argument that is not a string", function() {
  it("should throw a TypeError when given an argument that is not a string", () => {
    assert.throws(() => reverseString(3), TypeError);
  });
});
```



Part Three: Tseting Classes with Chai
- Assert: assertion library, node module
- Chai: another assertion library, has more functionality than Assert
- Expect: Testing style included in Chai 


Part Four: Mocha Hooks and Chai Spys
- hooks used to dry up testing (before, beforeEach, after, afterEach)
- Chai Spies: library that adds additional functionality to chai
  * ability to determine if function has been called and how many times

```js
  // testing-demo/test/dog-spec.js

  // set up chai
  const chai = require("chai");
  const expect = chai.expect;

  // set up chai spys
  const spies = require("chai-spies");
  chai.use(spies);

  // don't forget to import the class you are testing!
  const Dog = require("../problems/dog.js");

  // our outer describe for the whole Dog class
  describe("Dog", () => {

    let layla;

    // creates new instance before each test
    beforeEach('set up a dog instance', () => {
      layla = new Dog('Layla');
    })

    describe("Dog constructor function", () => {
      it('should have a "name" property', () => {
        // all tests will begin with expect
        expect(layla).to.have.property("name");
      })
    });

    describe('prototype.chainChaseTail()`, () => {
      context("with a valid number parameter", () => {
        it("should call the chaseTail method n times", () => {
          
          // first arg is instance we're spying on
          // second is method we're keeping track of 
          const chaseTailSpy = chai.spy.on(layla, "chaseTail");

          // invoke the method we are spying on
          layla.chainChaseTail(3);

          // actual test
          expect(chaseTailSpy).to.have.been.called.exactly(3);
        });
      });
    })
  });
```





