/********Week 6 Practice Test - Problem 2 - Promises with async/await **********

🧘🏾‍♂️ Lets get some motivational quotes to help us prepare for the next
assessment! 🧘🏼‍♀️

1. Require the `node-fetch` module so you can make fetch calls in node.

Documentation link for `node-fetch`:
https://www.npmjs.com/package/node-fetch

ZenQuotesAPI is a simple API that does not require an API key, but will limit 
you requests to per second.  The following link will return a random quote along 
with it author  "https://zenquotes.io/api/random".  

The Documentation link for ZenQuotesAPI:
https://zenquotes.io/

2. Write a function named `gettingAsyncQuote` that will accept one parameter, which will 
be the `url` of the API endpoint you want to request data from.  The `gettingAsyncQuote`
function should fetch the url parameter, convert the response from JSON to an 
object, and then console log the quote and author in seperate lines.  Interpolate 
the author into the following format `- ${author}`.  YOU NEED TO ACCOMPLISH THIS 
USING `ASYNC` AND `AWAIT` (YOU CAN NOT USE `.THEN`).    

HINT:  Test out what your response would be from the API and that will help you
figure out how to correctly destructure the object into the output requested.

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Call the `gettingAsyncQuote` function with the correct
areguement and then use the command:
`node problems/02-fetch-async-await.js`

Examples:
gettingAsyncQuote("https://zenquotes.io/api/random");

// Should print...
//
//  Be not glad at the misfortune of another, though he may be your enemy. 
//  - George Washington 
//
NOTE:  You will not get the same quote, you are getting random quotes, but 
it should be formatted the same as above.

*************** YOUR CODE BELOW ***************************************/

const fetch = require("node-fetch");

const gettingAsyncQuote = async (url) => {
  try {
    const response = await fetch(url);
    const quote = await response.json();
    console.log(quote[0].q);
    console.log(`- ${quote[0].a}`);
  } catch (error) {
      throw error;
  }
};

// gettingAsyncQuote("https://zenquotes.io/api/random");

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = gettingAsyncQuote;
} catch {
  module.exports = null;
}