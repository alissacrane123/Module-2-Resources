/* eslint-disable no-unused-expressions */

const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const { Employee, bonus } = require("../employee.js");

describe("bonus()", () => {
  it("should intake a number and then multiply that number by two", () => {
    const test = bonus(5);
    const result = 10;
    assert.strictEqual(test, result);
  });
});

describe("Employee", function() {
  let jake;

  beforeEach("set up an employee instance", function() {
    jake = new Employee("Jake", 10);
  });

  describe("Employee Constructor Function", function() {
    it('should have a "name" property', () => {
      expect(jake).to.have.property("name");
    });

    it('should have a "salary" property', () => {
      expect(jake).to.have.property("salary");
    });

    it('should have a "atWork" property', () => {
      expect(jake).to.have.property("atWork");
    });

    it('should set the "name" and "salary" properties when a new employee is created', () => {
			let expected = "Jake"


      expect(jake.name).to.eql(expected);
      expect(jake.salary).to.eql(10);
    });

    it('should default the value of the "atWork" property to false', () => {
			expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.commute()", function() {
    it("should flip the boolean value of the atWork property and return that new value", () => {
			// jake's atWork property is initially set to false
			// so after we call the commute method,
			// the value of his atWork property should now be true
			jake.commute();
      expect(jake.atWork).to.be.true;

			// invoking the method again should set it back to false
      jake.commute();
      expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.goHome()", function() {
    it("if the employee's atWork property is set to true it should call the prototype.commute method", () => {
			// invoke the commute method to set the atWork property to true
			// since it is initially set to false
			jake.commute();

			// allows us to see if func was called and number of times
			// - first argument is the object we're spying on
			// - second argument is the method we're replacing with our spy
			const commuteSpy = chai.spy.on(jake, "commute");

			// invoke the method we're testing to see if "commute" was called
      jake.goHome();

      expect(commuteSpy).to.have.been.called.once;
      // expect(commuteSpy).to.have.been.called.exactly(1);
    });

    it("should set the employee atWork property to false", () => {
			// set the atWork property to true
			jake.commute();
			// invoke our goHome method so we can check what the new
			// value of jake's atWork prop
      jake.goHome();

      expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.getPromotion()", function() {
    context("when the employee is at work", function() {
      it("the employee will get a bonus and return that bonus", () => {
        jake.commute(); // set atWork property to be true
        jake.getPromotion();
        expect(jake.salary).to.eql(30);
      });
    });

    context("when the employee is not at work", function() {
      it("if should throw an error", () => {
				expect(() => jake.getPromotion()).to.throw(Error);

		
				
				// let promoFunc = jake.getPromotion.bind(jake);
        // expect(promoFunc).to.throw(Error);
      });
    });
  });
});
