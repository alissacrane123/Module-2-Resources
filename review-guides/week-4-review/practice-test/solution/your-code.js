
window.addEventListener("DOMContentLoaded", () => {
	
  //PROBLEM #1
  // First we add a click event listener on the button with id of "make-circle-blue"
  document.getElementById("make-circle-blue").addEventListener("click", () => {
    // Then we select the blue circle div by its ID and add the class named "blue" to that div
    document.getElementById("blue-circle").classList.add("blue");
  });

  //PROBLEM #2
  // Here we add a click event listener on the input with an ID of "will-not-click" (and type checkbox)
  document
    .getElementById("will-not-check")
    .addEventListener("click", (event) => {
      // Here we call preventDefault on the event to prevent the default behavior of added checked to the input
      event.preventDefault();
    });

  //PROBLEM #3
  // First we add a click event listener on the button with an ID of "change-bananas-status"
  document
    .getElementById("change-bananas-status")
    .addEventListener("click", () => {
      // Then we select the div with the ID of "bananas-div" and set its innerHTML to the required "No Bananas Today!"
      // Note this overwrites the innerHTML of "🍌 Bananas! 🍌" that it was previously set to
      document.getElementById("bananas-div").innerHTML = "No Bananas Today!";
      // Here we want to select the div with ID of "banaa-image-div" and save it to a variable so we can check if
      // it has children as well as append the new image child to it
      const bananasDiv = document.getElementById("bananas-image-div");
      // BONUS SOLUTION: We check to see if there are any children of the bananasDiv and if there are children we
      // immediately return out of the click event listener (so we will never be able to add more than 1 image child)
      if (bananasDiv.children.length) return;
      // Now we create a new image element, set its source to the no-bananas.png file saved in the images folder
      // and then append the new element as the child of bananasDiv
      const noBananasImage = document.createElement("img");
      noBananasImage.src = "./images/no-bananas.png";
      bananasDiv.appendChild(noBananasImage);
    });

  //PROBLEM #4
  // First we add a click event listener on the button with an ID of "store-cookie"
  document.getElementById("store-cookie").addEventListener("click", () => {
    // Next we select the Input field by its ID and save it to a variable
    const cookieInput = document.getElementById("fav-cookie");
    // Here was store the value of the cokieInput field as a cookie on the document
    document.cookie = `favCookie=${cookieInput.value}`;
    // BONUS SOLUTION: (comment out line 55 and comment in lines 63-66)
    // For the BONUS we set a variable to 30 to store the minutes, and then we create a new Date object
    // We use the built in methods on the Date object of setTime() and getTime() to set the value
    // of expireTime to now and then add 30 mintutes (converting that to milliseconds).
    // Finally we store the value of the cookie, adding the expires= key and interpolate the
    // expireTime variable with the >toUTCString() method which converts the Date object to a
    // string formatting date.
    // let minutes = 30;
    // let expireTime = new Date();
    // expireTime.setTime(expireTime.getTime() + (minutes * 60 * 1000));
    // document.cookie = `favCookie=${cookieInput.value}; expires=${expireTime.toUTCString()};`;
  });
  // Outside of the button event listener, but still inside of the DOMContentLoaded event listener
  // we check if there is already a cookie saved
  if (document.cookie) {
    // Here we destructure the key and value variables from the saved cookie and split on the "="
    const [key, value] = document.cookie.split("=");
    // Finally we select the cookie input and set its value to the value stored in the cookie
    const input = document.getElementById("fav-cookie");
    input.value = value;
  }

  //PROBLEM #5
  // First we add a click event listener on our button with an ID of "save-pie"
  document.getElementById("save-pie").addEventListener("click", () => {
    // Next we select the input field with the ID of "pie-types" and save it to a variable
    const addedPieName = document.getElementById("pie-types");
    console.log(addedPieName);
    // Now we get the ul we will be appending new li elements to by class name of "pie-list"
    // because this element does not have an ID
    const listElement = document.getElementsByClassName("pie-list");
    // BONUS SOLUTION: Check the length of the children of the ul and return if it is >= 5
    // Remember listElement is an HTMLCollection which is an array like object
    // You can use a forEach loop or index directly into it (since there is only 1 indexing is a good option)
    if (listElement[0].children.length >= 5) return;
    // Here we create a new li element, set the innerHTML to the value entered in the input field
    // and then append the new li element as a child of the ul element.   Since listElement is an HTMLCollection
    // which is an array like object you can use a forEach loop or index directly into it (since there
    // is only 1 element with that class name indexing is a good option)
    // This could also be accomplished with document.querySelector(".pie-list") but would only select one
    // element (the first one)
    const addPie = document.createElement("li");
    addPie.innerHTML = addedPieName.value;
    listElement[0].appendChild(addPie);
    // Finally we set the value in the input element to an empty string
    addedPieName.value = "";
  });

  //PROBLEM #6
  // NOTE: This is very similar to problem #4 with cookies, but we are using local storage instead
  // First we add a click event listener on the button with an ID of "save-ice-cream"
  document.getElementById("save-ice-cream").addEventListener("click", () => {
    // Next we select the Input field by its ID and save it to a variable
    const flavorInput = document.getElementById("fav-ice-cream");
    // Here was store the value of the favorite ice cream input field in local storage
    localStorage.setItem("favorite-flavor", flavorInput.value);
  });
  // Outside of the button event listener, but still inside of the DOMContentLoaded event listener
  // we get the value saved in local storage for "favorite-flavor"
  let favFlavorValue = localStorage.getItem("favorite-flavor");
  // If there is a value saved, we set the value of the input field to that value
  if (favFlavorValue) {
    let input = document.getElementById("fav-ice-cream");
    input.value = favFlavorValue;
  };


  //PROBLEM #7
  // First we declare and set a counter equal to 0 for the fruit total.
  // We do this outside the event listeners so we have access to it inside each (scope)
  let fruitCount = 0;
  // Next we select the Pieces of Fruit element and set its innerHTML to the count
  const counter = document.getElementById("total-fruit");
  counter.innerHTML = fruitCount;
  // We select the Add Apple button and add a click event listener
  document.getElementById("add-apple").addEventListener("click", (e) => {
    // BONUS SOLUTION: event.stopPropagation will prevent the event from bubbling up to the parent Div
    e.stopPropagation();
    // Here we select the Fruit Basket by its ID and then add the fruit to its innerHTML
    const basket = document.getElementById("fruit-storage");
    basket.innerHTML += "🍎";
    // Here we update the count as set the innerHTML of the Pieces of Fruit to the new value
    counter.innerHTML = fruitCount += 1;
  });
  // This event listener does the same as above but for the Add Orange Button
  document.getElementById("add-orange").addEventListener("click", (e) => {
    e.stopPropagation();
    const basket = document.getElementById("fruit-storage");
    basket.innerHTML += "🍊";
    counter.innerHTML = fruitCount += 1;
  });
  // This event listener does the same as above but for the Empty Basket button
  // Here we also set the count back to zero.
  document.getElementById("reset-basket").addEventListener("click", (e) => {
    e.stopPropagation();
    const basket = document.getElementById("fruit-storage");
    basket.innerHTML = "";
    counter.innerHTML = fruitCount = 0;
  });
});
