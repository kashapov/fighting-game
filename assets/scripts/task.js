export default class Task {
    constructor() {
        this.mathOperators = ['+', '-', '*'];

        this.taskWindow = document.getElementById('taskModalWindow');
        this.task = document.getElementById('taskText');

        this.data = {
            cat: ['кот', 'кошка'],
            dog: ['собака'],
            game: ['игра'],
            epam: ['ипам', 'епам', 'эпам']
        };

        this.counterData = 0;

        for (var key in this.data) {
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
        this.world = Object.keys(this.data)[this.getRandomFromTo(0, this.counterData)];
        this.task.innerHTML = "translate: " + this.world;
        this.translateResult = this.data[this.world];
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