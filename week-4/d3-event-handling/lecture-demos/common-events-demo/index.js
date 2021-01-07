document.addEventListener('DOMContentLoaded', () => {

	// 1. update total click count via span
	
	let button = document.getElementById("my-button");
	let span = document.getElementById('my-span');

	let count = 0;

	button.addEventListener('click', event => {
		count++;
		span.innerText = count;
	})



	// 2. create dog image when button is clicked

  // append the image "dog-pic.jpg" to the div with the id of "dog-img"
  // when the user clicks the button with the id of "show-dog-button"

	const showDogButton = document.getElementById('show-dog-button');
	const dogDiv = document.getElementById('dog-img');

	showDogButton.addEventListener('click', event => {
		let img = document.createElement('img');
		img.src = "dog-pic.jpg";


		// img.id = 'some-id';
		// img.className = ''
		// img.setAttribute('src', 'dog-pic.jpg');

		if (dogDiv.innerHTML === '') {
			dogDiv.appendChild(img);
		}
	})


	// 3. handling user input

	// if the value a user types into the input with id "user-input"
	// matches a color in the valid color's array, change the background
	// color of the div with id "my-div" to that color
  

	let validColors = ['red', 'blue', 'green'];

	let input = document.getElementById('user-input');
	let colorDiv = document.getElementById('my-div');

	input.addEventListener('input', event => {
		// console.log(event.target.value);

		let value = event.target.value;

		if (validColors.includes(value)) {
			colorDiv.style.backgroundColor = value;
		}
	});










	// 4. pizza demo using classes









	// 5. onclick vs addEventListener

  let otherButton = document.getElementById("other-button");

  // using onclick
  // stored as attribute on element
  // will reassign previous values
  // otherButton.onclick = () => console.log('we will never see this!');
  // otherButton.onclick = () => console.log('we will only see this');

  // using event listener
  // can register multiple listeners on the same element
  otherButton.addEventListener("click", () => {
		console.log("we will see this!")
	});
	
  otherButton.addEventListener("click", () =>
    console.log("we will see this too")
  );


})