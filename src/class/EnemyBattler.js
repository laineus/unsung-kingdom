import Battler from './Battler'
import Gauge from './Gauge'
export default class EnemyBattler extends Battler {
  constructor (scene) {
    super(scene)
    this.setStatus({ hp: 500, atk: 1, def: 1, dex: 1, agi: 1 })
    // image
    this.sprite = this.scene.add.sprite(0, 0, 'torrent')
    this.sprite.setScale(1)
    this.add(this.sprite)
    // tapArea
    this.tapArea = this.scene.add.rectangle(0, 0, 200, 200).setInteractive()
    this.tapArea.on('pointerdown', pointer => {
      this.addDamage(Math.randomInt(60, 200))
    })
    this.add(this.tapArea)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 6, this.maxHp).setPosition(0, -80)
    this.add(this.gauge)
  }
  addDamage (damage) {
    super.addDamage(damage)
    if (this.hp <= 0) this.die()
  }
  die () {
    this.sprite.setTint(0xFF0000)
    this.scene.add.tween({
      targets: this.sprite, duration: 300, ease: 'Power2',
      scaleX: 1.3, scaleY: 1.3, alpha: 0.2,
      onComplete: () => this.destroy()
    })
  }
}
