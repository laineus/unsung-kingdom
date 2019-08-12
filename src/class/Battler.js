import config from '../data/config'
export default class Battler extends Phaser.GameObjects.Container {
  constructor (scene, status) {
    super(scene)
    this.scene = scene
    this.setActive(false)
    this.setStatus(status || { hp: 1, atk: 1, def: 1, dex: 1, agi: 1 })
    this.actionPoint = 0
  }
  setStatus (option) {
    this.source = option
    this.key = option.key
    this.name = option.name
    this.lv = option.lv
    this.maxHp = option.maxHp || option.hp
    this.hp = option.hp
    this.atk = option.atk
    this.def = option.def
    this.dex = option.dex
    this.agi = option.agi
  }
  get alive () {
    return this.hp > 0
  }
  setActive (bool) {
    this.active = bool
  }
  increaseTurn () {
    const sum = this.actionPoint + this.agi
    this.actionPoint = sum % 100
    const result = sum >= 100
    this.setActive(result)
    return result
  }
  baseDamageTo (target) {
    return (this.atk - target.def) + 10
  }
  weaknessTo (target) {
    return 1
  }
  accuracyTo (target) {
    return this.dex * 80 / target.agi
  }
  criticalTo (target) {
    return Math.fix(this.dex * 1.5 - target.agi, 0, 25)
  }
  attackTo (target, { multi = false } = {}) {
    const baseDamage = multi ? Math.round(this.baseDamageTo(target) * 0.66) : this.baseDamageTo(target)
    const cri = Math.chance(this.criticalTo(target))
    const weakness = this.weaknessTo(target)
    const hit = Math.chance(this.accuracyTo(target))
    this.setActive(false)
    return target.addDamage(baseDamage, cri, weakness, hit)
  }
  async addDamage (baseDamage, cri, weakness, hit) {
    if (hit) {
      const damage = baseDamage * (cri ? 2 : 1) * weakness
      this.hp -= damage
      this.damageEffect()
      this.damageText(damage)
      return this.hp <= 0 ? this.die() : null
    }
    return this.damageText('Miss')
  }
  heal (target, percent) {
    this.setActive(false)
    const limit = target.maxHp - target.hp
    const addition = Math.min(Math.round(target.maxHp * percent * 0.01), limit)
    target.hp += addition
    target.damageText(addition, 'theme')
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
  damageText (damage, colorKey = 'soy') {
    const text = this.scene.add.text(0, 0, damage, { fill: config.COLORS[colorKey].toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 5, fontSize: 32, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0.5, 0.5)
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
