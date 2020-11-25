document.addEventListener('DOMContentLoaded', () => {

	// 1. update click count via span
	
	// let button = document.getElementById("my-button");
	// let span = document.getElementById("my-span");

  // button.addEventListener("click", (event) => {
  //   span.innerHTML = `${event.detail}`;
  // });
	
	let button = document.getElementById('my-button');
	let span = document.getElementById('my-span');

	let count = 0;
	button.addEventListener('click', event => {
		count++;
		span.innerText = count;
	})






	// 2. create dog image when button is clicked

  // append the image "dog-pic.jpg" to the div with the id of "dog-img"
  // when the user clicks the button with the id of "show-dog-button"

  const showDogButton = document.getElementById('show-dog-button')
	const dogDiv = document.getElementById('dog-img');


	showDogButton.addEventListener('click', event => {
		let img = document.createElement('img');
		img.src = './dog-pic.jpg';

		if (dogDiv.innerHTML === '') {
			dogDiv.appendChild(img);
		} else {
			dogDiv.innerHTML = '';
		}

	})





	// 3. handling user input

	// if the value a user types into the input with id "user-input"
	// matches a color in the valid color's array, change the background
	// color of the div with id "my-div" to that color
  
	let validColors = ['red', 'blue', 'green', 'purple'];

	const userInput = document.getElementById('user-input');
	const colorDiv = document.getElementById('my-div');

	userInput.addEventListener('input', event => {
		let val = event.target.value;

		if (validColors.includes(val)) {
			colorDiv.style.backgroundColor = val;
		}
	})















	// 4. pizza demo using classes

  let options = document.getElementById("options");

  options.addEventListener("click", (event) => {

    if (event.target.type === "checkbox") {
			let checkbox = event.target;
			// event.target.id = 'mushroom'
      let toppings = document.getElementsByClassName(event.target.id);
			
      if (checkbox.checked) {
				let array = Array.from(toppings);
        array.forEach((item) => {
          item.classList.remove("invisible");
				});
				
				// for (let i = 0; i < toppings.length; i++) {
				// 	let item = toppings[i];
				// 	item.classList.remove('invisible')
				// }
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