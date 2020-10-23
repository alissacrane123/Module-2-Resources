# INTRO TO NODE PACKAGE MANAGER (NPM)


Overview
- NPM: default package manager for JavaScript runtime environment, Node.js
- consists of:
	1. command line client (npm)
	2. online database of public & paid-for packages



Package Management
- package is collection of files & configurations wrapped up
- can rely on work of other developers to move our projects along
- can create our own packages and share with the world
- dependencies: packages our app depends on


Package Managers
- apps that accept code and provide services like versioning, change management, etc
- const of at least two parts:
	1. command line interface (CLI)
		 - enables us to download, install/uninstall packages
	2. registry
		 - database of package information


JavaScript Package Management
- before npm: embedded script tags used to share code
- Node.js released in 2010 with npm
  - most widely used package manager


Getting Started with NPM
- dont have to install since its part of Node.js
- `npm init`: generates `package.json` file
- `npm install [-g] <package-name>`: installs package into your project
	- optional -g (--global) flag installs package globally (everywhere in system)




# NPM AND DEPENDENCY MANAGEMENT


```js

{
	
	"name": "npm-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "some code to run test files"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1",
    "mocha": "^8.1.3"
  },
  "devDependencies": {
    "nodemon": "^2.0.4"
  }
}

// KEYS:
// name: name of module this package.json is describing
// version: denotes the current version of the module
// description: contains a human-readable description about the module
// main: direction to the entry point to the module
// scripts: 
// - keys in these key/value pairs is the name of a command that can be run
// - correseponding value of each key is the actual command that is run
// keywords: can help identify a package, related modules and software, and concepts
// author: author of module
// license: license for module
// dependencies: defines the other modules that this module uses in production
// devDependenciese: define the dependencies the module needs to run in development


```