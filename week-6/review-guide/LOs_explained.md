# HTTP, Promises, and TDD (Week 6) - Learning Objectives


## HTTP (W6D1) - Learning Objectives

### HTTP
1. Match the header fields of HTTP with a bank of definitions.
    - Host: Root path of our URI (typically a domain like appacademy.io, could also be an IP address)
    - User-Agent: Information about which browser the request originated from
    - Referer: The URL that you're coming from (such as when you click a link to a new site)
    - Accept: What the client can receive. May be expansive to accept all kinds of data, or limited, such as only accepting `application/json`
    - Content-*: Defines details about the body, indicating what format it is in, such as `application/json` or `application/x-www.form-urlencoded`
    - Location: A server typically adds this to a response so that the client can perform a redirection
    - Expires: When the response should be considered stale and needs to be refetched. Often used to cache a response so that subsequent requests can load directly from the cache instead of hitting the server.
    - Set-Cookie: The server is telling the client to create/update a key/value pair in its cookies.

2. Matching HTTP verbs (GET, PUT, PATCH, POST, DELETE) to their common uses.
    - GET: Direct requests. Do not contain a body, simply asking for data.
    - PUT: Update a resource on the server. Contain the whole resource to be updated.
    - PATCH: Update a resource on the server. Does not need to have the whole resource, usually just the identifier and what fields are being updated.
    - POST: Creating a new resource on the server. Usually what is generated when we submit a form, with the form's data being passed in the body of the request.
    - DELETE: Destroy a resource on the server, such as removing a product, or logging out a user (destroying their session)

3. Match common HTTP status codes (200, 302, 400, 401, 402, 403, 404, 500) to their meanings.
    - 100s: Informational
    - 200s: Successful
        - 200 OK: received and fulfilled, typically with a body that has the requested data
    - 300s: Redirection
        - 302 Found: the resource has moved. We usually see this with a Location header, where a browser will automatically redirect the request to the new location.
    - 400s: Client Error
        - 400 Bad Request: General response that the server couldn't understand your request. Often seen with typos, if a more specific 404 is not issued.
        - 401 Unauthorized: The resource may exist, but you're not allowed to see it unless you are authorized. (Try logging in with valid credentials before sending the request again.)
        - 403 Forbidden: The resource may exist, but you're not allowed to see it, even if you are logged in. Can also be seen if you're trying to perform an action that is not allowed (such as creating a duplicate record). Maybe this is a resource that you need special permissions for, like admin access.
        - 404 Not Found: The resource doesn't exist. It may be that it hasn't been created, or that you just had a typo in what you were requesting.
    - 500s: Server Error
        - 500 Internal Server Error: The server tried to process your request, but something went wrong, typically there was some kind of runtime error in the server code due to your request.

4. Send a simple HTTP request to google.com
    - We can use netcat in the terminal to make a connection to a URL and send an HTTP request
    - `nc google.com 80` opens our connection to google.com
    - After we make our connection, we specify the three parts of an HTTP request:
        - Request line
        - Headers
        - Body
    - `GET / HTTP/1.1` creates the request-line, indicating our verb (GET), URI (/), and version (HTTP/1.1)
    - any other headers we would like (optional), such as `Accept: application/json`
    - body of the request (optional), such as `myKey=myValue`

5. Write a very simple HTTP server using ‘http’ in node with paths that will result in the common HTTP status codes.
```javascript
const http = require('http');

http.createServer(function(request, response) {
    if (request.url === '/200') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Hello, world! Status 200 OK!</h1>');
    } else if (request.url === '/403') {
        response.writeHead(403, { 'Content-Type': 'text/html' });
        response.write('<h1>This is Forbidden! Status 403 Forbidden!</h1>');
    } else {
        response.writeHead(404, { 'Content-Type': 'text/html' });
        response.write('<h1>What is that? Status 404 Not Found!</h1>');
    }
    response.end();
}).listen(8080, function() {
    console.log('Listening for requests on port 8080...');
})
```


## Promises - Part 1 (W6D2) - Learning Objectives

### Promises
1. Instantiate a Promise object
- We can instantiate a Promise object using the `new` keyword.
- The Promise takes in a callback that we can invoke, taking in two arguments: typically labelled `resolve` and `reject`.
    - `resolve` is invoked when we want to indicate our function has successfully completed. A value can be passed as the successful return value.
    - `reject` is invoked when we want to indicate that our function failed in some way. A value can be passed as the fail value (what would be used in a `catch` or the second argument to `then`).
```javascript
function pause(numberOfSeconds) {
  return new Promise((resolve, reject) => {
    // resolve is invoked to indicate a success, reject is a failure
    // if a value is passed to resolve, it will be caught as the first argument to .then()
    // if a value is passed to reject, it will be caught as the first argument to .catch(), or the second argument to .then()
    setTimeout(() => resolve(), numberOfSeconds * 1000);
  });
}
```

2. Use Promises to write more maintainable asynchronous code
    - We can chain .then calls on Promises, ensuring that the callback will not be run until the previous statement has finished executing.
    - Prevents us from having to nest our callbacks
    ```javascript
    // Without Promises, we have to nest our code.
    // These can get very confusing; this is a simple example, but it's already hard to tell what each setTimeout's delay is connected to.
    setTimeout(() => {
        console.log(message)
        setTimeout(() => {
            console.log(message.toUpperCase() + "!")
            setTimeout(() => {
                console.log(message + "?")
                setTimeout(() => {
                    console.log(message.toLowerCase() + "...")
                }, 1 * 1000)
            }, 3 * 1000)
        }, 2 * 1000)
    }, 1 * 1000)

    // With Promises, we write more code up front in order for us to have more readable and maintainable code
    // We define our promises
    function promise1(message, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(message)
            }, delay * 1000)
        })
    }

    function promise2(message, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(message.toUpperCase() + "!")
            }, delay * 1000)
        })
    }

    function promise3(message, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(message + "?")
            }, delay * 1000)
        })
    }

    function promise4(message, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(message.toLowerCase() + "...")
            }, delay * 1000)
        })
    }

    // Then we chain can chain them however we like.
    // Returning our strings from our Promises is adding flexibility to our code, allowing us to use the results however we like.
    // We replaced the complicated nesting with more modular chaining of .then
    promise1("hello", 1)
        .then(res1 => {
            console.log(res1);
            return promise2("hi", 2);
        })
        .then(res2 => {
            console.log(res2);
            return promise3("hey", 3);
        })
        .then(res3 => {
            console.log(res3);
            return promise4("what's up", 1);
        })
        .then(res4 => {
            console.log(res4);
        });
    ```
3. Use the fetch API to make Promise-based API calls
```javascript
// init is an optional object argument to customize the method (default is 'GET'), headers, or body of the request
// For example, it could take the form:
    // const init = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"title": "Sir", "name": "Robin"}' }
fetch(url, init).then(response => {
    // do something with the response
    // common first action to take would be parsing the response
        // parsing json with response.json(), or text with response.text()
}).then(data => {
    // since fetch is returning a promise, we can chain on as many .then calls as we need
})
```


## Promises - Part 2 and HTML Review (W6D3) - Learning Objectives

### Promises
1. Use async/await with promise-based functions to write asynchronous code that behaves synchronously.
```javascript
// Without async/await, we can use .then chains
// We use a .catch method to catch errors
function wrapper() {
  promise1("hello", 1)
    .then(res1 => {
      console.log(res1);
      return promise2("hi", 2);
    })
    .then(res2 => {
      console.log(res2);
      return promise3("hey", 3);
    })
    .then(res3 => {
      console.log(res3);
      return promise4("what's up", 1);
    })
    .then(res4 => {
      console.log(res4);
    })
    .catch(err => {
      console.error("Error encountered:", err)
    });;
};

wrapper();

// With async/await, our code looks more like synchronous code
// We use a standard try/catch block to handle errors
// In order for us to use `await` we must be in a function declared with `async`
async function wrapper() {
  try {
    console.log(await promise1("hello", 1));
    console.log(await promise2("hi", 2));
    console.log(await promise3("hey", 3));
    console.log(await promise4("what's up", 1));
  } catch (err) {
    console.error("Error encountered:", err)
  }
}

wrapper();
```

### HTML
- Be comfortable with using the following tags. This is review/tangential material and will not be tested directly on the assessment, but if it would appear in a problem, you should know what it is doing.
- <html></html>
    - the root element of the HTML document
    - valid child elements are <head> and <body>
- <head></head>
    - contains metadata for the HTML
    - often will include a <title> as well as <link> and <script> tags
- <title></title>
    - what appears in the tab or title bar of the browser
- <link>
    - allows us to link another file, we'll often see it for our css
    - `rel` attribute specifies the relation of the link ("stylesheet", less common may be "icon", "author", etc.)
    - `href` attribute specifies the URL of the linked file (can be an absolute url or relative path to file in your project)
- <script></script>
    - allows us to add JavaScript to be run
    - can include code between tags, or provide a src
    - `src` attribute specifies the URL of the linked script (if this attribute is present, the <script> element must be empty)
- <h1>...</h6>
    - header tags
    - six versions (h1 through h6), indicating decreasing levels
    - default styling in browsers will make h1 largest, down to h6, but the semantic meaning of labeling a section is the importance
- <p></p>
    - paragraph tags
    - allows us to add content typically displayed as blocks of text
- <article></article>
    - a self-contained composition in a document, i.e., it could be consumed independently and not lose any meaning
- <section></section>
    - a standalone section of the document
    - groups content, but might not be independently consumable like an article
- <main></main>
    - the main/central content of the body
- <nav></nav>
    - typically contains navigation links either to sections of the document or to other documents
- <header></header>
    - introductory content for the page
    - we'll often see elements such as headers, logo images, nav bars, etc.
- <footer></footer>
    - opposite of <header>, typically will have supplement information at the bottom of a section or page
    - may include details such as copyright, links, author info, etc.
- <ul></ul>
    - an unordered list
    - typically has many list elements (<li>) represented as bullet points
- <ol></ol>
    - an ordered list
    - typically has many list elements (<li>) represented as numbered or lettered entries
- <li></li>
    - a list element
    - must be part of either an unordered (<ul>) or an ordered (<ol>) list
- <a></a>
    - an anchor tag
    - creates a hyperlink to another resource
    - `href` attribute specifies the URL for the desired link content
    - content inside the element (between the opening and closing tags) will be what is shown on the page as the clickable link
- <img>
    - embeds an image into the document
    - `src` attribute specifies the source, or path to the image that is to be displayed (can be an absolute URL or relative path)
    - `alt` attribute gives a text description of the image. It is used by screen readers and is also displayed if the image cannot be rendered for whatever reason
- <table></table>
    - encloses elements that represent data to be represented in a table format (all elements below can be included)
- <thead></thead>
    - defines a header for a table, typically housing the row that represents column headers
- <tbody></tbody>
    - defines the body of the table, as opposed to the head or foot.
    - rows in the body represent the actual data of the table
- <tfoot></tfoot>
    - defines the final, summarizing set of rows in a table
- <tr></tr>
    - defines a row in the table
    - seen in all three sections, head, body, and foot
- <th></th>
    - defines a cell header
    - in a row in the body, this may be the label for that row
    - in a row in the head, there may be many of these elements in order to label each column
    - `scope` attribute tells us whether this is a header for a 'row' or a 'column'
- <td></td>
    - defines a data cell
    - these are the main elements that compose a row in the body of the table (<tbody>)

## Testing in JavaScript (W6D4) - Learning Objectives
### Testing
1. Explain the "red-green-refactor" loop of test-driven development.
- Red: Write tests and watch them fail (protect against false positives)
- Green: Write the minimum amount of code to get the test to pass
- Refactor: Refactor the written code so that it is easy to maintain and understand

2. Identify the definitions of SyntaxError, ReferenceError, and TypeError
- SyntaxError
    - an error in how the code is written
    - encountered at compile-time, ie the code cannot be parsed to determine the instructions
    - since our code cannot be run, SyntaxErrors cannot be caught by a try-catch block
    - common examples would be:
        - a misspelled function keyword (`funtion broken() {...}`)
        - incorrect number of curly braces
- ReferenceError
    - when a nonexistent variable is referenced
    - most commonly seen when you mistype a variable name, or refer to one out of the current scope
    ```javascript
    const puppy = "puppy";
    console.log(pupy); // mistyped variable name
    ```

    ```javascript
    function callPuppy() {
        const puppy = "puppy";
    }
    console.log(puppy); // puppy is not in scope, it was created in the callPuppy function
    ```
- TypeError
    - when a variable or parameter is not of a valid type
    - can also be seen if we are trying to modify a value that cannot be changed (because a variable is declared with `const` instead of `let`, for example)
    ```javascript
    let dog; // Remember unassigned variables are undefined!
    dog(); // TypeError: dog is not a function

    const puppy = "puppy";
    puppy = "apple"; // TypeError: Assignment to constant variable.
    ```

3. Create, modify, and get to pass a suite of Mocha tests
- File Structure
    - Mocha will expect a `test` directory at the location that we are running our `mocha` command (typically the top level of our project)
    ```
    testing-demo
    └──
    problems
        └── reverse-string.js
    test
        └── reverse-string-spec.js
    ```
- Setting up `describe` and `it` blocks
    - We want to keep our tests organized just like our code.
    - A `describe` block gives a high level indication of what we are going to be testing, like the name of the function.
    - An `it` block tells us something that we are specifically testing. It defines an individual test that we are running.
    ```js
    describe ('reverseString()', function () {
        it('should reverse the input string', function () {
            // a test will go here!
        })
    }
    ```
- Using `assert` to test
    - Inside our `it` blocks we can use the `assert` module to execute a test.
    - There are many different functions we can use in this module.
    - A very common one is to use the `strictEqual` function, which compares two values. We can see other less common functions in the docs: https://nodejs.org/docs/latest-v12.x/api/assert.html# 
    ```js
    // remember we required the assert module and reverseString function at the top of this file
    describe("reverseString()", function() {
        it("should reverse the input string", function() {
            let test = reverseString("hello");
            let result = "olleh";
            // the line below is where the actual test is!
            assert.strictEqual(test, result);
        });
    });
    ```
    - Another common thing to test is that a function throws an error appropriately. We can use the `throws` function, which accepts a callback to invoke, the error we expect when that callback is invoked, and a message to show if the fail doesn't go through correctly.
        - It's important to note here that if we expect our function to throw an error, we cannot invoke it immediately, or else our test file itself will error out. We need to surround it in another function creating a callback to be invoked later. Our assertion is then able to compare the error to the second argument.
    ```js
    // note that we are passing function(){reverseString(3);} as an argument, not reverseString(3) directly
    context("given an argument that is not a string", function() {
        it("should throw a TypeError when given an argument that is not a string", function() {
            assert.throws(
            function() {
                reverseString(3);
            },
            TypeError,
            "this function only accepts string args"
            );
        });
    });
    ```

4. Use Chai to structure your tests using behavior-driven development principles.
- The Chai testing library provides additional functionality compared to using the basic `assert` module that comes with Node.
- Since it is external, we need to add it to our project with `npm install chai`
- After adding the library, we can require it just like the `assert` module with `const chai = require("chai");` at the top of our test files.
- Using `expect` from the `chai` library, we can chain "getters" together to construct tests that read like English. Since we use `expect` so much in our code, we generally separate it out at the top once instead of for each test: `const expect = chai.expect;`
```js
const chai = require("chai");
const expect = chai.expect;

// don't forget to import the class you are testing!
const Dog = require("../problems/dog.js");

describe("Dog Constructor Function", function() {
  it('should have a "name" property', function() {
    const layla = new Dog("Layla");
    expect(layla).to.have.property("name");
  });

  it('should set the "name" property when a new dog is created', function() {
    const layla = new Dog("Layla");
    // we are using the eql function to compare the value of layla.name
    // with the provided string
    expect(layla.name).to.eql("Layla");
  });
});
```
- This is a great cheatsheet for understanding what common chains are available to us: https://devhints.io/chai
- We can also reference the docs for a more detailed explanation: https://www.chaijs.com/api/bdd/

5. Use the pre- and post-test hooks provided by Mocha
- We learned about four hooks
    - before('description', callback): Callback is invoked before the block of test code is run
    - beforeEach('description', callback): Callback is invoked before each `it` statement in the block of test code
    - after('description', callback): Callback is invoked after the block of test code is run
    - afterEach('description', callback): Callback is invoked after each `it` statement in the block of test code
- before and beforeEach allows us to set up our test, pulling out common Arrange or Act portions of our tests
- after and afterEach are going to be less common for us, but allow us to do any kind of cleanup that may be necessary after a test has run
    - Looking forward, maybe we need to remove something from our database that our test created

6. Be familiar with `chai-spies` and its ability to test how many times a function is invoked
- After adding the `chai-spies` package to our project with `npm install chai-spies`, we can require it in our testing file. We are extending the functionality of the `chai` library, which has the `use` function to allow us to do so:
```js
const spies = require("chai-spies");
chai.use(spies);
```
- After this initial setup, we can spy on a particular function by creating a spy:
```js
// `on` takes in the object that we are spying on and the method we want to specifically watch
// Here we are saying to look at the layla object and track the calls to the chaseTail method
const chaseTailSpy = chai.spy.on(layla, "chaseTail");
```
- With our spy created, we can invoke whatever functions we would expect to call (or not call, if we are expecting 0 invocations) our method. We can then expect that our spy has been called any number of times:
```js
context("with a valid number parameter", function() {
  it("should call the chaseTail method n times", function() {
    const chaseTailSpy = chai.spy.on(layla, "chaseTail");
    layla.chainChaseTail(3);
    // below is our actual test to see how many times our spy was invoked
    expect(chaseTailSpy).to.have.been.called.exactly(3);
  });
});
```
```js
describe('myMap(array, callback)', () => {
	let inputArray;
	let callback = (el) => el + 1;
	beforeEach(() => {
		inputArray = [ 1, 2, 3 ];
	});
    // ...other tests
	it('should not call Array#map', () => {
        // The object we are spying on is the inputArray
        // We want to make sure we don't call `map` on it
            // We want our function do its own iteration and invocation
            // We are emulating Array#map instead of calling it directly
		const mapSpy = chai.spy.on(inputArray, 'map');
		myMap(inputArray, callback);

		expect(mapSpy).to.not.have.been.called();
	});
});
```
