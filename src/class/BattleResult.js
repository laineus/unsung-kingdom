import config from '../data/config'
import Box from './Box'
import ExpGauge from './ExpGauge'
import storage from '../data/storage'
import expTable from '../data/expTable'
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, group, callback) {
    super(scene)
    scene.add.existing(this)
    this.scene = scene
    this.group = group
    const b = new Box(this.scene, -110, 0, 450, config.HEIGHT).setOrigin(0, 0)
    this.add(b)
    this.charas = storage.state.battlers.map((v, i) => this.getChara(v, 120, 100 + i * 60))
    this.increaceExp()
  }
  increaceExp () {
    const sumExp = this.group.reduce((before, current) => (before + current.lv * 3), 0)
    const alives = storage.state.battlers.filter(v => v.hp > 0)
    const eachExp = sumExp / alives.length
    this.charas.filter(v => v.data.hp > 0).forEach(v => {
      v.gauge.addExp(eachExp)
      v.gauge.on('lvUp', v.lvUp)
    })
    alives.forEach(v => {
      v.exp += eachExp
    })
    this.levelUpPlayers()
  }
  levelUpPlayers () {
    const levelUp = battler => {
      const next = expTable[battler.lv]
      if (next && battler.exp >= next) {
        battler.lv++
        Object.keys(battler.up).filter(key => Math.chance(battler.up[key])).forEach(key => {
          battler[key] += key === 'hp' ? 10 : 1
        })
        levelUp(battler)
      }
    }
    storage.state.battlers.filter(v => v.hp > 0).forEach(v => levelUp(v))
  }
  getChara (chara, x, y) {
    const container = this.scene.add.container(x, y)
    container.data = chara
    const sprite = this.scene.add.sprite(-110, 0, chara.key).setScale(0.25).setOrigin(0, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const name = this.scene.add.text(-53, 0, chara.name, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONT })
    const lv = this.scene.add.text(130, 15, `Lv ${chara.lv}`, { fill: config.COLORS.theme.toColorString, stroke: config.COLORS.dark.toColorString, strokeThickness: 2, fontSize: 12, fontStyle: 'bold', fontFamily: config.FONT, align: 'right' }).setOrigin(1, 0.5)
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
    return container
  }
}
