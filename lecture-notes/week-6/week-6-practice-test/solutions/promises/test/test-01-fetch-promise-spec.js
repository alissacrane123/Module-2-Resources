
const chai = require('chai');
const expect = chai.expect;

const problemModulePath = '../problems/01-fetch-promise.js';
const gettingQuotes = require(problemModulePath);

const quoteURL = "https://zenquotes.io/api/random";

describe('gettingQuotes()', () => {

  it('should return a Promise-like object ', () => {
        
    const p = gettingQuotes(quoteURL);
    expect(p).to.have.property('then');
    expect(p.then).to.be.instanceOf(Function);
    expect(p.then.length).to.equal(2);

  });
});

describe('gettingQuotes()', () => {

  it ('should NOT use async', () => {
    const code = gettingQuotes.toString();
    if (/\basync\b/.test(code)) {
      expect.fail('gettingQuotes should not use async');
    }
  });

  it ('should NOT use await', () => {
    const code = gettingQuotes.toString();
    if (/\bawait\b/.test(code)) {
      expect.fail('gettingQuotes should not use await');
    }
  });
}); 


