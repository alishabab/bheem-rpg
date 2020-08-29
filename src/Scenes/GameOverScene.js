import Phaser from 'phaser';
import Button from '../Objects/Button';
import config from '../Config/config';
import { postScore } from '../api/scoreApi';

export default class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOver');
  }

  init() {
    this.model = this.sys.game.globals.model;
  }

  create() {
    const { user } = this.sys.game.globals.model;
    this.add.text(230, 30,
      'Game Over', {
        fontFamily: 'monospace',
        fontSize: 40,
        fontStyle: 'bold',
        color: '#ffffff',
        align: 'center',
      });
    this.add.text(230, 100,
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