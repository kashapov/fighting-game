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

/***/ "./assets/scripts/action.js":
/*!**********************************!*\
  !*** ./assets/scripts/action.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Action; });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./assets/scripts/task.js");


class Action {
    constructor() {
        this.actionModalWindow = document.getElementById('actionModalWindow');
    }

    actionRender() {
        this.actionModalWindow.style.display = "block";
    }

}

/***/ }),

/***/ "./assets/scripts/dictionary.js":
/*!**************************************!*\
  !*** ./assets/scripts/dictionary.js ***!
  \**************************************/
/*! exports provided: dictionaryEnRu, dictionaryRuEn, imagesLib, enigmaLib, logicLib */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryEnRu", function() { return dictionaryEnRu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dictionaryRuEn", function() { return dictionaryRuEn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesLib", function() { return imagesLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enigmaLib", function() { return enigmaLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logicLib", function() { return logicLib; });
const dictionaryEnRu = {
  cat: ['кот', 'кошка'],
  dog: ['собака'],
  game: ['игра'],
  ball: ['мяч', 'мячик'],
  family: ['семья'],
  parents: ['родители', 'родаки'],
  father: ['папа', 'отец'],
  mother: ['мама', 'мать']
};

const dictionaryRuEn = {
  "кот": ['cat'],
  "собака": ['dog'],
  "игра": ['game'],
  "мяч": ['ball'],
  "семья": ['family'],
  "родители": ['parents'],
  "папа": ['father', 'dad'],
  "мама": ['mother', 'mom']
};


const imagesLib = {
  "cc_coins_gold_0.png": ["coin", "монета"],
  "cc_drink.png": ["bottle", "бутылка"],
  "mine_0.png": ["mine", "мина"],
  "weapon_mp5.png": ["weapon", "оружие", "автомат"],
  "flagcheck_0.png": ["flag", "флаг"]
};


const enigmaLib = {
  "Что теплее шубы?": ['две шубы'],
  "Что можно увидеть с закрытыми глазами?": ['сон'],
  "Каких камней нет ни в одном море?": ['сухих'],
  "По чему собака бегает?": ['по земле'],
  "Что можно приготовить, но нельзя съесть?": ['уроки']
};


const logicLib = {
  "4 &#8658; 54 &#8658; 654 &#8658;": ['7654'],
  "1923 &#8658; 15 &#8658;": ['6'],
  "4938 &#8658; 3489 &#8658; 2517 &#8658;": ['5721']
};


/***/ }),

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
/* harmony import */ var _action_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./action.js */ "./assets/scripts/action.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task.js */ "./assets/scripts/task.js");







class Game {
    constructor() {
        this.player = new _player_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.monster = new _monster_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.score = new _score_js__WEBPACK_IMPORTED_MODULE_2__["default"]();
        this.action = new _action_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.task = new _task_js__WEBPACK_IMPORTED_MODULE_4__["default"]();
        
        this.roundCounter = 0;
        this.actionType = "";

        this.audioIntro = new Audio();
        this.audioBattle = new Audio();
        this.audioAttack = new Audio();
        this.audioHeal = new Audio();


        this.createSounds();
    }

    startGame() {
        this.playingSection = document.getElementById('playingSection');
        this.loginPage = document.getElementById('loginPage');

        this.loginPage.style.display = "none";
        this.playingSection.style.display = "block";
        this.player.render();

        this.audioIntro.pause();
        this.audioBattle.play();

        this.newRound();
    }

    createSounds() {
        this.audioIntro.preload = "auto";
        this.audioIntro.volume = 0.3;
        this.audioIntro.src = "./assets/audio/Intro.mp3";
        this.audioIntro.loop = true;

        this.audioBattle.preload = "auto";
        this.audioBattle.volume = 0.3;
        this.audioBattle.src = "./assets/audio/Playing-Sound.mp3";
        this.audioBattle.loop = true;

        this.audioAttack.preload = "auto";
        this.audioAttack.volume = 0.3;
        this.audioAttack.src = "./assets/audio/actions/attack.mp3";

        this.audioHeal.preload = "auto";
        this.audioHeal.volume = 0.3;
        this.audioHeal.src = "./assets/audio/actions/heal.mp3";
      }

    createGame() {

        
        this.audioIntro.play();

        this.btnToGame = document.querySelector('#btnToGame');
        this.btnToAbout = document.querySelector('#btnToAbout');
        this.btnToIndex = document.querySelector('#btnToIndex');
        this.menuGame = document.querySelector('#menuGame');
        this.checkinBlock = document.querySelector('#checkinBlock');
        this.loginForm = document.getElementById('loginForm');
        this.inputName = document.getElementById('inputName');
        this.btnChooseAction = document.getElementById('btnChooseAction');
        this.actionModalWindow = document.getElementById('actionModalWindow');
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
    
        btnToIndex.addEventListener('click', () => {
            window.location.href = "index.html";
        });


        this.loginForm.addEventListener('submit', () => {
            if (this.inputName.value != "") {
                this.startGame();
            };
            event.preventDefault();
        });

        this.btnChooseAction.addEventListener('click', () => {
            this.action.actionRender();
        });

        this.btnAttack.addEventListener('click', () => {
            this.actionModalWindow.style.display = "none";
            this.actionType = "attack";

            let choosedTask = this.getRandom(this.task.tasks);

            //this.task.writeImage();

            if(choosedTask == 'arithmetic') {
                this.task.arithmetic();
            } else if(choosedTask == 'translate') {
                this.task.translate();
            } else if(choosedTask == 'writeImage') {
                this.task.writeImage();
            }
        });

        this.btnHealing.addEventListener('click', () => {
            this.actionModalWindow.style.display = "none";
            this.actionType = "health";

            let choosedTask = this.getRandom(this.task.tasks);

            if(choosedTask == 'arithmetic') {
                this.task.arithmetic();
            } else if(choosedTask == 'translate') {
                this.task.translate();
            } else if(choosedTask == 'writeImage') {
                this.task.writeImage();
            }
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
        this.roundNumber.innerHTML = 'Раунд ' + this.roundCounter;
        this.monsterBody =  this.getRandom(this.monster.monsterBodys);
        this.monsterName = this.getRandom(this.monster.monsterNames[0]) +' '+ this.getRandom(this.monster.monsterNames[1]) +' '+ this.getRandom(this.monster.monsterNames[2]);

        this.monster.render(this.monsterBody, this.monsterName);
    }


    findInArray(array, value) {
        if (array.indexOf) {
            return array.indexOf(value);
        }
        
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) return i;
        }
        
        return -1;
    }
      

    taskCheck() {
        this.taskResult = this.task.getTaskResult();
        this.taskInput = document.getElementById('taskInput');
        this.taskWindow = document.getElementById('taskModalWindow');
        this.playerHP = document.getElementById('playerHP');
        this.monsterHP = document.getElementById('monsterHP');
        
        let resTranslate = this.findInArray(this.taskResult, this.taskInput.value);

        if(this.actionType === "attack") {
            

            //console.log(this.taskResult);
            //console.log(this.taskInput.value); 
            
            if (this.taskInput.value == this.taskResult || resTranslate !== -1) {
                this.taskWindow.style.display = "none";
                this.player.attack();
                this.audioAttack.play();
                setTimeout(() => {
                    this.monster.healthDecrease();
                    this.healthCheck();
                }, 1000);
            } else {
                this.taskWindow.style.display = "none";
                this.monster.attack();
                this.audioAttack.play();
                setTimeout(() => {
                    this.player.healthDecrease();
                    this.healthCheck();
                }, 1000);
            }
            
        } else if (this.actionType === "health") {

            if (this.taskInput.value == this.taskResult || resTranslate !== -1) {
                this.taskWindow.style.display = "none";

                if(this.playerHP.innerHTML != '100/100') {
                    setTimeout(() => {
                        this.player.healthIncrease();
                    }, 1000);
                    setTimeout(() => {
                        this.audioHeal.play();
                    }, 800);
                    
                }
               
            } else {
                this.taskWindow.style.display = "none";
                if(this.monsterHP.innerHTML != '100/100') {
                    setTimeout(() => {
                        this.monster.healthIncrease();
                    }, 1000);
                }
                
            }    
        }

       
        this.taskInput.value = "";
    }

    healthCheck() {
        if (this.monster.healthPoints === 0) {            
            this.monster.dead();

            setTimeout(() => {
                this.newRound(); 
            }, 2000); 
        } else if (this.player.healthPoints === 0) {
            this.player.dead();
            
            setTimeout(() => {
                this.score.makeScores(this.roundCounter);
            }, 2000);
        }
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
        this.healthPointsBlock = document.getElementById('monsterHP');
        this.monsterSection = document.getElementById('monsterSection');

        this.monsterSection.classList.remove('monster-dead');
        this.monsterSection.classList.remove('monster-attack');
        this.monsterSection.classList.add('monster-stay');

        this.name = name;
        this.monsterBody = body;
        this.monsterName.innerHTML = name;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100';

        if (this.healthPoints === 100) {
            this.hpGreenLine.classList.add('health-render');
        }

       
        
    }

    healthDecrease() {
        this.healthPointsBlock = document.getElementById('monsterHP');

        this.healthPoints -= 25;
        this.healthPointsLine -= 25;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100';
        this.hpGreenLine.style.width = this.healthPointsLine + '%';
    }

    healthIncrease() {
        this.healthPointsBlock = document.getElementById('monsterHP');

        this.healthPoints += 25;
        this.healthPointsLine += 25;
        this.healthPointsBlock.innerHTML = this.healthPoints + '/100';
        this.hpGreenLine.style.width = this.healthPointsLine + '%';
    }

    attack() {
        this.monsterSection.classList.remove('monster-stay');
        this.monsterSection.classList.add('monster-attack');
        setTimeout(() => {
            this.render(this.monsterBody, this.name);
        }, 1400)
    }

    dead() {
        this.monsterSection.classList.remove('monster-stay');
        this.monsterSection.classList.add('monster-dead');
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
    this.playerSection = document.getElementById('playerSection');
    this.healthPointsBlock = document.getElementById('playerHP');
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.playerName.innerHTML = 'Майор ГРУ ' + this.inputName.value;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100';
    this.hpGreenLine.classList.add('health-render');
    this.playerSection.classList.remove('player-attack');
    this.playerSection.classList.remove('player-heal');
    this.playerSection.classList.add('player-stay');
  }

  healthDecrease() {
    this.healthPointsBlock = document.getElementById('playerHP');
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.healthPoints -= 25;
    this.healthPointsLine -= 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';
  }

  healthIncrease() {
    this.hpGreenLine = document.getElementById('playerHpLineGreen');
    this.playerSection = document.getElementById('playerSection');
    

    this.healthPoints += 25;
    this.healthPointsLine += 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';

    this.playerSection.classList.remove('player-stay');
    this.playerSection.classList.add('player-heal');
    setTimeout(() => {
      this.render();
    }, 1000);
  }

  attack() {
    this.playerSection = document.getElementById('playerSection');

    this.playerSection.classList.remove('player-stay');
    this.playerSection.classList.add('player-attack');
    setTimeout(() => {
      this.render();
    }, 1400);
  }

  dead() {
    this.playerSection.classList.remove('player-stay');
    this.playerSection.classList.add('player-dead');    
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
  constructor() {
    
  }

  makeScoreList(scores) {
    var i = 0;

    var componentMain = document.querySelector('#scoreList');	
    var buttonUl = document.createElement('ul');

    for (let cntMonsters in scores) {
        i++;

        if( i <= 10 ) {
            var name = scores[cntMonsters];
        
            var buttonLi = document.createElement('li');
            buttonLi.textContent = '#'+ i + '. ' + name + ' killed ' + cntMonsters + ' enemies.';
    
            buttonUl.appendChild(buttonLi);
        }
    }

    componentMain.appendChild(buttonUl);  
  }


  makeScores(roundCounter) {
    this.playerName = document.getElementById('playerName');

    document.getElementById("playingSection").style.display = "none";
    document.getElementById("scoresSection").style.display = "block";

    let monsterKilled = roundCounter - 1;
    let score = {};
    score[monsterKilled] = this.playerName.innerHTML;

    
    var scores = JSON.parse(localStorage.getItem('ContraForce'));
    if(scores !== null) {
        scores[monsterKilled] = this.playerName.innerHTML;
        localStorage.setItem('ContraForce', JSON.stringify(scores));
    }
    else {
        localStorage.setItem('ContraForce', JSON.stringify(score));
    }

    var scores = JSON.parse(localStorage.getItem('ContraForce'));
    
    this.makeScoreList(scores);
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
/* harmony import */ var _dictionary_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dictionary.js */ "./assets/scripts/dictionary.js");








class Task {
    constructor() {
        this.mathOperators = ['+', '-', '*'];

        this.taskWindow = document.getElementById('taskModalWindow');
        this.task = document.getElementById('taskText');

        this.tasks = ["arithmetic", "translate", "writeImage"];
        this.dictionarys = [_dictionary_js__WEBPACK_IMPORTED_MODULE_0__["dictionaryEnRu"], _dictionary_js__WEBPACK_IMPORTED_MODULE_0__["dictionaryRuEn"], _dictionary_js__WEBPACK_IMPORTED_MODULE_0__["enigmaLib"], _dictionary_js__WEBPACK_IMPORTED_MODULE_0__["logicLib"]];
    }

    arithmetic() {
        this.taskWindow.style.display = "block";
       
        this.mathOperator = this.getRandom(this.mathOperators);        
        this.taskExpression = this.getRandomFromTo(1, 10) + " " + this.mathOperator + " " + this.getRandomFromTo(1, 10);        
        this.task.innerHTML = "Решите пример: " + this.taskExpression + ' = ';
    }

    translate() {
        delete this.taskExpression;

        this.dictionary = this.getRandom(this.dictionarys);
        //console.log(this.dictionary);

        this.counterData = 0;

        for (var key in this.dictionary) {
            this.counterData++;
        }

        this.taskWindow.style.display = "block";
        let worldNum = this.getRandomFromTo(0, this.counterData-1);
        this.world = Object.keys(this.dictionary)[worldNum];

        
        if(this.world.indexOf("?") == '-1' && this.world.indexOf("&#8658;") == '-1') {
            this.task.innerHTML = "Переведите: <b>" + this.world + "</b>";
        } else {
            this.task.innerHTML = "<b>" + this.world + "</b>";
        }
        
        this.translateResult = this.dictionary[this.world];
    }

    writeImage() {
        delete this.taskExpression;
        delete this.translateResult;

        let counterData = 0;

        for (let key in _dictionary_js__WEBPACK_IMPORTED_MODULE_0__["imagesLib"]) {
            counterData++;
        }

        this.taskWindow.style.display = "block";

        let worldNum = this.getRandomFromTo(0, counterData-1);        
        this.world = Object.keys(_dictionary_js__WEBPACK_IMPORTED_MODULE_0__["imagesLib"])[worldNum];

        this.task.innerHTML = "Что на картинке?";

        this.image = document.createElement('img');
        this.image.src = "./assets/images/tasks/" + this.world;
        this.task.appendChild(this.image);

        this.writeImageResult = _dictionary_js__WEBPACK_IMPORTED_MODULE_0__["imagesLib"][this.world];

    }

    getRandom(arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    getRandomFromTo(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;;
    }


    getTaskResult() {

        if (this.taskExpression) {
            this.taskResult = eval(this.taskExpression);
        }
        else if(this.translateResult) {
            this.taskResult = this.translateResult;
        }
        else if(this.writeImageResult) {
            this.taskResult = this.writeImageResult;
        }

        
        return this.taskResult;
    }

    

}

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map