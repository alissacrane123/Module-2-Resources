// chai is an assertion library
const chai = require("chai");

const spies = require("chai-spies");

const expect = chai.expect;

chai.use(spies);

const Manager = require('../problems/manager')

describe('Manager', () => {
  let joe;
  const name = 'Joe';
  const newEmployees = ['Sally', 'Bob']

  beforeEach(() => {
    joe = new Manager(name);
  });

  describe('constructor calls', () => {
    it('should set the name property', () => {
      
      expect(joe.name).to.equal(name);
    })
    it('should set employees to an empty array', () => {
      
      expect(joe.employees).to.be.an('array').that.is.empty;
    })
  })

  describe('prototype.hireEmployees()', () => {
    it('should throw an error if argument is not an array', () => {

      expect(() => joe.hireEmployees('sally')).to.throw(Error )
    })

    it('should add employees to employees array', () => {
      joe.employees = ['Alissa']

      joe.hireEmployees(newEmployees);

      let test = joe.employees;

      let expected = ['Alissa', 'Sally', 'Bob']

      // deep checks contents of array
      expect(test).to.deep.equal(expected)
    })

    it('should return the new number of employees', () => {

      let test = joe.hireEmployees(newEmployees);

      let expected = 2

      expect(test).to.equal(expected)

    })

    it('should call prototype.numEmployees() method', () => {

      const numEmployeesSpy = chai.spy.on(joe, "numEmployees");

      joe.hireEmployees(newEmployees);

      expect(numEmployeesSpy).to.have.been.called.once;
    })
  })

  describe('prototype.numEmployees()', () => {
    it('should return the number of employees', () => {
      
      joe.employees = ["Alissa", "Angela", "Bryce"]

      test = joe.numEmployees();

      expected = 3;

      expect(test).to.equal(expected)
    })
  })
  
})