console.log('im the asteroid')

const MovingObject = require('./moving_object.js')

function Asteroid(size) {
    // this.num = num;
    this.size = size;
    this.moving_object = new MovingObject(1);
}

module.exports = Asteroid;

// // rules for questions.
// // 1. what is the error msg?  what file does it lead you to?
// // 2. have you placed a debugger? what did it show you?
// // 3. have you googled?