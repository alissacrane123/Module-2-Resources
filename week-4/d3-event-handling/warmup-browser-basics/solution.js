document.addEventListener('DOMContentLoaded', () => {


	// TODO #1: 
	// - grab the LI element with id "blue-item"
	// - create a DIV element with a class of "square"
	// - set the DIV's backgroundColor to "blue"
	// - append the DIV to the LI element
	// - repeat the process for the LI elements with id "red-item" and "purple-item",
	//   setting their respective DIV's backgroundColors to red and purple

	// let blueItem = document.getElementById('blue-item');
	// let blueDiv = document.createElement('div');
	// blueDiv.setAttribute('class', 'square');
	// blueDiv.style.backgroundColor = 'blue';
	// blueItem.appendChild(blueDiv);

	// let redItem = document.getElementById('red-item');
	// let redDiv = document.createElement('div');
	// redDiv.setAttribute('class', 'square');
	// redDiv.style.backgroundColor = 'red';
	// redItem.appendChild(redDiv);

	// let purpleItem = document.getElementById('purple-item');
	// let purpleDiv = document.createElement('div');
	// purpleDiv.setAttribute('class', 'square');
	// purpleDiv.style.backgroundColor = 'purple';
	// purpleItem.appendChild(purpleDiv);

	// method #2 - with function

	function createDiv(parentId, color) {
		let parent = document.getElementById(parentId);
		let div = document.createElement('div');
		div.setAttribute('class', 'square');
		div.style.backgroundColor = color;
		parent.appendChild(div);
	}

	createDiv('blue-item', 'blue');
	createDiv('red-item', 'red');
	createDiv('purple-item', 'purple')




	// TODO #2: 
	// - uppercase the text for each LABEL element on the page

	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		let oldText = label.innerText;
		label.innerText = oldText.toUpperCase();
	})



	// TODO #3: 
	// - grab the element with the id of "dog-img-container
	// - replace the inner H2 element with an IMG element that has a class
	//   of "dog-img" and a src property set to "./dog.png"


	// POSSIBLE SOLUTION 

	let dogContainer = document.getElementById('dog-img-container');
	let img = document.createElement('img');
	img.src = './dog.png';
	img.setAttribute('class', 'dog-img');
	dogContainer.innerHTML = '';
	dogContainer.appendChild(img);


	// ALTERNATE SOLUTION 

	// let dogContainer = document.getElementById('dog-img-container');
	// let img = '<img src="./dog.png" class="dog-img" />'
	// dogContainer.innerHTML = img;


})