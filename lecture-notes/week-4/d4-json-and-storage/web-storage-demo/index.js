document.addEventListener('DOMContentLoaded', () => {


  // // storing items in local storage
	// let key = "TAs";
	// let value = ["James", "Brad", "Kristen", "Senyo"];
	// // must serialize value before storing in local storage
	// // let serializedValue = JSON.stringify(value);
	// localStorage.setItem(key, value);
	


  // // retrieving items from local storage
	// let instructors = localStorage.getItem(key);
  // console.log("instructors : ", instructors);
  // console.log("typeof instructors: ", typeof instructors); // string


	// // // deserializing values retrieved from local storage
  // // let deserializedInstructors = JSON.parse(instructors);
  // // console.log("deserializedInstructors: ", deserializedInstructors); 
  // // console.log("typeof deserializedInstructors: ", typeof deserializedInstructors); // object



  // // this wont work because instructors is JSON str not a JS obj
  // // instructors.forEach((ta) => console.log(ta));

	
  // // this will work because deserializedInstructors is now a JS obj
  // // deserializedInstructors.forEach((ta) => console.log(ta));















	// TODO: 
	// 1. store the values entered for email, first and last in local storage
	// 2. if values exist in local storage, pre populate relevant inputs
	// with those values

	let storedEmail = sessionStorage.getItem('email');
	let storedFirst = sessionStorage.getItem('first');
	let storedLast = sessionStorage.getItem('last');

	let first = document.getElementById('first');
	let last = document.getElementById('last');
	let email = document.getElementById('email');

	email.value = storedEmail;
	first.value = storedFirst;
	last.value = storedLast;

	document.cookie = "key=value"
	
	let form = document.getElementById('my-form');

	form.addEventListener('submit', event => {
		event.preventDefault(); // preventing the page from refreshing

		sessionStorage.setItem('first', first.value); // 'alissa'
		sessionStorage.setItem('last', last.value); // 'crane'
		sessionStorage.setItem('email', email.value); // 'alissa@gmail.com'
	});
})