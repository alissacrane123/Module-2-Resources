
const chai = require("chai");

const spies = require("chai-spies");

const expect = chai.expect;

chai.use(spies);

const Elephant = require("../problems/elephant.js");

describe('Elephant', () => {
  let dumbo;


  beforeEach('set up an elephant instance', () => {
    dumbo = new Elephant('Dumbo');
  });

  describe('Elephant constructor function', () => {
    it('should have a "name" property', () => {

      // dumbo.name = 'bob'

      expect(dumbo).to.have.property("name");
    })

    it('should set the name property when a new elephant is created', () => {
      expect(dumbo.name).to.equal("Dumbo");
    });
  });

  describe('prototype.sits()', () => {
    it('should return a string with the namee of the elephant sitting', () => {
      expect(dumbo.sits()).to.equal('Dumbo the elephant sits down')
    })
  });

  describe('elephantStrike(elephants)', () => {
    it('should call the sit method on each passed elephant', () => {

      const dumboSpy = chai.spy.on(dumbo, 'sits');
      
      const ruby = new Elephant('Ruby');
      const rubySpy = chai.spy.on(ruby, 'sits');
      Elephant.elephantStrike([dumbo, ruby]);

      expect(rubySpy).to.have.been.called.once;
      expect(dumboSpy).to.have.been.called.once;
    });

    it('should return an array with each passed in elephant sitting', () => {

      const ruby = new Elephant('Ruby');
      let strike = Elephant.elephantStrike([dumbo, ruby]);
      let result = [
        "Dumbo the elephant sits down",
        "Ruby the elephant sits down"
      ];

      expect(strike).to.eql(result)
    })
  })
})