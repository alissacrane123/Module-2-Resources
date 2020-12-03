/********Week 5 Practice Test - Problem 2 **************************************

Let's create an class to represent a FriendlyDragon! 🐲

1. Require with CommonJS the Dragon class from the
   `./problem-01-make-dragons.js` module.

2. Define an class named `FriendlyDragon` that inherits from the `Dragon` parent
   class you required.  The `FriendlyDragon` class should contain a constructor
   method that accepts four arguments that initialize the following properties:

* name - the name of the dragon (should be inherited)
* color - the color of the dragon (should be inhereted)
* lifeGoals - an array of skills the Friendly Dragon is good at
* friend - the Friendly Dragon's best buddy (they all have one!)

3. Export the `FriendlyDragon` class so that other modules can require it.

*** NOTE: IF YOU DO NOT CORRECTLY EXPORT THE `FriendlyDragon` CLASS, THE MOCHA
TESTS WILL THROW A 'TypeError` AND NOT RUN ***

4. Additionally, add two(2) instance methods to the `FriendlyDragon` class. a. A
    method named `hasLifeGoals` that will console.log each of the
    FriendlyDragon's life goals (stored in an array) as a separate console.log
    for each life goal in the format `${name} likes to ${lifeGoal}` b. A second
    method named `helpsPeople` that will return a string using the `name` and
    `friend` property values formatted as `${name} helps his friend ${friend}`.

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command:

`node problems/02-make-friendly-dragons.js`

Examples:

const puff = new FriendlyDragon("Puff", "green", ["live by the sea", "frolick in
    the autumn mist", "help small schildren"], "Jackie Paper");
    console.log(puff); console.log(puff.breathesFire());  //Friendly dragons can
    still breathe fire! puff.hasLifeGoals(); console.log(puff.helpsPeople());

// Should print...

//  FriendlyDragon {//    name: "Puff", //    color: "green", //    lifeGoals:
[//      "live by the sea", //      "frolick in the autumn mist", //      "help
small children"
//    ],
//    friend: "Jackie Paper"
//  }
//  Puff breathes fire everywhere! BURN!!!! //  Puff likes to live by the sea //
Puff likes to frolick in the autumn mist //  Puff likes to help small children
//  Puff helps his friend Jackie Paper

const toothless = new FriendlyDragon("Toothless", "black", ["save the town of
    Burke", "fly with a kid on his back", "hang out with vikings"], "Hiccup");
    console.log(toothless); toothless.hasLifeGoals();
    console.log(toothless.helpsPeople()); console.log(toothless.breathesFire());
    //Friendly dragons can still breathe fire!

// Should print...

//  FriendlyDragon {//    name: "Toothless", //    color: "black", //
lifeGoals: [//      "save the town of Burke", //      "fly with a kid on his
back", //      "hang out with vikings"
//    ],
//    friend: "Hiccup"
//  }
//  Toothless likes to save the town of Burke //  Toothless likes to fly with a
kid on his back //  Toothless likes to hang out with vikings //  Toothless helps
his friend Hiccup //  Toothless breathes fire everywhere! BURN!!!!



*************** YOUR CODE BELOW ***************************************/

const Dragon = require("./problem-01-make-dragons");

class FriendlyDragon extends Dragon {
  constructor(name, color, lifeGoals, friend) {
    super(name, color);
    this.lifeGoals = lifeGoals;
    this.friend = friend;
  }

  hasLifeGoals() {
    this.lifeGoals.forEach((goal) => {
      console.log(`${this.name} likes to ${goal}`);
    });
  }

  helpsPeople() {
    return `${this.name} helps his friend ${this.friend}`;
  }
}

module.exports = FriendlyDragon;

/****************************************************************/
