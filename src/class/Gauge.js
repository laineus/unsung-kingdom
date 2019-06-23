export default class Gauge extends Phaser.GameObjects.Container {
  constructor (scene, width, height, valueMax = 100) {
    super(scene)
    this.scene = scene
    scene.add.existing(this)
    this.bg = scene.add.rectangle(0, 0, width, height, 0x222222).setOrigin(0, 0.5).setPosition(width / -2, 0)
    this.bar = scene.add.rectangle(0, 0, width - 2, height - 2, 0xAACC22).setOrigin(0, 0.5).setPosition((width / -2) + 1, 0)
    this.add([this.bg, this.bar])
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
