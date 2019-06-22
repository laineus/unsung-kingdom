import Battler from './Battler'
import Gauge from './Gauge'
export default class PlayerBattler extends Battler {
  constructor (scene, status) {
    super(scene, status)
    // image
    this.sprite = this.scene.add.sprite(0, 120, 'jaquelyn')
    this.sprite.setScale(0.5)
    this.add(this.sprite)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 6, this.maxHp).setPosition(0, 120)
    this.add(this.gauge)
  }
  die () {
    this.sprite.setTint(0x555555)
  }
}
