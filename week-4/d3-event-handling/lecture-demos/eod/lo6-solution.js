const handleDragStart = e => {
  e.target.classList.add('is-being-dragged');
  e.dataTransfer.setData('text/plain', e.target.id);
  e.dataTransfer.dropEffect = 'move';
};

const handleDragEnter = e => {
  // Needed so that the "drop" event will fire.
  e.preventDefault();
  e.target.classList.add('is-active-drop-zone');
};

const handleDragLeave = e => {
  e.target.classList.remove('is-active-drop-zone');
};

const handleDragOver = e => {
  // Needed so that the "drop" event will fire.
  e.preventDefault();
};

const handleDrop = e => {
  const id = e.dataTransfer.getData('text/plain');
  const draggedElement = document.getElementById(id);
  draggedElement.draggable = false;
  e.target.appendChild(draggedElement);
};

window.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('red-square')
    .addEventListener('dragstart', handleDragStart);

  const dropZone = document.getElementById('drop-zone');
  dropZone.addEventListener('drop', handleDrop);
  dropZone.addEventListener('dragenter', handleDragEnter);
  dropZone.addEventListener('dragleave', handleDragLeave);
  dropZone.addEventListener('dragover', handleDragOver);
});