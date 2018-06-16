import { dictionaryEnRu } from "./dictionary.js";
import { dictionaryRuEn } from "./dictionary.js";
import { imagesLib } from "./dictionary.js";
import { enigmaLib } from "./dictionary.js";
import { logicLib } from "./dictionary.js";



export default class Task {
    constructor() {
        this.mathOperators = ['+', '-', '*'];

        this.taskWindow = document.getElementById('taskModalWindow');
        this.task = document.getElementById('taskText');

        this.tasks = ["arithmetic", "translate", "writeImage"];
        this.dictionarys = [dictionaryEnRu, dictionaryRuEn, enigmaLib, logicLib];
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

        for (let key in imagesLib) {
            counterData++;
        }

        this.taskWindow.style.display = "block";

        let worldNum = this.getRandomFromTo(0, counterData-1);        
        this.world = Object.keys(imagesLib)[worldNum];

        this.task.innerHTML = "Что на картинке?";

        this.image = document.createElement('img');
        this.image.src = "./assets/images/tasks/" + this.world;
        this.task.appendChild(this.image);

        this.writeImageResult = imagesLib[this.world];

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