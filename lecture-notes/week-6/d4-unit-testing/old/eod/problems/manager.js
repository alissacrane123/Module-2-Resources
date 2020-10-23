
class Manager {
  constructor(name) {
    this.name = name;
    this.employees = [];
  }

  hireEmployees(arrayOfNames) {
    if (!Array.isArray(arrayOfNames)) {
      throw new TypeError("this method accepts an array as an arg");
    }

    this.employees = this.employees.concat(arrayOfNames);

    return this.numEmployees();
  }

  numEmployees() {
    return this.employees.length;
  }

}

module.exports = Manager ;
