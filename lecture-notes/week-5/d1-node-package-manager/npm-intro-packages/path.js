const path = require("path");


// __dirname global - "dunder dirname"

console.log(__dirname);




// path.join

const newPath = path.join('/Users', 'Alissa', 'notes.text');
console.log(newPath)




// path.dirname: returns directory name of path 

console.log(path.dirname(newPath))



// path.extname: returns just extension

console.log(path.extname(newPath))



// path.parse: returns obj containing diff pieces

console.log(path.parse(newPath))