/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log('im the asteroid')\n\nconst MovingObject = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\")\nconst Util = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n// import * as Util from \"./utils.js\";\n\nclass Asteroid extends MovingObject {\n    // debugger;\n    static RADIUS = 20;\n    static COLOR = 'red';\n\n    constructor(pos) {\n\n        // debugger;\n        super(pos, Util.randomVec(1), Asteroid.RADIUS, Asteroid.COLOR);\n    }\n    \n    \n    // debugger;\n\n}\n\n// function Asteroid(size) {\n//     // this.num = num;\n//     this.size = size;\n//     this.moving_object = new MovingObject(1);\n// }\n\nmodule.exports = Asteroid;\n\n// // rules for questions.\n// // 1. what is the error msg?  what file does it lead you to?\n// // 2. have you placed a debugger? what did it show you?\n// // 3. have you googled?\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game-view.js":
/*!**************************!*\
  !*** ./src/game-view.js ***!
  \**************************/
/***/ ((module) => {

eval("\nclass GameView {\n    constructor(game, context) {\n        this.game = game;\n        this.context = context;\n        // this.start();\n    }\n\n    start() {\n        let that = this;\n        setInterval(function() {that.game.moveObjects()}, 20);\n        setInterval(function() {that.game.draw(this.context)}, 20);\n    }\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack://asteroids/./src/game-view.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"im the game\")\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nclass Game {\n    static DIM_X = 500;\n    static DIM_Y = 500;\n    static BG_COLOR = \"black\";\n    static NUM_ASTEROIDS = 5;\n\n    constructor(canvasCtx) {\n        this.canvasCtx = canvasCtx;\n        this.asteroids = [];\n        this.addAsteroids();\n    }\n\n    addAsteroids() {\n        for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n            let pos = this.randomPosition();\n            console.log(pos);\n            let rock = new Asteroid(pos);\n            this.asteroids.push(rock);\n        }\n        this.draw(this.canvasCtx);\n    }\n\n    randomPosition() {\n        let x = this.getRandomInt(0, Game.DIM_X);\n        let y = this.getRandomInt(0, Game.DIM_Y);\n        let pos = [x, y]\n        return pos;\n    }\n\n    getRandomInt(min, max) {\n        min = Math.ceil(min);\n        max = Math.floor(max);\n        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive\n    }\n\n    draw(ctx) {\n        let ctx2 = this.canvasCtx;\n        ctx2.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n        ctx2.fillStyle = Game.BG_COLOR;\n        ctx2.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n        // this.allObjects().forEach(function(object) {\n        //     object.draw(ctx);\n        // })\n        // let ctx2 = this.canvasCtx;\n        this.asteroids.forEach(function(asteroid) {\n            asteroid.draw(ctx2);\n        })\n    }\n\n    moveObjects(){\n        this.asteroids.forEach(function(asteroid) {\n            asteroid.move();\n        })\n    }\n\n    // allObjects() {\n    //     return [].concat(this.ships, this.asteroids, this.bullets);\n    // };\n}\n\n// Game.prototype.randomPosition = function () {\n\n// }\n// function Game(canvasCtx) {\n//     // this.num = num;\n//     // this.asteroid = new Asteroid();\n//     this.canvasCtx = canvasCtx;\n//     console.log('started new game');\n// }\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack confirmed working\")\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game-view.js */ \"./src/game-view.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n\n// let game = new Game() \ndocument.addEventListener('DOMContentLoaded', () => {\n    // grab canvas\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 500;\n    canvas.height = 500;\n    const ctx = canvas.getContext('2d');\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, canvas.width, canvas.height)\n    const game = new Game(ctx);\n    const obj = new MovingObject([100, 100], [5,5], 20, \"blue\");\n    const gameview = new GameView(game, ctx);\n    gameview.start();\n    obj.draw(ctx);\n\n    // add code to test on window\n    window.Game = Game;\n    window.Asteroid = Asteroid;\n    window.MovingObject = MovingObject;\n})\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((module) => {

eval("console.log(\"im the moving object\") \n\nclass MovingObject {\n    constructor(pos, vel, radius, color) {\n        this.pos = pos;\n        this.color = color;\n        this.radius = radius;\n        this.vel = vel;\n    }\n\n    draw(ctx) {\n        console.log(\"called draw\")\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n\n        ctx.fill();\n\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n\n    // const ctx = canvasEle.getContext('2d');\n    // ctx.fillStyle = 'black';\n    // ctx.fillRect(0, 0, canvasEle.width, canvasEle.height)\n\n    // ctx.beginPath();\n    // ctx.arc(250, 250, 50, 0, 2 * Math.PI / 2);\n    // ctx.strokeStyle = 'white';\n    // ctx.lineWidth = 20;\n    \n    // ctx.fillStyle = 'blue';\n    // ctx.fill();\n    // ctx.stroke();\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving-object.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   randomVec: () => (/* binding */ randomVec),\n/* harmony export */   scale: () => (/* binding */ scale)\n/* harmony export */ });\nfunction randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return scale([Math.sin(deg), Math.cos(deg)], length);\n}\n  \n// Scale the length of a vector by the given amount.\nfunction scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n}\n\n//# sourceURL=webpack://asteroids/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;