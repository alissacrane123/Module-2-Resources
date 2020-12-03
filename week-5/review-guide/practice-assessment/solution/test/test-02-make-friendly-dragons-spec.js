const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");

const { fileContainsClass } = require("./helpers");

const problemModulePath = "../problems/problem-02-make-friendly-dragons.js";
const FriendlyDragon = require(problemModulePath);

const filePath = path.resolve(__dirname, problemModulePath);
const fileContainsFriendlyDragonClassResult = fileContainsClass(
  filePath,
  "FriendlyDragon"
);

describe("Problem 2:", () => {
  describe("The module", () => {
    it("exports a non-null, non-empty object", () => {
      expect(FriendlyDragon).to.not.be.null;
      expect(FriendlyDragon).to.not.deep.equal({});
    });

    if (FriendlyDragon !== null) {
      it("and references the `Friandly Dragon` class", () => {
        expect(fileContainsFriendlyDragonClassResult).to.be.true;
      });
    }
  });

  describe("The Friendly Dragon class", () => {
    it("should not be null", () => {
      expect(FriendlyDragon).to.not.be.null;
      expect(FriendlyDragon).to.not.deep.equal({});
    });


    it("should be a class", () => {
      expect(fileContainsFriendlyDragonClassResult).to.be.true;
    });

    console.log(fileContainsFriendlyDragonClassResult);
    if (FriendlyDragon !== null && fileContainsFriendlyDragonClassResult) {
      context("should include a constructor method that initializes", () => {
        const instance = new FriendlyDragon(
          "Puff",
          "green",
          [
            "lives by the sea",
            "frolick in the autumn mist",
            "help small children",
          ],
          "Jackie Paper"
        );

        it("the `name` property from the provided argument value", () => {
          expect(instance.name).to.equal("Puff");
        });

        it("the `color` property from the provided argument value", () => {
          expect(instance.color).to.equal("green");
        });

        it("the `lifeGoals` property from the provided argument value", () => {
          expect(instance.lifeGoals[0]).to.equal("lives by the sea");
          expect(instance.lifeGoals[1]).to.equal("frolick in the autumn mist");
          expect(instance.lifeGoals[2]).to.equal("help small children");
        });

        it("the `friend` property from the provided argument value", () => {
          expect(instance.friend).to.equal("Jackie Paper");
        });

        it("is an instance of the `Dragon` parent class", () => {
          const Dragon = require("../problems/problem-01-make-dragons");
          expect(instance).to.be.an.instanceOf(Dragon);
        });
      });
    }

    context("should include", () => {
      it("an instance method named `hasLifeGoals()`", () => {
        expect(FriendlyDragon.prototype.hasLifeGoals).to.not.be.undefined;
        expect(FriendlyDragon.prototype.hasLifeGoals).to.be.an("Function");
      });
    });

    context("that", () => {

      beforeEach(() => {
        sinon.stub(console, "log");
      });

      afterEach(() => {
        console.log.restore();
      });


      it("each life goal is logged to the console", () => {
        const instance = new FriendlyDragon(
          "Puff",
          "green",
          [
            "live by the sea",
            "frolick in the autumn mist",
            "help small children",
          ],
          "Jackie Paper"
        );

        instance.hasLifeGoals();

        expect(console.log.calledThrice).to.be.true;
        expect(console.log.calledWith("Puff likes to live by the sea")).to.be
          .true;
        expect(
          console.log.calledWith("Puff likes to frolick in the autumn mist")
        ).to.be.true;
        expect(console.log.calledWith("Puff likes to help small children")).to
          .be.true;
      });
    });

    context("should include", () => {
      it("an instance method named `helpsPeople()`", () => {
        expect(FriendlyDragon.prototype.helpsPeople).to.not.be.undefined;
        expect(FriendlyDragon.prototype.helpsPeople).to.be.an("Function");
      });
    });

    context("that", () => {
      it("returns the expected value", () => {
        const instance = new FriendlyDragon(
          "Puff",
          "green",
          [
            "live by the sea",
            "frolick in the autumn mist",
            "help small children",
          ],
          "Jackie Paper"
        );
        expect(instance.helpsPeople()).to.equal(
          `${instance.name} helps his friend ${instance.friend}`
        );
      });
    });
  });
});
