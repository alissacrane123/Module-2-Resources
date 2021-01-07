const countClicks = () => {
  const button = document.getElementById("count-button");
  const span = document.getElementById("count-span");
  
  let count = 0;
  button.addEventListener("click", event => {
    count++;
    span.innerHTML = count;
  });
};

window.addEventListener('DOMContentLoaded', countClicks);