
# VIDEO 1 - INTRO TO NPM 


Overview
- NPM: default package manager for JavaScript runtime environment, Node.js
- consists of:
	1. CLI tool (ex: `npm init`, `npm install`)
	2. online database of public & paid-for packages



File Structure
- npm requirements must be at root level of application
- files:
	1. `package.json`
		 - metadata: name of app, version, author
		 - scripts: automate tasks
		 - dependencies: packages app relies on 
		 - safe to edit!
	2. `package-lock.json`
		 - contains exact details about installed dependencies (versions, etc)
		 - represents an exact, reproducible npm environment
		 - specifying versions ensures each user recieves exact same package
		 - dont edit this! 
  3. `node_modules`
	   - contains subdir for each dependency
		 - includes dependenciees of dependencies
		 - contains every package you should need
		 - dont include in version control (gitignore)



devDependencies
- packages which are used during development or which are used to build your bundle
- ex: mocha, nodemon, etc
- only necessary while you are developing your project




# VIDEO 2 - IGNORING THINGS IN GIT 


* SHOW GITIGNORE


# VIDEO 3 - INTRO TO BUILT-IN NODE PACKAGES


Packages and objects of interest
- Console: the console object
- File System: reading and writing files
- Path: manipulating file paths
- Process: object representing the running program
- Readline: reading data from somewhere (like a file) line by line



## Console Methods


console.log
- prints to terminal
- comes out on STDOUT steam
- can be directed elsewhere (`node console.js > output.txt`)

console.error
- prints to terminal
- comes out on STDERR stream




## File System Methods


Requiring Packages
- `const packageName = require("packageName")`;
- can name variable whatever you want


Methods: `fs.appendFile(fileName, content, errorHandler)`
- fileName: path to / name of file you want to create
- content: content of file
- errorHandler: callback that handles any errors


Methods: `fs.readFile(pathToFile, contentType, errorHandler)`
- pathToFile: path to file you want to read
- contentType: type of data in file
- callback: callback that is invoked after file is read
  - two args: error and data that was read 


Methods: `fs.readdir(dirName, callback)`
- reads files in directory


* NOTE: THESE METHODS ARE ASYNC 
  - callbacks invoked in order of completion



Method: `fs.createReadStream(pathTofile, dataType);`



## PATH 


`__dirname`
- global var that contains directory name of current files path 
- "dunder dirname"





## PROCESS


process.argv
- returns all args typed into command line
- `node process.js`
- `node process.js arg3 arg4`


process.cwd()
- returns directory from where you ran executible



process.exit()
- exits program
- can provide exit code, defualt is 0 (success)



## READLINE


* SEE CODE












