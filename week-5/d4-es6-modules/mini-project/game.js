export default class Game {
  constructor() {
    this.gameStartMessage = "Hello! Do you want to play a game?";
  }

  start() {
    document
      .getElementById('button')
      .addEventListener('click', () => {
        const messageContainer = document.getElementById('message');
        messageContainer.innerText = this.gameStartMessage;
    });
  }
}

export function hello() {

}

// commonJS
// module.exports = { Game }

// module.exports = Game;