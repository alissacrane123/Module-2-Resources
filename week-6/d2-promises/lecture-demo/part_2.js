// VIDEO 2




// #1 - REFACTORING WITH PROMISES

// function grindTheBeans() {
//   return new Promise(resolve => {
// 		console.log("start grinding the beans");

//     setTimeout(() => {
//       resolve();
//     }, 1000)
//   })
// }

// function heatTheWater() {
//   return new Promise(resolve => {
// 		console.log("start heating the water");

//     setTimeout(() => {
//       resolve();
//     }, 2000)
//   })
// }


// function addBeansToWater() {
//   return new Promise(resolve => {
// 		console.log("add beans to water");

//     setTimeout(() => {
//       resolve();
//     },1000)
//   })
// }

// function makeCoffee() {
// 	grindTheBeans()
//     .then(() => console.log("done grinding the coffee beans"))
//     .then(() => heatTheWater())
//     .then(() => console.log("done heating water"))
//     .then(addBeansToWater)
//     .then(() => console.log("coffee is ready, enjoy!"))
//     .catch((err) => console.log(err));
// }

// makeCoffee();



// callback solution

// function makeCoffee() {
// 	grindTheBeans(() => {
// 		heatTheWater(() => {
// 			addBeansToWater(() => {
// 				console.log('coffee is ready!');
// 			});
// 		});
// 	});
// }











// function grindTheBeans() {
//   return new Promise(resolve => {
// 		console.log("start grinding the beans");

//     setTimeout(() => {
//       resolve("done grinding the coffee beans");
//     }, 1000)
//   })
// }

// function heatTheWater() {
//   return new Promise(resolve => {
// 		console.log("start heating the water");

//     setTimeout(() => {
//       resolve("done heating water");
//     }, 2000)
//   })
// }


// function addBeansToWater() {
//   return new Promise(resolve => {
// 		console.log("add beans to water");

//     setTimeout(() => {
//       resolve("coffee is ready, enjoy!");
//     },1000)
//   })
// }


// function makeCoffee() {
// 	grindTheBeans()
//     .then(res => console.log(res))
//     .then(heatTheWater)
//     .then(res => console.log(res))
//     .then(addBeansToWater)
//     .then(res => console.log(res))
//     .catch((err) => console.log(err));
// }

// makeCoffee();







// #2 - PROMISE#ALL



function updateEmail(username, newEmail, interval) {
	return new Promise((resolve, reject) => {
		console.log(`begin updating ${username}'s email`);

		setTimeout(() => {
			// reject(`failed to update ${username}'s email`)
			resolve(`${username}'s email succsesfully changed to ${newEmail}`);
		}, interval)
	})
}


let javierPromise = updateEmail('javier','javier@email.com', 1000);
let bradPromise = updateEmail('brad','brad@email.com', 2000);
let senyoPromise = updateEmail('senyo','senyo@email.com', 500);
let kristenPromise = updateEmail('kristen','kristen@email.com', 1500);




let promises = [javierPromise, bradPromise, senyoPromise, kristenPromise];

Promise.all(promises)
  .then((results) => {
    console.log('resolved values: \n', results);
		console.log("emails have been successfully updated!");
		return results;
	})
	.then(results => {
		results = results.map(val => val.toUpperCase());
		return results;
	})
	.then(uppercaseResults => {
		console.log(uppercaseResults)
	})
  .catch((reason) => {
    console.log('error: ', reason);
	})

	




