const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { fileContainsClass } = require("./helpers");

const problemModulePath = "../problems/problem-03-make-evil-dragons.js";
const EvilDragon = require(problemModulePath);

describe("Problem 3:", () => {
  describe("The Evil Dragon class", () => {
    it("should not be null", () => {
      expect(EvilDragon).to.not.be.null;
      expect(EvilDragon).to.not.deep.equal({});
    });

    const filePath = path.resolve(__dirname, problemModulePath);
    const fileContainsClassResult = fileContainsClass(filePath, "EvilDragon");

    it("should be a class", () => {
      expect(fileContainsClassResult).to.be.true;
    });

    if (EvilDragon !== null && fileContainsClassResult) {
      context("should include a constructor method that initializes", () => {
        const instance = new EvilDragon(
          "Ender Dragon",
          "black",
          [
            "spit a fireball at Steve",
            "rule over all the Endermen",
            "destroy all blocks in its way",
          ],
          "Steve"
        );

        it("the `name` property from the provided argument value", () => {
          expect(instance.name).to.equal("Ender Dragon");
        });

        it("the `color` property from the provided argument value", () => {
          expect(instance.color).to.equal("black");
        });

        it("the `evilDoings` property from the provided argument value", () => {
          expect(instance.evilDoings[0]).to.equal("spit a fireball at Steve");
          expect(instance.evilDoings[1]).to.equal("rule over all the Endermen");
          expect(instance.evilDoings[2]).to.equal(
            "destroy all blocks in its way"
          );
        });

        it("the `nemesis` property from the provided argument value", () => {
          expect(instance.nemesis).to.equal("Steve");
        });

        it("is an instance of the `Dragon` parent class", () => {
          const Dragon = require("../problems/problem-01-make-dragons");
          expect(instance).to.be.an.instanceOf(Dragon);
        });
      });
    }

    context("should include", () => {
      it("an instance method named `dontInviteThemOverForDinner()`", () => {
        expect(EvilDragon.prototype.dontInviteThemOverForDinner).to.not.be
          .undefined;
        expect(EvilDragon.prototype.dontInviteThemOverForDinner).to.be.an(
          "Function"
        );
      });
    });

    context("that", () => {

      beforeEach(() => {
        sinon.stub(console, "log");
      });

      afterEach(() => {
        console.log.restore();
      });

      it("each evil doing is logged to the console", () => {        
        const instance = new EvilDragon(
          "Ender Dragon",
          "black",
          [
            "spit a fireball at Steve",
            "rule over all the Endermen",
            "destroy all blocks in its way",
          ],
          "Steve"
        );

        instance.dontInviteThemOverForDinner();

        expect(console.log.calledThrice).to.be.true;
        expect(
          console.log.calledWith("Ender Dragon will spit a fireball at Steve")
        ).to.be.true;
        expect(
          console.log.calledWith("Ender Dragon will rule over all the Endermen")
        ).to.be.true;
        expect(
          console.log.calledWith(
            "Ender Dragon will destroy all blocks in its way"
          )
        ).to.be.true;        
      });
    });

    context("should include", () => {
      it("an instance method named `burnsNemesis()`", () => {
        expect(EvilDragon.prototype.burnsNemesis).to.not.be.undefined;
        expect(EvilDragon.prototype.burnsNemesis).to.be.an("Function");
      });
    });

    context("that", () => {
      it("returns the expected value", () => {
        const instance = new EvilDragon(
          "Ender Dragon",
          "black",
          [
            "spit a fireball at Steve",
            "rule over all the Endermen",
            "destroy all blocks in its way",
          ],
          "Steve"
        );
        expect(instance.burnsNemesis()).to.equal(
          `${instance.name} destroys ${instance.nemesis} with fire! WHOOOSH!!!`
        );
      });
    });
  });
});
