import moment from 'moment'
import Talk from './Talk'
import config from '../data/config'
import storage from '../data/storage'
import Select from './Select'
import downloadImageBySource from '../util/downloadImageBySource'
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create () {
    this.storage = storage
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
    // TODO: fix mask's bug
    this.menuButton = this.add.circle((40).byRight, 40, 20, 0xddccaa).setInteractive()
    this.menuButton.on('pointerdown', () => {
      if (this.menuWindow) return
      this.menuWindow = this.add.rectangle(20, 20, config.WIDTH - 40, config.HEIGHT - 40, 0x000000, 0.7).setOrigin(0, 0).setInteractive()
      this.menuWindow.on('pointerdown', () => {
        this.menuWindow.destroy()
        this.menuWindow = null
      })
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
  talk (talks, callback, autoDestroy) {
    return new Talk(this, talks, callback, autoDestroy)
  }
  select (options, callback) {
    return new Select(this, options, callback)
  }
  transition (callback = null) {
    this.scene.pause('Game')
    const left = this.add.rectangle(0, -config.HEIGHT_HALF, config.WIDTH, config.HEIGHT_HALF, 0x111111).setOrigin(0, 0)
    this.add.tween({
      targets: left,
      duration: 150,
      y: 0,
      yoyo: true
    })
    const right = this.add.rectangle(0, config.HEIGHT, config.WIDTH, config.HEIGHT_HALF, 0x111111).setOrigin(0, 0)
    this.add.tween({
      targets: right,
      duration: 150,
      y: config.HEIGHT_HALF,
      yoyo: true,
      onYoyo: callback,
      onComplete: () => {
        this.scene.resume('Game')
        left.destroy()
        right.destroy()
      }
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
