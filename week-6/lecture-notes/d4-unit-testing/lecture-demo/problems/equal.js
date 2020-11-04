

function double(arr) {
	let newArr = arr.map(el => el * 2);

	return newArr;
}


function doubleInPlace(arr) {
	for (let i = 0; i < arr.length; i++) {
		let val = arr[i];
		arr[i] = val * 2;
	}

	return arr;
}


module.exports = { double, doubleInPlace }