/********Week 5 Practice Test - Problem 3 **************************************

Let's create an class to represent a EvilDragon! 🐉

1. Require the Dragon class from the `./problem-01-make-dragons.js` module.

2. Define an class named `EvilDragon` that inherits from the `Dragon` parent
   class you imported.  The `EvilDragon` class should contain a constructor
   method that accepts four arguments that initialize the following properties:

* name - the name of the dragon (should be inherited)
* color - the color of the dragon (should be inhereted)
* evilDoings - an array of bad things the Evil Dragon does
* nemesis - the Evil Dragon's arch nemesis.

3. Export the `EvilDragon` class so that other modules can require it.

***NOTE: IF YOU DO NOT CORRECTLY EXPORT THE `EvilDragon` CLASS, THE MOCHA TESTS
WILL THROW A 'TypeError` AND NOT RUN***

4. Additionally, add two(2) instance methods to the `EvilDragon` class. a. A
    method named `dontInviteThemOverForDinner` that will console.log out each of
    the Evil Dragon's evil doings (stored in an array) as a separate console.log
    for each evil thing in the format `${name} will ${evilDoing}` b. A second
    method named "burnsNemesis" that will return a string using `name` and
    `nemesis` property values formatted as "${name} destroys ${nemesis} with
    fire! WHOOOSH!!!".

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command:

`node problems/03-make-evil-dragons.js`

Examples:

const enderDragon = new EvilDragon("Ender Dragon", "black", ["spit a fireball at
    Steve", "rule over all the Endermen", "destroy all blocks in its way"],
    "Steve"); console.log(enderDragon);
    enderDragon.dontInviteThemOverForDinner();
    console.log(enderDragon.breathesFire());
    console.log(enderDragon.burnsNemesis());

// Should print...

//  EvilDragon {//    name: 'Ender Dragon', //    color: 'black', //
causesTrouble: [//      'spit a fireball at Steve', //      'rule over all the
Endermen', //      'destroy all blocks in its way'
//    ],
//    nemesis: 'Steve'
//  }
//  Ender Dragon will spit a fireball at Steve //  Ender Dragon will rule over
all the Endermen //  Ender Dragon will destroy all blocks in its way //  Ender
Dragon breathes fire everywhere! BURN!!!! //  Ender Dragon destroys Steve with
fire! WHOOOSH!!!

const drogon = new EvilDragon("Drogon", "black-red",["eat all your livestock",
    "burn down your castle in Westeros","burn your father and brother"],"Night
    King"); console.log(drogon); drogon.dontInviteThemOverForDinner();
    console.log(drogon.breathesFire()); console.log(drogon.burnsNemesis());

// Should print...

//  EvilDragon {//    name: 'Drogon', //    color: 'black-red', //
causesTrouble: [//      'eat all your livestock', //      'burn down your castle
in Westeros', //      'burn your father and brother'
//    ],
//    nemesis: 'Night King'
//  }
//  Drogon will eat all your livestock //  Drogon will burn down your castle in
Westeros //  Drogon will burn your father and brother //  Drogon breathes fire
everywhere! BURN!!!! //  Drogon destroys Night King with fire! WHOOOSH!!!


*************** YOUR CODE BELOW ***************************************/

const Dragon = require("./problem-01-make-dragons");

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }
  dontInviteThemOverForDinner() {
    this.evilDoings.forEach((trouble) => {
      console.log(`${this.name} will ${trouble}`);
    });
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

module.exports = EvilDragon;

/****************************************************************/
