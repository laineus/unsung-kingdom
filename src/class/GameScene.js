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
    this.frame = 0
    this.setEventMode(false)
    this.storage = storage
    // substance group
    this.substances = this.add.group()
    // player
    this.player = new Player(this, payload.x, payload.y).setR(this.storage.state.r)
    this.player.on('walk', () => {
      if (!this.event.enemyGroups || this.eventMode) return
      this.encountDelay--
      if (this.encountDelay <= (this.stronger ? 200 : 80)) this.ui.setEncounter(true, this.stronger)
      if (this.encountDelay <= 0) this.encounter(!this.stronger)
    })
    // map
    this.map = new GameMap(this, payload.map)
    // camera
    this.camera = this.cameras.main
    this.camera.setBounds(0, 0, this.map.width, this.map.height)
    this.camera.roundPixels = true
    this.camera.setZoom(1)
    this.camera.followPlayer = (bool = true) => {
      bool ? this.camera.startFollow(this.player, true, 0.1, 0.1) : this.camera.stopFollow()
    }
    this.camera.updateFollow = () => {
      this.camera.centerOn(this.camera._follow.x, this.camera._follow.y)
    }
    this.camera.move = (x, y, duration) => {
      const newX = this.camera.scrollX + this.camera.centerX + x
      const newY = this.camera.scrollY + this.camera.centerY + y
      return new Promise(resolve => {this.camera.centerX
        this.camera.pan(newX, newY, duration, 'Power2', false, (_, progress) => {
          if (progress === 1) resolve()
        })
      })
    }
    this.camera.followPlayer(true)
    // player controll
    const walk = pointer => {
      if (this.eventMode) return
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    this.event = maps[payload.map] || {}
    if (this.event.create) this.event.create(this)
    this.setEncountDelay()
    // auto save
    if (payload.save) setTimeout(() => this.storage.save(0), 1)
    // UI callback
    this.ui.onMapChanged()
    // debug
    this.setDebugAction()
  }
  update (time, delta) {
    this.frame++
    if (this.event.update) this.event.update(this)
  }
  get ui () {
    return this.scene.get('UI')
  }
  setEventMode (bool) {
    this.eventMode = bool
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
  mapChange (mapKey, x, y, save = true) {
    return this.ui.transition(true).then(() => {
      this.scene.start('Game', { map: mapKey, x, y, save })
    })
  }
  get stronger () {
    return Math.round(storage.state.battlers.reduce((p, c) => p + c.lv, 0) / 3) > this.event.enemyLevel
  }
  encounter (bool) {
    this.setEncountDelay()
    if (!bool) return
    this.player.stopWalk()
    this.ui.battle(this.event.enemyGroups.random().map(key => generateBattler(key, this.event.enemyLevel)))
  }
  setEncountDelay () {
    this.ui.setEncounter(false)
    this.encountDelay = Math.randomInt(300, 500) + (this.stronger ? 100 : 0)
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
      const info = document.createElement('span')
      debugBox.appendChild(info)
      setInterval(() => {
        info.innerText = `FPS: ${this.game.loop.actualFps}`
      }, 100)
    })
  }
}
