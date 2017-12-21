/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_js__ = __webpack_require__(1);\n\r\n\r\nconsole.log('app.js is running');\r\nconsole.log(Object(__WEBPACK_IMPORTED_MODULE_0__utils_js__[\"a\" /* default */])(16)); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9hcHAuanM/N2FjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYW55dGhpbmcgZnJvbSAnLi91dGlscy5qcyc7XHJcblxyXG5jb25zb2xlLmxvZygnYXBwLmpzIGlzIHJ1bm5pbmcnKTtcclxuY29uc29sZS5sb2coYW55dGhpbmcoMTYpKTsgXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYXBwLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("console.log('utils.js is running');\r\n\r\nconst pi = 3.14;\r\n\r\nconst square = (x) => {\r\n    // console.log(\"square: \" + (pi * pi));\r\n    if(x) {\r\n        return x * x;\r\n    }\r\n    return pi * pi;\r\n};\r\n\r\n// export default square ;\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = ((x) => {\r\n    // console.log(\"square: \" + (pi * pi));\r\n    if(x) {\r\n        return x * x;\r\n    }\r\n    return pi * pi;\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy91dGlscy5qcz8yZmY4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKCd1dGlscy5qcyBpcyBydW5uaW5nJyk7XHJcblxyXG5jb25zdCBwaSA9IDMuMTQ7XHJcblxyXG5jb25zdCBzcXVhcmUgPSAoeCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzcXVhcmU6IFwiICsgKHBpICogcGkpKTtcclxuICAgIGlmKHgpIHtcclxuICAgICAgICByZXR1cm4geCAqIHg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGkgKiBwaTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHNxdWFyZSA7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoeCkgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzcXVhcmU6IFwiICsgKHBpICogcGkpKTtcclxuICAgIGlmKHgpIHtcclxuICAgICAgICByZXR1cm4geCAqIHg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGkgKiBwaTtcclxufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);