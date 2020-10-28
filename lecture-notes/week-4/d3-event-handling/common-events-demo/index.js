document.addEventListener('DOMContentLoaded', () => {

	// 1. update click count via span
	

	






	// 2. create dog image when button is clicked

  // append the image "dog-pic.jpg" to the div with the id of "dog-img"
  // when the user clicks the button with the id of "show-dog-button"

  
	







	// 3. handling user input

  








	// 4. pizza demo using classes

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