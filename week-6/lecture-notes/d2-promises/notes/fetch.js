const fetch = require("node-fetch");

// FETCHING DATA FROM API

// Q = what is an api?

// api = set of functions we can use as a service to get information
// most common async action you'll do in js
// async because we're grabbing data from external source
// we're not sure how long its going to take to get that data
// node = program we use to run our code
// npm = used to manage packages, can install dependencies for project
// npm install node-fetch => will create node_modules


// Q = What is fetch?
// A = function
console.log(fetch) // should be function


// Q = what does fetch return? 
// A = a promise
// console.log(fetch('https://api.github.com/users/github'))



// can handle this promise using then or catch
// to read response from fetch request must use then to capture response

fetch('https://api.github.com/users/github')
  // docs tell us json method returns promise as well
  // this will print a promise
  .then(res => console.log(res.json()))
  // note this is an implicit return
  .then(res => res.json())
  // since res.json() returns a promsie can chain another then
  // this will print actual data we've fetched
  .then(jsonRes => console.log(jsonRes.location))








// tons of apis out there to play around with
// they have different requriements to get used to reading docs
// this is a fun one that returns movie info

// API KEYS 


// for most apis you will need a key
// api servers arent free to run so owners don't want
// anyone to be able to query their db whenever they want
// too many requests in short amount of time wont be allowed

// http://www.omdbapi.com/?apikey=afab3d6d&t=harry+potter

fetch("http://www.omdbapi.com/?apikey=afab3d6d&t=harry+potter")
  .then(res => res.json())
  .then(res => console.log(res.Title));
