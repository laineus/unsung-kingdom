import loadAssets from './loadAssets'
import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  create () {
    // map
    const map = new GameMap(this, 'first')
    this.player = new Player(this, 100, 100)
    map.addCollider(this.player)
    const camera = this.cameras.main
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels)
    camera.startFollow(this.player)
    camera.roundPixels = true
    this.cursors = this.input.keyboard.createCursorKeys()
  }
  preload () {
    loadAssets(this)
  }
  update (time, delta) {
    this.player.update(this.cursors)
  }
}
