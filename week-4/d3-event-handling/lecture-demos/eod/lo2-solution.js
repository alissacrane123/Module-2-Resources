const messageToggle = () => {
  const checkbox = document.getElementById("on-off");
  const message = document.getElementById("now-you-see-me");
  
  checkbox.addEventListener("click", event => {
    if (checkbox.checked) {
      message.style.display = "none";
    } else {
      message.style.display = "block";
    }
  });
};

window.addEventListener('DOMContentLoaded', messageToggle);