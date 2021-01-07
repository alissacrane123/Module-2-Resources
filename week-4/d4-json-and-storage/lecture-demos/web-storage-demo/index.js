document.addEventListener('DOMContentLoaded', () => {


  // storing items in local storage
	// let key = "TAs";
	// let value = ["James", "Brad", "Kristen", "Senyo"];
	// // must serialize value before storing in local storage
	// let serializedValue = JSON.stringify(value);
	// localStorage.setItem(key, serializedValue);
	


  // retrieving items from local storage
	// let instructors = localStorage.getItem(key);
  // console.log("instructors : ", instructors);
  // console.log("typeof instructors: ", typeof instructors); // string


	
	// deserializing values retrieved from local storage
  // let deserializedInstructors = JSON.parse(instructors);
  // console.log("deserializedInstructors: ", deserializedInstructors); 
  // console.log("typeof deserializedInstructors: ", typeof deserializedInstructors); // object



  // this wont work because instructors is JSON str not a JS obj
  // instructors.forEach((ta) => console.log(ta));

	
  // this will work because deserializedInstructors is now a JS obj
  // deserializedInstructors.forEach((ta) => console.log(ta));















	// TODO: 
	// 1. store the values entered for email, first and last in local storage
	// 2. if values exist in local storage, pre populate relevant inputs
	// with those values

	

	
})