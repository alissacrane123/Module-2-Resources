function stretch(timeLeft) {
	return new Promise((resolve, reject) => {
		if (timeLeft < 1000) {
			reject('you dont have enough time to stretch')
		} else {
			timeLeft -= 1000;
			setTimeout(() => {
				console.log('done stretching');
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


// TODO: reacreate the following solution to problem #2 from this morning's
// promise-warmup practice using async & await 


// function workout(totalTime) {
//   stretch(totalTime)
//     .then((timeLeftAfterStretching) => runOnTreadmill(timeLeftAfterStretching))
//     .then((timeLeftAfterRunning) => liftWeights(timeLeftAfterRunning))
//     .then((res) =>
//       console.log(`done working out with ${res / 1000} seconds left`)
//     )
//     .catch((err) => console.log("Error: ", err));
// }








// TESTING: 
// - comment in each invocation of your workout function below and run 
// the file (node problem_2.js) to see if you get the expected output

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