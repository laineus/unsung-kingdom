import moment from 'moment'
import Talk from './Talk'
import config from '../data/config'
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create () {
    this.talk = new Talk(this)
    this.input.keyboard.on('keydown_S', this.snapShot.bind(this))
  }
  update (time, delta) {
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
    const time = moment()
    this.game.renderer.snapshot(img => {
      const link = document.createElement('a')
      link.href = img.src
      link.download = `ScreenShot_${time.format('YYYYMMDD_HHmmss')}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    })
  }
  renderMiniMap (tilemap, size = 4) {
    const SIZE = 4
    const WIDTH = 180
    const HEIGHT = 180
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
    const mask = this.make.graphics().fillStyle(0x555555).fillRect(0, 0, WIDTH, HEIGHT)
    this.minimap = this.add.container()
    this.minimap.setPosition(20, 20)
    this.minimap.add([mask, field])
    this.minimap.setMask(new Phaser.Display.Masks.GeometryMask(this, mask))
  }
}
