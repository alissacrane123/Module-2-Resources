const fetch = require('node-fetch');
const fs = require('fs').promises;



let baseUrl = 'https://swapi.dev/api/people/'


// TODO: lets rewrite the star wars project using async and await

async function getPerson(id) {
	try {

		let res = await fetch(`${baseUrl}${id}`);
		let person = await res.json();
		// console.log(person);
	
		let homeworldUrl = person.homeworld;
		let films = person.films;
	
		let homeworldRes = await fetch(homeworldUrl);
		let homeworldObj = await homeworldRes.json();
	
		let promises = films.map(film => fetch(film));
		// console.log(promises)
		let promisesRes = await Promise.all(promises);
	
		promises = promisesRes.map(res => res.json());
	
		let filmsArr = await Promise.all(promises);
	
		let personName = person.name;
		let homeworld = homeworldObj.name;
		let filmTitles = filmsArr.map(film => film.title);
		let filmString = filmTitles.join(', ');
		// console.log(filmString);
	
		let string = `hi my name is ${personName} and I am from ${homeworld}. I starred in the following films: ${filmString}`;
	
		// console.log(string);
		await fs.writeFile('star-wars.txt', string, 'utf-8');
	
		console.log('the file is written');
	
		let contents = await fs.readFile('star-wars.txt', 'utf-8');
	
		console.log(contents);
	} catch (err) {
		console.log('ERROR OH NO: ', err)
	}
}


getPerson(1);