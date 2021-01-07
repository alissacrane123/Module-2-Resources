const stopOrElse = () => {
  const input = document.getElementById("stopper");
  if (input.value !== "STOP") {
    document.body.style.backgroundColor = "cyan";
  }
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(stopOrElse, 5000);
});