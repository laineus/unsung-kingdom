export default class Enemy extends Phaser.GameObjects.Container {
  constructor (scene, status) {
    super(scene)
    this.scene = scene
    this.setActive(false)
    this.setStatus(status || { hp: 1, atk: 1, def: 1, dex: 1, agi: 1 })
    this.actionPoint = 0
  }
  setStatus (option) {
    this.maxHp = option.hp
    this.hp = option.hp
    this.atk = option.atk
    this.def = option.def
    this.dex = option.dex
    this.agi = option.agi
  }
  setHp (value) {
    this._hp = value
    this.maxHp = value
  }
  get hp () {
    return this._hp
  }
  set hp (value) {
    this._hp = Math.fix(value, 0, this.maxHp)
  }
  get alive () {
    return this.hp > 0
  }
  setActive(bool) {
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
  attackTo(target) {
    const baseDamage = this.baseDamageTo(target)
    const cri = Math.chance(this.criticalTo(target))
    const weakness = this.weaknessTo(target)
    const hit = Math.chance(this.accuracyTo(target))
    target.addDamage(baseDamage, cri, weakness, hit)
    this.setActive(false)
  }
  addDamage (baseDamage, cri, weakness, hit) {
    if (hit) {
      const damage = baseDamage * (cri ? 2 : 1) * weakness
      this.hp -= damage
      this.gauge.value = this.hp
      this.damageEffect()
      this.damageText(damage)
      if (this.hp <= 0) this.die()
    } else {
      this.damageText('Miss')
    }
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
  damageText (damage) {
    const text = this.scene.add.text(0, 0, damage, { fill: '#FFEEBB', stroke: '#222', strokeThickness: 5, fontSize: 32, fontStyle: 'bold' }).setOrigin(0.5, 0.5)
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
