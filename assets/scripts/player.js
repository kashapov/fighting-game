export default class Player {
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

    this.playerName.innerHTML = 'Darth ' + this.inputName.value;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
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
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';
  }

  healthIncrease() {
    this.hpGreenLine = document.getElementById('playerHpLineGreen');
    this.playerSection = document.getElementById('playerSection');
    

    this.healthPoints += 25;
    this.healthPointsLine += 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
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