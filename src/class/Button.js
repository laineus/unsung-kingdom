import Box from './Box'
import config from '../data/config'
export default class Button extends Phaser.GameObjects.Container {
  constructor (scene, x, y, text, width = 120, height = 80, { align = 'center', fontSize = 16 } = {}) {
    super(scene, x, y)
    this.setSize(width, height).setInteractive()
    this.setSeKey('click')
    this.bgLight = new Box(scene, -4, 4, width, height, { color: config.COLORS.theme, alpha: 1 }).setOrigin(0.5, 0.5)
    this.bgLight.visible = false
    const bg = new Box(scene, 0, 0, width, height, { color: config.COLORS.black, lineColor: config.COLORS.white }).setOrigin(0.5, 0.5)
    const alignLeft = align === 'left'
    const fontFamily = text.match(/^[a-zA-Z0-9\s]+$/g) ? config.FONTS.UI : config.FONTS.TEXT
    this.text = scene.add.text(alignLeft ? -width.half + 20 : 0, -1, text, { align, fontSize, fontFamily }).setOrigin(alignLeft ? 0 : 0.5, 0.5).setPadding(0, 2, 0, 0)
    this.add([this.bgLight, bg, this.text])
    this.on('pointerover', () => {
      this.bgLight.visible = true
    })
    this.on('pointerout', () => {
      this.bgLight.visible = false
    })
    this.on('pointerup', p => {
      if (Math.abs(p.downX - p.upX) > 3 || Math.abs(p.downY - p.upY) > 3) return
      scene.audio.se(this.seKey)
      this.emit('click')
    })
  }
  setSeKey (key) {
    this.seKey = key
    return this
  }
  toInactive () {
    this.bgLight.visible = false
  }
  setText (text) {
    this.text.setText(text)
    return this
  }
}
