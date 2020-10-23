const chai = require("chai");
const expect = chai.expect;

const assert = require("assert");

describe('equal aassertion', () => {

	context('using assert', () => {

		it('checks values are equal using different equality checks', () => {
      // PRIMITIVE DATA TYPES

      let val1 = "0";
      let val2 = 0;

      // assert.equal uses '=='
      // - checks vals are same after converting to same type
      // assert.equal(val1, val2); // passes

      // assert.strictEqual uses '==='
      // - checks type and value are the same
      // assert.strictEqual(val1, val2) // fails



      // NON PRIMITIVE

      let arr1 = [1, 2, 3];
			let arr2 = [1,2,3];
			let arr3 = arr1;

			// assert.equal & assert.strictEqual check for referential equality
			// assert.equal(arr1, arr2); // fails
			// assert.strictEqual(arr1, arr2); // fails
			// assert.equal(arr1, arr3); // passes
			// assert.strictEqual(arr1, arr3); // passes

			// assert.deepEqual checks if child objects are equal
			// assert.deepEqual(arr1, arr2) // passes

    })
	})

	
	context('using chai expect', () => {

		it("checks values are equal using different equality checks", () => {
      // PRIMITIVE DATA TYPES

      let val1 = "0";
      let val2 = 0;

			// expects equal and eql check type and value are the same (===)
			expect(val1).to.equal(val2); // fails
			expect(val1).to.eql(val2); // fails

      // NON PRIMITIVE

      let arr1 = [1, 2, 3];
      let arr2 = [1, 2, 3];
      let arr3 = arr1;

			// expects equal checks for referential equality
			expect(arr1).to.equal(arr2); // fails
			expect(arr1).to.equal(arr3); // passes

			// expects eql is the same as deep.equal, checks if child obj are the same
			expect(arr1).to.eql(arr2); // passes
			expect(arr1).to.deep.equal(arr2); // passes
    });
	})


})
