import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  create () {
    // map
    const map = new GameMap(this)
    map.displayDebug()
    this.player = new Player(this, 10, 10)
    this.physics.add.collider(this.player, map.staticLayers[1]) // TODO: move to GameMap
    this.cursors = this.input.keyboard.createCursorKeys()
  }
  preload () {
    this.load.image('tiles', '../img/mapchip.png')
    this.load.tilemapTiledJSON('map', '../map/first.json')
    this.load.image('player', '../img/player.png')
  }
  update (time, delta) {
    this.player.update(this.cursors)
  }
}
