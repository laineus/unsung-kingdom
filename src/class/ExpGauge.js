import config from '../data/config'
export default class ExpGauge extends Phaser.GameObjects.Container {
  constructor (scene, x, y, width, valueMax = 100) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.setPosition(x, y)
    const height = 3
    this.bg = scene.add.rectangle(-width.half, 0, width, 1, config.COLORS.soy).setOrigin(0, 0.5)
    this.bar = scene.add.rectangle(-width.half, 0, width - 9, height, config.COLORS.soy).setOrigin(0, 1)
    this.arrow = scene.add.polygon(width.half + 1, 5, [[0, -5], [0, 0], [10, 0]], config.COLORS.soy).setOrigin(1, 1)
    this.label = this.scene.add.text(-width.half, -4, 'EXP', { fill: config.COLORS.soy.toColorString, fontSize: 9, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 1)
    this.add([this.bg, this.bar, this.arrow, this.label])
    this.valueMax = valueMax
    this.value = valueMax
  }
  get value () {
    return this._value
  }
  set value (value) {
    this._value = Math.min(Math.max(value, 0), this.valueMax)
    this.bar.setScale(this.barScale, 1)
  }
  get barScale () {
    return this.value / this.valueMax
  }
}
