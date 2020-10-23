// build in node module assertion library
const assert = require("assert");

// relative path to functions location
const { sumPrimeNums, isPrime } = require("../problems/problems");

// strict equal uses ==, equal uses ===, deep checks inner values

describe("isPrime()", () => {
  it("should return true if number is prime", () => {
    let num = 3;
    let test = isPrime(num);
    let expected = true;
    assert.equal(test, expected);
  });
  it("should return false if number is not prime", () => {
    let num = 0;
    let test = isPrime(num);
    let expected = false;
    assert.equal(test, expected);

    let num2 = 2;
    let test2 = isPrime(num2);
    let expected2 = false;
    assert.equal(test2, expected2);
  });
});

describe("sumPrimeNums()", () => {
  it("should return sum of all prime nums", () => {
    let nums = [2, 7, 13, 8];
    let test = sumPrimeNums(nums);
    let expected = 20;

    assert.strictEqual(test, expected);
  });
});
