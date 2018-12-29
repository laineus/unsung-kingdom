import Player from './Player'
import Character from './Character'
import GameMap from './GameMap'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
  }
  create (payload) {
    // map
    this.map = new GameMap(this, payload.map)
    // camera
    this.camera = this.cameras.main
    this.camera.setBounds(0, 0, this.map.width, this.map.height)
    this.camera.roundPixels = true
    this.camera.setZoom(1)
    // player
    this.player = new Player(this, 100, 200)
    this.map.addCollider(this.player)
    this.camera.startFollow(this.player, true, 0.1, 0.1)
    // player controll
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    // npc
    this.npc = new Character(this, 160, 210, 'player')
    this.npc.setTalk()
    this.map.addCollider(this.npc)
    this.physics.add.collider(this.player, this.npc)
  }
  update (time, delta) {
    this.player.update()
    this.npc.update()
  }
}
