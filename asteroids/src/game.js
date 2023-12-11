console.log("im the game")

const Asteroid = require('./asteroid.js')

function Game(canvasCtx) {
    // this.num = num;
    this.asteroid = new Asteroid(5);
    this.canvasCtx = canvasCtx;
    console.log('started new game');
}

module.exports = Game;