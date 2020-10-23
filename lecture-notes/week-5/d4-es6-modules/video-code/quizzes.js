const ui = require('./ui');

class Quiz {
  constructor(name) {
    this.name = name;
    this.questions = [];
  }

  add(question) {
    this.questions.push(question);
  }

  end() {
    ui.close();
  }

  report() {
    let score = 0;
    for (let question of this.questions) {
      if (question.isCorrectlyAnswered()) {
        score += 1;
      }
    }
    console.log(`You got ${score} out of ${this.questions.length}`);
  }

  start(callback) {
    ui.setTitle(this.name);
    for (let question of this.questions) {
      question.addToUI();
    }
    ui.run(responses => {
      for (let i = 0; i < responses.length; i += 1) {
        const question = this.questions[i];
        const response = responses[i];
        question.setResponse(response);
      }
      callback();
    });
  }
}

class Question {
  constructor(text, answers) {
    this.text = text;
    this.answers = answers;
  }

  addToUI() {
    ui.queue(this.text, this.answers);
  }

  setResponse(response) {
    this.response = response;
  }
}

class SimpleQuestion extends Question {
  constructor(text, answerIndex, answers) {
    super(text, answers);
    this.answerIndex = answerIndex;
  }

  isCorrectlyAnswered() {
    return this.response === this.answerIndex;
  }
}

class AnyQuestion extends Question {
  constructor(text, answerIndexes, answers) {
    super(text, answers);
    this.answerIndexes = answerIndexes;
  }

  isCorrectlyAnswered() {
    return this.answerIndexes.includes(this.response);
  }
}

module.exports = {
  Quiz: Quiz,
  SimpleQuestion: SimpleQuestion,
  AnyQuestion: AnyQuestion,
};
