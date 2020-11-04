// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", event => {
	// Add a click event listener on the document’s body
	
  document.body.addEventListener("click", event => {
    // console.log the event target’s ID

    let targetId = event.target.id;
    console.log(`targetId: ${targetId}`) //=> "div-4"

    let curTargetId = event.currentTarget.id;
    console.log(`currentTargetId: ${curTargetId}`) //=> 'body'
  });
});