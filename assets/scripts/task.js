import { dictionaryEnRu } from "./dictionary.js";
import { imagesLib } from "./dictionary.js";


export default class Task {
    constructor() {
        this.mathOperators = ['+', '-', '*'];

        this.taskWindow = document.getElementById('taskModalWindow');
        this.task = document.getElementById('taskText');

        /*dictionary = {
            cat: ['кот', 'кошка'],
            dog: ['собака'],
            game: ['игра'],
            ball: ['мяч', 'мячик'],
            family: ['семья'],
            parents: ['родители', 'родаки'],
            father: ['папа', 'отец'],
            mother: ['мама', 'мать'],
            drink: ['пить']
        };*/

        this.tasks = ["arithmetic", "translate", "writeImage"];

        this.counterData = 0;

        for (var key in dictionaryEnRu) {
            this.counterData++;
        }

        this.counterData1 = 0;

        for (var key1 in imagesLib) {
            this.counterData1++;
        }
        
    }

    arithmetic() {
        this.taskWindow.style.display = "block";
       
        this.mathOperator = this.getRandom(this.mathOperators);        
        this.taskExpression = this.getRandomFromTo(1, 10) + " " + this.mathOperator + " " + this.getRandomFromTo(1, 10);        
        this.task.innerHTML = this.taskExpression + ' = ';
    }

    translate() {
        delete this.taskExpression;

        this.taskWindow.style.display = "block";
        //console.log(data);
        //console.log(this.getRandomFromTo(0, 4));
        //this.world = Object.keys(data)[0];
        //console.log(this.counterData);
        //console.log(Object.keys(dictionary));
        //console.log(this.getRandomFromTo(0, this.counterData)-1);
        let worldNum = this.getRandomFromTo(0, this.counterData-1);
        //console.log(worldNum);
        this.world = Object.keys(dictionaryEnRu)[worldNum];
        this.task.innerHTML = "translate: <b>" + this.world + "</b>";
        this.translateResult = dictionaryEnRu[this.world];
    }

    writeImage() {
        delete this.taskExpression;
        delete this.translateResult;

        this.taskWindow.style.display = "block";

        let worldNum = this.getRandomFromTo(0, this.counterData1-1);        
        this.world = Object.keys(imagesLib)[worldNum];
        //this.task.innerHTML = "write what is it: <b>" + this.world + "</b>";
        this.task.innerHTML = "what is it?";

        this.image = document.createElement('img');
        this.image.src = imagesLib[this.world];
        this.task.appendChild(this.image);

        //console.log(this.world);
        this.writeImageResult = this.world;

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