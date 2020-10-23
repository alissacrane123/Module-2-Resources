const fs = require('fs');


// // fs.appendFile: create or append
// fs.appendFile('./new_text.txt', 'here is some text', err => {
// 	if (err) {
// 		console.error(err);
// 	}
// })



// // fs.readFile: reads aall 
// fs.readFile('./poem.txt', 'utf-8', (err, data) => {
// 	if (err) {
// 		console.error(err);
// 	}

// 	console.log(data);
// })



// // fs.readdir: reads a directory
// fs.readdir('./my-dir', (err, files) => {
// 	if (err) {
// 		console.error(err);
// 		return
// 	}

// 	files.forEach(file => {
// 		console.log(file);
// 	})
// })



// fs.createReadStream: read file piece by piece

const stream = fs.createReadStream('./poem.txt', 'utf-8');

stream.on('data', chunk => {
	console.log(chunk);
})

stream.on('close', () => {
	console.log('done reading stream')
})