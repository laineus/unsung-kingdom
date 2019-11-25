import moment from 'moment'
import config from '../data/config'
import storage from '../data/storage'
import { slideIn, slideOut } from '../util/animations'
import downloadImageBySource from '../util/downloadImageBySource'
import Talk from './Talk'
import Select from './Select'
import Battle from './Battle'
import BattleResult from './BattleResult'
import Menu from './Menu'
import WorldMap from './WorldMap'
import Box from './Box'
import BattlerSummaryService from './BattlerSummaryService'
import StoryTelling from './StoryTelling'
const MESSAGES = [
  `王は死んだ。\n冷たく閉ざされた門扉の先に、かつての繁栄はもはや見る影もない。\n王国は偉大なる王の死とともに終わりを迎えたのだ。`,
  '― 『ベリオン王国史』',
  '千年ののち、王国はその名も失い世界から忘れ去られた。\nしかしベリオンの民の末裔は〈平和王エドガー〉の眠るその地を決して離れようとはしなかった。',
  'そしてある時、王と王国の死を嘆く研究者たちの手によって、時間を移動する術が発見された。',
  'それはこの世の理に背くことであったが、彼らは歴史を変えることを厭わなかった。'
]
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create (payload = {}) {
    this.storage = storage
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
    this.menuButton = this.getMenuButton((70).byRight, (35).byBottom)
    this.add.existing(this.menuButton)
    this.loadEncounter()
    this.battlerSummary = new BattlerSummaryService(this)
    this.blocker = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT).setInteractive().setOrigin(0, 0).setVisible(false)
    this.add.existing(this.blocker)
    this.eventMode = false
    // TOOD: map name
    // this.window = this.add.sprite(0, 0, 'dark').setOrigin(0, 0)
    // this.overlay = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x000000).setOrigin(0, 0).setAlpha(0.2)
    // this.add.text(15, -8, 'ワルコフォレンスの森', { align: 'center', fontSize: 16, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setPosition(config.WIDTH.half, config.HEIGHT.half)
    // setTimeout(() => {
    //   this.gameScene.blur(true)
    // }, 100)
  }
  update (time, delta) {
    this.battlerSummary.update()
    if (!this.gameScene) return
    if (!this.minimap) return
    const x = this.gameScene.player.x
    const y = this.gameScene.player.y
    const size = config.TILE_SIZE / this.minimap.size
    this.minimap.field.setPosition((this.minimap.width / 2) - (x / size), (this.minimap.height / 2) - (y / size))
    this.minimap.player.setRotation(this.gameScene.player.r)
  }
  onMapChanged () {
    this.battlerSummary.show()
  }
  showController (bool) {
    this.menuButton.visible = bool
  }
  get gameScene () {
    return this.scene.get('Game')
  }
  get inBattle () {
    return this.children.list.some(v => v instanceof Battle)
  }
  loadEncounter () {
    // 1
    this.encounter1 = this.add.container((70).byRight, 70).setSize(84, 85)
    this.encounter1.add(this.add.sprite(0, 0, 'encounter1').setOrigin(0.5, 0.5).setScale(0.9, 0.9))
    this.encounter1.add(this.add.sprite(0, 60, 'click').setOrigin(0.5, 0.5).setScale(1, 1))
    this.add.tween({ targets: this.encounter1.list[0], duration: 400, ease: 'Power2', loop: -1, scaleX: 1.1, scaleY: 1.1 })
    this.add.tween({ targets: this.encounter1.list[1], duration: 400, loop: -1, yoyo: true, y: 65 })
    this.encounter1.setInteractive().on('pointerdown', () => this.gameScene.encounter(true))
    // 2
    this.encounter2 = this.add.sprite((70).byRight, 70, 'encounter2').setOrigin(0.5, 0.5).setScale(0.9, 0.9)
    this.add.tween({ targets: this.encounter2, duration: 400, ease: 'Power2', loop: -1, scaleX: 1.1, scaleY: 1.1 })
    this.setEncounter(false)
  }
  setEncounter (bool, stronger) {
    if (bool) {
      this[stronger ? 'encounter1' : 'encounter2'].visible = bool
    } else {
      this.encounter1.visible = false
      this.encounter2.visible = false
    }
  }
  async announce (text) {
    const announcement = this.add.container(20, 50)
    const tx = this.add.text(15, -1, text, { align: 'left', fontSize: 13, fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0, 0.5)
    const bg = new Box(this, 0, 0, tx.width + 35, 27).setOrigin(0, 0.5)
    announcement.add([bg, tx])
    await slideIn(this, announcement)
    await slideOut(this, announcement, { x: -200, delay: 2000 })
    return announcement
  }
  menu () {
    return new Promise(resolve => new Menu(this, resolve))
  }
  worldMap () {
    return new Promise(resolve => new WorldMap(this, resolve))
  }
  talk (talks) {
    return new Promise(resolve => new Talk(this, talks, resolve))
  }
  select (options) {
    return new Promise(resolve => new Select(this, options, resolve))
  }
  battle (group, option) {
    this.gameScene.setEncountDelay()
    return new Promise(resolve => new Battle(this, group, option, resolve))
  }
  battleResult (group) {
    return new Promise(resolve => new BattleResult(this, group, resolve))
  }
  sleep (time) {
    return new Promise(resolve => setTimeout(() => resolve(), time))
  }
  transition (speed) {
    const duration = speed === 'slow' ? 300 : 150
    const hold = speed === 'slow' ? 200 : 100
    return new Promise(resolve => {
      const rect = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0).setAlpha(0)
      this.add.tween({
        targets: rect,
        duration,
        hold,
        alpha: 1,
        yoyo: true,
        onYoyo: resolve,
        onComplete: () => rect.destroy()
      })
    })
  }
  setEventMode (bool) {
    this.eventMode = bool
    if (bool) {
      this.gameScene.player.stopWalk()
      this.blocker.setVisible(true)
      this.menuButton.setVisible(false)
      this.battlerSummary.hide()
    } else {
      this.menuButton.setVisible(true)
      this.time.delayedCall(1, () => {
        this.blocker.setVisible(true)
      })
    }
  }
  getMenuButton (x, y) {
    const button = this.add.container(x, y).setSize(120, 50)
    button.add(this.add.rectangle(0, 0, 120, 50, config.COLORS.black).setAlpha(0))
    button.add(this.add.text(15, -8, 'MENU', { align: 'center', fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.text(15, 11, 'メニュー', { align: 'center', fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / 1))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / -2))
    button.setInteractive().on('pointerdown', () => {
      if (button.x !== x || this.inBattle) return
      slideOut(this, this.encounter1, { destroy: false, x: 100 })
      slideOut(this, this.encounter2, { destroy: false, x: 100 })
      slideOut(this, button, { destroy: false, x: 100 })
      this.menu().then(() => {
        button.x = x
        this.encounter1.x = (70).byRight
        this.encounter2.x = (70).byRight
        slideIn(this, this.encounter1, { x: 100, delay: 100 })
        slideIn(this, this.encounter2, { x: 100, delay: 100 })
        slideIn(this, button, { x: 100, delay: 100 })
        this.battlerSummary.show()
      })
    })
    return button
  }
  chapterStart (text) {
    return new Promise(resolve => {
      const m = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, text, { fill: config.COLORS.white.toColorString, fontSize: 16, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5)
      new StoryTelling(this, [m], false).on('beforeEnd', () => {
        resolve()
      })
    })
  }
  storyTelling () {
    return new Promise(resolve => {
      const m1 = this.add.container(config.WIDTH.half, config.HEIGHT.half)
      m1.add(this.add.text(0, 0 - 35, MESSAGES[0], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      m1.add(this.add.text(185, 0 + 55, MESSAGES[1], { align: 'right', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15))
      const m2 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[2], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m3 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[3], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      const m4 = this.add.text(config.WIDTH.half, config.HEIGHT.half - 5, MESSAGES[4], { align: 'left', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5).setLineSpacing(15)
      new StoryTelling(this, [m1, m2, m3, m4], true).on('beforeEnd', () => {
        resolve()
      })
    })
  }
  snapShot () {
    const filename = `ScreenShot_${moment().format('YYYYMMDD_HHmmss')}.png`
    this.game.renderer.snapshot(img => downloadImageBySource(img.src, filename))
  }
  renderMiniMap (tilemap) {
    const SIZE = 4
    const WIDTH = 120
    const HEIGHT = 120
    const LEFT = (20 + WIDTH).byRight
    const TOP = (20 + HEIGHT).byBottom
    if (this.minimap) this.minimap.destroy()
    const field = this.make.graphics()
    field.fillStyle(0xffeecc)
    field.fillRect(0, 0, tilemap.width * SIZE, tilemap.height * SIZE)
    field.fillStyle(0xddccaa)
    tilemap.layers.forEach(layer => {
      layer.data.forEach((row, rowIndex) => {
        row.forEach((cell, cellIndex) => {
          if (cell.collides) field.fillRect(cellIndex * SIZE, rowIndex * SIZE, SIZE, SIZE)
        })
      })
    })
    const ratio = config.TILE_SIZE / SIZE
    field.fillStyle(0x66CCAA)
    tilemap.objects.forEach(layer => {
      layer.objects.filter(o => o.type === 'gate').forEach(gate => {
        field.fillRect(gate.x / ratio, gate.y / ratio, gate.width / ratio, gate.height / ratio)
      })
    })
    const bg = this.add.rectangle(0, 0, WIDTH, HEIGHT, 0xddccaa).setOrigin(0, 0)
    const tri = this.add.triangle(WIDTH / 2, HEIGHT / 2, 0, 0, 0, 6, 5, 3, 0xee8822)
    this.minimap = this.add.container(LEFT, TOP).setSize(WIDTH, HEIGHT)
    this.minimap.add([bg, field, tri])
    this.minimap.field = field
    this.minimap.player = tri
    this.minimap.size = SIZE
    const mask = this.make.graphics().fillRoundedRect(LEFT, TOP, WIDTH, HEIGHT, 5).createGeometryMask()
    this.minimap.setMask(mask)
  }
}
