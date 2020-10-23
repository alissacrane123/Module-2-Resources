const readline = require('readline');

const rl = readline.createInterface(
  process.stdin,
  process.stdout,
);

let questions = [];
let title = 'Quiz';

module.exports = {
  close() {
    rl.close();
  },
  queue(text, answers) {
    questions.push({ text, answers });
  },
  run(callback) {
    function __show(number, responses) {
      if (number >= questions.length) {
        return callback(responses);
      }
      const question = questions[number];
      console.clear();
      console.log(title);
      console.log(`Question ${number + 1}`)
      console.log();
      console.log(question.text);
      console.group();
      for (let i = 0; i < question.answers.length; i += 1) {
        console.log(`${i + 1}.`, question.answers[i]);
      }
      console.groupEnd();
      console.log();
      rl.question('What is your answer? ', response => {
        responses.push(Number.parseInt(response) - 1);
        __show(number + 1, responses);
      });
    }
    __show(0, []);
  },
  setTitle(s) {
    title = s;
  }
};
