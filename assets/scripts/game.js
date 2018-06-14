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

        this.audioBattle.preload = "auto";
        this.audioBattle.volume = 0.3;
        this.audioBattle.src = "./assets/audio/Playing-Sound.mp3";

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
            this.task.arithmeticTask();
        });

        this.btnHealing.addEventListener('click', () => {
            this.actionModalWindow.style.display = "none";
            this.actionType = "health";
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
        this.monsterHP = document.getElementById('monsterHP');

        if(this.actionType === "attack") {
            if (this.taskInput.value == this.taskResult) {
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
            if (this.taskInput.value == this.taskResult) {
                this.taskWindow.style.display = "none";

                if(playerHP.innerHTML != '100/100 HP') {                    
                    setTimeout(() => {
                        this.player.healthIncrease();
                    }, 1000);
                    setTimeout(() => {
                        this.audioHeal.play();
                    }, 800);
                    
                }
               
            } else {
                this.taskWindow.style.display = "none";
                if(monsterHP.innerHTML != '100/100 HP') {
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
                this.makeScores();
            }, 2000);
        }
    }

    // --- Make Score list ---
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


    makeScores() {
        this.playerName = document.getElementById('playerName');
        //this.roundNumber = document.getElementById('roundNumber');

        document.getElementById("playingSection").style.display = "none";
        document.getElementById("scoresSection").style.display = "block";
        //localStorage.setItem("ContraForce" + Date.now(), this.playerName + "," + this.player.score);
        //mylib.createHighscoresTable();
        //let timerTest = document.querySelector('.timer');
        //var arrTime = timerTest.innerHTML.split(':');


        //let fullName = lastName.value + ' ' + firstName.value;
        //let scoreTime = arrTime[1]+':'+arrTime[2];
        //let scoreTime = parseInt(arrTime[1])*60 + parseInt(arrTime[2]);

        let monsterKilled = this.roundCounter - 1;
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

        /*
        setTimeout(function() {
            //document.getElementById('win').style.display="block";
            //document.getElementById('scores').style.display="block";
            var scores = JSON.parse(localStorage.getItem('ContraForce'));
            console.log(scores);
            this.makeScoreList1(scores);
            
        },1000);*/

        //setTimeout(() => {
            var scores = JSON.parse(localStorage.getItem('ContraForce'));
            //console.log(scores);
            this.makeScoreList(scores);
        //}, 2000);
    }

}

let newGame = new Game();

newGame.createGame();