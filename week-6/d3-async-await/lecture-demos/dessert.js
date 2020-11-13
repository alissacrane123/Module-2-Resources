// TODO: create a function called prepareDough
// - should console.log 'start preparing dough' as soon as it is invoked
// - should return a promise that resolves after one second with a value
// of 'done preparing dough'

// function prepareDough() {
// 	console.log('start preparing dough');

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('done preparing dough')
// 		}, 1000)
// 	})
// }


// // TODO: create a function called bakeCookies
// // - should console.log 'start baking cookies' as soon as it is invoked
// // - should return a promise that resolves after two seconds with a value
// // of 'done baking cookies'

// function bakeCookies() {
// 	console.log('start baking cookies')

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('done baking cookies')
// 		}, 2000)
// 	})
// }



// TODO: create a function called makeDessert
// - should use .then statements to ensure that we begin baking cookies
// when we're done preparing the dough
// - should console.log the value each promise fulfills with
// - should console.log 'dessert is ready' when we're done baking cookies

// function makeDessert() {
// 	prepareDough()
// 		.then(res => console.log(res))
// 		.then(bakeCookies)
// 		.then(res => console.log(res))
// 		.then(() => console.log('dessert is ready!!!'))
// 	  .catch(err => console.log('ERROR: ', err))
// }


// TODO: recreate makeDessert method using async & await

// async function makeDessert() {
// 	try {

// 		let res1 = await prepareDough();
// 		console.log(res1)
// 		let res2 = await bakeCookies();
// 		console.log(res2);
// 		console.log('dessert is ready!')
// 	} catch (err) {
// 		console.log('error: ', err)
// 	}
// }



// makeDessert();

// console.log('hello');

// start preparing dough
// done preparing dough
// start baking cookies
// done baking cookies
// dessert is ready!












// ERROR HANDLING

function prepareDough() {
  console.log("start preparing dough");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done preparing dough");
    }, 1000);
  });
}


function bakeCookies() {
	console.log('start baking cookies')

	return new Promise((resolve, reject) => {
		setTimeout(() => {

			reject('uh oh, burnt cookies!')
		}, 2000)
	})
}




// ERROR HANDLING WITH TRY CATCH BLOCK

// async function makeDessert() {
//   try {
//     let res1 = await prepareDough();
//     console.log(res1);
//     let res2 = await bakeCookies();
//     console.log(res2);
//     console.log("dessert is ready!!!");
//   } catch (err) {
//     console.log("ERROR: ", err);
//   }
// }

// makeDessert();




// ASYNC FUNCTIONS RETURN A PROMISE SO YOU CAN CHAIN .THEN AND .CATCH

async function makeDessert() {
	let res1 = await prepareDough();
	console.log(res1);
	let res2 = await bakeCookies();
	console.log(res2);
	console.log("dessert is ready!!!");
}

// const makeDessert = async () => {

// }

makeDessert()
	.catch(err => console.log('ERROR: ', err))









// VALUE RETURNED FROM ASYNC FUNCTION IS VALUE PROMISE FULFIILLS WITH

// function prepareDough() {
//   console.log("start preparing dough");

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("done preparing dough");
//     }, 1000);
//   });
// }


// function bakeCookies() {
// 	console.log('start baking cookies')

// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			resolve('done baking cookies')
// 		}, 2000)
// 	})
// }

// async function makeDessert() {
// 	let res1 = await prepareDough();
// 	console.log(res1);
// 	let res2 = await bakeCookies();
// 	console.log(res2);
// 	return 'yay, dessert is ready'
// }

// makeDessert()
// 	.then(res => console.log(res))
// 	.catch(err => console.log('ERROR: ', err))





























