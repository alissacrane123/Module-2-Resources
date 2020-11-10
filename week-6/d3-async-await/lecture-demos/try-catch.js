function throwError() {
	throw Error('an error occurred')
	handleError(error)
}


function throwError() {
	try {
		throw Error('an error occurred')
	} catch (error) {
		handleError(error)
	}
}


function throwError() {
	try {
		let string = 'hello';
		string.map( el => el);
	} catch (error) {
		handleError(error)
	}
}

function handleError(error) {
	console.log('something happened: ', error.message)
}


throwError();