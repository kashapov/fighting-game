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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/scripts/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/scripts/game.js":
/*!********************************!*\
  !*** ./assets/scripts/game.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ "./assets/scripts/player.js");
/* harmony import */ var _monster_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./monster.js */ "./assets/scripts/monster.js");
/* harmony import */ var _score_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./score.js */ "./assets/scripts/score.js");
/* harmony import */ var _spell_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spell.js */ "./assets/scripts/spell.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./assets/scripts/task.js");







class Game {
    constructor() {
        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.monster = new _monster_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.score = new _score_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.spell = new _spell_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.task = new _task_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        
        this.roundCounter = 0;
        this.spellType = "";

        this.audio = new Audio();
    }

    startGame() {
        this.playingSection = document.getElementById('playingSection');
        this.loginPage = document.getElementById('loginPage');

        this.loginPage.style.display = "none";
        this.playingSection.style.display = "block";
        this.player.render();
        this.newRound();
    }

    createSounds() {
        this.audio.preload = "auto";
        this.audio.volume = 1;
        this.audio.src = "./assets/audio/Intro.mp3";
      }

    createGame() {

        //alert(1);
        //this.createSounds();
        //this.audio.play();

        this.btnToGame = document.querySelector('#btnToGame');
        this.btnToAbout = document.querySelector('#btnToAbout');
        this.menuGame = document.querySelector('#menuGame');
        this.checkinBlock = document.querySelector('#checkinBlock');
        this.loginForm = document.getElementById('loginForm');
        this.inputName = document.getElementById('inputName');
        this.btnChooseSpell = document.getElementById('btnChooseSpell');
        this.spellModalWindow = document.getElementById('spellModalWindow');
        this.btnAttack = document.getElementById('btnAttack');
        this.btnHealing = document.getElementById('btnHealing');
        this.taskInput = document.getElementById('taskInput');
        this.taskForm = document.getElementById('taskForm');

        btnToGame.addEventListener('click', () => {
            this.menuGame.style.display = "none";
            this.checkinBlock.style.display = "block";
        });

        btnToAbout.addEventListener('click', () => {
            window.location.href = "about.html";
        });

        /*btnToIndex.addEventListener('click', () => {
            window.location.href = "../views/index.html";
        });*/

        this.loginForm.addEventListener('submit', () => {
            if (this.inputName.value != "") {
                this.startGame();
            };
            event.preventDefault();
        });

        this.btnChooseSpell.addEventListener('click', () => {
            this.spell.spellRender();
        });

        this.btnAttack.addEventListener('click', () => {
            this.spellModalWindow.style.display = "none";
            this.spellType = "attack";
            this.task.arithmeticTask();
        });

        this.btnHealing.addEventListener('click', () => {
            this.spellModalWindow.style.display = "none";
            this.spellType = "health";
            this.task.arithmeticTask();
        });

        this.taskForm.addEventListener('submit', () => {
            if (this.taskInput.value !== "") {
                this.taskCheck();
            }
            event.preventDefault();
        });
    }

    

    getRandom(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    newRound() {
        this.roundNumber = document.getElementById('roundNumber');

        this.roundCounter += 1;
        this.monster.healthPoints = 100;
        this.monster.healthPointsLine = 100;
        this.monster.hpGreenLine.style.width = '100%';
        this.roundNumber.innerHTML = 'Round #' + this.roundCounter;
        this.monsterBody =  this.getRandom(this.monster.monsterBodys);
        this.monsterName = this.getRandom(this.monster.monsterNames[0]) +' '+ this.getRandom(this.monster.monsterNames[1]) +' '+ this.getRandom(this.monster.monsterNames[2]);

        this.monster.render(this.monsterBody, this.monsterName);
    }

    taskCheck() {
        this.taskResult = this.task.getTaskResult();
        this.taskInput = document.getElementById('taskInput');
        this.taskWindow = document.getElementById('taskModalWindow');

        if(this.spellType === "attack") {
            if (this.taskInput.value == this.taskResult) {
                this.taskWindow.style.display = "none";
                this.player.attack();
                setTimeout(() => {
                    this.monster.healthDecrease();
                    this.healthCheck();
                }, 1000);
            } else {
                this.taskWindow.style.display = "none";
                this.monster.attack();
                setTimeout(() => {
                    this.player.healthDecrease();
                    this.healthCheck();
                }, 1000);
            }    
        } else if (this.spellType === "health") {
            if (this.taskInput.value == this.taskResult) {
                this.taskWindow.style.display = "none";
                setTimeout(() => {
                    this.player.healthIncrease();
                }, 1000);
            } else {
                this.taskWindow.style.display = "none";
                setTimeout(() => {
                    this.monster.healthIncrease();
                }, 1000);
            }    
        }
       
        this.taskInput.value = "";
    }

    healthCheck() {
        if (this.monster.healthPoints === 0) {
            this.newRound();
            
        } else if (this.player.healthPoints === 0) {
            this.showScorePage();
        }
    }

    showScorePage() {
        
    }

}

let newGame = new Game();

newGame.createGame();

/***/ }),

/***/ "./assets/scripts/monster.js":
/*!***********************************!*\
  !*** ./assets/scripts/monster.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Monster; });
class Monster {
    constructor() {
        this.monsterNames = [
            ['Ужасный', 'Злобный', 'Сопливый'],
            ['Джидай', 'Наемник', 'Клон'],
            ['Люк', 'Йода', 'Оби-Ван']
        ];

        this.monsterBodys = ['body1', 'body2', 'body3'];
        this.healthPoints = 0;
        this.healthPointsLine = 0;

        this.hpGreenLine = document.getElementById('monsterHpGreenLine');
    }

    render(body, name) {
        this.monsterName = document.getElementById('monsterName');
        this.healthPointsBlock = document.getElementById('monsterHealthPoints');
        this.monsterBlock = document.getElementById('monsterBlock');

        this.name = name;
        this.monsterBody = body;
        this.monsterName.innerHTML = name;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';

        if (this.healthPoints === 100) {
            this.hpGreenLine.classList.add('health-render');
        }

        this.monsterBlock.classList.remove('monster-attack');
        this.monsterBlock.classList.add('spriteMonsterIdle');
    }

    healthDecrease() {
        this.healthPointsBlock = document.getElementById('monsterHealthPoints');

        this.healthPoints -= 25;
        this.healthPointsLine -= 25;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
        this.hpGreenLine.style.width = this.healthPointsLine + '%';
    }

    healthIncrease() {
        this.healthPointsBlock = document.getElementById('monsterHealthPoints');

        this.healthPoints += 25;
        this.healthPointsLine += 25;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
        this.hpGreenLine.style.width = this.healthPointsLine + '%';
    }

    attack() {
        this.monsterBlock.classList.remove('monster-stay');
        this.monsterBlock.classList.add('monster-attack');
        setTimeout(() => {
            this.render(this.monsterBody, this.name);
        }, 1000)
    }

    death() {

    }

    

}

/***/ }),

/***/ "./assets/scripts/player.js":
/*!**********************************!*\
  !*** ./assets/scripts/player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Player; });
class Player {
  constructor() {
    this.healthPoints = 100;
    this.healthPointsLine = 100;
  }

  render() {
    this.inputName = document.getElementById('inputName');
    this.playerName = document.getElementById('playerName');
    this.playerBlock = document.getElementById('playerBlock');
    this.healthPointsBlock = document.getElementById('playerHP');
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.playerName.innerHTML = 'Darth ' + this.inputName.value;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.classList.add('health-render');
    this.playerBlock.classList.remove('player-attack');
    this.playerBlock.classList.add('spritePlayerIdle');
  }

  healthDecrease() {
    this.healthPointsBlock = document.getElementById('playerHP');
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.healthPoints -= 25;
    this.healthPointsLine -= 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';
  }

  healthIncrease() {
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.healthPoints += 25;
    this.healthPointsLine += 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';
  }

  attack() {
    this.playerBlock = document.getElementById('playerBlock');

    this.playerBlock.classList.remove('player-stay');
    this.playerBlock.classList.add('player-attack');
    setTimeout(() => {
      this.render();
    }, 1000)
  }

  death() {

  }
}

/***/ }),

/***/ "./assets/scripts/score.js":
/*!*********************************!*\
  !*** ./assets/scripts/score.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Score; });
class Score {
    

}

/***/ }),

/***/ "./assets/scripts/spell.js":
/*!*********************************!*\
  !*** ./assets/scripts/spell.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Spell; });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./assets/scripts/task.js");


class Spell {
    constructor() {
        this.spellModalWindow = document.getElementById('spellModalWindow');
    }

    spellRender() {
        this.spellModalWindow.style.display = "block";
    }

}

/***/ }),

/***/ "./assets/scripts/task.js":
/*!********************************!*\
  !*** ./assets/scripts/task.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
class Task {
    constructor() {
        this.mathOperators = ['+', '-', '*'];

        this.taskWindow = document.getElementById('taskModalWindow');
        this.task = document.getElementById('taskText');
        
    }

    arithmeticTask() {
        this.taskWindow.style.display = "block";
       
        this.mathOperator = this.getRandom(this.mathOperators);        
        this.taskExpression = this.getRandomFromTo(1, 10) + " " + this.mathOperator + " " + this.getRandomFromTo(1, 10);        
        this.task.innerHTML = this.taskExpression + ' = ';
    }

    getRandom(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    getRandomFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }

    getTaskResult() {
        this.taskResult = eval(this.taskExpression);
        return this.taskResult;
    }

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map