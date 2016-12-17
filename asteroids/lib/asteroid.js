const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

function Asteroid(pos) {
  let options = { pos: pos,
    color: Asteroid.COLOR,
    radius: Asteroid.RADIUS,
    vel: Util.randomVec(100)
  };

  MovingObject.call(this, options);
}

Asteroid.COLOR = "#B0011B";
Asteroid.RADIUS = 30;

Util.inherit(Asteroid, MovingObject);

module.exports = Asteroid;
