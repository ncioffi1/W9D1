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

eval("console.log('im the asteroid')\n\nconst MovingObject = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\")\n\nclass Asteroid extends MovingObject {\n    static RADIUS = 25;\n    static COLOR = 'red';\n\n}\n\n// function Asteroid(size) {\n//     // this.num = num;\n//     this.size = size;\n//     this.moving_object = new MovingObject(1);\n// }\n\nmodule.exports = Asteroid;\n\n// // rules for questions.\n// // 1. what is the error msg?  what file does it lead you to?\n// // 2. have you placed a debugger? what did it show you?\n// // 3. have you googled?\n\n//# sourceURL=webpack://asteroids/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"im the game\")\n\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nfunction Game(canvasCtx) {\n    // this.num = num;\n    this.asteroid = new Asteroid(5);\n    this.canvasCtx = canvasCtx;\n    console.log('started new game');\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://asteroids/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("console.log(\"webpack confirmed working\")\n\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst MovingObject = __webpack_require__(/*! ./moving-object.js */ \"./src/moving-object.js\");\n\n// let game = new Game() \ndocument.addEventListener('DOMContentLoaded', () => {\n    // grab canvas\n    const canvas = document.getElementById(\"canvas\");\n    canvas.width = 500;\n    canvas.height = 500;\n    const ctx = canvas.getContext('2d');\n    const game = new Game(ctx);\n    const obj = new MovingObject([100, 100], [5,5], 20, \"blue\");\n\n    ctx.fillStyle = 'black';\n    ctx.fillRect(0, 0, canvas.width, canvas.height)\n    obj.draw(ctx);\n\n    // add code to test on window\n    window.Game = Game;\n    window.Asteroid = Asteroid;\n    window.MovingObject = MovingObject;\n})\n\n//# sourceURL=webpack://asteroids/./src/index.js?");

/***/ }),

/***/ "./src/moving-object.js":
/*!******************************!*\
  !*** ./src/moving-object.js ***!
  \******************************/
/***/ ((module) => {

eval("console.log(\"im the moving object\") \n\nclass MovingObject {\n    constructor(pos, vel, radius, color) {\n        this.pos = pos;\n        this.vel = vel;\n        this.radius = radius;\n        this.color = color;\n    }\n\n    draw(ctx) {\n        console.log(\"called draw\")\n        ctx.fillStyle = this.color;\n\n        ctx.beginPath();\n        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n\n        ctx.fill();\n\n    }\n\n    move() {\n        this.pos[0] += this.vel[0];\n        this.pos[1] += this.vel[1];\n    }\n\n    // const ctx = canvasEle.getContext('2d');\n    // ctx.fillStyle = 'black';\n    // ctx.fillRect(0, 0, canvasEle.width, canvasEle.height)\n\n    // ctx.beginPath();\n    // ctx.arc(250, 250, 50, 0, 2 * Math.PI / 2);\n    // ctx.strokeStyle = 'white';\n    // ctx.lineWidth = 20;\n    \n    // ctx.fillStyle = 'blue';\n    // ctx.fill();\n    // ctx.stroke();\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack://asteroids/./src/moving-object.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;