

document.addEventListener('DOMContentLoaded', () => {

	const title = document.getElementById('title');

	const getTime = () => {
		const date = new Date();
		const seconds = date.getSeconds();
		const minutes = date.getMinutes();
		const hours = date.getHours();

		let titleText = `${hours}:${minutes}:${seconds}`
		title.innerText = titleText;

		// title.innerHTML = hours + ":" + minutes + ":" + seconds;
	}

	setInterval(getTime, 1000);
})



// // generate a random number for each list item
// const getRandomInt = max => {
// 	return Math.floor(Math.random() * Math.floor(max));
// };

// // listen for DOM ready event
// window.addEventListener("DOMContentLoaded", event => {
// 	// push 6 LI elements into an array and join
// 	const liArr = [];
// 	for (let i = 0; i < 6; i++) {
// 		liArr.push("<li>" + getRandomInt(10) + "</li>"); // <li>5</li>
// 	}
// 	const liString = liArr.join(" "); // "<li>5</li> <li>5</li> <li>5</li> <li>5</li>"

// 	// insert string into the DOM using innerHTML
// 	const listElement = document.getElementById("your-worst-enemy");
// 	listElement.innerHTML = liString;
// });


