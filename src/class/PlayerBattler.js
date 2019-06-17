import Battler from './Battler'
import Gauge from './Gauge'
export default class PlayerBattler extends Battler {
  constructor (scene) {
    super(scene)
    this.setHp(500)
    // image
    this.sprite = this.scene.add.sprite(0, 120, 'jaquelyn')
    this.sprite.setScale(0.5)
    this.add(this.sprite)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 6, this.maxHp).setPosition(0, 120)
    this.add(this.gauge)
  }
  addDamage (damage) {
    super.addDamage(damage)
    if (this.hp <= 0) this.die()
  }
  die () {
    this.sprite.setTint(0x555555)
  }
}
