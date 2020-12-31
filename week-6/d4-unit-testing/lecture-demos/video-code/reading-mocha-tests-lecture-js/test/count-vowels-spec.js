const assert = require("assert");

const countVowels = require("../problems/count-vowels.js");

// "describe" used to group tests
describe("countVowels()", function() {
	// an alias for "describe"
	// provides additional grouping
  context("with a valid argument", () => {
		
		// provides the actual test case
    it("should return a count of all the argument's vowels", function() {
      const result = countVowels("bootcamp");
      const answer = 3;
      assert.deepStrictEqual(result, answer);
    });

    it("should return a count of all the argument's lower and uppercase vowels", function() {
      const result1 = countVowels("BaNAnAnA");
      const answer1 = 4;

      const result2 = countVowels("EeIoUuZY");
      const answer2 = 6;

      assert.deepStrictEqual(result1, answer1);
			assert.deepStrictEqual(result2, answer2);
			


			// deepStrictEqual vs strictEqual 

			// let arr = [1,2,3];
			// let arr2 = [1,2,3];
			// let arr3 = arr;

			// assert.deepStrictEqual(arr, arr2);
			// assert.strictEqual(arr, arr2);
			// assert.strictEqual(arr, arr3)
    });
  });

  context("with an invalid argument", () => {
    it("should throw a TypeError when given an argument that is not of type String", function() {
      assert.throws(
        function() {
          countVowels({ apple: "app" });
        },
        TypeError,
        "this function only accepts string args"
      );
    });
  });
});
