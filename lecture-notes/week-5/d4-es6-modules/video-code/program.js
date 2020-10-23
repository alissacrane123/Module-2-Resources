const { SimpleQuestion, AnyQuestion, Quiz } = require('./quizzes');

const quiz = new Quiz('The Bridge of Death Quiz');

let question = new SimpleQuestion('What is your name?', 2, [
  'Percy',
  'Sir Name',
  'Sir Lancelot of Camelot',
  'Sir Camelot of Lancelot',
]);

quiz.add(question);

question = new SimpleQuestion('What is your quest?', 3, [
  'What is a "quest"?',
  'To live and let live',
  'To find the next bus to Boomtown',
  'To seek the Holy Grail',
]);
quiz.add(question);

question = new AnyQuestion('What is your favorite color?', [0, 2, 3], [
  'Blue',
  'Puce',
  'Purple',
  'Yellow',
]);
quiz.add(question);

quiz.start(() => {
  quiz.report();
  quiz.end();
});
