// chai is an assertion library 
const chai = require('chai');
const spies = require('chai-spies');

// assertion style included with chai
const expect = chai.expect;

// tell chai to use spies library
chai.use(spies);

// import the object we're testing
const Dog = require('../problems/dog');


// way to group test, here we are testing Elephant class
describe('Dog class', () => {
  let bodhi;

  // runs before each test in a "describe" block
  // creates fresh instance of elephant class for each test
  // ensures result of one test doesnt affect testing of another
  beforeEach("set up dog instance", () => {
    bodhi = new Dog("Bodhi", 5, ["rollover"]);
  });

  // can nest describes for additional grouping
  describe("Dog.prototype.constructor", () => {
    it("should set the name property", () => {
      expect(bodhi.name).to.equal("Bodhi");
      expect(bodhi).to.have.property("name");
    });

    // it blocks provide the test case
    it("should set the age property", () => {
      expect(bodhi.age).to.equal(5);
      expect(bodhi).to.have.property("age");
    });

    it("should set the tricks property", () => {
      // equal checks for deep equality
      // could alternatively use deep.equal
      expect(bodhi.tricks).to.eql(["rollover"]);
      expect(bodhi).to.have.property("tricks");

      // this would not work because not referentially equal
      // expect(bodhi.tricks).to.equal(['rollover'])
    });
  });

  describe("Dog.prototype.haveBirthday", () => {
    it("should increment the dogs age by 1", () => {
      // arrange - define expected value
      let expected = 6;

      // act - invoke the method we're testing and capture new age
      bodhi.haveBirthday();
      let actual = bodhi.age;

      // assert - check the actual value is what we expected it to be
      expect(actual).to.equal(expected);
    });

    it("should return the new age", () => {
      // arrange - define expected value
      let expected = 6;

      // act - capture return value of function invocation
      let actual = bodhi.haveBirthday();

      // assert - check for equality
      expect(actual).to.equal(expected);
    });
  });

  describe("Dog.prototype.numTricks", () => {
    it("should return the number of tricks a dog knows", () => {
      // arrange
      let expected = 1;

      // act
      let actual = bodhi.numTricks();

      // assert
      expect(actual).to.equal(expected);
    });
  });

  describe("Dog.prototype.learnTrick", () => {
    it("should add new trick to dogs tricks array", () => {
      // arrange
      let input = "sit";
      let expected = ["rollover", "sit"];

      // act
      bodhi.learnTrick(input);
      let actual = bodhi.tricks;

      //assert
      expect(actual).to.deep.equal(expected);
    });

    it("should return the new number of tricks a dog knows", () => {
      // arrange
      let input = "lay down";
      let expected = 2;

      // act
      let actual = bodhi.learnTrick(input);

      // assert
      expect(actual).to.equal(expected);
    });

    it("should call the numTricks() method", () => {
      // arrange
      let input = "sit";

      // allows us to see if func was called and number of times
      // - first arg is object we're spying on (instance of Dog)
      // - second arg is method we're replacing with our spy
      let numTricksSpy = chai.spy.on(bodhi, "numTricks");

      // act
      bodhi.learnTrick(input);

      // assert - check number of times our spy was called
      expect(numTricksSpy).to.have.been.called.once;
    });
  });
})