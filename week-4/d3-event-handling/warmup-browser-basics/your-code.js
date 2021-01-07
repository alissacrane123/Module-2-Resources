document.addEventListener('DOMContentLoaded', () => {


	// TODO #1: 
	// - grab the LI element with id "blue-item"
	// - create a DIV element with a class of "square"
	// - set the DIV's backgroundColor to "blue"
	// - append the DIV to the LI element
	// - repeat the process for the LI elements with id "red-item" and "purple-item",
	//   setting their respective DIV's backgroundColors to red and purple

	function createDiv(parentId, color) {
		let parent = document.getElementById(parentId);
		let div = document.createElement('div');
		div.setAttribute('class', 'square');
		div.style.backgroundColor = color;
		parent.appendChild(div);
	}

	createDiv('blue-item', 'blue');
	createDiv('red-item', 'red');
	createDiv('purple-item', 'purple');


	// TODO #2: 
	// - uppercase the text for each LABEL element on the page
 
	let labels = document.querySelectorAll('label');
	labels.forEach(label => {
		console.log(label);
		let oldText = label.innerText; // 'Blue Square'
		label.innerText = oldText.toUpperCase();

		// label.innerText.toUpperCase();

		// label.innerText = label.innerText.toUpperCase();
	})


	// TODO #3: 
	// - grab the element with the id of "dog-img-container"
	// - replace the inner H2 element with an IMG element that has a class
	//   of "dog-img" and a src property set to "./dog.png"


	const dogContainer = document.getElementById('dog-img-container');
	// const img = '<img src="./dog.png" class="dog-img" />';
	// dogContainer.innerHTML = img;

	const img = document.createElement('img');
	img.setAttribute('class', 'dog-img');
	img.src = './dog.png';
	dogContainer.innerHTML = '';
	dogContainer.appendChild(img);

})