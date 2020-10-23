// AFTER VIDEO 2

// we've adjusted our coffee functions so that they each return a promise

function grindTheBeans() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("done grinding the coffee beans");
      resolve();
    }, 1000);
  });
}

function heatTheWater() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("done heating the water");
      resolve();
    }, 2000);
  });
}

function addBeansToWater() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("done adding to the water");
      resolve();
    }, 1000);
  });
}

// Q = what is this going to print?
// A = a pending promise, then "done grinding the beans"
// our grindTheBeans promise resolves after 1 second

// console.log(grindTheBeans())




// Q = what is this going to print?

// returns a promise that resolves after 2 second
grindTheBeans()
  .then(() => console.log("after grinding the beans"))
  // will only begin heating water after done grinding beans
  // heatTheWater returns promise that resolves after 1 second
  .then(heatTheWater)
  .then(() => console.log("after heating water"))
  // addbeansToWater returns promise that resolves after 1 second
  .then(addBeansToWater)
  .then(() => console.log("enjoy"));


// 1. grindTheBeans() prints "done grinding beans" and returns a fulfilled promise
// 2. first .then() prints "after grinding beans" and returns a fulfilled promise
// 3. second .then() calls heatTheWater 
// 4. headTheWater prints "done heating", returns fulfilled promise
// 5. third .then() prints "after heating water", and returns fulfilled promise
// 6. fourth .then() calls addBeansToWater
// 7. addBeansToWater prints "done adding to the water", returns fulfilled promise




// Q = What if we have multiple async operations, 
// but we dont care about their order of completion
// we just care about completing all of the operations?
// A = Promise.all()













// PROMISE.ALL()


// Promise.all accepts array of promises as argument
// Promise.all returns single promise
// will begin tasks immediately
// won't wait for one to be finished


function grindTheBeans() {
  // signals we're begining this action
  console.log("prep for grinding the beans");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done grinding the beans");

      // reject('unground beans :(')
      resolve('ground beans')
    }, 2000);
  });
};

function heatTheWater() {
  console.log("prep for heating the water");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done heating the water");

      reject('the water is cold :(')
      // resolve('heated water')
    }, 1000);
  });
};


// array of promises, both funcs returns promises
let promises = [grindTheBeans(), heatTheWater()]



// returns a promise so you can chain thens
// returns fulfilled promise if all promises are fulfilled
// returns rejected promise as soon as one of theem fails
Promise.all(promises)
// results is array containing resolution of each promise
  .then((results) => {
    console.log(results);
    console.log('coffee is done, time to chill')
  })
  .catch((reason) => {
    console.log(reason)
  })