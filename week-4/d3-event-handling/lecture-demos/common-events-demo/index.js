document.addEventListener('DOMContentLoaded', () => {

	// 1. update click count via span
	




	// 2. create dog image when button is clicked

  // append the image "dog-pic.jpg" to the div with the id of "dog-img"
  // when the user clicks the button with the id of "show-dog-button"






	// 3. handling user input

	// if the value a user types into the input with id "user-input"
	// matches a color in the valid color's array, change the background
	// color of the div with id "my-div" to that color
  












	// 4. pizza demo using classes









	// 5. onclick vs addEventListener

  let otherButton = document.getElementById("other-button");

  // using onclick
  // stored as attribute on element
  // will reassign previous values
  // otherButton.onclick = () => console.log('we will never see this!')
  // otherButton.onclick = () => console.log('we will only see this')

  // using event listener
  // can register multiple listeners on the same element
  otherButton.addEventListener("click", () => {
		console.log("we will see this!")
	});
	
  otherButton.addEventListener("click", () =>
    console.log("we will see this too")
  );


})