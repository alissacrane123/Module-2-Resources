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
//     .then(heatTheWater)
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











// #2 - PROMISE#ALL



// function sendEmail(recipient, interval) {
// 	return new Promise((resolve, reject) => {
// 		console.log(`begin sending email to ${recipient}`);

// 		setTimeout(() => {
// 			resolve(`email succsesfully sent to ${recipient}`);
// 			// reject(`email to ${recipient} failed to send`)
// 		}, interval)
// 	})
// }


// let jamesPromise = sendEmail('james', 1000);
// let bradPromise = sendEmail('brad', 2000);
// let senyoPromise = sendEmail('senyo', 500);
// let kristenPromise = sendEmail('kristen', 1500);




// let promises = [jamesPromise, bradPromise, senyoPromise, kristenPromise];

// Promise.all(promises)
//   .then((results) => {
//     console.log('resolved values: \n', results);
//     console.log("emails have been successfully sent!");
//   })
//   .catch((reason) => {
//     console.log('error: ', reason);
// 	});
	




