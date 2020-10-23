const Executive = require('./executive');

class Company {
  constructor(name) {
    this.name = name;
    this.executives = { 
      engineering: null, 
      sales: null 
    }
  }

  hireExec(name, salary, dept) {
    // create instance of executive class
    let newExec = new Executive(name, salary, dept)
    // assign exec to department
    this.executives[dept] = newExec
  }

  hireEmployees(...people) {
    people.forEach(person => {
      // find department manager
      let manager = this.executives[person.dept]
      // Sally.hireEmployee(bob)
      // call hireEmployee() method from Executive class
      manager.hireEmployee(person)
    })
  }

  listEmployees() {
    let employees = [] // ["Sally", "Bruce"]
    // get array of executives
    let executives = Object.values(this.executives)

    executives.forEach(exec => {
      // add executives to employees array
      employees.push(exec.name)
      // grab subordinates for each exec
      exec.subordinates.forEach(sub => {
        // add executives subordinates 
        employees.push(sub.name)
      })
    })

    return employees
  }

  giveRaises(raiseAmount) {
    // get array of executives
    let executives = Object.values(this.executives)

    executives.forEach(exec => {
      // give executives 2x raise Amount
      // call receiveRaise() method from Employee class
      exec.receiveRaise(raiseAmount * 2);
      // give subordinates raise
      // call giveRaises() method from Executive class
      exec.giveRaises(raiseAmount);
    })
  }

  calculateTotalSalary() {
    let total = 0
    let executives = Object.values(this.executives)

    executives.forEach(exec => {
      total += exec.salary;
      exec.subordinates.forEach(emp => {
        total += emp.salary
      })
    })
    return total;
  }
}

module.exports = Company 
