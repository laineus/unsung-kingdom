import Battler from './Battler'
import Gauge from './Gauge'
import Box from './Box'
export default class PlayerBattler extends Battler {
  constructor (scene, status) {
    super(scene, status)
    // bgLight
    this.bgLight = this.scene.add.polygon(-5, -16, [[26, 0], [104, 40], [300, 40], [282, 130], [0, 130]], 0xAACC22)
    // this.bgLight = this.scene.add.polygon(-15, -16, [[26, 0], [282, 130], [0, 130]], 0xAACC22)
    this.bgLight.alpha = 0.7
    this.bgLight.blendMode = 1
    this.add(this.bgLight)
    // bg
    this.bg = new Box(this.scene, 0, 0, 300, 90)
    this.add(this.bg)
    // bg2
    this.bg2 = this.scene.add.polygon(-9, -20, [[26, 0], [282, 130], [0, 130]], 0x111111)
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
    this.gauge = new Gauge(this.scene, 160, 10, this.maxHp, 0xAACC22).setPosition(45, -8)
    this.add(this.gauge)
  }
  die () {
    this.sprite.setTint(0x555555)
  }
  setActive(bool) {
    super.setActive(bool)
    if (this.bg2) this.bg2.visible = bool
    if (this.bgLight) {
      this.bgLight.visible = bool
      this.bgLight.setPosition(0, -21).setAlpha(0)
      this.scene.add.tween({
        targets: this.bgLight,
        duration: 300, ease: 'Power2',
        x: -5, y: -16, alpha: 1
      })
    }
  }
}
