/********Week 6 Practice Test - Problem 1 - Promises with .then ***************

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

2. Write a function named `gettingQuotes` that will accept one parameter, which will 
be the `url` of the API endpoint you want to request data from.  The `gettingQuotes`
function should fetch the url parameter, convert the response from JSON to an 
object, and then console log the quote and author in seperate lines.  Interpolate 
the author into the following format `- ${author}`.  YOU NEED TO ACCOMPLISH THIS 
USING `.THEN` PROMISE HANDLING SYNTAX (YOU CAN NOT USE ASYNC AND AWAIT).    

HINT:  Test out what your response would be from the API and that will help you
figure out how to correctly destructure the object into the output requested.

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Call the `gettingQuotes` function with the correct
areguement and then use the command:
`node problems/01-fetch-promise.js`

Examples:
gettingQuotes("https://zenquotes.io/api/random");

// Should print...
//
//  Be not glad at the misfortune of another, though he may be your enemy. 
//  - George Washington 
//
NOTE:  You will not get the same quote, you are getting random quotes, but 
it should be formatted the same as above.

*************** YOUR CODE BELOW ***************************************/





/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/

try {
  module.exports = gettingQuotes;
} catch {
  module.exports = null;
}
