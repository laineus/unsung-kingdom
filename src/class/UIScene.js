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
}
