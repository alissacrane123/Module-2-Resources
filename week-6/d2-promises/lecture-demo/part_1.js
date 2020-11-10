// VIDEO 1




// #1 - PROBLEM

// function grindTheBeans() {
//   setTimeout(() => {
//     console.log('done grinding the coffee beans');
//   }, 1000)
// }

// function heatTheWater() {
//   setTimeout(() => {
//     console.log('done heating the water');
//   }, 500)
// }

// function addBeansToWater() {
//   setTimeout(() => {
//     console.log('done adding beans to water');
//   }, 1000)
// }

// function heatTheBeans() {
//   setTimeout(() => {
//     console.log('done heating the beans');
//   }, 800)
// }



// function makeCoffee() {
// 	grindTheBeans();
// 	heatTheWater();
// 	addBeansToWater();
// 	heatTheBeans();
// }


// makeCoffee();












// #2 - CALLBACK SOLUTION

function grindTheBeans(nextTask) {
  setTimeout(() => {
    console.log('done grinding the coffee beans');
    nextTask();
  }, 1000)
}

function heatTheWater(nextTask) {
  setTimeout(() => {
    console.log('done heating the water');
    nextTask();
  }, 500)
}

function addBeansToWater(nextTask) {
  setTimeout(() => {
    console.log('done adding beans to water');
    nextTask();
  }, 1000)
}

function heatTheBeans(nextTask) {
  setTimeout(() => {
    console.log('done heating the beans');
    nextTask();
  }, 800)
}



// #3 - THE CALLBACK ISSUE

function makeCoffee() {
	grindTheBeans(() => {
		heatTheWater(() => {
			addBeansToWater(() => {
				heatTheBeans(() => {
					console.log('coffee is ready!');
				});
			});
		});
	});
}

// makeCoffee();











// #4 - PROMISES

// promise (noun) : assurance that one will do something or
// that a particular thing will happen




// #5 - PSEUDO CODE

// let myFirstPromise = new Promise((resolve, reject) => {
//   // do a thing, possibly async, then…

//   if (/* everything turned out fine */) {
//     resolve('Stuff worked!');
//   }
//   else {
//     reject(Error('It broke'));
//   }
// });














// #6 - EXAMPLE: setTimeout used to simulate async code

// let myPromise = new Promise((resolve, banana) => {

// 	console.log('async code begins executing');

//   setTimeout(() => {

// 		console.log('async code completes');

// 		// resolve('the promise has been fulfilled');
// 		banana('the promise is rejected')
		
// 		console.log(myPromise);
//   }, 1000)
// });


// console.log(myPromise); // Pending











// #7 - USING PROMISE#THEN

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
// 		// if (// something bad happened) {

// 		// 	reject('the promise is rejected')
// 		// }
//     resolve('banana');
//   }, 1000)
// });


// console.log(myPromise); // pending

// myPromise
//   .then(
//     (result) => { console.log('resolved: ', result) },
//     (reason) => { console.log('rejected: ', reason) }
//   )


// CAN USE NAMED CALLBACKS INSTEAD

// let onFulfilled = (result) => { console.log('resolved: ', result) };
// let onRejected = (reason) => { console.log('rejected: ', reason) };

// myPromise
//   .then(onFulfilled, onRejected)












// #8 - UNHANDLED PROMISE REEJECTIONS


// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
// 		reject('the promise is rejected');
// 		resolve('banana');
// 		console.log(myPromise)
//   }, 1000)
// });

// let onFulfilled = (result) => {
//   console.log('resolved: ', result);
// };

// let onRejected = reason => {
// 	console.log('rejected', reason)
// }

// myPromise
// 	.then(onFulfilled, onRejected)
	













// #9 - CHAINING .THENs

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

// 		resolve('the promise has been fulfilled');
		
//   }, 1000)
// });

// myPromise
//   .then((result) => {
//     console.log('resolved 1:', result)
//     return 42
//   })
//   .then((result) => {
// 		console.log('resolved 2:', result);
// 		return 'banana'
// 	})
// 	.then((res) => {
// 		console.log('resolved 3: ', res);
// 	})










// #10 - ERROR HANDLING

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {

//     reject(Error('the promise is rejected'))
//   }, 1000)
// });


// let onFulfilled = (result) => { console.log('resolved: ', result) };
// let onRejected = (reason) => { throw Error('something happened') };


// // myPromise
// //   .then(onFulfilled, onRejected)


// // COULD KEEP CHAINING .THENS BUT WHEN DOES IT END?
// myPromise
//   .then(onFulfilled, onRejected)
//   .then((res) => console.log(res), (err) => console.log(err))



















// #11 - USING CATCH


// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error('the promise is rejected'));
//   }, 1000);
// });


// let onFulfilled = (result) => { console.log('resolved: ', result) };
// let onRejected = (reason) => { throw Error('something happened') };


// // myPromise
// //   .then(onFulfilled, onRejected)


// myPromise
//   .then(onFulfilled)
//   .catch(err => {
// 		console.log('CATCH: ', err);
// 		return 50;
// 	})
// 	.then(res => console.log(res))













// #12 - EXAMPLE

// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(Error('the promise is rejected'));
//     // resolve('resolved woohoo')
//   }, 1000)
// });


// let firstOnFulfilled = (result) => {
// 	console.log('resolved #1: ', result);
// 	return 42;
// }

// let secondOnFulfilled = (result) => {
// 	console.log('resolved #2: ', result);
// }

// myPromise
//   .then(firstOnFulfilled)
//   .then(secondOnFulfilled)
//   .catch(reason => {
//     console.log('rejected: ', reason);
//   });













// #13 - PROMISES IN THEIR FINAL STATE

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
		resolve('the promise was resolved')
    // reject(Error('the promise was rejected'));
  }, 1000);
});


console.log(myPromise)

let onFulfilled = (result) => { 
	console.log(myPromise);
};

let onRejected = (reason) => { 
	console.log(myPromise);
};


myPromise
  .then(onFulfilled, onRejected)


