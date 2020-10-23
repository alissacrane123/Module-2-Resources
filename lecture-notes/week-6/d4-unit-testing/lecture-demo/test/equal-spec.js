const chai = require("chai");
const expect = chai.expect;

const { double, doubleInPlace } = require("../problems/equal");

// deep.equal & eql
// - checks that child objects are the same

// equal
// - checks for referential equality (vars reference same object)

describe("double function", () => {
  it("should double every element in array", () => {
    let input = [1, 2, 3];
    let res = double(input);
    let expected = [2, 4, 6];

    expect(res).to.deep.equal(expected);
    expect(res).to.eql(expected);
  });

  it("should return a new array", () => {

		let input = [1, 2, 3];
		let res = double(input);

		expect(res).to.be.an("array");
		expect(input).to.not.equal(res);
  });
});

describe("doubleInPlace function", () => {
  it("should double every element in array", () => {
    let input = [1, 2, 3];
    let res = doubleInPlace(input);
    let expected = [2, 4, 6];

    expect(res).to.deep.equal(expected);
  });

  it("should return the original array", () => {

		let input = [1, 2, 3];

		let res = doubleInPlace(input);

		expect(res).to.be.an("array");
		expect(input).to.equal(res);
  });
});









// USING ASSERT

// const assert = require("assert");

// describe("double function", () => {
//   it("should double every element in array", () => {
//     let input = [1, 2, 3];
//     let res = double(input);
//     let expected = [2, 4, 6];

//     assert.deepStrictEqual(res, expected);
//   });

//   it("should return a new array", () => {
//     let input = [1, 2, 3];
//     let res = double(input);
//     let isArray = Array.isArray(res);

//     assert.strictEqual(isArray, true);
//     assert.notStrictEqual(input, res);
//   });
// });

// describe("doubleInPlace function", () => {
//   it("should double every element in array", () => {
//     let input = [1, 2, 3];
//     let res = doubleInPlace(input);
//     let expected = [2, 4, 6];

//     assert.deepStrictEqual(res, expected);
//   });

//   it("should return the original array", () => {
//     let input = [1, 2, 3];

//     let res = doubleInPlace(input);
//     let isArray = Array.isArray(res);

//     assert.strictEqual(isArray, true);
//     assert.strictEqual(input, res);
//   });
// });
