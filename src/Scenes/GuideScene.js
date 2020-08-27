import Phaser from 'phaser';
import Button from '../Objects/Button';

export default class GuideScene extends Phaser.Scene {
  constructor() {
    super('Guide');
  }

  create() {
    this.textInstructions = this.add.text(210, 270,
      'Use the direction keys to navigate'
      + '\nUse the space key to attack monsters',
      { fontSize: 20 });
    this.menuButton = new Button(this, 400, 550, 'blueButton1', 'blueButton2', 'Menu', 'Title');
    this.intro = this.add.text(215, 400, 'Enter your name: ', { fontSize: 20, fontFamily: 'monospace' });

    const input = this.add.dom(480, 410, 'input', {
      type: 'text',
      name: 'nameField',
      fontSize: '32px',
      backgroundColor: '#fff',
    });
    input.scaleX = 0.4;
    input.scaleY = 0.6;

    const style = 'background: url(assets/images/ui/blue_button02.png); border: none; border-radius: 5px; color: #fff;';
    const gameButton = this.add.dom(600, 412, 'button', style, 'Play');
    gameButton.scaleX = 1.5;
    gameButton.scaleY = 1.7;
    gameButton.addListener('click');

    gameButton.on('click', () => {
      if (input.node.value) {
        this.model = this.sys.game.globals.model;
        this.model.user = input.node.value;
        this.scene.start('Game');
      }
    });
  }
}