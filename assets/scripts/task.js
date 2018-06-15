import { dictionaryEnRu } from "./dictionary.js";

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

        this.counterData = 0;

        for (var key in dictionaryEnRu) {
            this.counterData++;
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

        
        return this.taskResult;
    }

    

}