export default class Score {
  constructor() {
    
  }

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


  makeScores(roundCounter) {
    this.playerName = document.getElementById('playerName');

    document.getElementById("playingSection").style.display = "none";
    document.getElementById("scoresSection").style.display = "block";

    let monsterKilled = roundCounter - 1;
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

    var scores = JSON.parse(localStorage.getItem('ContraForce'));
    
    this.makeScoreList(scores);
  }

}