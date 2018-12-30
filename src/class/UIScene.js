import Talk from './Talk'
import config from '../data/config'
export default class UIScene extends Phaser.Scene {
  constructor () {
    super({ key: 'UI', active: false })
  }
  create () {
    this.talk = new Talk(this)
  }
  update (time, delta) {
  }
  transition (callback = null) {
    this.scene.pause('Game')
    const left = this.add.rectangle(0, config.HEIGHT / -2, config.WIDTH, config.HEIGHT / 2, 0x111111).setOrigin(0, 0)
    this.add.tween({
      targets: left,
      duration: 150,
      y: 0,
      yoyo: true
    })
    const right = this.add.rectangle(0, config.HEIGHT, config.WIDTH, config.HEIGHT / 2, 0x111111).setOrigin(0, 0)
    this.add.tween({
      targets: right,
      duration: 150,
      y: config.HEIGHT / 2,
      yoyo: true,
      onYoyo: callback,
      onComplete: () => {
        this.scene.resume('Game')
        left.destroy()
        right.destroy()
      }
    })
  }
}
