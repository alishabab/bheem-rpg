import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  preload () {
    // load images
    this.load.image('logo', 'assets/images/logo.png');
  }

  create () {
    this.createMap();
  }

createMap() {
  this.map = this.make.tilemap({ key: 'map' });
  this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2);
  this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);
  }
};
