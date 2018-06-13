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