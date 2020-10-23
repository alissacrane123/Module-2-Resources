# INSTRUCTIONS


1. CREATE CAT CLASS in the `animal.js` file
- props: name, age
- methods:
  - speak():
    - should return a string "meow meow my name is <cat-name>"



2. CREATE DOG CLASS in the `animal.js` file
- props: name, age
- methods:
  - speak():
    - should return a string "woof woof my name is <dog-name>"



* HINT: notice any way we can optimize the code above?


3. CREATE USER CLASS in the `user.js` file	
- props: name, age, pets (initialized to empty array)
- methods:
  - getAge(): 
    - should return user's age
  - adoptPet(pet): 
    - accepts an animal object (cat or dog) as an argument
    - should add pet to user's pets array and console.log "<user-name> 
      adopted a new pet, <pet-name>"




4. CREATE APPLICATION CLASS in the `application.js` file
- props: applicant, animal
- methods:
  - isValid(): 
    - should return true if applicant is at least 18, false otherwise






5. CREATE SHELTER CLASS in the `shelter.js` file
- props: animals, adoptions (both initialized to empty arrays)
- methods:
  - introduceAnimals(): 
    - should console.log the return value of calling the speak() method
      on each animal in the shelter's animals array
  - receiveAnimal(animal): 
	  - accepts an animal object (cat or dog) as an arguments
    - should add animal to animals array
    - should console.log "shelter received a new animal, <animal-name>"
  - processAdoption(animal, user):
		- accepts an animal object (cat or dog) and a user object as an argument
    - remove animal from animals array and add animal to user's pet array
  - receiveApplication(animalName, user): 
	  - accepts an animalName (string) and user object as arguments
    - should find the animal with specified name
    - should create a new instance of Application class
    - should check if application is valid, if valid should add application 
      to adoptions array and invoke the processAdoption method, 
      if not valid should console.log "sorry <user-name>, you are not old 
      enough to adopt"


6. ADD NECESSARY IMPORTS TO THE `index.js` FILE 
   - don't forget to add necessary exports to above files as well


TESTING
- run the code inside of the `index.js` file
- make sure you are seeing the expected output on each line!
