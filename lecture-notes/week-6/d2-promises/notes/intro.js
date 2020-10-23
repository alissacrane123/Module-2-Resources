// AFTER VIDEO 1

// in javascript, all code is executed in , in the  order it appears
// some operations take more timee to complete than others
// fetching data from an api, querying a database
// waiting for all of these tasks to complete before starting the next one
// could result in huge bottlenecks

// javascript handles this issue by allowing
// these kinds of operations
// (fetching data from api, querying database)
// to be completed in paralleel to the rest of your code
// or asynchrnonously

// async code can be difficult to manage
// because javascript needs a way to know when async code has a result
// either the value we were looking for or an error message

// can use callbacks to address this problem
// where the callback is executed once the result is ready
// although this can get super complicated quickly

// in the video alvin used this coffee example
// note settimeout here is used to simulate async behavior

// there are three tasks for creating coffee
// first we need to grind the beans, 
// theen we need to heat th water, but only after we're done grinding beans
// last we need to add the beans to water but only after weve successfully heated it


function grindTheBeans(nextTask) {
  setTimeout(() => {
    console.log("done grinding the coffee beans");
    nextTask();
  }, 1000);
}

function heatTheWater(nextTask) {
  setTimeout(() => {
    console.log("done heating the water");
    nextTask();
  }, 500);
}

function addBeansToWater(nextTask) {
  setTimeout(() => {
    console.log("done adding beans to water");
    nextTask();
  }, 1000);
}

// callback craziness
// works but want to avoid code like this
// nested structure of callbacks is hard to read

grindTheBeans(() => {
  heatTheWater(() => {
    addBeansToWater(() => {
      console.log("enjoy");
    });
  });
});

// seems like there could be a better way to handle this...













// WHAT IS A PROMISE?

// promise (noun) : assurance that one will do something or
// that a particular thing will happen 

// thats actually regular definition of promise

// promises in javascript are very similar to promises you make in real life
// 1. promises give an assurance that something will be done
// 2. promises can either be kept or broken
// 3. when a promise is kept you expect something out of that promise
// 4. when a promise is broken you likely will want to know why it was broken






// CREATING PROMISES PSEUDO CODE

// Promise is an object type in Javascript
// wraps async operation and notifies us when its done

// receives a callback, called "Executer" as an argument
// promises are "eaeger" so as soon as you create one using new keyword
// it will immediately start executing the code inside

// executor has no meaningful return value
// accepts 2 cb as args, resolve and reject 
// if we call resolve, we fulfilled promise => we have the value
// if we call reject, we receive error message


// promises have three states
// 1. pending, meaning it hasnt been resolved or rejected yet
// 2. fulfilled, meaning that we have a value and our resolve callback has been called
// 3. rejected, meaning an error occur and we've passed that message to our errorHandling cb

let myFirstPromise = new Promise((resolve, reject) => {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});


// ANY QUESTIONS?









// EXAMPLE: SETTIMEOUT USED TO SIMULATE Async CODE


let myPromise = new Promise((resolve, reject) => {
  // simulate async code
  setTimeout(() => {
    // calling resolve argument after 1 second
    // after 1 second, our promise is fulfilled
    // argument we pass to resolve is the value it fulfilled with

    resolve('the promise has been fulfilled')
    // reject('the promise is rejected')
  }, 1000)
});



// Q = What do we think this is going to print out?

// printed promise object we can see it is pending
// we're calling our resolve function after 1 second
// printed it before it had a chance to fulfill
console.log(myPromise)

// not idael right beacuse what we really want is value
// it fulfilled with


// Q = so how can we get the actual value that it was fulfilled with?
// A = using then
// .then() is a method we can call on promises


// Q = What is the first argument that .then() accepts?
// A = first is resolve cb, second is reject cb


// .then() with one argument
// res is argument we've passed to resolve()
// promise resolives after 1 second
myPromise
  .then(res => console.log(res)) 

  

// Q = what is this going to pring?
// A = the promise has been fulfilled




// Q = what happens if our promise is rejected?
// A = not having an errorHandler will result in 
// node warning "UnhandledPromiseRejectionWarning"





// Q = what is this going to print?
// A = the promise has been rejected






// .then() with two arguments
// first is resolve callback, second is rejected

myPromise.then(
  (result) => {
  console.log('resolved: ', result)
}, (reason) => {
  console.log('rejected: ', reason)
})











// CHAINING .THEN()s

// Q = what does .then return?
// A = another promise

// since .then returns a promise, we can chain .thens on previous .thens

myPromise
  // then method returns a promise so can chain
  // result is return value of promise
  .then((result) => {
    console.log('resolved: 1', result)
    return 42
  })
  // will always call in order
  // result is return value of previous then
  .then((result) => {
    console.log('resolved: 2', result)
  })


  // Q =  what is this going  to print?
// A =  the return value of  the first then is
// pased as the argument to the second then




// USING .THEN() AND .CATCH()

// .catch is another method we can call on promises
// .then returns a promise, so we can chain  a .catch onto a .then
// alternative to passing second argument to.then()

myPromise
  // then method returns a promise so can chain
  // result is return value of promise
  .then((result) => {
    console.log('resolved: 1', result)
    return 42
  })
  // will always call in order
  // result is return value of previous then
  .then((result) => {
    console.log('resolved: 2', result)
  })
  // reason will be the reason the initial promise failed
  .catch((reason) => {
    console.log('rejected: ', reason)
  })


// if error occurs:
// 1. First then: I do not have an error handler. 
//    I will pass the error on and not run the success handler.
// 2. Second then: I do not have an error handler. 
//    I will pass the error on and not run the success handler.
// 3. Catch: I will handle error





// WHAT DO PROMISES LOOK LIKE IN FINAL STATE?

// resolved => promise contains value it resolved for
// rejected => tells us it was rejected and contains reason

myPromise
  .then((result) => {
    console.log('resolved: ', result);
    console.log(myPromise); // promise contains value it resolved for
  })
  .catch((reason) => {
    console.log('rejected: ', reason)
    console.log(myPromise) // tells us it was rejected, and contains err 
  })


