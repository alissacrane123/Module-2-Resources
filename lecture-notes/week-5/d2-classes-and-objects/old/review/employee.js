class Employee {
  constructor(name, salary, dept, boss = null) {
    this.name = name;
    this.salary = salary;
    this.dept = dept;
    this.boss = boss;
  }

  static reportToSameManager(employee1, employee2) {
    // this
    return employee1.boss === employee2.boss
  }

  assignBoss(boss) {
    this.boss = boss;
  }

  receiveRaise(raiseAmount) {
    this.salary += raiseAmount
  }

}

module.exports = Employee;