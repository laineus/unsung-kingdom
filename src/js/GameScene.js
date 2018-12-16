import Player from './Player'
import Character from './Character'
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
    // player controll
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    this.input.on('gameobjectdown', (pointer, object) => {
      this.scene.get('UI').talk.speak()
    })
    // npc
    this.npc = new Character(this, 140, 300, 'player')
    this.npc.setInteractive()
    this.map.addCollider(this.npc)
    this.physics.add.collider(this.player, this.npc)
  }
  update (time, delta) {
    this.player.update()
  }
}
