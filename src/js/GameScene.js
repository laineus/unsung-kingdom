import loadAssets from './loadAssets'
import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: true })
  }
  create () {
    // map
    this.map = new GameMap(this, 'first')
    // camera
    this.camera = this.cameras.main
    this.camera.setBounds(0, 0, this.map.width, this.map.height)
    this.camera.roundPixels = true
    this.camera.setZoom(2)
    // player
    this.player = new Player(this, 100, 100)
    this.map.addCollider(this.player)
    this.camera.startFollow(this.player)
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
  }
  preload () {
    loadAssets(this)
  }
  update (time, delta) {
    this.player.update()
  }
}
