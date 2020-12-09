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






// workout(2000);
// 		done stretching
// 		done running on treadmill
// 		Error:  you dont have enough time to lift weights


// workout(4000);
// 		done stretching
// 		done running on treadmill
// 		done lifting weights
// 		done workout out