document.addEventListener('DOMContentLoaded', () => {

	// 1. update click count on button via span with id "my-span"









	// 2. create dog image when button is clicked

	// append the image "dog-pic.jpg" to the div with the id of "dog-img"
	// when the user clicks the button with the id of "show-dog-button"








	// 3.  *BONUS*  handling user input

	// update the background color of the div with id "my-div" if the value of the
	// input with id "user-input" matches a color in the valid colors array









	// 4.  *BONUS*  pizza demo using classes

	let options = document.getElementById("options");

	options.addEventListener("click", (event) => {
		if (event.target.type === "checkbox") {
			let checkbox = event.target;
			// event.target.id = 'mushroom'
			let toppings = document.getElementsByClassName(event.target.id);

			if (checkbox.checked) {
				Array.from(toppings).forEach((item) => {
					item.classList.remove("invisible");
				});
			} else {
				Array.from(toppings).forEach((item) => {
					item.classList.add("invisible");
				});
			}
		}
	});






})