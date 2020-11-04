// chai is an assertion library
const chai = require("chai");
const spies = require("chai-spies");

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import the object we're testing
const Dog = require('../problems/dog');



describe("Dog class", () => {
  let bodhi;

  beforeEach("set up dog instance", () => {
    bodhi = new Dog("Bodhi", 5, ["rollover"]);
  });

  describe("Dog.prototype.constructor", () => {
    it("should set the name property", () => {
      // YOUR CODE HERE
    });

    it("should set the age property", () => {
      // YOUR CODE HERE
    });

    it("should set the tricks property", () => {
      // YOUR CODE HERE
    });
  });

  describe("Dog.prototype.haveBirthday", () => {
    it("should increment the dogs age by 1", () => {
      // YOUR CODE HERE
    });

    it("should return the new age", () => {
      // YOUR CODE HERE
    });
  });

  describe("Dog.prototype.numTricks", () => {
    it("should return the number of tricks a dog knows", () => {
      // YOUR CODE HERE
    });
  });

  describe("Dog.prototype.learnTrick", () => {
    it("should add new trick to dogs tricks array", () => {
      // YOUR CODE HERE
    });

    it("should return the new number of tricks a dog knows", () => {
      // YOUR CODE HERE
    });

    it("should call the numTricks() method", () => {
      // YOUR CODE HERE
    });
  });
});