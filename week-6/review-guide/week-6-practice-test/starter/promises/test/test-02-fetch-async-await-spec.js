const chai = require("chai");
const expect = chai.expect;

const problemModulePath = "../problems/02-fetch-async-await.js";
const gettingAsyncQuote = require(problemModulePath);

const quoteURL = "https://zenquotes.io/api/random";

describe("gettingAsyncQuote()", () => {
  it("should return a Promise-like object ", () => {
    const p = gettingAsyncQuote(quoteURL);
    expect(p).to.have.property("then");
    expect(p.then).to.be.instanceOf(Function);
    expect(p.then.length).to.equal(2);
  });
});

describe("gettingAsyncQuote()", () => {
  it("should use async", () => {
    const code = gettingAsyncQuote.toString();
    if (!/\basync\b/.test(code)) {
      expect.fail("gettingAsyncQuote should use async");
    }
  });

  it("should use await", () => {
    const code = gettingAsyncQuote.toString();
    if (!/\bawait\b/.test(code)) {
      expect.fail("gettingAsyncQuote should use await");
    }
  });
});
