const path = require("path");
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");
const { fileContainsClass } = require("./helpers");

const problemModulePath = "../problems/problem-04-all-the-dragons.js";
const solution = require(problemModulePath);

const FriendlyDragon = require("../problems/problem-02-make-friendly-dragons");
const EvilDragon = require("../problems/problem-03-make-evil-dragons");
const Dragon = require("../problems/problem-01-make-dragons");

describe("Problem 4:", () => {
  describe("Lets make some Dragons!", () => {
    context("The module exports", () => {
      it("an instance of the `FriendlyDragon` class assigned to the variable `falkor`", () => {
        expect(solution.falkor).to.be.an.instanceof(FriendlyDragon);
      });

      it("an instance of the `EvilDragon` class assigned to the variable `smaug`", () => {
        expect(solution.smaug).to.be.an.instanceof(EvilDragon);
      });
    });

    if (FriendlyDragon && solution) {
      context("Falkor", () => {
        const testFalkor = new FriendlyDragon(
          "Falkor",
          "white",
          [
            "save Atreyu from the swamp",
            "save Atreyu from the Nothing",
            "scare the local bullies into a dumpster",
          ],
          "Bastian"
        );

        it("should be an instance of the `FriendlyDragon` class", () => {
          expect(solution.falkor).to.be.an.instanceof(FriendlyDragon);
        });

        it("the `name` property should be set to `Falkor`", () => {
          expect(solution.falkor.name).to.equal(testFalkor.name);
        });

        it("the `color` property should be set to `White`", () => {
          expect(solution.falkor.color).to.equal(testFalkor.color);
        });

        it("the `lifeGoals` property should be set correctly for each value", () => {
          expect(solution.falkor.lifeGoals[0]).to.equal(
            testFalkor.lifeGoals[0]
          );
          expect(solution.falkor.lifeGoals[1]).to.equal(
            testFalkor.lifeGoals[1]
          );
          expect(solution.falkor.lifeGoals[2]).to.equal(
            testFalkor.lifeGoals[2]
          );
        });

        it("the `friend` property should be set to `Bastian`", () => {
          expect(solution.falkor.friend).to.equal(testFalkor.friend);
        });
      });
    }
    if (EvilDragon && solution) {
      context("Smaug", () => {
        const testSmaug = new EvilDragon(
          "Smaug",
          "black",
          [
            "take over your mountain kingdom",
            "steal all your dwarven gold",
            "burn down your floating village",
          ],
          "Dwarf King"
        );

        it("should be an instance of the `EvilDragon` class", () => {
          expect(solution.smaug).to.be.an.instanceof(EvilDragon);
        });

        it("the `name` property should be set to `Falkor`", () => {
          expect(solution.smaug.name).to.equal(testSmaug.name);
        });

        it("the `color` property should be set to `White`", () => {
          expect(solution.smaug.color).to.equal(testSmaug.color);
        });

        it("the `evilDoings` property should be set correctly for each value", () => {
          expect(solution.smaug.evilDoings[0]).to.equal(
            testSmaug.evilDoings[0]
          );
          expect(solution.smaug.evilDoings[1]).to.equal(
            testSmaug.evilDoings[1]
          );
          expect(solution.smaug.evilDoings[2]).to.equal(
            testSmaug.evilDoings[2]
          );
        });

        it("the `nemesis` property should be set to `Dwarf King`", () => {
          expect(solution.smaug.nemesis).to.equal(testSmaug.nemesis);
        });
      });
    }
    context("The static getDragons() method", () => {
      it("returns the expected value", () => {
        const dragons = solution.allDragons;

        expect(dragons.length).to.equal(2);
        expect(dragons).to.deep.include(solution.falkor.name);
        expect(dragons).to.deep.include(solution.smaug.name);
      });

    });
  });
});
