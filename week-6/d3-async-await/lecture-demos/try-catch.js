
// function sum(array) {
// 	let sum = 0;

// 	for (let i = 0; i < array.length; i++) {
// 		sum += array[i]
// 	}

// 	return sum;
// }


function sum(array) {
	let sum = 0;
	try {
		for (let i = 0; i < array.length; i++) {
			sum += array[i]
		}

	} catch (e) {
		handleError(e)
	}
	return sum;
}


function handleError(error) {
	console.log('something happened: ', error.message)
}



let res = sum(null)
console.log(res)



// function throwError() {
// 	throw Error('an error occurred')
// 	handleError(error)
// }


// function throwError() {
// 	try {
// 		throw Error('an error occurred')
// 	} catch (error) {
// 		handleError(error)
// 	}
// }
