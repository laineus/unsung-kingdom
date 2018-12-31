import Player from './Player'
import GameMap from './GameMap'
import maps from '../data/maps'
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
    this.player = new Player(this, payload.x, payload.y)
    this.map.addCollider(this.player)
    this.camera.startFollow(this.player, true, 0.1, 0.1)
    // player controll
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    this.event = maps[payload.map]
    if (this.event) this.event.create.call(this)
    // debug
    this.setDebugAction()
  }
  update (time, delta) {
    this.player.update()
    if (this.event) this.event.update.call(this)
  }
  setDebugAction () {
    this.input.keyboard.on('keydown_I', () => {
      console.log(`x: ${this.player.x}, y: ${this.player.y}, tileX: ${this.player.x.toTile} tileY: ${this.player.y.toTile}`)
    })
  }
  mapChange (mapKey, tileX, tileY) {
    console.log(`go to ${mapKey}`)
    this.scene.get('UI').transition(() => {
      this.scene.start('Game', { map: mapKey, x: tileX.toPixelCenter, y: tileY.toPixelCenter })
    })
  }
}
