import Player from "./player.js";
import Monster from "./monster.js";
import Score from "./score.js";
import Action from "./action.js";
import Task from "./task.js";


class Game {
    constructor() {
        this.player = new Player();
        this.monster = new Monster();
        this.score = new Score();
        this.action = new Action();
        this.task = new Task();
        
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