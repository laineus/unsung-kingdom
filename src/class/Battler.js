export default class Enemy extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    this.setStatus({ hp: 1, atk: 1, def: 1, dex: 1, agi: 1 })
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
    this._hp = Math.min(Math.max(value, 0), this.maxHp)
  }
  damageTo (target) {
    return target.def - this.atk
  }
  accuracyTo (target) {
    return target.agi - this.dex
  }
  addDamage (damage) {
    if (this.gauge.value <= 0) return
    this.hp -= damage
    this.gauge.value = this.hp
    this.damageEffect()
    this.damageText(damage)
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
