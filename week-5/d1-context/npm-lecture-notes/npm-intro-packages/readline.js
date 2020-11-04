const fs = require('fs');
const readline = require('readline')



// create readable stream
const stream = fs.createReadStream('./poem.txt')

// create instance of readline interface
// - accepts readable stream as argument
const rl = readline.createInterface(stream)


// read stream line by line
rl.on('line', line => {
	console.log(line, "...");
})