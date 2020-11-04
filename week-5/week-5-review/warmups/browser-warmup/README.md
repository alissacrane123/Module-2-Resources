# OVERVIEW

This project is intended to be used with a simple server
- run the following command in your terminal:
  `python3 -m http.server`
- navigate to `localhost:8000` in your browser
* sometimes the python server doesn't register changes to your files
  - if you notice this happening, restart the server and do a hard refresh
- could alternatively use VS Code Live Server


# TODO

1. Create a `Dog` class in the `dog.js` file
   - props: `name`, `age`, `imgSrc`
	 - methods: 
	   - `addToDOM()`:
		   - should be called as soon as a dog is instantiated
		   - should append a new `li` to the `ul` with id of "dog-list"
			 - `li` should contain a `label` element with the inner text set
			   to the dog's `name` property and an `img` element with the src
				 set to the dog's `imgSrc` property



2. Create a `Shelter` class in the `shelter.js` file
   - props: `dogs` (array, set to empty array if no value passed in)
	 - methods:
	   - `receiveDog()`
		   - should grab the values from each input in the `form` element and
			   use those values to instantiate a new instance of the `Dog` class
			 - should add newly created dog object to `dogs` array
			 - should clear each input value
	   - `registerListeners()`
		   - should be called as soon as shelter is instantiated
			 - should add an event listener to the `form` element with
			   an id of "dog-form" that calls the `receiveDog` method
				 when the form is submitted



3. `index.js`
   - after the DOM has loaded:
	   - should create a new instance of the `Dog` class with a name of "Bodhi",
		   an age of 5 and an image source of "./images/bodhi.jpg"
   	 - should create a new instance of the `Shelter` class, passing in the
			 dog instance you just created