// подгружаю game.js
// стартую его 

import Player from "./player";
import Monster from "./monster";
import Spell from "./spell";
import Task from "./task";
import Score from "./score";
import Game from "./game";

const newGame = new Game();

newGame.start();