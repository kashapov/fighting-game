import Player from "./player.js";
import Monster from "./monster.js";
import Score from "./score.js";
import Spell from "./spell.js";
import Task from "./task.js";


class Game {
    constructor() {
        this.player = new Player();
        this.monster = new Monster();
        this.score = new Score();
        this.spell = new Spell();
        this.task = new Task();
        
        this.roundCounter = 0;
        this.spellType = "";

        this.audioIntro = new Audio();
        this.audioBattle = new Audio();

        //this.createSounds();
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

        this.audioBattle.preload = "auto";
        this.audioBattle.volume = 0.3;
        this.audioBattle.src = "./assets/audio/Playing-Sound.mp3";
      }

    createGame() {

        
        this.audioIntro.play();

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
        this.playerHP = document.getElementById('playerHP');

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
            
            
            setTimeout(() => {
                this.monster.dead();
            }, 1400);  

            this.newRound(); 

                       
        } else if (this.player.healthPoints === 0) {
            this.player.dead();
            
            setTimeout(() => {
                this.makeScoreList();
            }, 1000);            
        }
    }

    makeScoreList() {
        
    }

}

let newGame = new Game();

newGame.createGame();