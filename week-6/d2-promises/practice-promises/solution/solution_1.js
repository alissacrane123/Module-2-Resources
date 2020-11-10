// TODO: write a function called prepareDough
// - should return a promise
// - should fulfill the promise after 1 seconds with a value of 
//   "done preparing dough"


function prepareDough() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done preparing dough");
    }, 1000);
  });
}

// TODO: write a function called preheatOven
// - should return a promise
// - should fulfill the promise after 0.5 seconds with a value of 
//   "done preheating oven"

function preheatOven() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done preheating oven");
    }, 500);
  });
}

// TODO: write a function called bakeCookies
// - should return a promise
// - should fulfill the promise after 2 seconds with a value of 
//   "done baking cookies"

function bakeCookies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done baking cookies");
    }, 2000);
  });
}

// 4. write a function called `makeDessert` that runs the above functions in a way
// that ensures you begin preheating oven after you're finished preparing dough,
// you being baking cookies after you've finished preheating the oven,
// console.logs the value each promise fulfills with, after they fulfill
// and console.logs "dessert is ready" after you've finished baking cookies


function makeDessert() {
  prepareDough()
    .then(res => console.log(res))
    .then(preheatOven)
		.then(res => console.log(res))
		.then(bakeCookies)
		.then(res => console.log(res))
		.then(() => console.log('dessert is ready!'))
    .catch((err) => console.log(err));
}

makeDessert();
// done preparing dough
// done preheating oven
// done baking cookies
// dessert is ready!