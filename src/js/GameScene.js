import loadAssets from './loadAssets'
import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  create () {
    // map
    this.map = new GameMap(this, 'first')
    // camera
    this.camera = this.cameras.main
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels)
    this.camera.roundPixels = true
    // player
    this.player = new Player(this, 100, 100)
    this.map.addCollider(this.player)
    this.camera.startFollow(this.player)
    this.input.on('pointerdown', pointer => this.player.setTargetPosition(pointer.worldX, pointer.worldY))
  }
  preload () {
    loadAssets(this)
  }
  update (time, delta) {
    this.player.update()
  }
}
