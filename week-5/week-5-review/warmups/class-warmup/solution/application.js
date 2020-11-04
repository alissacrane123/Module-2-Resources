
class Application {
	constructor(animal, applicant) {
    //setting the animal and applicant instance variables to the name and age provided
    //when application is instatiated
		this.animal = animal;
		this.applicant = applicant;
	}

	isValid() {
    //returning true if the applicant is of age, otherwise false
		if (this.applicant.getAge() >= 18) {
			return true
		}
		return false;
	}
}

//exporting the Application class as the only export (no destructuring on import)
module.exports = Application;