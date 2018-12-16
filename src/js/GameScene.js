import Player from './Player'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
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
    this.camera.startFollow(this.player, true, 0.1, 0.1)
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
  }
  update (time, delta) {
    this.player.update()
  }
}
