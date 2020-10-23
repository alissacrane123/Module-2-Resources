
const chai = require('chai');
const spies = require('chai-spies');
const expect = chai.expect;
chai.use(spies);


const problemModulePath = '../problems/01-fetch-promise.js';
const gettingQuotes = require(problemModulePath);

const quoteURL = "https://zenquotes.io/api/random";

describe('gettingQuotes()', () => {

  it('should return a Promise-like object ', () => {
    let spy = chai.spy.on(console, 'log');
    const p = gettingQuotes(quoteURL);
    // expect(p).to.have.property('then');
    expect(p).to.be.instanceOf(Promise);
    // expect(p.then.length).to.equal(2);
    p.then(()=> {
      expect(spy).to.have.been.called.twice;
      done();
    })
    chai.spy.restore(console);
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


