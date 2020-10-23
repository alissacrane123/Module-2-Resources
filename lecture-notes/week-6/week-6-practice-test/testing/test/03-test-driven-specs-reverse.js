/********Week 6 Practice Test - Problem 3 - Unit Tests ***************/
//  Complete the unit test code so that `myReverse` function will pass all the 
//  mocha tests.  Remove the expect.fail in each test and replace it with your
//  code.  

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
    // Remember to remove the expect.fail line below and replace it with your
    // tests.  A good test would check the output for both an array of numbers
    // and an array of letters.   Use the Arrange, Act, and Assert steps if that
    // helps you to organize your tests.
       expect.fail('Remove this expect.fail and replace it with your test');

    });

    it("should not mutate the passed in array", function() {
    // Remember to remove the expect.fail line below and replace it with your
    // tests.  
      expect.fail('Remove this expect.fail and replace it with your test');

    });
  });

  context("with an invalid argument", () => {
    it("should throw a TypeError when given an empty array", function() {
    // Remember to remove the expect.fail line below and replace it with your
    // tests.  
       expect.fail('Remove this expect.fail and replace it with your test');

    });
  });
});