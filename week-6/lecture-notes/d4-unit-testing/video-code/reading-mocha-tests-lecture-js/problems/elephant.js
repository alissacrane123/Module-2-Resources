class Elephant {
  constructor(name) {
    this.name = name;
  }

  sit() {
    return `${this.name} the elephant sits down`;
  }

  static elephantStrike(elephants) {
    const strike = [];
    elephants.forEach(elephant => {
      strike.push(elephant.sit());
    });
    return strike;
  }
}

module.exports = Elephant;
