window.addEventListener("DOMContentLoaded", event => {



	const handleDragStart = e => {
		console.log('begin dragStart');
		e.dataTransfer.setData('id', e.target.id);
	}


	const handleDragEnter = e => {
		console.log('begin dragEnter');
		e.preventDefault(); // so drop event will fire
	}


	const handleDragLeave = e => {
		console.log('begin dragLeave');
	}


	const handleDragOver = e => {
		console.log('begin dragOver');
		e.preventDefault(); // so drop event will fire
	}

	const handleDrop = e => {
		console.log('begin drop');

		// retrieve the id of dragged el that we stored in dataTransfer object
		const id = e.dataTransfer.getData('id'); //  pepperoni

		// grab the dragged el by its id
		const draggedElement = document.getElementById(id);

		// prevent element from being dragged again
		draggedElement.draggable = false;

		// append dragged element to drop zone
		e.target.appendChild(draggedElement);
	}



	// make all topping elements draggable
	document.querySelectorAll('.topping').forEach(topping => {
		topping.addEventListener('dragstart', handleDragStart);
	})


	const pizza = document.getElementById('drop-zone')

	pizza.addEventListener('drop', handleDrop);
	pizza.addEventListener('dragenter', handleDragEnter);
	pizza.addEventListener('dragleave', handleDragLeave);
	pizza.addEventListener('dragover', handleDragOver);


});