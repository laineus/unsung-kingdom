import Box from './Box'
import config from '../data/config'
export default class Button extends Phaser.GameObjects.Container {
  constructor (scene, x, y, text, width = 120, height = 80, option = {}) {
    super(scene, x, y)
    this.setSize(width, height).setInteractive()
    this.bgLight = new Box(scene, -4, 4, width, height, { color: 0xAACC22, alpha: 1 }).setOrigin(0.5, 0.5)
    this.bgLight.visible = false
    const bg = new Box(scene, 0, 0, width, height, { color: 0x000000, lineColor: 0xffffff }).setOrigin(0.5, 0.5)
    const tx = scene.add.text(0, 0, text, { align: 'center', fontFamily: config.FONT }).setOrigin(0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([this.bgLight, bg, tx])
    this.on('pointerover', () => {
      this.bgLight.visible = true
    })
    this.on('pointerout', () => {
      this.bgLight.visible = false
    })
    this.on('pointerdown', () => {
      this.emit('click')
    })
  }
  toInactive () {
    this.bgLight.visible = false
  }
}
