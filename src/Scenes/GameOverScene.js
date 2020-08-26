import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import { getScores, postScore } from '../api/scoreApi';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameOver' });
  }

  init() {
    this.model = this.sys.game.globals.model;
    this.gameScene = this.scene.get('Game');
  }

  preload() {
    this.load.image('gameOverTitle', 'assets/images/ui/blue_button02.png');
  }

  create() {
    const user = this.sys.game.globals.model.user;
    this.score = this.add.text(230, 30,
      `Hello ${user} your score is: ${this.sys.game.globals.model.score}`, {
        fontFamily: 'monospace',
        fontSize: 20,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
      postScore(this.model.user, this.model.score);
    this.gameButton = new Button(this, 400, (config.height / 2) + 170,
      'blueButton1', 'blueButton2', 'Submit Score', 'Leaderboard');
  }
}