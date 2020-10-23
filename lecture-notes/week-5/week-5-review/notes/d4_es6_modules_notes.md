
# ES6 MODULES



Browser Support for ES6 Modules
- ES6 modules can only be used when file is specified as a `module`
- can use HTTP server to serve HTML file with <script type="module">
	- `python3 -m http.server`
- running local web server gives you access to browser support for ES6 syntax


Modules in Browser Before ES6 Support
1. third party technology to load javascript files
2. individual script tags for each module



ES6 Modules: 
```js

// animal.js
export class Dog {}
export class Cat {}

// shelter.js
export default class Shelter {}

// index.js
import { Cat, Dog } from './animal.js'
import Shelter from './shelter.js'

```



Common JS Modules:
```js
// animal.js
class Dog {}
class Cat {}
module.exports = { Cat, Dog }
// or
// module.exports = { Cat: Cat, Dog: Dog }
// or
// module.exports.Cat = Cat;
// module.exports.Dog = Dog;


// shelter.js
class Shelter {}
module.exports = Shelter



// index.js
const { Cat, Dog } = require('./animal');
const Shelter = require('./shelter')

```

