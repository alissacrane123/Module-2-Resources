const assert = require('assert');

const countVowels = require('../problems/count-vowels');

describe('countVowels()', () => {
  context('with valid argument', () => {
    it('should return a count of all the arguments vowels', () => {
      const result = countVowels('bootcamp');
      const answer = 3
      assert.strictEqual(result, answer)
    });

    it('should return a count of all arguments lower and uppercase vowels', ()=> {
      const result = countVowels('BaNAnAnA');
      const answer = 4;

      assert.strictEqual(result, answer);
    })
  });

  context('with invalid argument', () => {
    it('should throw a TypeError when given an argument that has no vowels', () => {
      assert.throws(() => countVowels('bbzzgghh'), TypeError)
    })
  })
})