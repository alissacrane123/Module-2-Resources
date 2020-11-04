document.addEventListener('DOMContentLoaded', () => {

	// 1. update click count on button via span
	

	// method #1
	// let button = document.getElementById("my-button");
	// let span = document.getElementById("my-span");

	// button.addEventListener("click", (event) => {
	// 	span.innerText = `${event.detail}`;
	// });


	// method #2
	let button = document.getElementById("my-button");
	let span = document.getElementById("my-span");
	let count = 0;
	button.addEventListener("click", (event) => {
		count++;
		span.innerText = count;
	});







	// 2. create dog image when button is clicked

  // append the image "dog-pic.jpg" to the div with the id of "dog-img"
  // when the user clicks the button with the id of "show-dog-button"

  let showDogButton = document.getElementById("show-dog-button");
  let dogDiv = document.getElementById("dog-img");

  showDogButton.addEventListener("click", (event) => {
		// method #1
		let img = document.createElement('img');
		img.src = './dog-pic.jpg';

		if (dogDiv.innerHTML === '') {
			dogDiv.appendChild(img);
		}

		// method #2
		// let img = '<img src="./dog-pic.jpg" >'
		// dogDiv.innerHTML = img;

	});
	







	// 3.  *BONUS*  handling user input

  let userInput = document.getElementById("user-input");
  let myDiv = document.getElementById("my-div");

  let validColors = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "pink",
    "purple",
  ];

  userInput.addEventListener("input", (event) => {
		let value = event.target.value;
		
		if (validColors.includes(value)) {
			myDiv.style.backgroundColor = value;
		}
  });








	// 4.  *BONUS* pizza demo using classes

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