// lets improve upon problem #1 

// adjust your workout function so that it takes in a specific amount of time
// that you have available for the entire workout

// given the following rules, have each promise resolve with the amount of time
// left by decrementing each action by its specific amount of time

// rules:
// 	1. you must stretch for 1 second
// 	2. you must run on treadmill for 0.5 seconds
// 	3. you must lift weights for 2 seconds

// if the time neeeded to complete the current action exceeds the amount of time
// left, reject the promise and provide a reason

// workout(500) // "Error: you dont have enough time to stretch"
// - if we only have 0.5 seconds to workout, we wont even have enough time to stretch



function stretch(timeLeft) {
	return new Promise((resolve, reject) => {
		if (timeLeft < 1000) {

			// if we dont have enough time to complete the action
			// reject the promise with the reason 
			reject('you dont have enough time to stretch')

		} else {

			// decrement timeLeft by time it takes to stretch
			timeLeft -= 1000;

			setTimeout(() => {
				console.log('done stretching');

				// promise resolves with updated amount of time left
				resolve(timeLeft)
			}, 1000)
		}
	})
}


function runOnTreadmill(timeLeft) {
	return new Promise((resolve, reject) => {
		if (timeLeft < 500) {
			reject('you dont have enough time to run on treadmill')
		} else {
			timeLeft -= 500;

			setTimeout(() => {
				console.log('done running on treadmill');
				resolve(timeLeft)
			}, 500)
		}

	})
}


function liftWeights(timeLeft) {
	return new Promise((resolve, reject) => {
		if (timeLeft < 2000) {
			reject('you dont have enough time to lift weights')
		} else {
			timeLeft -= 2000

			setTimeout(() => {
				console.log('done lifting weights');
				resolve(timeLeft)
			}, 2000)
		}
	})
}


function workout(totalTime) {
	stretch(totalTime)
		.then(timeLeftAfterStretching => runOnTreadmill(timeLeftAfterStretching))
		.then(timeLeftAfterRunning => liftWeights(timeLeftAfterRunning))
		.then(res => console.log(`done working out with ${res/1000} seconds left`))
		.catch(err => console.log('Error: ', err))
}







// TESTS


// workout(500)
//    Error:  you dont have enough time to stretch


// workout(1000);
// 		done stretching
// 		Error:  you dont have enough time to run on treadmill


// workout(2000);
// 		done stretching
// 		done running on treadmill
// 		Error:  you dont have enough time to lift weights


// workout(4000);
// 		done stretching
// 		done running on treadmill
// 		done lifting weights
// 		done working out with 0.5 seconds left