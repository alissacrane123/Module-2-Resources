const whoClicked = () => {
  const divContainer = document.getElementById('div-container');
  divContainer.addEventListener("click", event => {
    alert(event.target.id);
  });
};

window.addEventListener('DOMContentLoaded', whoClicked);


// Create divs dynamically?

window.addEventListener('DOMContentLoaded', () => {
  const divContainer = document.getElementById('div-container');
  for (let i = 0; i < 300; i++) {
    const div = document.createElement('div');
    div.id = `div-number-${i}`;
    div.classList.add('box');
    divContainer.appendChild(div);
  }
});
