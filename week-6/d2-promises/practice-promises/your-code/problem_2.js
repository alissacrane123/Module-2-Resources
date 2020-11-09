const fetch = require('node-fetch')

// TODO: Go to the following url: http://www.omdbapi.com/apikey.aspx
// and sign up for an api key! You should receive a confirmation email
// containing your very own api key! 

// TODO: set the variable below to your new api key
let apiKey = "YOUR KEY HERE";


// TODO: 
// - create a function called fetchMovie that takes in a movie title string
//   as an argument
// - the request url for retrieving harry potter movie information is as follows:
//   	=> `http://www.omdbapi.com/?apikey=${apiKey}=harry+potter`
// - parse the string argument into the format the api is expecting so that we can 
//   interpolate it into our request url
// 	 	=> 'harry potter' should be 'harry+potter' in the url
// - make a fetch to the following url where `parsedMovie` is the string
//   paramter you transformed above:
//   	=> `http://www.omdbapi.com/?apikey=${apiKey}=${parsedMovie}`
// - chain a `.then` onto the fetch call
// - inside that `.then`, call the .json method on the response object that the
//   call to fetch fulfills with to turn it into a more readable json object
// - the json object returned from the previous `.then` will look something like:

//				 { Title: 'Harry Potter and the Deathly Hallows: Part 2',
//				   Year: '2011',
//				   Rated: 'PG-13',
//				   Released: '15 Jul 2011',
//				   Runtime: '130 min',
//				   Genre: 'Adventure, Drama, Fantasy, Mystery',
//				   Director: 'David Yates',
//				   Response: 'True' }

// - chain another `.then` and pass the json object returned from the previous
//   `.then` to the parseMovie function we will write below


function fetchMovie(movie) {
	let parsedMovie = movie.split(' ').join('+');
	fetch(`http://www.omdbapi.com/?apikey=${apiKey}=${parsedMovie}`)
		.then(res => res.json())
		.then(json => parseMovie(json))
		.catch(err => console.log('ERROR: ', err))
}


// TODO:
// - create a function called parseMovie which accepts a json movie object as an argument
// - extract the Title, Director, and Year values from that movie object
// - console.log the following string, where "title", "director" and "year"
//   are the properties you extracted from the movie object:
//   	=> `${title} was directed by ${director} and released in ${year}`



function parseMovie(movie) {
	let title = movie.Title;
	let director = movie.Director;
	let year = movie.Year;

	console.log(`${title} was directed by ${director} and released in ${year}`)
}


// TODO:
// - run your file (`node problem_2.js`) and ensure the output matches
//   the output below


fetchMovie('harry potter');
// Zoolander was directed by Ben Stiller and released in 2001

fetchMovie('zoolander')
// Mean Girls was directed by Mark Waters and released in 2004

fetchMovie('mean girls')
// Harry Potter and the Deathly Hallows: Part 2 was directed by David Yates and released in 2011