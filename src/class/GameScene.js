import Player from './Player'
import Field from './Field'
import maps from '../data/maps'
import assets from '../data/assets'
import storage from '../data/storage'
import generateBattler from '../util/generateBattler'
import Friend from './Friend'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Game', active: false })
  }
  create (payload) {
    this.frame = 0
    this.storage = storage
    // substance group
    this.substances = this.add.group()
    // player
    this.player = new Player(this, payload.x, payload.y).setR(this.storage.state.r)
    this.francisca = new Friend(this, payload.x, payload.y - 1, 'francisca').setR(this.storage.state.r).setFollowDiff(8).setSpeed(230).setDisplayName('Francisca')
    this.jaquelyn = new Friend(this, payload.x, payload.y - 2, 'jaquelyn').setR(this.storage.state.r).setFollowDiff(20).setSpeed(220).setDisplayName('Jaquelyn')
    if (['number', 'string'].includes(typeof payload.r)) this.player.setR(payload.r)
    this.player.on('walk', () => {
      if (!this.event.enemyGroups || this.ui.eventMode) return
      this.encountDelay--
      if (this.encountDelay <= (this.stronger ? 200 : 80)) this.ui.setEncounter(true, this.stronger)
      if (this.encountDelay <= 0) this.encounter(!this.stronger)
    })
    // this.fadeout = this.add.sprite(0, 0, 'fadeout').setAlpha(0.7).setDepth(110000)
    // map
    this.map = new Field(this, payload.map)
    if (!this.storage.state.visited.includes(payload.map)) this.storage.state.visited.push(payload.map)
    // camera
    this.camera = this.getCamera()
    // player controll
    const walk = pointer => {
      if (this.ui.eventMode) return
      if (pointer.isDown) this.player.setTargetPosition(pointer.worldX, pointer.worldY)
    }
    this.input.on('pointerdown', walk)
    this.input.on('pointermove', walk)
    this.event = maps[payload.map] || {}
    if (this.event.create) this.event.create(this)
    this.setEncountDelay()
    setTimeout(() => {
      // auto save
      if (payload.save) this.ui.snapshopForSaveData().then(() => this.storage.save(0))
      this.ui.battlerSummary.show()
    }, 150)
    // debug
    this.setDebugAction()
  }
  update (time, delta) {
    this.frame++
    if (this.event.update) this.event.update(this)
    // this.fadeout.setPosition(this.camera.scrollX + config.WIDTH.half, this.camera.scrollY + config.HEIGHT.half)
  }
  get ui () {
    return this.scene.get('UI')
  }
  talk (talks, option) {
    return this.ui.talk(talks, option)
  }
  select (options, callback) {
    return this.ui.select(options, callback)
  }
  blur (bool) {
    if (bool) this.camera.setRenderToTexture('blur')
    if (!bool) this.camera.clearRenderToTexture()
  }
  mapChange (mapKey, x, y, { r = null, save = true, speed = 'fast' } = {}) {
    this.ui.battlerSummary.hide()
    this.scene.pause('Game')
    return this.ui.transition(speed).then(() => {
      this.scene.start('Game', { map: mapKey, x, y, r, save })
    })
  }
  getCamera () {
    const camera = this.cameras.main
    camera.setBounds(0, 0, this.map.width, this.map.height)
    camera.roundPixels = true
    camera.setZoom(1)
    camera.startFollow(this.player, true, 0.1, 0.1)
    camera.updateFollow = () => camera.centerOn(camera._follow.x, camera._follow.y)
    camera.look = (x, y, duration, absolute = false) => {
      const newX = absolute ? x : camera.scrollX + camera.centerX + x
      const newY = absolute ? y : camera.scrollY + camera.centerY + y
      const offsetX = newX - camera._follow.x
      const offsetY = newY - camera._follow.y
      return new Promise(resolve => {
        camera.pan(newX, newY, duration, 'Power2', false, (_, progress) => {
          if (progress === 1) {
            camera.setFollowOffset(-offsetX, -offsetY)
            resolve()
          }
        })
      })
    }
    camera.revert = () => camera.setFollowOffset(0, 0)
    return camera
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
