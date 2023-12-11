console.log("webpack confirmed working")

const Game = require('./game.js');
const Asteroid = require('./asteroid.js');
const MovingObject = require('./moving-object.js');

// let game = new Game() 
document.addEventListener('DOMContentLoaded', () => {
    // grab canvas
    const canvas = document.getElementById("canvas");
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');
    const game = new Game(ctx);
    const obj = new MovingObject([100, 100], [5,5], 20, "blue");

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    obj.draw(ctx);

    // add code to test on window
    window.Game = Game;
    window.Asteroid = Asteroid;
    window.MovingObject = MovingObject;
})