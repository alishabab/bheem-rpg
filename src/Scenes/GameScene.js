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
    // create the tile map
    this.map = this.make.tilemap({ key: 'map' });
    // add the tileset image to our map
    this.tiles = this.map.addTilesetImage('background', 'background', 32, 32, 1, 2);
    // create our background
    this.backgroundLayer = this.map.createStaticLayer('background', this.tiles, 0, 0);
    this.backgroundLayer.setScale(2);    // New code
    // create blocked layer
    this.blockedLayer = this.map.createStaticLayer('blocked', this.tiles, 0, 0);
    this.blockedLayer.setScale(2);    // New code
  }
};
