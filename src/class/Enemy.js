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
    this.damageEffect()
    this.damageText(damage)
    if (this.gauge.value <= 0) {
      setTimeout(() => this.destroy(), 1000)
    }
  }
  damageEffect () {
    const eff = this.scene.add.sprite(0, 0, 'damage').setScale(0.5, 0.5).setPosition(Math.randomInt(-30, 30), Math.randomInt(-30, 30))
    const scale = Math.randomInt(12, 17) / 10
    this.add(eff)
    this.scene.add.tween({
      targets: eff, duration: 120,
      scaleX: scale, scaleY: scale, alpha: 0.2,
      onComplete: () => eff.destroy()
    })
  }
  damageText (damage) {
    const text = this.scene.add.text(0, 0, damage, { fill: '#FFEEBB', stroke: '#222', strokeThickness: 5, fontSize: 32, fontStyle: 'bold' })
    this.scene.add.tween({
      targets: text, duration: 120,
      y: -40,
      onComplete: () => {
        this.scene.add.tween({
          targets: text, duration: 120,
          y: -60, alpha: 0.2,
          onComplete: () => text.destroy()
        })
      }
    })
    this.add(text)
  }
}
