import config from '../data/config'
import Box from './Box'
import Gauge from './Gauge'
import ExpGauge from './ExpGauge'
import weapons from '../data/weapons'
import expTable from '../data/expTable'
export default class MenuStatus extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'CHARACTER', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'キャラクター', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    const players = scene.storage.state.battlers
    const tabs = players.map((p, i) => this.getTabItem(p, 400 + i * 130, (50).byBottom))
    this.add(tabs)
    this.weapons = this.scene.add.container(540, 120)
    this.weapons.add(scene.storage.state.weapons.map((v, i) => this.getWeapon(v, 0, i * 50)))
    this.add(this.weapons)
    this.setCharacter(players[0])
  }
  setCharacter (chara) {
    if (this.chara) {
      if (this.chara.battler === chara) return
      const beforeChara = this.chara
      this.scene.add.tween({ targets: beforeChara, duration: 200, ease: 'Power2', x: beforeChara.x - 50, alpha: 0, onComplete: () => beforeChara.destroy() })
    }
    this.chara = this.getCharacter(chara, 180, (30).byBottom)
    this.add(this.chara)
    this.setWeapon()
  }
  setWeapon (source) {
    const keep = source === undefined
    if (this.currentWeapon) this.currentWeapon.destroy()
    if (!keep) {
      const oldId = this.chara.battler.weapon ? this.chara.battler.weapon.id : null
      const newId = source ? source.id : null
      this.chara.battler.weapon = oldId !== newId ? source : null
    }
    this.currentWeapon = this.getCurrentWeapon(this.chara.battler.weapon, 540, 60)
    this.add(this.currentWeapon)
  }
  getCharacter (chara, x, y) {
    const container = this.scene.add.container(x - 50, y).setAlpha(0)
    container.battler = chara
    const imgBg = this.scene.add.sprite(-10, -5, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64).setTint(0).setAlpha(0.5)
    const img = this.scene.add.sprite(0, 0, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64)
    this.scene.add.tween({ targets: container, duration: 200, ease: 'Power2', x, alpha: 1 })
    const name = this.scene.add.text(-81, -170, chara.name, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const hpLabel = this.scene.add.text(-81, -130, 'HP', { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 11, fontStyle: 'bold', fontFamily: config.FONT })
    const hpMaxLabel = this.scene.add.text(85, -115, `/${chara.maxHp}`, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1)
    const hpValueLabel = this.scene.add.text(hpMaxLabel.x - hpMaxLabel.width, -114, chara.hp, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 22, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1)
    const gauge = new Gauge(this.scene, 160, 10, chara.maxHp, config.COLORS.theme).setPosition(0, -108)
    const offset = expTable[chara.lv - 1]
    const max = expTable[chara.lv] - offset
    const current = chara.exp - offset
    const exp = new ExpGauge(this.scene, 0, -75, 160, max)
    exp.value = current
    gauge.value = chara.hp
    container.add([imgBg, img, name, hpLabel, hpMaxLabel, hpValueLabel, gauge, exp])
    return container
  }
  getTabItem (chara, x, y) {
    const container = this.scene.add.container(x, y).setSize(120, 45)
    const box = new Box(this.scene, 0, 0, 120, 45)
    const text = this.scene.add.text(-45, 18, chara.name, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 1)
    container.setInteractive().on('pointerdown', () => this.setCharacter(chara))
    container.add([box, text])
    return container
  }
  getCurrentWeapon (source, x, y) {
    const data = source ? weapons.find(v => v.id === source.weapon_id) : null
    const container = this.scene.add.container(x, y).setSize(320, 45)
    const box = new Box(this.scene, 0, 0, 320, 40).setOrigin(0.5, 0.5)
    const text = this.scene.add.text(-145, 0, data ? data.name : '-', { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    container.setInteractive().on('pointerdown', () => console.log(1))
    container.add([box, text])
    return container
  }
  getWeapon (source, x, y) {
    const data = weapons.find(v => v.id === source.weapon_id)
    const container = this.scene.add.container(x, y).setSize(320, 45)
    const box = new Box(this.scene, 0, 0, 320, 40).setOrigin(0.5, 0.5)
    const text = this.scene.add.text(-145, 0, data.name, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    container.setInteractive().on('pointerdown', () => this.setWeapon(source))
    container.add([box, text])
    return container
  }
}
