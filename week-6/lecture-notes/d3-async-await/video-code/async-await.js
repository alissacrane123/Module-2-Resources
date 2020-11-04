function doTheDishes() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('clean dishes');
			// reject('dirty dishes')
		}, 1000);
	})
}

function walkTheDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('happy dog');
      // reject('sad dog')
    }, 500);
  });
}


// USING .THEN 

// function doChores() {
// 	let items = []
// 	doTheDishes()
// 		.then(res => items.push(res))
// 		.then(walkTheDog)
// 		.then(res => items.push(res))
// 		.then(() => items.forEach(item => console.log(item)))
// 		.catch(err => console.log('ERROR: ', err))
// }


// USING ASYNC / AWAIT 

async function doChores() {
	try {
		let items = [];
		let res1 = await doTheDishes();
		items.push(res1);
		let res2 = await walkTheDog();
		items.push(res2);

		items.forEach(item => console.log(item))
	} catch (err) {
		console.log('ERROR: ', err)
	}
}

doChores()