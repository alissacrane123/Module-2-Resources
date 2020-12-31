const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

// this is a relative path to the function location
const Elephant = require("../problems/elephant.js");

describe("Elephant", function() {
  let dumbo;

	// this code will be run once before each test case
  beforeEach("set up an elephant instance", function() {
    dumbo = new Elephant("Dumbo");
  });

  describe("Elephant Constructor Function", function() {
    it('should have a "name" property', () => {
      expect(dumbo).to.have.property("name");
    });

    it('should set the "name" property when a new elephant is created', () => {
      expect(dumbo.name).to.eql("Dumbo");
    });
  });

  describe("Elephant.prototype.sit()", function() {
    it("should return a string with the name of the elephant sitting", () => {
			let res = dumbo.sit();
      expect(res).to.eql("Dumbo the elephant sits down");
    });
  });

  describe("Elephant.elephantStrike(elephants)", function() {
    it("should call the sit method on each passed in elephant", function() {
      // spy on the existing dumbo instance
      const dumboSitSpy = chai.spy.on(dumbo, "sit");

      const ruby = new Elephant("Ruby");
      const rubySitSpy = chai.spy.on(ruby, "sit");
      Elephant.elephantStrike([dumbo, ruby]);

      expect(rubySitSpy).to.have.been.called.once;
      expect(dumboSitSpy).to.have.been.called.once;
    });

    it("should return an array with each passed in elephant sitting", function() {
      const ruby = new Elephant("Ruby");
      let strike = Elephant.elephantStrike([dumbo, ruby]);
      let result = [
        "Dumbo the elephant sits down",
        "Ruby the elephant sits down"
      ];
      expect(strike).to.eql(result);
    });
  });
});
