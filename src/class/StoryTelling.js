import { fadeIn, fadeOut } from '../util/animations'
import config from '../data/config'
export default class StoryTelling extends Phaser.GameObjects.Container {
  constructor (scene, messages, waitToClick = false) {
    super(scene)
    this.scene = scene
    this.messages = messages
    this.waitToClick = waitToClick
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0).setInteractive()
    this.add(this.bg)
    messages.filter(m => typeof m !== 'string').forEach(m => m.setAlpha(0))
    this.tri = this.scene.add.triangle((25).byRight, (20).byBottom, -5, -3, 5, -3, 0, 4, config.COLORS.white).setAlpha(0)
    scene.add.tween({ targets: this.tri, duration: 400, loop: -1, yoyo: true, y: this.tri.y - 4 })
    this.add(this.tri)
    this.exec()
  }
  async exec () {
    await fadeIn(this.scene, this.bg, { duration: 1000 })
    await this.sleep(1500)
    await this.execRow()
    this.emit('beforeEnd')
    await fadeOut(this.scene, this.bg, { duration: 1000 })
    this.destroy()
  }
  async execRow (index = 0) {
    const text = this.messages[index] instanceof String ? this.scene.add.text(config.WIDTH.half, config.HEIGHT.half, this.messages[index], { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.TEXT }).setOrigin(0.5, 0.5) : this.messages[index]
    this.add(text)
    await fadeIn(this.scene, text)
    this.waitToClick ? await this.waitClick() : await this.sleep(3000)
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
  waitClick () {
    this.tri.setAlpha(1)
    return new Promise(resolve => {
      const callback = () => {
        this.tri.setAlpha(0)
        this.bg.off('pointerdown', callback)
        resolve()
      }
      this.bg.on('pointerdown', callback)
    })
  }
}
