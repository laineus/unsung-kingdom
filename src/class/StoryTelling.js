import { fadeIn, fadeOut } from '../util/animations'
import config from '../data/config'
export default class StoryTelling extends Phaser.GameObjects.Container {
  constructor (scene, messages, callback = null, waitToClick = false) {
    super(scene)
    this.scene = scene
    this.messages = messages
    this.callback = callback
    this.waitToClick = waitToClick
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0)
    this.add(this.bg)
    this.exec()
  }
  async exec () {
    await fadeIn(this.scene, this.bg)
    await this.sleep(1500)
    await this.execRow()
    await fadeOut(this.scene, this.bg)
    this.destroy()
    this.callback()
  }
  async execRow (index = 0) {
    const text = this.scene.add.text(config.WIDTH.half, config.HEIGHT.half, this.messages[index], { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 24, fontFamily: config.FONT }).setOrigin(0.5, 0.5)
    this.add(text)
    await fadeIn(this.scene, text)
    await this.sleep(2000)
    await fadeOut(this.scene, text)
    await this.sleep(700)
    return index < (this.messages.length - 1) ? this.execRow(index + 1) : null
  }
  sleep (time) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve()
      }, time)
    })
  }
}
