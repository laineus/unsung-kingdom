import Player from './Player'
import GameMap from './GameMap'
import maps from '../data/maps'
import assets from '../data/assets'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
  }
  create (payload) {
    // substance group
    this.substances = this.add.group()
    // player
    this.player = new Player(this, payload.x, payload.y)
    // map
    this.map = new GameMap(this, payload.map)
    // camera
    this.camera = this.cameras.main
    this.camera.setBounds(0, 0, this.map.width, this.map.height)
    this.camera.roundPixels = true
    this.camera.setZoom(1)
    this.camera.startFollow(this.player, true, 0.1, 0.1)
    // player controll
    const walk = pointer => {
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    this.event = maps[payload.map]
    if (this.event) {
      if (this.event.create) this.event.create(this)
    }
    // debug
    this.setDebugAction()
  }
  update (time, delta) {
    if (this.event && this.event.update) this.event.update(this)
  }
  mapChange (mapKey, tileX, tileY) {
    console.log(`go to ${mapKey}`)
    this.scene.get('UI').transition(() => {
      this.scene.start('Game', { map: mapKey, x: tileX.toPixelCenter, y: tileY.toPixelCenter })
    })
  }
  setDebugAction () {
    this.input.keyboard.on('keydown_I', () => {
      console.log(`x: ${this.player.x}, y: ${this.player.y}, tileX: ${this.player.x.toTile} tileY: ${this.player.y.toTile}`)
    })
    this.input.keyboard.on('keydown_M', () => {
      const select = document.createElement('select')
      select.id = 'select'
      document.getElementById('game').appendChild(select)
      assets.tilemapTiledJSON.forEach(v => {
        const option = document.createElement('option')
        option.value = v[0]
        option.text = v[0]
        select.appendChild(option)
      })
      select.onchange = () => this.mapChange(select.value, 20, 20)
      const addButton = (text, callback) => {
        const save = document.createElement('button')
        save.innerText = text
        save.onclick = () => callback()
        document.getElementById('game').appendChild(save)
      }
      addButton('save', () => console.log('save'))
      addButton('load', () => console.log('load'))
      addButton('reset', () => console.log('reset'))
    })
  }
}
