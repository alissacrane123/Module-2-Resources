/* DO NOT CHANGE THE JS IN THIS FILE OR YOU MAY FAIL */

window.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("fruit-buttons-div")
    .addEventListener("click", function (e) {
        if (e.target.id === "add-apple" || e.target.id === "add-orange" || e.target.id === "reset-basket"  ) {
        this.style.backgroundColor = "red";
      }
    });
});
