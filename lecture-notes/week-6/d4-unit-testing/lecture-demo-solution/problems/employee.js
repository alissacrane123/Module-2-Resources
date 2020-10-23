const bonus = number => {
  return number * 2;
}

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
    this.atWork = false;
  }

  commute() {
    this.atWork = !this.atWork;
    return this.atWork;
  }

  goHome() {
    if (this.atWork) {
      return this.commute();
    }
  }

  getPromotion() {
    if (this.atWork === false) {
      throw new Error("This person must be at work to get a promotion");
    }
    this.salary += bonus(this.salary);
    return this.salary;
  }
}

module.exports = { bonus, Employee }