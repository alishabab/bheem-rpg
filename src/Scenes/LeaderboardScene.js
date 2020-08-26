import Phaser from 'phaser';
import Button from '../Objects/Button';
import { getScores } from '../api/scoreApi';

export default class DisplayScoreScene extends Phaser.Scene {
  constructor() {
    super('Leaderboard');
  }

  create() {
    this.add.text(400, 100, 'Leader Board', {
      color: 'white',
      fontSize: '32px ',
    }).setOrigin(0.5, 0.5);

    getScores().then((scores) => {
      const result = scores.result
      const scoreStyle = {
        color: 'white',
        fontSize: '38px ',
      };

      result.sort((x, y) => y.score - x.score);
      const space = 40;
      for (let i = 0; i < 5; i += 1) {
        if (result[i] !== undefined) {
          this.add.text(60, 200 + (space * i),
            `${i + 1}. Name: ${result[i].user} -- Score: ${result[i].score}`,
            scoreStyle);
        }
      }
    });

    this.playButton = new Button(this, 400, 450, 'blueButton1', 'blueButton2', 'Play', 'Guide');
    this.menuButton = new Button(this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.playButton.on('click', () => {
      this.model = this.sys.game.globals.model;
      this.model.score = 0;
      this.scene.start('Guide');
    });
  }
}