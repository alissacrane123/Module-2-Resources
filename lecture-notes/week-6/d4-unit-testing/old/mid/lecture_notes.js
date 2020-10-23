// good morning everyone hope you had a great night
// and are ready to get back to work
// so i have the lecture learning goals up for the day
// today we're going to be laearning about testing and wrirting tests
// so get excited

// goals

// the material is all pretty straightforward today
// just a lot of syntax to get comfortable with
// but the lecture videos go super in depth
// theyre a little bit long actually
// so we're going to keep the q and a sessions in between short and sweet





// VIDEO 1 ------------------------------------------------------------------------------------


// testing is going to be a huge part of your software engineering career
// whne you get hireed you'll bee writing tests for everything you do
// so deefinitely worth getting comfortablee now 


// Q1 = why do we test ?

// 1. to make sure everything works
//    this one eis a given

// 2. To increase flexibility and reduce fear
//    - oftentimes we have to go back and refactor code
//    - w/o tests you'd be walking on eggshells, frightened of breaking stuff
//    - w/  tests you can refactor w/ confidence 
//    - if anything  breaks, you'll know


// 3. Make collaboration easier
//    - you have expectations for the module youre working on
//    - specs are effective form of communication
//    - as long as you meet the specs you should be good to go
//   yall have seen first hand how much easier it is to work on something with speecs

// 4. Produce documentation
//    - if well writtene, specs can be documentation for code base
//    - not sure what a module does? look at specs


// Q2 = WHAT ARE THREE CATEGORIES OF TESTING ON THE TESTING PYRAMID

// 3 categories of testing : unit tests, integration tests, end to end

// Q = what is a unit test?
// A = tests smallest pieces of app in isolation
//     to ensure each piece works before you put those pieces toegether

// if we were building a chess game:
// example of unit test would be testing each class in insolation
// so making sure all of the knights instance methods are working correctly

// Q = what is an integration test?
// A = tests interaction of smaller pieces and ensure they work together

// example of integration test would be testing how classes interact with each other
// so making sure each piece interacts with thee board class correctly
// does moving a night move it x positions on the board, etc

// Q = what are end-to-end tests
// A = tests the whole of your application, testing the user interface

// example of this would be testing an entire round of chess


// today mostly focusing on unit tests
//  - tseting individual classse and functions




// Q3 = WHAT IS TEST DRIVEN DEVELOPMENT PROCES?




// What is TDD
// - software development process
// - tests should be written before you write the code
// - code should only be written to pass existing tests
// 1. determine what code should do
// 2. write tests for that behavior
// 3. write actual code

// TDD Motivations
// 1. Writing tests before code ensurese that the code written will work
// 2. Only required code is written
// 3. Helps enforce code modularity
// 4. Enforces better understanding of what thee code  should be doing


// TDD Process - "Red, Green, Refactor"
// 1. Red: write tests and watch them fail
// 2. Green: write minimum amt of code to ensure tests pass
// 3. Refactor: refactor code you just wrote so its easy to maintain and read


// --

// Q = What is the difference between a test framework and an assertion library?
// A = test frameework = runs the tests and prevents them to the user (mocha)
// A = assertion library used to write tests, compare values (chai, assert)


// Syntax Errors
// - thrown when JS engine attempts to parse code that doesn't conform to syntax of JS language
// - many cant be caught by `try...catch` blocks b/c they happen at compile time, not at run time
// - any error that happens at compile time cant be caught


// Refernece Errors
// - represents  error when non-existent variable is referenced


// Type Error
// - when operation cannot be performed b/c operand is value of wrong type
// - when attempting to modify value that cannot be changed (`const`)









// VIDEO 2 ------------------------------------------------------------------------------------

// quickly review the elephant solution 



