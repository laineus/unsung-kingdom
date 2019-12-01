import config from '../data/config'
export default class Gauge extends Phaser.GameObjects.Container {
  constructor (scene, width, height, { value = null, valueMax = 100, color = config.COLORS.theme, blood = false } = {}) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, width, height, config.COLORS.dark).setOrigin(0, 0.5).setPosition(width / -2, 0)
    this.add(this.bg)
    if (blood) {
      this.blood = scene.add.rectangle(0, 0, width - 2, height - 2, 0xCC0000).setOrigin(0, 0.5).setPosition((width / -2) + 1, 0).setScale(0, 1)
      this.add(this.blood)
    }
    this.bar = scene.add.rectangle(0, 0, width - 2, height - 2, color).setOrigin(0, 0.5).setPosition((width / -2) + 1, 0)
    this.add(this.bar)
    this.valueMax = valueMax
    this.value = value === null ? valueMax : value
  }
  get value () {
    return this._value
  }
  set value (value) {
    this._value = Math.min(Math.max(value, 0), this.valueMax)
    this.bar.setScale(this.barScale, 1)
    if (this.blood) this.scene.add.tween({ targets: this.blood, duration: 700, ease: 'Power2', scaleX: this.barScale })
  }
  get barScale () {
    return this.value / this.valueMax
  }
}
