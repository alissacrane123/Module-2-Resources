
function stretch() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done stretching');
			resolve()
		}, 1000)
	})
}


function runOnTreadmill() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done running on treadmill');
			resolve()
		}, 500)
	})
}

function liftWeights() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done lifting weights');
			resolve()
		}, 2000)
	})
}


// TODO: use async & await to create a function called workout that runs the 
// above functions in a way that ensures you begin runningOnTreadmill after 
// you're finished stretching, you being liftWeights after you've finished 
// running on the treadmill and console.logs "done working out" after 
// you've finished lifting weights


async function workout() {
	try {
		await stretch();
		await runOnTreadmill();
		await liftWeights();
		console.log('done working out');
	} catch (err) {
		console.log(err);
	}
}



// TESTING 

workout();
// done stretching
// done running on treadmill
// done lifting weights
// done working out