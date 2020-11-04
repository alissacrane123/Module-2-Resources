// TODO: write a function called stretch
// - should return a promise
// - should console.log "done stretching" and fulfill the promise after 1 second


function stretch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done stretching");
      resolve();
    }, 1000);
  });
}

// TODO: write a function called runOnTreadmill
// - should return a promise
// - should console.log "done running on treadmill" and fulfill the promise 
// after 0.5 seconds

function runOnTreadmill() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done running on treadmill");
      resolve();
    }, 500);
  });
}

// TODO: write a function called liftWeights
// - should return a promise
// - should console.log "done lifting weights" and fulfill the promise 
// after 2 seconds

function liftWeights() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("done lifting weights");
      resolve();
    }, 2000);
  });
}

// TODO: write a function called workout that runs the above functions in a way
// that ensures you begin runningOnTreadmill after you're finished stretching,
// you being liftWeights after you've finished running on the treadmill
// and console.logs "done working out" after you've finished lifting weights

function workout() {
  stretch()
    .then(runOnTreadmill)
    .then(liftWeights)
    .then(() => console.log("done working out"))
    .catch((err) => console.log(err));
}

workout();
// done stretching
// done running on treadmill
// done lifting weights
// done working out