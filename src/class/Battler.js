import config from '../data/config'
import BattleEffect from './BattleEffect'
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
    this.maxHp = option.max_hp || option.hp
    this.hp = option.hp
    this.atk = option.atk
    this.def = option.def
    this.dex = option.dex
    this.agi = option.agi
    this.effect = option.effect
    this.abillities = option.abillities || []
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
    const base = (this.atk - target.def) + 10
    const lvCorrection = Math.max((this.lv - target.lv) * 0.6, 1)
    return Math.round(base * lvCorrection)
  }
  weaknessTo (target) {
    return 1
  }
  accuracyTo (target) {
    return this.dex * 80 / target.agi
  }
  criticalTo (target) {
    return Math.fix((this.dex - target.agi) * 4, 1, 25)
  }
  getAttackMode () {
    return this.abillities.find(v => Math.chance(v.chance)) || { type: 'normal', mag: 1 }
  }
  async attackTo (target, { mag = 1 } = {}) {
    const baseDamage = Math.round(this.baseDamageTo(target) * mag)
    const cri = Math.chance(this.criticalTo(target))
    const weakness = this.weaknessTo(target)
    const hit = Math.chance(this.accuracyTo(target))
    this.setActive(false)
    return hit ? target.addDamage(this, baseDamage, cri, weakness) : target.damageText('Miss')
  }
  async addDamage (attacker, baseDamage, cri, weakness) {
    const damage = baseDamage * (cri ? 2 : 1) * weakness
    this.hp -= damage
    this.add(new BattleEffect(this.scene, cri, attacker.effect))
    this.damageText(damage)
    await this.scene.sleep(120)
    return this.hp <= 0 ? this.die() : null
  }
  heal (target, percent) {
    this.setActive(false)
    const limit = target.maxHp - target.hp
    const addition = Math.min(Math.round(target.maxHp * percent * 0.01), limit)
    target.hp += addition
    target.damageText(addition, 'theme')
  }
  damageText (damage, colorKey = 'soy') {
    const text = this.scene.add.text(0, 0, damage, { fill: config.COLORS[colorKey].toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 5, fontSize: 36, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0.5, 0.5)
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
