// build in node module assertion library
const assert = require('assert');

// relative path to functions location
const { sumPrimeNums, isPrime } = require('../problems/problems');


// strict equal uses ==, equal uses ===, deep checks inner values

// accepts a n
describe("isPrime function", () => {

  it('should return true if number is prime', () => {
    let num = 3
    let test = isPrime(num);
    let expected = true
    assert.equal(test, expected)
  })
  it('should return false if number is not prime', () => {
    
    // arrange
    let num = 0
    let expected = false;

    // act
    let test = isPrime(num)

    // assert
    assert.equal(test, expected);
    
    let num2 = 2
    let test2 = isPrime(num2)
    let expected2 = false;
    assert.equal(test2, expected2);
  })
})

describe("sumPrimeNums function", () => {

  it('should return sum of all prime nums', () => {
    let nums = [2,7,13,8]
    let test = sumPrimeNums(nums)
    let expected = 20

    assert.strictEqual(test, expected)
  })

})

