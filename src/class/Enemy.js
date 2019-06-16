import Gauge from './Gauge'
export default class Enemy extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    this.setPosition()
    // image
    this.sprite = this.scene.add.sprite(0, 0, 'torrent')
    this.sprite.setScale(1)
    this.add(this.sprite)
    // tapArea
    this.tapArea = this.scene.add.rectangle(0, 0, 200, 200).setInteractive()
    this.tapArea.on('pointerdown', pointer => {
      this.addDamage(Math.randomInt(30, 100))
    })
    this.add(this.tapArea)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 6, 500).setPosition(0, -80)
    this.add(this.gauge)
  }
  addDamage (damage) {
    this.gauge.value -= damage
    if (this.gauge.value <= 0) this.destroy()
  }
}
