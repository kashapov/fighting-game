export default class Monster {
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