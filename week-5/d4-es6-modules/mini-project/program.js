// import { Game } from './game.js';
import Game, { hello } from './game.js';

// commonJS 
// const { Game } = require('./game.js')
// const Game = require('./game.js)

window.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.start();
});