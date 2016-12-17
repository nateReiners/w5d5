const Ship = require('./ship.js');
const Game = require('./game.js');

function GameView(ctx) {
  this.game = new Game();
  this.ship = new Ship();
  this.ctx = ctx;

}

GameView.prototype.start = setInterval( {
  this.game.moveObjects();
  this.game.draw();
}, 20);


module.exports = GameView;
