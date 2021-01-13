document.addEventListener('DOMContentLoaded', () => {


  // storing items in local storage
	// let key = "TAs";
	// let value = ["Dillon", "Corina", "Kristen", "Senyo"];
	// // // must serialize value before storing in local storage
	// let serializedValue = JSON.stringify(value);
	// localStorage.setItem(key, serializedValue);
	

	// not going to work 
	// console.log(JSON.parse('<h2>gobeldygoop</h2>'))

  // retrieving items from local storage
	// let instructors = localStorage.getItem(key); // ["Dillon", "Corina", "Kristen", "Senyo"];
  // console.log("instructors : ", instructors);
  // console.log("typeof instructors: ", typeof instructors); // string


	
	// deserializing values retrieved from local storage
  // let deserializedInstructors = JSON.parse(instructors);
  // console.log("deserializedInstructors: ", deserializedInstructors); 
  // console.log("typeof deserializedInstructors: ", typeof deserializedInstructors); // object


	// let val = localStorage.getItem('banana')
	// console.log(val); // null


  // this wont work because instructors is JSON str not a JS obj
  // instructors.forEach((ta) => console.log(ta));

	
  // this will work because deserializedInstructors is now a JS obj
  // deserializedInstructors.forEach((ta) => console.log(ta));















	// TODO: 
	// 1. store the values entered for email, first and last in local storage
	// 2. if values exist in local storage, pre populate relevant inputs
	// with those values

	const firstValue = localStorage.getItem('first'); // Alissa
	const lastValue = localStorage.getItem('last'); // crane
	const emailValue = localStorage.getItem('email'); // alissa@gmail.com

	console.log(firstValue, lastValue, emailValue);

	const first = document.getElementById('first');
	// <input type="text" id="first" placeholder="First name...">
	const last = document.getElementById('last');
	const email = document.getElementById('email');

	first.value = firstValue; // null
	last.value = lastValue;
	email.value = emailValue;

	const form = document.getElementById('my-form');
	
	form.addEventListener('submit', event => {
		event.preventDefault();

		localStorage.setItem('first', first.value); // Alissa
		localStorage.setItem('last', last.value); // Crane
		localStorage.setItem('email', email.value);
	})
	
})