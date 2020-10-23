const assert = require("assert");

const isEqual = require('../problems/equal');

describe('isEqual function', () => {
  it('returns true if arguments are equal', () => {

    // let value1 = 10
    // let value2 = '10'

    let value1 = [1, 2, 3];
    let value2 = [1, 2, 3];

    // === : false for strings and arrays
    // assert.strictEqual(value1, value2)

    // == : true for string, false for array
    // assert.equal(value1, value2)

    // true for array of same values
    assert.deepEqual(value1, value2)
  })
})


// strictEqual : "===" : both type and value must be the same (equal in chai)

// equal : "==" : value must be the same after converting to same type 
// - compared after attempting to convert to same type

// deepEqual : checks if child objects are equal (eql in chai)