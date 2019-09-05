import moment from 'moment'
import Talk from './Talk'
import config from '../data/config'
import storage from '../data/storage'
import Select from './Select'
import downloadImageBySource from '../util/downloadImageBySource'
import Battle from './Battle'
import BattleResult from './BattleResult'
import Menu from './Menu'
import { slideIn, slideOut, fadeIn, fadeOut } from '../util/animations'
import BattlerSummary from './BattlerSummary'
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create () {
    this.storage = storage
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
    this.menuButton = this.getMenuButton((70).byRight, (35).byBottom)
    this.add.existing(this.menuButton)
    this.loadEncounter()
    storage.state.battlers.map((battler, i) => {
      const s = new BattlerSummary(this, 120 + (i * 140), (42).byBottom, battler)
      this.add.existing(s)
    })
  }
  update (time, delta) {
    if (!this.gameScene) return
    if (!this.minimap) return
    const x = this.gameScene.player.x
    const y = this.gameScene.player.y
    const size = config.TILE_SIZE / this.minimap.size
    this.minimap.field.setPosition((this.minimap.width / 2) - (x / size), (this.minimap.height / 2) - (y / size))
    this.minimap.player.setRotation(this.gameScene.player.r)
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
  }
  setEncounter (bool, stronger) {
    if (bool) {
      this[stronger ? 'encounter1' : 'encounter2'].visible = bool
    } else {
      this.encounter1.visible = false
      this.encounter2.visible = false
    }
  }
  menu () {
    return new Promise(resolve => new Menu(this, resolve))
  }
  talk (talks) {
    return new Promise(resolve => new Talk(this, talks, resolve))
  }
  select (options) {
    return new Promise(resolve => new Select(this, options, resolve))
  }
  battle (group, option) {
    return new Promise(resolve => new Battle(this, group, option, resolve))
  }
  battleResult (group) {
    return new Promise(resolve => new BattleResult(this, group, resolve))
  }
  sleep (time) {
    this.scene.pause('Game')
    return new Promise(resolve => {
      setTimeout(() => {
        this.scene.resume('Game')
        resolve()
      }, time)
    })
  }
  transition () {
    this.scene.pause('Game')
    return new Promise(resolve => {
      const left = this.add.rectangle(0, -config.HEIGHT_HALF, config.WIDTH, config.HEIGHT_HALF, 0x111111).setOrigin(0, 0)
      this.add.tween({
        targets: left,
        duration: 150,
        hold: 100,
        y: 0,
        yoyo: true
      })
      const right = this.add.rectangle(0, config.HEIGHT, config.WIDTH, config.HEIGHT_HALF, 0x111111).setOrigin(0, 0)
      this.add.tween({
        targets: right,
        duration: 150,
        hold: 100,
        y: config.HEIGHT_HALF,
        yoyo: true,
        onYoyo: resolve,
        onComplete: () => {
          this.scene.resume('Game')
          left.destroy()
          right.destroy()
        }
      })
    })
  }
  getMenuButton (x, y) {
    const button = this.add.container(x, y).setSize(120, 50)
    button.add(this.add.rectangle(0, 0, 120, 50, config.COLORS.black).setAlpha(0))
    button.add(this.add.text(15, -8, 'MENU', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.text(15, 11, 'メニュー', { align: 'center', fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT }).setPadding(0, 2, 0, 0).setOrigin(0.5, 0.5))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / 1))
    button.add(this.add.rectangle(-35, -1, 25, 3, config.COLORS.theme).setRotation(Math.PI / -2))
    button.setInteractive().on('pointerdown', () => {
      if (button.x !== x || this.inBattle) return
      slideOut(this, button, { destroy: false, x: 100 })
      this.menu().then(() => {
        button.x = x
        slideIn(this, button, { x: 100, delay: 100 })
      })
    })
    return button
  }
  snapShot () {
    const filename = `ScreenShot_${moment().format('YYYYMMDD_HHmmss')}.png`
    this.game.renderer.snapshot(img => downloadImageBySource(img.src, filename))
  }
  renderMiniMap (tilemap) {
    return
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
