import Battler from './Battler'
import Gauge from './Gauge'
import Box from './Box'
import config from '../data/config'
import weapons from '../data/weapons'
import storage from '../data/storage'
export default class PlayerBattler extends Battler {
  constructor (scene, status) {
    super(scene, status)
    // bgLight
    this.bgLight = this.scene.add.polygon(-5, -16, [[26, 0], [104, 40], [300, 40], [282, 130], [0, 130]], config.COLORS.theme)
    // this.bgLight = this.scene.add.polygon(-15, -16, [[26, 0], [282, 130], [0, 130]], config.COLORS.theme)
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
    this.sprite = this.scene.add.sprite(-90, -60, this.key)
    this.sprite.setScale(0.7).setOrigin(0.5, 0)
    this.add(this.sprite)
    this.sprite.setCrop(0, 0, this.sprite.width, 150)
    // name
    this.nameLabel = this.scene.add.text(-138, 15, this.name, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 22, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    this.add(this.nameLabel)
    // lv
    this.lvLabel = this.scene.add.text(-36, 38, `Lv ${this.lv}`, { fill: config.COLORS.gray.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 15, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0, 1)
    this.add(this.lvLabel)
    // hp
    this.hpLabel = this.scene.add.text(-36, -25, 'HP', { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    this.add(this.hpLabel)
    this.hpMaxLabel = this.scene.add.text(125, -10, `/${this.maxHp}`, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 18, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(1, 1)
    this.add(this.hpMaxLabel)
    this.hpValueLabel = this.scene.add.text(this.hpMaxLabel.x - this.hpMaxLabel.width, -9, this.hp, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 24, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(1, 1)
    this.add(this.hpValueLabel)
    // gauge
    this.gauge = new Gauge(this.scene, 160, 10, { valueMax: this.maxHp, color: config.COLORS.theme, blood: true }).setPosition(45, -3)
    this.gauge.value = this.hp
    this.add(this.gauge)
    // weapon
    this.setWeapon()
    const padding = this.weapon && this.weapon.ability ? 24 : 0
    this.weaponLabel = this.scene.add.container(122, 38).setSize(360, 45)
    const weaponName = this.scene.add.text(-padding, 0, this.weapon ? this.weapon.name : '-', { fill: config.COLORS.gray.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 11, fontFamily: config.FONTS.TEXT }).setOrigin(1, 1)
    this.weaponLabel.add(weaponName)
    if (this.weapon) {
      const icon = this.scene.add.sprite(-weaponName.width - padding, 2, `icon/${this.weapon.icon}`).setScale(0.18).setOrigin(1, 1).setTint(config.COLORS.gray)
      this.weaponLabel.add(icon)
      if (this.weapon.ability) {
        const ability = this.scene.add.sprite(0, 1, 'weapon_abilities').setFrame(this.weapon.ability - 1).setOrigin(1, 1)
        this.weaponLabel.add(ability)
      }
    }
    this.add(this.weaponLabel)
  }
  get hp () {
    return this.source.hp
  }
  set hp (value) {
    this.source.hp = Math.fix(value, 0, this.maxHp)
    if (!this.gauge) return
    this.gauge.value = this.hp
    this.hpMaxLabel.setText(`/${this.maxHp}`)
    this.hpValueLabel.setText(this.hp)
  }
  get hitSE () {
    return 'hit'
  }
  setWeapon () {
    const src = storage.state.weapons.find(v => v.id === this.source.weapon)
    this.weapon = src ? weapons.find(v => v.id === src.weapon_id) : null
    if (!this.weapon) return
    ['atk', 'def', 'dex', 'agi'].filter(key => this.weapon[key]).forEach(key => {
      this[key] += this.weapon[key]
    })
    this.effect = this.weapon.effect
  }
  die () {
    this.scene.audio.se('die')
    return new Promise(resolve => {
      this.sprite.setTint(0x555555)
      resolve()
    })
  }
  setActive (bool) {
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
