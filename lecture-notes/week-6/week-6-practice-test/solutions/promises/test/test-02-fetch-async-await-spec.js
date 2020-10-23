const chai = require('chai');
const expect = chai.expect;

const problemModulePath = '../problems/02-fetch-async-await.js';
const gettingAsyncQuotes = require(problemModulePath);

const quoteURL = "https://zenquotes.io/api/random";

describe('gettingAsyncQuotes()', () => {

  it('should return a Promise-like object ', () => {
    const p = gettingAsyncQuotes(quoteURL);
    expect(p).to.have.property('then');
    expect(p.then).to.be.instanceOf(Function);
    expect(p.then.length).to.equal(2);
  });
});

describe('gettingAsyncQuotes()', () => {

  it ('should use async', () => {
    const code = gettingAsyncQuotes.toString();
    if (!/\basync\b/.test(code)) {
      expect.fail('gettingAsyncQuotes should use async');
    }
  });

  it ('should use await', () => {
    const code = gettingAsyncQuotes.toString();
    if (!/\bawait\b/.test(code)) {
      expect.fail('gettingAsyncQuotes should use await');
    }
  });
});

