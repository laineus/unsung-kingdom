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
    // name
    this.nameLabel = this.scene.add.text(-138, 15, 'Ann', { fill: '#AACC22', stroke: '#222', strokeThickness: 2, fontSize: 22, fontStyle: 'bold', fontFamily: 'Ubuntu' })
    this.add(this.nameLabel)
    // lv
    this.lvLabel = this.scene.add.text(-36, 38, 'Lv 15', { fill: '#AAAAAA', stroke: '#222', strokeThickness: 2, fontSize: 13, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(0, 1)
    this.add(this.lvLabel)
    // hp
    this.hpLabel = this.scene.add.text(-36, -30, 'HP', { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 11, fontStyle: 'bold', fontFamily: 'Ubuntu' })
    this.add(this.hpLabel)
    this.hpMaxLabel = this.scene.add.text(125, -15, '/200', { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 16, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(1, 1)
    this.add(this.hpMaxLabel)
    this.hpValueLabel = this.scene.add.text(this.hpMaxLabel.x - this.hpMaxLabel.width, -14, '180', { fill: '#FFEEBB', stroke: '#222', strokeThickness: 2, fontSize: 22, fontStyle: 'bold', fontFamily: 'Ubuntu' }).setOrigin(1, 1)
    this.add(this.hpValueLabel)
    // weapon
    this.lvLabel = this.scene.add.text(122, 38, 'ロングソード', { fill: '#AAAAAA', stroke: '#222', strokeThickness: 2, fontSize: 14, fontFamily: 'Ubuntu' }).setOrigin(1, 1)
    this.add(this.lvLabel)
    // gauge
    this.gauge = new Gauge(this.scene, 160, 10, this.maxHp).setPosition(45, -8)
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
