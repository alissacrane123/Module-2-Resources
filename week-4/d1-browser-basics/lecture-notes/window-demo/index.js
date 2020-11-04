// open a new window
// const newWindow = window.open("https://www.google.com", "Google", "width=100, height=100")
// // resize the new window
// newWindow.resizeTo(500, 500);







// context of func is object that contains that func
// when script runs in browser, that obj is the window
(function() {
	console.log("global object: ", this);
})();



