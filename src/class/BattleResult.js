import config from '../data/config'
import Box from './Box'
import ExpGauge from './ExpGauge'
import BattleQuestService from './BattleQuestService'
import storage from '../data/storage'
import expTable from '../data/expTable'
import { slideIn, slideOut } from '../util/animations'
export default class BattleResult extends Phaser.GameObjects.Container {
  constructor (scene, group, { boss = false } = {}, callback) {
    super(scene)
    scene.add.existing(this)
    this.scene = scene
    this.group = group
    this.boss = boss
    this.callback = callback
    scene.se('result')
    const bg = new Box(this.scene, -110, 0, 480, config.HEIGHT).setOrigin(0, 0)
    this.add(bg)
    const title = scene.add.text(20, 15, 'Result', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, '戦闘結果', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    const exp = scene.add.text(30, 75, 'Experience', { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.UI })
    this.add([exp])
    this.charas = storage.state.battlers.map((v, i) => this.getChara(v, 125, 110 + i * 52))
    this.add(this.charas)
    slideIn(this.scene, this.charas)
    const secondY = 275
    const items = this.dropWeapons()
    if (items.length) {
      const headingItems = scene.add.text(30, secondY, 'Items', { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.UI })
      this.add([headingItems])
      const rows = items.map((weapon, i) => this.getRow(35, 305 + i * 20, `${weapon.name} を獲得！`))
      this.add(rows)
      slideIn(this.scene, rows)
    }
    const quest = new BattleQuestService(this.group).getResult()
    if (quest.length) {
      const questY = items.length ? 305 + (items.length * 20) + 15 : secondY
      const headingQuest = scene.add.text(30, questY, 'Quest', { align: 'center', fill: config.COLORS.white.toColorString, fontSize: 18, fontFamily: config.FONTS.UI })
      this.add([headingQuest])
      const rows = quest.map((text, i) => this.getRow(35, questY + 30 + i * 20, text))
      this.add(rows)
      slideIn(this.scene, rows)
    }
    slideIn(this.scene, this, { x: -100 }).then(() => {
      this.increaceExp().then(() => {
        if (this.scene.mapInfo) this.scene.mapInfo.reload()
        setTimeout(() => {
          slideOut(this.scene, this, { x: -100, destroy: false }).then(() => {
            this.scene.battlerSummary.show()
            this.callback()
            this.destroy()
          })
        }, 1800)
      })
      storage.state.battlers.filter(v => v.hp <= 0).forEach(v => v.hp += 1)
    })
  }
  getChara (chara, x, y) {
    const container = this.scene.add.container(x, y)
    container.source = chara
    const sprite = this.scene.add.sprite(-110, 0, chara.key).setScale(0.25).setOrigin(0, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const name = this.scene.add.text(-53, 0, chara.name, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 17, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const lv = this.scene.add.text(130, 15, `Lv ${chara.lv}`, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 15, fontStyle: 'bold', fontFamily: config.FONTS.UI, align: 'right' }).setOrigin(1, 0.5)
    const gauge = new ExpGauge(this.scene, 38, 38, 180, chara.lv, chara.exp)
    container.lvUp = newLv => {
      lv.text = `Lv ${newLv}`
      this.scene.add.tween({
        targets: lv,
        duration: 100,
        ease: 'Power2',
        scale: 1.3,
        yoyo: true
      })
    }
    container.gauge = gauge
    container.add([sprite, gauge, name, lv])
    if (chara.hp <= 0) container.list.forEach(v => v.setAlpha(0.4))
    return container
  }
  expAdjustment (targetLv, ownLv) {
    const diff = targetLv - ownLv
    if (diff > 0) return 1
    const negative = (Math.abs(diff) + 1) * 0.25
    return Math.max(0.15, 1 - negative)
  }
  increaceExp () {
    const alives = storage.state.battlers.filter(v => v.hp > 0)
    const enemyLevel = Math.average(...this.group.map(v => v.lv))
    const sumExp = this.boss ? (enemyLevel * 12) : Math.sum(...this.group.map(enemy => {
      return enemy.lv * Math.max(4 - Math.max(this.group.length, 4) * 0.6, 1)
    }))
    const eachExp = sumExp / alives.length
    const promises = alives.map(v => {
      const exp = Math.ceil(eachExp * this.expAdjustment(enemyLevel, v.lv))
      v.exp += exp
      this.levelUp(v)
      return new Promise((resolve) => {
        const chara = this.charas.find(c => c.source === v)
        chara.gauge.addExp(exp)
        chara.gauge.on('lvUp', chara.lvUp)
        chara.gauge.on('completed', resolve)
      })
    })
    return Promise.all(promises)
  }
  levelUp (battler) {
    const next = expTable[battler.lv]
    if (next && battler.exp >= next) {
      this.scene.se('lvup')
      battler.lv++
      Object.keys(battler.up).filter(key => Math.chance(battler.up[key])).forEach(key => {
        if (key === 'hp') {
          battler.hp += 5
          battler.max_hp += 5
        } else {
          battler[key] += 1
        }
      })
      this.levelUp(battler)
    }
  }
  dropWeapons () {
    return this.group.map(enemy => {
      if (!enemy.dropWeapon) return false
      if (!Math.chance(enemy.dropWeapon.chance)) return false
      return this.scene.increaseWeapon(enemy.dropWeapon.id, false)
    }).filter(v => v)
  }
  getRow (x, y, text) {
    return this.scene.add.text(x, y, text, { fill: config.COLORS.theme.toColorString, fontSize: 12, fontFamily: config.FONTS.TEXT })
  }
}
