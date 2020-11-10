const fetch = require("node-fetch");

// what is fetch?
// console.log(fetch)



// what does fetch return?
// console.log(fetch('https://api.github.com/users/github'))






fetch("https://api.github.com/users/", { })
	.then(res => res.json())
	.then(json => console.log(json.login))
  .catch(reason => {
    console.log("rejected because", reason);
  });





// TURN RESPONSE INTO JSON OBJECT

// fetch("https://api.github.com/users/github")
//   .then((res) => res.json())
//   .then((jsonRes) => console.log(jsonRes))
//   .catch((reason) => {
//     console.log("rejected because", reason);
//   });





// CAN KEY INTO RESPONSE OBJECT

// fetch("https://api.github.com/users/github")
//   .then((res) => res.json())
//   .then((jsonRes) => console.log(jsonRes.name))
//   .catch((reason) => {
//     console.log("rejected because", reason);
//   });









// API KEYS

let apiKey = "afab3d6d&t";

fetch(`http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`)
  .then((res) => res.json()) 
  .then((jsonRes) => {
    // printing the json jsonResponse object
    console.log(jsonRes);
    // returning json obj so that it is passed to the next .then()
    return jsonRes;
  })
  .then((jsonRes) => {
    // keying into json res obj at key "Title" + printing
    console.log("title: ", jsonRes.Title);
  })
  .catch((err) => console.log(err));
