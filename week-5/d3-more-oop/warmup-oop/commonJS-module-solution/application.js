class Application {
  constructor(animal, applicant) {
    this.animal = animal;
    this.applicant = applicant;
  }

  isValid() {
    if (this.applicant.getAge() >= 18) {
      return true;
    }
    return false;
  }
}

