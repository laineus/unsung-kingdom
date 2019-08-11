import config from '../data/config'
import Box from './Box'
import Gauge from './Gauge'
import ExpGauge from './ExpGauge'
import weapons from '../data/weapons'
import { slideOut, slideIn } from '../util/animations'
export default class MenuStatus extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'CHARACTER', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const sub = scene.add.text(20, 41, 'キャラクター', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONT })
    this.add([title, sub])
    const players = scene.storage.state.battlers
    this.tabs = players.map((p, i) => this.getTabItem(p, 400 + i * 130, (50).byBottom))
    this.add(this.tabs)
    this.weapons = this.scene.add.container(540, 120)
    this.weapons.add(scene.storage.state.weapons.map((v, i) => this.getWeapon(v, 0, i * 40)))
    slideIn(this.scene, this.weapons)
    this.add(this.weapons)
    this.setCharacter(players[0])
  }
  setCharacter (chara) {
    if (this.chara) {
      if (this.chara.battler === chara) return
      slideOut(this.scene, [this.chara, this.currentWeapon], { x: -50 })
    }
    this.tabs.forEach(t => t.setActive(t.chara === chara))
    this.chara = this.getCharacter(chara, 180, (30).byBottom)
    this.currentWeapon = this.getCurrentWeapon(this.chara.battler.weapon, 540, 60)
    this.add([this.chara, this.currentWeapon])
    slideIn(this.scene, [this.chara, this.currentWeapon], { x: -50 })
  }
  setWeapon (source) {
    const oldId = this.chara.battler.weapon ? this.chara.battler.weapon.id : null
    const newId = source ? source.id : null
    this.chara.battler.weapon = oldId !== newId ? source : null
    this.currentWeapon.setSource(this.chara.battler.weapon)
  }
  getCharacter (chara, x, y) {
    const container = this.scene.add.container(x - 50, y).setAlpha(0)
    container.battler = chara
    const imgBg = this.scene.add.sprite(-10, -5, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64).setTint(0).setAlpha(0.5)
    const img = this.scene.add.sprite(0, 0, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64)
    const name = this.scene.add.text(-81, -170, chara.name, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    const lv = this.scene.add.text(-60 + chara.name.length * 7, -163, `Lv ${chara.lv}`, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT })
    const hpLabel = this.scene.add.text(-81, -130, 'HP', { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 11, fontStyle: 'bold', fontFamily: config.FONT })
    const hpMaxLabel = this.scene.add.text(85, -115, `/${chara.maxHp}`, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1)
    const hpValueLabel = this.scene.add.text(hpMaxLabel.x - hpMaxLabel.width, -114, chara.hp, { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 22, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1)
    const gauge = new Gauge(this.scene, 160, 10, chara.maxHp, config.COLORS.theme).setPosition(0, -108)
    const exp = new ExpGauge(this.scene, 0, -75, 160, chara.lv, chara.exp)
    const option = { fill: config.COLORS.soy.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT }
    const atk = this.scene.add.text(-81, -60, 'ATK', option)
    const atkVal = this.scene.add.text(-11, -60, chara.atk, option).setOrigin(1, 0)
    const def = this.scene.add.text(-81, -38, 'DEF', option)
    const defVal = this.scene.add.text(-11, -38, chara.atk, option).setOrigin(1, 0)
    const dex = this.scene.add.text(11, -60, 'DEX', option)
    const dexVal = this.scene.add.text(81, -60, chara.dex, option).setOrigin(1, 0)
    const agi = this.scene.add.text(11, -38, 'AGI', option)
    const agiVal = this.scene.add.text(81, -38, chara.dex, option).setOrigin(1, 0)
    const statuses = [atk, atkVal, def, defVal, dex, dexVal, agi, agiVal]
    gauge.value = chara.hp
    container.add([imgBg, img, name, lv, hpLabel, hpMaxLabel, hpValueLabel, gauge, exp, ...statuses])
    return container
  }
  getTabItem (chara, x, y) {
    const container = this.scene.add.container(x, y).setSize(120, 45)
    container.chara = chara
    const box = new Box(this.scene, 0, 0, 120, 45)
    const sprite = this.scene.add.sprite(-66, -16, chara.key).setScale(0.25).setOrigin(0, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const text = this.scene.add.text(40, 18, chara.name, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(1, 1)
    container.setActive = bool => text.setFill(config.COLORS[bool ? 'theme' : 'white'].toColorString)
    container.setInteractive().on('pointerdown', () => this.setCharacter(chara))
    container.add([box, sprite, text])
    return container
  }
  getCurrentWeapon (source, x, y) {
    const getData = source => source ? weapons.find(v => v.id === source.weapon_id) : null
    const data = getData(source)
    const container = this.scene.add.container(x, y).setSize(320, 45)
    const box = new Box(this.scene, 0, 0, 320, 40).setOrigin(0.5, 0.5)
    const text = this.scene.add.text(-145, 0, data ? data.name : '-', { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    const line1 = this.scene.add.line(-157, 0, 0, 0, 40, 0, config.COLORS.white).setOrigin(1, 0).setLineWidth(0.5).setAlpha(0.5)
    const line2 = this.scene.add.line(-172, 1, 0, 0, -25, 120, config.COLORS.white).setOrigin(1, 0).setLineWidth(0.5).setAlpha(0.5)
    const line3 = this.scene.add.line(-222, 121, 0, 0, 60, 0, config.COLORS.white).setOrigin(1, 0).setLineWidth(0.5).setAlpha(0.5)
    const circle = this.scene.add.circle(-282, 123, 2, config.COLORS.white).setOrigin(0.5, 0.5)
    container.setInteractive().on('pointerdown', () => console.log(1))
    container.setSource = source => {
      const data = getData(source)
      text.text = data ? data.name : '-'
    }
    container.add([box, text, line1, line2, line3, circle])
    return container
  }
  getWeapon (source, x, y) {
    const data = weapons.find(v => v.id === source.weapon_id)
    const container = this.scene.add.container(x, y).setSize(320, 45)
    const box = new Box(this.scene, 0, 0, 320, 32).setOrigin(0.5, 0.5)
    const text = this.scene.add.text(-145, 0, data.name, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 0.5)
    container.setInteractive().on('pointerdown', () => this.setWeapon(source))
    container.add([box, text])
    return container
  }
}
