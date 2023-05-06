/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvasEl = document.getElementById(\"main-canvas\");\n  new _scripts_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvasEl);\n  console.log(\"hello\");\n});\n\n// const canvasEl = document.getElementById(\"main-canvas\")\n// canvasEl.width = 1100\n// canvasEl.height = 600\n\n// const ctx = canvasEl.getContext(\"2d\")\n// ctx.fillStyle = \"beige\"\n// ctx.fillRect(280,100, 1100, 600)//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFOUJDLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVTtFQUNuRCxNQUFNQyxRQUFRLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGFBQWEsQ0FBQztFQUVwRCxJQUFJSixxREFBSSxDQUFDRyxRQUFRLENBQUM7RUFFbEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE9BQU8sQ0FBQztBQUV4QixDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215X3Byb2plY3RzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUnO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKVxuXG4gICAgICAgICAgICBuZXcgR2FtZShjYW52YXNFbClcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKVxuICAgICAgICBcbiAgICAgICAgfSlcblxuICAgICAgICAvLyBjb25zdCBjYW52YXNFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jYW52YXNcIilcbiAgICAgICAgLy8gY2FudmFzRWwud2lkdGggPSAxMTAwXG4gICAgICAgIC8vIGNhbnZhc0VsLmhlaWdodCA9IDYwMFxuICAgICAgICBcbiAgICAgICAgLy8gY29uc3QgY3R4ID0gY2FudmFzRWwuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJlaWdlXCJcbiAgICAgICAgLy8gY3R4LmZpbGxSZWN0KDI4MCwxMDAsIDExMDAsIDYwMClcbiBcblxuXG4gICAgICAgICJdLCJuYW1lcyI6WyJHYW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FudmFzRWwiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/face.js":
/*!*****************************!*\
  !*** ./src/scripts/face.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Face {\n  constructor(width, height) {\n    this.dimensions = {\n      x: width / 3,\n      y: height / 2\n    };\n    this.width = 50;\n    this.height = 50;\n  }\n  draw() {\n    ctx.fillStyle = \"blue\";\n    ctx.fillRect(this.dimensions.x, this.dimensions.y, this.width, this.height);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Face);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9mYWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFDUEMsV0FBV0EsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLEVBQUM7SUFFdEIsSUFBSSxDQUFDQyxVQUFVLEdBQUc7TUFDZEMsQ0FBQyxFQUFFSCxLQUFLLEdBQUcsQ0FBQztNQUNaSSxDQUFDLEVBQUVILE1BQU0sR0FBRztJQUNoQixDQUFDO0lBQ0QsSUFBSSxDQUFDRCxLQUFLLEdBQUcsRUFBRTtJQUNmLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEVBQUU7RUFDcEI7RUFDQUksSUFBSUEsQ0FBQSxFQUFFO0lBQ0ZDLEdBQUcsQ0FBQ0MsU0FBUyxHQUFFLE1BQU07SUFDckJELEdBQUcsQ0FBQ0UsUUFBUSxDQUFDLElBQUksQ0FBQ04sVUFBVSxDQUFDQyxDQUFDLEVBQUMsSUFBSSxDQUFDRCxVQUFVLENBQUNFLENBQUMsRUFBQyxJQUFJLENBQUNKLEtBQUssRUFBQyxJQUFJLENBQUNDLE1BQU0sQ0FBQztFQUM1RTtBQUNKO0FBRUEsK0RBQWVILElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0cy8uL3NyYy9zY3JpcHRzL2ZhY2UuanM/ZDVjYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBGYWNlIHtcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KXtcblxuICAgICAgICB0aGlzLmRpbWVuc2lvbnMgPSB7XG4gICAgICAgICAgICB4OiB3aWR0aCAvIDMsXG4gICAgICAgICAgICB5OiBoZWlnaHQgLyAyXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53aWR0aCA9IDUwXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNTBcbiAgICB9XG4gICAgZHJhdygpe1xuICAgICAgICBjdHguZmlsbFN0eWxlID1cImJsdWVcIlxuICAgICAgICBjdHguZmlsbFJlY3QodGhpcy5kaW1lbnNpb25zLngsdGhpcy5kaW1lbnNpb25zLnksdGhpcy53aWR0aCx0aGlzLmhlaWdodClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZhY2U7XG5cbiJdLCJuYW1lcyI6WyJGYWNlIiwiY29uc3RydWN0b3IiLCJ3aWR0aCIsImhlaWdodCIsImRpbWVuc2lvbnMiLCJ4IiwieSIsImRyYXciLCJjdHgiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/face.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _face__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./face */ \"./src/scripts/face.js\");\n/* harmony import */ var _level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./level */ \"./src/scripts/level.js\");\n\n\nclass Game {\n  constructor(canvasEl) {\n    this.canvas = canvasEl;\n    console.log(\"ol\");\n    this.canvas.width = 500;\n    this.canvas.height = 400;\n    this.face = new _face__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas.width, this.canvas.height);\n    this.level = new _level__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.ctx.fillStyle = \"beige\";\n    this.ctx.fillRect(0, 0, 500, 400);\n  }\n  play() {}\n  restart() {}\n  gameover() {}\n  animate() {}\n}\n\n// document.addEventListener(\"DOMContentLoaded\", function(){\n// const main = document.getElementById('main');\n// new Example(main)\n\n// const canvasEl = document.getElementById(\"main-canvas\")\n// canvasEl.width = 700\n// canvasEl.height = 500\n\n// const ctx = canvasEl.getContext(\"2d\")\n// ctx.fillStyle = \"beige\"\n// ctx.fillRect(50,50, 700, 500)\n\n// })\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztBQUEwQjtBQUNFO0FBRTVCLE1BQU1FLElBQUksQ0FBQztFQUNQQyxXQUFXQSxDQUFDQyxRQUFRLEVBQUM7SUFDakIsSUFBSSxDQUFDQyxNQUFNLEdBQUdELFFBQVE7SUFDdEJFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLElBQUksQ0FBQztJQUNqQixJQUFJLENBQUNGLE1BQU0sQ0FBQ0csS0FBSyxHQUFHLEdBQUc7SUFDdkIsSUFBSSxDQUFDSCxNQUFNLENBQUNJLE1BQU0sR0FBRyxHQUFHO0lBQ3hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlWLDZDQUFJLENBQUMsSUFBSSxDQUFDSyxNQUFNLENBQUNHLEtBQUssRUFBRSxJQUFJLENBQUNILE1BQU0sQ0FBQ0ksTUFBTSxDQUFDO0lBRTNELElBQUksQ0FBQ0UsS0FBSyxHQUFHLElBQUlWLDhDQUFLLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNXLEdBQUcsR0FBRyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1EsVUFBVSxDQUFDLElBQUksQ0FBQztJQUN2QyxJQUFJLENBQUNELEdBQUcsQ0FBQ0UsU0FBUyxHQUFHLE9BQU87SUFDNUIsSUFBSSxDQUFDRixHQUFHLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7RUFDckM7RUFFSkMsSUFBSUEsQ0FBQSxFQUFFLENBRU47RUFFQUMsT0FBT0EsQ0FBQSxFQUFFLENBRVQ7RUFFQUMsUUFBUUEsQ0FBQSxFQUFFLENBRVY7RUFFQUMsT0FBT0EsQ0FBQSxFQUFFLENBRVQ7QUFFQTs7QUFXQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFLQTs7QUFFQSwrREFBZWpCLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0cy8uL3NyYy9zY3JpcHRzL2dhbWUuanM/Y2RjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmFjZSBmcm9tICcuL2ZhY2UnO1xuaW1wb3J0IExldmVsIGZyb20gJy4vbGV2ZWwnO1xuXG5jbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihjYW52YXNFbCl7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzRWxcbiAgICAgICAgY29uc29sZS5sb2coXCJvbFwiKVxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IDUwMDtcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gNDAwO1xuICAgICAgICB0aGlzLmZhY2UgPSBuZXcgRmFjZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KVxuICAgICAgICBcbiAgICAgICAgdGhpcy5sZXZlbCA9IG5ldyBMZXZlbCgpXG4gICAgICAgIHRoaXMuY3R4ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXG4gICAgICAgIHRoaXMuY3R4LmZpbGxTdHlsZSA9IFwiYmVpZ2VcIjtcbiAgICAgICAgdGhpcy5jdHguZmlsbFJlY3QoMCwgMCwgNTAwLCA0MDApO1xuICAgIH1cblxucGxheSgpe1xuXG59XG5cbnJlc3RhcnQoKXtcblxufVxuXG5nYW1lb3Zlcigpe1xuXG59XG5cbmFuaW1hdGUoKXtcblxufVxuXG59XG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCl7XG4vLyBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcbi8vIG5ldyBFeGFtcGxlKG1haW4pXG5cbi8vIGNvbnN0IGNhbnZhc0VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluLWNhbnZhc1wiKVxuLy8gY2FudmFzRWwud2lkdGggPSA3MDBcbi8vIGNhbnZhc0VsLmhlaWdodCA9IDUwMFxuXG4vLyBjb25zdCBjdHggPSBjYW52YXNFbC5nZXRDb250ZXh0KFwiMmRcIilcbi8vIGN0eC5maWxsU3R5bGUgPSBcImJlaWdlXCJcbi8vIGN0eC5maWxsUmVjdCg1MCw1MCwgNzAwLCA1MDApXG5cblxuXG5cbi8vIH0pXG5cbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIkZhY2UiLCJMZXZlbCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsImNhbnZhc0VsIiwiY2FudmFzIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwiZmFjZSIsImxldmVsIiwiY3R4IiwiZ2V0Q29udGV4dCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwicGxheSIsInJlc3RhcnQiLCJnYW1lb3ZlciIsImFuaW1hdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/level.js":
/*!******************************!*\
  !*** ./src/scripts/level.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n\nclass Level {}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Level);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9sZXZlbC5qcy5qcyIsIm1hcHBpbmdzIjoiOztBQUF5QjtBQUN6QixNQUFNQyxLQUFLO0FBSVgsK0RBQWVBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0cy8uL3NyYy9zY3JpcHRzL2xldmVsLmpzPzAxYWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lJ1xuY2xhc3MgTGV2ZWx7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV2ZWw7Il0sIm5hbWVzIjpbIkdhbWUiLCJMZXZlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/level.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9wcm9qZWN0cy8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;