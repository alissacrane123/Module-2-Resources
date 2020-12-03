/********Week 5 Practice Test - Problem 4 **************************************

Let's make some Friendly and Evil Dragons! 🐲 🐉 🐲

1. Require the Friendly Dragon class from the
   `./problem-02-make-friendly-dragons.js` module.

2. Require the Evil Dragon class from the `./problem-03-make-evil-dragons.js`
   module.

3. Create 2 new instances, 1 of the Friendly Dragon Class and the other of the
   Evil Dragon Class with the following details: a. A Friendly Dragon named
   "Falkor" with the color "white", the life goals of "save Atreyu from the
   swamp", "save Atryu from the Nothing", and "scare the local bullies into a
   dumpster" and has the friend "Bastian". Assign this new instance to the
   variable `falkor` b. An Evil Dragon named "Smaug" with the color "black", the
   evilDoings of "take over your mountain kingdom", "steal all your dwarven
   gold", and "burn down your floating village" and has the nemesis of "Dwarf
   King".  Assign this new instance to the variable named "smaug"

4. Call the static getDragons method on the Dragon Class with your `falkor` and
   `smaug` instances as arguements.  Save this method call to a variable named
   'allDragons` and add it to export statement that already exists.

In addition to Mocha, we recommend that you test your code manually using
Node.js with the examples below. Use the command:

`node problems/04-all-the-dragons.js`

Examples:

console.log(falkor); falkor.hasLifeGoals(); console.log(falkor.breathesFire());
console.log(falkor.helpsPeople())

// Should print...

//  FriendlyDragon {//    name: 'Falkor', //    color: 'white', //    lifeGoals:
[//      'save Atreyu from the swamp', //      'save Atreyu from the Nothing',
//      'scare the local bullies into a dumpster'
//    ],
//    friend: 'Bastian'
//  }
//  Falkor likes to save Atreyu from the swamp //  Falkor likes to save Atryu
from the Nothing //  Falkor likes to scare the local bullies into a dumpster //
Falkor breathes fire everywhere! BURN!!!! //  Falkor helps his friend Bastian

console.log(smaug); smaug.dontInviteThemOverForDinner();
console.log(smaug.breathesFire()); console.log(smaug.burnsNemesis());

// Should print...

//  EvilDragon {//    name: 'Smaug', //    color: 'black', //    causesTrouble:
[//      'take over your mountain kingdom', //      'steal all your dwarven
gold', //      'burn down your floating village'
//    ],
//    nemesis: 'Dwarf King'
//  }
//  Smaug will take over your mountain kingdom //  Smaug will steal all your
dwarven gold //  Smaug will burn down your floating village //  Smaug breathes
fire everywhere! BURN!!!! //  Smaug destroys Dwarf King with fire! WHOOOSH!!!

The static method from step 4, when called and logged to the console...

// Should print...

//  [ 'Falkor', 'Smaug' ]

*************** YOUR CODE BELOW ***************************************/




try {
  module.exports = { falkor, smaug };
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
} catch {
  module.exports = null;
}
