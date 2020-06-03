import Player from './Player'
import Field from './Field'
import maps from '../data/maps'
import assets from '../data/assets'
import storage from '../data/storage'
import generateBattler from '../util/generateBattler'
import Friend from './Friend'
import downloadBySource from '../util/downloadBySource'
import Character from './Character'
import Substance from './Substance'
import TreasureChest from './TreasureChest'
import tweetsAfterBattle from '../event/tweetsAfterBattle'
const TWEET_DATA = {
  lost: [
    { key: 'francisca', distance: 250, tweets: ['ま、待って！', 'アンが消えた…'] },
    { key: 'jaquelyn', distance: 300, tweets: ['アン、置いていっちゃいやよ', 'アン、どこ？'] }
  ]
}
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
    this.player = new Player(this, payload.x, payload.y).setR(this.storage.state.r).setDisplayName('アン')
    this.francisca = new Friend(this, payload.x, payload.y - 1, 'francisca').setR(this.storage.state.r).setFollowDiff(8).setSpeed(230).setDisplayName('フランシスカ')
    this.jaquelyn = new Friend(this, payload.x, payload.y - 2, 'jaquelyn').setR(this.storage.state.r).setFollowDiff(20).setSpeed(220).setDisplayName('ジャクリーン')
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
    this.event = maps[payload.map] || {}
    this.ui.audio.setBgm(this.event.bgm || null)
    if (this.event.create) this.event.create(this)
    this.ui.showMapInfo(payload.map !== 'room1' ? this.event : null)
    this.setEncountDelay(payload.encountDelay)
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
    this.map.update(time)
    // this.fadeout.setPosition(this.camera.scrollX + config.WIDTH.half, this.camera.scrollY + config.HEIGHT.half)
    if (this.frame % 20 === 0) this.tweetLost()
    if (this.touchMode && !this.ui.eventMode) {
      const x = Math.fix(this.player.x + this.ui.virtualStick.velocityX, 0, this.map.width)
      const y = Math.fix(this.player.y + this.ui.virtualStick.velocityY, 0, this.map.height)
      this.player.setTargetPosition(x, y)
    }
    const activePointer = this.input.manager.pointers.find(v => v.isDown)
    if (activePointer) {
      if (this.ui.eventMode || this.touchMode) return
      const worldX = activePointer.x + this.camera.scrollX
      const worldY = activePointer.y + this.camera.scrollY
      if (this.map.isCollides(worldX.toTile, worldY.toTile)) return
      this.player.setTargetPosition(worldX, worldY)
    }
  }
  get ui () {
    return this.scene.get('UI')
  }
  get audio () {
    return this.ui.audio
  }
  get touchMode () {
    return this.ui.touchMode
  }
  get npcList () {
    const checkableClasses = [Character, Substance, TreasureChest]
    return this.children.list.filter(v => checkableClasses.includes(v.constructor))
  }
  get checkables () {
    return this.npcList.filter(v => v.checkable)
  }
  get nearestCheckable () {
    const distance = Math.min(...this.checkables.map(v => v.distanceToPlayer))
    return this.checkables.find(v => v.distanceToPlayer === distance)
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
    this.alreadyTweetLost = false
    this.scene.pause('Game')
    const encountDelay = Math.max(this.encountDelay, 300)
    return this.ui.transition(speed).then(() => {
      this.scene.start('Game', { map: mapKey, x, y, r, save, encountDelay })
    })
  }
  backToTitle () {
    return this.ui.transition('normal').then(() => {
      this.scene.start('Title')
    })
  }
  getCamera () {
    const camera = this.cameras.main
    camera.setBounds(0, 0, this.map.width, this.map.height)
    camera.roundPixels = true
    camera.setZoom(1)
    camera.startFollow(this.player, true, 0.1, 0.1)
    camera.updateFollow = () => camera.centerOn(camera._follow.x, camera._follow.y)
    camera.look = (x, y, duration, relative = false) => {
      const newX = relative ? (camera.scrollX + camera.centerX + x) : x
      const newY = relative ? (camera.scrollY + camera.centerY + y) : y
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
    camera.revert = (duration = 0) => camera.look(camera._follow.x, camera._follow.y, duration)
    return camera
  }
  get stronger () {
    return Math.round(storage.state.battlers.reduce((p, c) => p + c.lv, 0) / 3) > this.event.enemyLevel
  }
  encounter (bool) {
    this.setEncountDelay()
    if (!bool) return
    this.player.stopWalk()
    const group = this.event.enemyGroups.random().map(key => generateBattler(key, this.event.enemyLevel))
    const bgm = this.event.battleBgm
    this.ui.battle(group, { bgm }).then(() => {
      tweetsAfterBattle(this)
    })
  }
  setEncountDelay (value) {
    this.ui.setEncounter(false)
    if (value) {
      this.encountDelay = value
      return
    }
    this.encountDelay = Math.randomInt(400, 600)
  }
  get members () {
    return [this.player, this.francisca, this.jaquelyn]
  }
  setMembersPosition (x, y, r) {
    this.members.forEach((v, i) => {
      v.setPosition(x, i === 0 ? y : y - 1)
      if (r) v.setR(r)
    })
  }
  async tweetOnce (chara, message, key) {
    if (this.storage.state.tweets.includes(key)) return false
    this.storage.state.tweets.push(key)
    return chara.tweet(message)
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
      // Map selecter
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
      // Data import
      const dataImport = document.createElement('input')
      dataImport.type = 'file'
      dataImport.innerText = 'Data Import'
      dataImport.onchange = e => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = e => {
          const json = e.target.result
          this.storage.state = this.storage.fixState(JSON.parse(json))
          this.mapChange(this.storage.state.map, this.storage.state.x, this.storage.state.y, { save: false })
        }
      }
      debugBox.appendChild(dataImport)
      // Data export
      const dataExport = document.createElement('button')
      dataExport.innerText = 'Data Export'
      dataExport.onclick = () => {
        const blob = new Blob([JSON.stringify(this.storage.state, null, '  ')], { type: 'text/json' })
        downloadBySource(URL.createObjectURL(blob), 'savedata.json')
      }
      debugBox.appendChild(dataExport)
      // FPS
      const info = document.createElement('span')
      debugBox.appendChild(info)
      setInterval(() => {
        info.innerText = `FPS: ${this.game.loop.actualFps}`
      }, 100)
    })
  }
  tweetLost () {
    if (this.alreadyTweetLost) return
    const chara = TWEET_DATA.lost.random()
    if (this[chara.key].distanceToPlayer > chara.distance) {
      this[chara.key].tweet(chara.tweets.random())
      this.alreadyTweetLost = true
    }
  }
}
