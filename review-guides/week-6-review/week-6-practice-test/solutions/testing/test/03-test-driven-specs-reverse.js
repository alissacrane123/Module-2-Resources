/********Week 6 Practice Test - Problem 3 - Unit Testsn ***************/
// Complete the unit test code so that `myReverse` function will pass all the 
//  mocha tests.

const myReverse = arr => {
  if (arr.length === 0) {
    throw new TypeError("This function only accepts non-empty arrays");
  }
  let newArray = [];
  arr.forEach(el => newArray.unshift(el));
  return newArray;
};

//----------------- DO NOT EDIT CODE ABOVE THIS LINE -------------------------

const chai = require("chai");
const expect = chai.expect;

describe("myReverse()", function() {
  context("with a valid argument", () => {
    it("should return the array reversed", function() {
      // ARRANGE
      const answer1 = [1, 2, 3];
      const answer2 = ["c", "b", "a"];
      // ACT
      const test1 = myReverse([3, 2, 1]);
      const test2 = myReverse(["a", "b", "c"]);
      // ASSERT
      expect(test1).to.eql(answer1);
      expect(test2).to.eql(answer2);
    });

    it("should not mutate the passed in array", function() {
      // ARRANGE
      const array = [3, 2, 1];
      const answer = [1, 2, 3];
      // ACT
      const test = myReverse(array);
      // ASSERT
      expect(test).to.eql(answer);
      expect(array).to.eql([3, 2, 1]);
    });
  });

  context("with an invalid argument", () => {
    it("should throw a TypeError when given an empty array", function() {
       // ASSERT  (would not make much sernse to set up Arrange and Act here)
      expect(() => myReverse([])).to.throw(TypeError);
    });
  });
});