class Elephant {
  constructor(name) {
    this.name = name;
  }

  sits() {
    return `${this.name} the elephant sits down`
  }

  static elephantStrike(elephants) {
    let strike = [];

    elephants.forEach(elephant => {
      let value = elephant.sits();
      strike.push(value);
    })

    return strike;
  }
}

module.exports = Elephant;