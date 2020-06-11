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
    const base = (this.atk - target.def) + 10 + this.lv
    const lvCorrection = Math.fix((this.lv - target.lv) * 0.6, 1, 4)
    return Math.round(base * lvCorrection)
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
  async attackTo (target, { mag = 1, counter = false } = {}) {
    const baseDamage = Math.round(this.baseDamageTo(target) * mag)
    const cri = !counter && Math.chance(this.criticalTo(target))
    const hit = counter || Math.chance(this.accuracyTo(target))
    this.setActive(false)
    return hit ? target.addDamage(this, baseDamage, { cri, counter }) : target.damageText('Miss')
  }
  async addDamage (attacker, baseDamage, { cri, counter } = {}) {
    const mag = (() => {
      if (cri) return 2
      return counter ? 1.5 : 1
    })()
    const damage = Math.round(baseDamage * mag)
    this.hp -= damage
    const largeEffect = (cri || counter)
    this.add(new BattleEffect(this.scene, largeEffect, attacker.effect))
    if (largeEffect) this.critical(counter)
    this.scene.audio.se(this.hitSE)
    this.damageText(damage, { large: largeEffect })
    await this.scene.sleep(120)
    return this.hp <= 0 ? this.die() : null
  }
  get hitSE () {
    return 'attack'
  }
  heal (target, percent) {
    this.setActive(false)
    const limit = target.maxHp - target.hp
    const addition = Math.min(Math.round(target.maxHp * percent * 0.01), limit)
    target.hp += addition
    this.scene.audio.se('heal')
    target.damageText(addition, { colorKey: 'theme' })
  }
  critical (counter) {
    const bg = this.scene.add.sprite(0, 0, 'critical_bg').setTint(counter ? 0xEE8811 : 0xCC0000).setScale(0)
    const tx = this.scene.add.sprite(0, 0, counter ? 'counter_tx' : 'critical_tx').setScale(0)
    this.scene.add.tween({
      targets: [bg, tx], duration: 30, scale: 2, ease: 'Power2', onComplete: () => {
        this.scene.add.tween({
          targets: [bg, tx], duration: 100, scale: 1, ease: 'Power2', onComplete: () => {
            this.scene.add.tween({
              targets: [bg, tx], duration: 300, delay: 100, alpha: 0, ease: 'Power2', onComplete: () => {
                bg.destroy()
                tx.destroy()
              }
            })
          }
        })
      }
    })
    this.add([bg, tx])
  }
  damageText (damage, { colorKey = 'soy', large = false } = {}) {
    const text = this.scene.add.text(0, 0, damage, { fill: config.COLORS[colorKey].toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 5, fontSize: large ? 43 : 30, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0.5, 0.5)
    this.scene.add.tween({
      targets: text, duration: 150,
      y: -40,
      onComplete: () => {
        this.scene.add.tween({
          targets: text, duration: 150,
          y: -60, alpha: 0.2,
          onComplete: () => text.destroy()
        })
      }
    })
    this.add(text)
  }
}
