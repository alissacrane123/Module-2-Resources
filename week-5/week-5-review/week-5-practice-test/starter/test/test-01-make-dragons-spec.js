const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const { fileContainsClass } = require("./helpers");

const problemModulePath = "../problems/problem-01-make-dragons.js";
const Dragon = require(problemModulePath);

describe("Problem 1:", () => {
  describe("The Dragon class", () => {
    it("should not be null", () => {
      expect(Dragon).to.not.be.null;
    });

    const filePath = path.resolve(__dirname, problemModulePath);
    const fileContainsClassResult = fileContainsClass(filePath, "Dragon");

    it("should be a class", () => {
      expect(fileContainsClassResult).to.be.true;
    });

    if (Dragon !== null && fileContainsClassResult) {
      context("should include a constructor method that initializes", () => {
        const instance = new Dragon("Puff", "green");

        it("the `name` property from the provided argument value", () => {
          expect(instance.name).to.equal("Puff");
        });

        it("the `color` property from the provided argument value", () => {
          expect(instance.color).to.equal("green");
        });
      });
    }
  });

  context("should include", () => {
    it("an instance method named `breathesFire()`", () => {
      expect(Dragon.prototype.breathesFire).to.not.be.undefined;
      expect(Dragon.prototype.breathesFire).to.be.an("Function");
    });

    context("that", () => {
      it("returns the expected value", () => {
        const instance = new Dragon("Puff", "green");
        expect(instance.breathesFire()).to.equal(
          `${instance.name} breathes fire everywhere! BURN!!!!`
        );
      });
    });
  });

  context("should include", () => {
    it("a static method named `getDragons()`", () => {
      expect(Dragon.getDragons).to.not.be.undefined;
      expect(Dragon.getDragons).to.be.an("Function");
    });
    context("that", () => {
      it("returns the expected value", () => {
        const instance2 = new Dragon("Puff", "green");
        const instance3 = new Dragon("Toothless", "black");
        const dragons = Dragon.getDragons(instance2, instance3);
        expect(dragons.length).to.equal(2);
        expect(dragons).to.deep.include(instance2.name);
        expect(dragons).to.deep.include(instance3.name);
      });
    });
  });
});
