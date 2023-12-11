console.log("webpack confirmed working")

const Game = require('./game.js');
const Asteroid = require('./asteroid.js');
const MovingObject = require('./moving_object.js');

// let game = new Game() 
document.addEventListener('DOMContentLoaded', () => {
    // grab canvas
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    const game = new Game(ctx);

    // add code to test on window
    window.Game = Game;
    window.Asteroid = Asteroid;
    window.MovingObject = MovingObject;
})