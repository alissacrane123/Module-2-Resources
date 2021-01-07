const changeColor = () => {
  const form = document.getElementById("fancyform");

  form.addEventListener("focusin", event => {
    event.target.style.backgroundColor = "#E8F5E9";
  });

  form.addEventListener("focusout", event => {
    event.target.backgroundColor = 'white';
  });
};

window.addEventListener('DOMContentLoaded', changeColor);