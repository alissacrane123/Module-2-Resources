class Employee {
	constructor(name, salary) {
		this.name = name;
		this.salary = salary;
	}

	toString() {
		return `Employee: ${this.name}, Salary: ${this.salary}`
	}
}

let employees = [
	new Employee('alissa', 50),
	new Employee('maggie', 100)
]

console.log('First: ' + employees[0])