export default class Player {
  constructor() {
    this.healthPoints = 100;
    this.healthPointsLine = 100;
  }

  render() {
    this.inputName = document.getElementById('inputName');
    this.playerName = document.getElementById('playerName');
    this.playerBlock = document.getElementById('playerBlock');
    this.healthPointsBlock = document.getElementById('playerHP');
    this.hpGreenLine = document.getElementById('playerHpLineGreen');

    this.playerName.innerHTML = 'Darth ' + this.inputName.value;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.classList.add('health-render');
    this.playerBlock.classList.remove('player-attack');
    this.playerBlock.classList.add('spritePlayerIdle');
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

    this.healthPoints += 25;
    this.healthPointsLine += 25;
    this.healthPointsBlock.innerHTML = this.healthPoints + '/100 HP';
    this.hpGreenLine.style.width = this.healthPointsLine + '%';
  }

  attack() {
    this.playerBlock = document.getElementById('playerBlock');

    this.playerBlock.classList.remove('player-stay');
    this.playerBlock.classList.add('player-attack');
    setTimeout(() => {
      this.render();
    }, 1000)
  }

  death() {

  }
}