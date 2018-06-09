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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Game {
  constructor() {
    
  }

  start() {
    // скрываю лоигн
    // открываю окно битвы
    // рендрею персонажа
    // рендерю монстра

    // отображаю кнопку выбора спела

     

  }

}



/***/ }),

/***/ "./scripts/main.js":
/*!*************************!*\
  !*** ./scripts/main.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./scripts/player.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster */ "./scripts/monster.js");
/* harmony import */ var _monster__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_monster__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spell */ "./scripts/spell.js");
/* harmony import */ var _spell__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_spell__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ "./scripts/task.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_task__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score */ "./scripts/score.js");
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_score__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game */ "./scripts/game.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_game__WEBPACK_IMPORTED_MODULE_5__);
// подгружаю game.js
// стартую его 








const newGame = new _game__WEBPACK_IMPORTED_MODULE_5___default.a();

newGame.start();

/***/ }),

/***/ "./scripts/monster.js":
/*!****************************!*\
  !*** ./scripts/monster.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Monster {
  constructor() {
    this.name = this.getName();
    this.health;
    

 
  }

  render() {
    // отрисовываем имя
    // житухи
    // тело

  }

  
  getName() {

  }

  getBody() {

  }


}

/***/ }),

/***/ "./scripts/player.js":
/*!***************************!*\
  !*** ./scripts/player.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Player {
  constructor() {
    this.name;
    this.health;
    
  }

  render() {
    // заполняем имя
    // житухи
    // тело

  }

   



}

/***/ }),

/***/ "./scripts/score.js":
/*!**************************!*\
  !*** ./scripts/score.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Score {
  constructor() {
    
  }


}

/***/ }),

/***/ "./scripts/spell.js":
/*!**************************!*\
  !*** ./scripts/spell.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Spell {
  constructor() {
    
  }


}

/***/ }),

/***/ "./scripts/task.js":
/*!*************************!*\
  !*** ./scripts/task.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Task {
  constructor() {
    
  }


}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map