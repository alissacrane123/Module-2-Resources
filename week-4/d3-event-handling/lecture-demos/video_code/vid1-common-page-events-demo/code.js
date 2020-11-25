//  clicker demo
window.addEventListener("DOMContentLoaded", event => {
  const button = document.getElementById("increment-count");
  const count = document.getElementById("clicked-count");

  button.addEventListener("click", event => {

    // event.detail === read only event property
    // when nonzero, provides the current(or next, depending on the event) click count
    count.innerHTML = `event detail: ${event.detail}`;
  });
})

// // checkbox demo 
// window.onload = () => {

//   // store the elements we need in variables
//   const checkbox = document.getElementById("on-off");
//   const divShowHide = document.getElementById("now-you-see-me");

//   // add an event listener for the checkbox click
//   checkbox.addEventListener("click", event => {
//     // use the 'checked' attribute of checkbox inputs
//     // returns true if checked, false if unchecked
//     if (checkbox.checked) {
//       // if the box is checked, show the div
//       divShowHide.classList.remove("hide");
//       divShowHide.classList.add("show");
//       // else hide the div
//     } else {
//       divShowHide.classList.remove("show");
//       divShowHide.classList.add("hide");
//     }
//   });
// };


// // cyan demo
// window.addEventListener("DOMContentLoaded", event => {
//   const stopCyanMadness = () => {

//     // get the value of the input field
//     const inputValue = document.getElementById("stopper").value;

//     // if value is anything other than 'STOP', change background color
//     // comment in lines below!
//     // if (inputValue !== "STOP") {
//     //   document.body.style.backgroundColor = "cyan";
//     // }
//   };

//   setTimeout(stopCyanMadness, 5000);
// });