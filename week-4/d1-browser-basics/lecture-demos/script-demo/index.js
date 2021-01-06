
// (function() {
// 	console.log(this)
// })()



// the problem with script in header
// script loads before rest of page is loaded
// the body element doesnt exist yet
let bodyId = window.document.getElementById('my-body').id // my-body
console.log(bodyId)





// // SOLUTION #2
// // this runs after dom is loaded (first)
// document.addEventListener('DOMContentLoaded', () => {

// 	console.log('this script loads when the DOM is ready ');
// 	console.log(document.getElementById('my-body').id);

// });





// // SOLUTION #3
// // handler func invoked after page is loaded (second)
// window.onload = () => {
// 	console.log('this script loads when all resources and the DOM are ready')
// 	console.log(document.getElementById('body').id)
// }











