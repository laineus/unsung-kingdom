import Battler from './Battler'
import Gauge from './Gauge'
import Box from './Box'
export default class PlayerBattler extends Battler {
  constructor (scene, status) {
    super(scene, status)
    // bg
    this.bg = new Box(this.scene, 0, 0, 300, 90)
    this.add(this.bg)
    // bg2
    this.bg2 = this.scene.add.polygon(-9, -20, [[26, 0], [282, 130], [0, 130]], 0xaacc22)
    this.add(this.bg2)
    // image
    this.sprite = this.scene.add.sprite(-180, -60, 'ann')
    this.sprite.setScale(0.7).setOrigin(0, 0)
    this.add(this.sprite)
    this.sprite.setCrop(0, 0, this.sprite.width, 150)
    // gauge
    this.gauge = new Gauge(this.scene, 140, 8, this.maxHp).setPosition(50, -10)
    this.add(this.gauge)
  }
  die () {
    this.sprite.setTint(0x555555)
  }
  setActive(bool) {
    super.setActive(bool)
    if (this.bg2) this.bg2.visible = bool
  }
}
