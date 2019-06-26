import Battler from './Battler'
import Gauge from './Gauge'
export default class EnemyBattler extends Battler {
  constructor (scene, status) {
    super(scene, status)
    // image
    this.sprite = this.scene.add.sprite(0, 0, 'torrent')
    this.sprite.setScale(1)
    this.add(this.sprite)
    // name
    this.nameLabel = this.scene.add.text(0, -155, 'トレント Lv 6', { fill: '#AAAAAA', stroke: '#222', strokeThickness: 2, fontSize: 12, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(0.5, 1)
    this.add(this.nameLabel)
    // hp
    this.hpMaxLabel = this.scene.add.text(0, -136, `/${this.maxHp}`, { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 12, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(0, 1)
    this.add(this.hpMaxLabel)
    this.hpValueLabel = this.scene.add.text(0, -135, this.hp, { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 16, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(1, 1)
    this.add(this.hpValueLabel)
    // gauge
    this.gauge = new Gauge(this.scene, 100, 7, this.hp, 0xEE8811).setPosition(0, -130)
    this.add(this.gauge)
  }
  get hp () {
    return this._hp
  }
  set hp (value) {
    this._hp = Math.fix(value, 0, this.maxHp)
    if (!this.gauge) return
    this.gauge.value = this.hp
    this.hpMaxLabel.setText(`/${this.maxHp}`)
    this.hpValueLabel.setText(this.hp)
  }
  addDamage (baseDamage, cri, weakness, hit) {
    super.addDamage(baseDamage, cri, weakness, hit)
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
