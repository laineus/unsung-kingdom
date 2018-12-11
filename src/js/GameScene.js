import assets from './assets'
import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  create () {
    // map
    const map = new GameMap(this, 'first')
    map.displayDebug()
    this.player = new Player(this, 10, 10)
    map.addCollider(this.player)
    this.cursors = this.input.keyboard.createCursorKeys()
  }
  preload () {
    Object.keys(assets).forEach(method => {
      Object.keys(assets[method]).forEach(key => this.load[method](key, assets[method][key]))
    })
  }
  update (time, delta) {
    this.player.update(this.cursors)
  }
}
