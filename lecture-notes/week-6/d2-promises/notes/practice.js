
function stretch(time, timeLeft) {
	return new Promise((resolve, reject) => {
		if (time > timeLeft) {
			reject('sorry, not enough time to stretch')
		}
		setTimeout(() => {
			console.log('done stretching');
			resolve(timeLeft - time)
		}, time)
	})
}

function runOnTreadmill(time, timeLeft) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done running on treadmill');
			resolve()
		}, time)
	})
}

function liftWeights(time, timeLeft) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('done lifting weights');
			resolve()
		}, time)
	})
}


function workout(totalTime) {

}