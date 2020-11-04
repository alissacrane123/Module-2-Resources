const fetch = require("node-fetch");


let apiKey = "afab3d6d&t";




// USING .THEN

// fetch(`http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`)
//   .then((res) => res.json())
//   .then((jsonRes) => console.log(jsonRes))
//   .catch((err) => console.log(err));





// USING ASYNC AWAIT
























// MAKE IT DYNAMIC

// async function fetchMovie(movieName) {
// 	try {
// 		let query = movieName.split(' ').join('+');
// 		let url = `http://www.omdbapi.com/?apikey=${apiKey}=${query}`;
	
// 		let res = await fetch(url);
// 		let jsonRes = await res.json();
	
// 		console.log('fetch successful!');
// 		console.log(jsonRes);

// 	} catch (err) {
		
// 		console.log('error: ', err);
// 	}
// }


// fetchMovie('harry potter')