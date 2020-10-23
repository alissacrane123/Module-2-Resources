// chai is an assertion library 
const chai = require('chai');
const spies = require('chai-spies');

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import objects/functions we're testing
const { bonus, Employee } = require('../problems/employee')


describe("bonus function", () => {
  it("should take a number and return twice as much", () => {
    let input = 3;
    let expected = 6;

    let result = bonus(input);
    expect(result).to.equal(expected);
  });
});

describe("Employee", function () {
  let jake;

  beforeEach("set up an employee instance", function () {
    jake = new Employee("Jake", 10);
  });

  describe("Employee Constructor Function", function () {
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
      expect(jake.name).to.eql("Jake");
      expect(jake.salary).to.eql(10);
    });

    it('should default the value of the "atWork" property to false', () => {
      expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.commute()", function () {
    it("should flip the boolean value of the atWork property and return that new value", () => {
      jake.commute();
      expect(jake.atWork).to.be.true;

      jake.commute();
      expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.goHome()", function () {
    it("if the employee's atWork property is set to true it should call the prototype.commute method", () => {
      jake.commute();
      const commuteSpy = chai.spy.on(jake, "commute");
      jake.goHome();

      expect(commuteSpy).to.have.been.called.once;
    });

    it("should get the employee atWork property to false", () => {
      jake.commute();
      jake.goHome();

      expect(jake.atWork).to.be.false;
    });
  });

  describe("prototype.getPromotion()", function () {
    context("when the employee is at work", function () {
      it("the employee will get a bonus and return that bonus", () => {
        jake.commute();
        jake.getPromotion();
        expect(jake.salary).to.eql(30);
      });
    });

    context("when the employee is not at work", function () {
      it("if should throw an error", () => {
        // This is a unique test case in that mocha is going to be invoking
        // the getPromotion method for us.

        // If we had passed jake.getPromotion instead of the fat arrow,
        // we would lose our context since jake.getPromotion is just a
        // reference to that function.

        // Thus, this inside the method would no longer reference jake and we
        // would receive a TypeError: Cannot read property \'atWork\' of undefined.

        // An alternative solution would be to bind the method,
        // i.e jake.getPromotion.bind(jake)
        expect(() => jake.getPromotion()).to.throw(Error);
      });
    });
  });
});
