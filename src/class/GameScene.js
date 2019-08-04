import Player from './Player'
import GameMap from './GameMap'
import maps from '../data/maps'
import assets from '../data/assets'
import storage from '../data/storage'
import generateBattler from '../util/generateBattler'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
  }
  create (payload) {
    this.storage = storage
    this.setEncountDelay()
    // substance group
    this.substances = this.add.group()
    // player
    this.player = new Player(this, payload.x, payload.y).setR(this.storage.state.r)
    this.player.on('walk', () => {
      if (!this.event.enemyGroups) return
      this.encountDelay--
      if (this.encountDelay > 0) return
      this.setEncountDelay()
      this.player.stopWalk()
      this.ui.battle(this.event.enemyGroups.random().map(key => generateBattler(key, this.event.enemyLevel)))
    })
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
    if (this.event && this.event.create) this.event.create(this)
    // auto save
    if (payload.save) setTimeout(() => this.storage.save(0), 1)
    // debug
    this.setDebugAction()
  }
  update (time, delta) {
    if (this.event && this.event.update) this.event.update(this)
  }
  get ui () {
    return this.scene.get('UI')
  }
  talk (talks) {
    return this.ui.talk(talks)
  }
  select (options, callback) {
    return this.ui.select(options, callback)
  }
  blur (bool) {
    if (bool) this.camera.setRenderToTexture('blur')
    if (!bool) this.camera.clearRenderToTexture()
  }
  mapChange (mapKey, x, y) {
    return this.ui.transition().then(() => {
      this.scene.start('Game', { map: mapKey, x, y, save: true })
    })
  }
  setEncountDelay () {
    this.encountDelay = Math.randomInt(300, 500)
  }
  setDebugAction () {
    window.storage = storage
    this.input.keyboard.on('keydown_I', () => {
      console.log(`x: ${this.player.x}, y: ${this.player.y}, tileX: ${this.player.x.toTile} tileY: ${this.player.y.toTile}`)
      console.log(this.storage.state)
    })
    this.input.keyboard.on('keydown_M', () => {
      const debugBox = document.createElement('div')
      debugBox.setAttribute('class', 'debugBox')
      document.getElementById('game').appendChild(debugBox)
      const select = document.createElement('select')
      select.id = 'select'
      debugBox.appendChild(select)
      assets.tilemapTiledJSON.forEach(v => {
        const option = document.createElement('option')
        option.value = v[0]
        option.text = v[0]
        select.appendChild(option)
      })
      select.onchange = () => this.mapChange(select.value, (20).toPixelCenter, (20).toPixelCenter)
      const addButton = (text, callback) => {
        const save = document.createElement('button')
        save.innerText = text
        save.onclick = () => callback()
        debugBox.appendChild(save)
      }
      addButton('save', () => {
        this.storage.save()
        alert('Saved')
      })
      addButton('load', () => {
        location.reload()
      })
      addButton('delete', () => {
        this.storage.delete()
        alert('Save data deleted')
      })
      const info = document.createElement('span')
      debugBox.appendChild(info)
      setInterval(() => {
        info.innerText = `FPS: ${this.game.loop.actualFps}`
      }, 100)
    })
  }
}
