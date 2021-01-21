const fetch = require('node-fetch');
const fs = require('fs').promises;



let baseUrl = 'https://swapi.dev/api/people'


// TODO: lets rewrite the star wars project using async and await

async function getPerson(id) {
	
	// get single person from starwars api ('https://swapi.dev/api/people/1')
	let res = await fetch(`${baseUrl}/${id}`);
	let person = await res.json();
	// console.log(person);


	// extract person's homeworld url and array of film urls
	let homeworldUrl = person.homeworld; // 'http://swapi.dev/api/planets/1/',
	let filmsUrlArray = person.films;


	// fetch person's homeworld
	let homeworldRes = await fetch(homeworldUrl);
	let homeworldObj = await homeworldRes.json();
	// console.log(homeworldObj)


	// fetch all of person's films
	let promises = filmsUrlArray.map(filmUrl => fetch(filmUrl));
	let promiseRes = await Promise.all(promises);
	// console.log(promiseRes);
	promises = promiseRes.map(res => res.json());
	let filmsArr = await Promise.all(promises);
	// console.log(filmsArr)


	// extract person name, homeworld name, and film titles
	let personName = person.name // 'Luke Skywalker'
	let homeworld = homeworldObj.name; // 'Tatooine'
	let filmTitles = filmsArr.map(film => film.title);
	let filmString = filmTitles.join(', ')
	// console.log(filmString);

	let string = `hi my name is ${personName}, I am from ${homeworld}. I starred in the following films: ${filmString}`;

	console.log(string);


	// hi my name is NAME i am from HOMEWORLD and i starred in FILM, FILM, FILM

	// write and save file 'star-wars.txt'


	// read file


}


getPerson(1);