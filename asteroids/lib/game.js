const Asteroid = require('./asteroid.js');

function Game() {
  this.asteroids = [];
}

Game.prototype.addAsteroids = function() {
  while (this.asteroids.length < 10) {
    this.asteroids.push(new Asteroid(this.randomPosition));
  }
};

Game.prototype.randomPosition = function() {
  let x = Math.floor(Math.random() * 900);
  let y = Math.floor(Math.random() * 900);
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect();
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw();
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(function(asteroid) {
    asteroid.move();
  });
};

Game.DIM_X = 900;
Game.DIM_Y = 900;
Game.NUM_ASTEROIDS = 10;

module.exports = Game;
