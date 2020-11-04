# PROMISE PRACTICE

Inside this directory you will find two sub-directories (`solution`, `your-code`)
- write your solutions to the problems listed below in the `your-code` directory
- check your solutions against those I've provided in the `solution` directory


## Problem #1 (`your-code/problem_1.js`)

1. TODO: write a function called stretch
- should return a promise
- should console.log "done stretching" and fulfill the promise after 1 second


2. TODO: write a function called runOnTreadmill
- should return a promise
- should console.log "done running on treadmill" and fulfill the promise 
after 0.5 seconds


3. TODO: write a function called liftWeights
- should return a promise
- should console.log "done lifting weights" and fulfill the promise 
after 2 seconds


4. TODO: write a function called workout that runs the above functions in a way
that ensures you begin runningOnTreadmill after you're finished stretching,
you begin liftWeights after you've finished running on the treadmill
and console.logs "done working out" after you've finished lifting weights


TESTING
- run the file (`node problem_1.js`) and check your output against the expected
output I've provided at the bottom of the file





## Problem #2 (`your-code/problem_2.js`)

lets improve upon problem #1 

adjust your workout function so that it takes in a specific amount of time
that you have available for the entire workout

given the following rules, have each promise resolve with the amount of time
left by decrementing each action by its specific amount of time

rules:
	1. you must stretch for 1 second
	2. you must run on treadmill for 0.5 seconds
	3. you must lift weights for 2 seconds

if the time needed to complete the current action exceeds the amount of time
left, reject the promise and provide a reason

workout(500); // "Error: you dont have enough time to stretch"
- if we only have 0.5 seconds to workout, we wont even have enough time to stretch

TODO: recreate the functions from problem #1 to reflect this new
functionality 


TESTING: 
- comment in each invocation of the workout function listed at the bottom
and run the file (`node problem_2.js`) to see if you get the expected output