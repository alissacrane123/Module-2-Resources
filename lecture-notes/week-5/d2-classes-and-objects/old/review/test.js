const Company = require('./company');
const Employee = require('./employee');

// 1. create employees
// let bob = new Employee('Bob', 500, 'engineering');
// let sarah = new Employee('Sarah', 500, 'sales')
// console.log(bob);
// console.log(sarah);

// 2. create company
let shmoogle = new Company('Shmoogle');
// console.log(shmoogle)

// 3. hire executives
shmoogle.hireExec('Sally', 1000, 'engineering')
shmoogle.hireExec('Bruce', 1000, 'sales')
// console.log(shmoogle);

let bob = new Employee('Bob', 500, 'engineering');
let sarah = new Employee('Sarah', 500, 'sales')
// 4. list current employees
// console.log(shmoogle.listEmployees())

// 5. hire bob and sarah
shmoogle.hireEmployees(bob, sarah);
// console.log(shmoogle)
// console.log(shmoogle.listEmployees())

// 6. check calculate total salary
// console.log(shmoogle.calculateTotalSalary())

// 7. give all employees a 5000 raise
// shmoogle.giveRaises(500)
// console.log(shmoogle.listEmployees())
// console.log(shmoogle.calculateTotalSalary())

// 8. check if two employees report to same manager
console.log(Employee.reportToSameManager(bob, sarah))

// console.log(shmoogle)

