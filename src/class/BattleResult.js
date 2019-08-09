import config from '../data/config'
import Box from './Box'
import ExpGauge from './ExpGauge'
import storage from '../data/storage'
import expTable from '../data/expTable'
export default class Battle extends Phaser.GameObjects.Container {
  constructor (scene, group, callback) {
    super(scene)
    this.scene = scene
    this.group = group
    this.increaceExp()
    this.levelUpPlayers()
    const b = new Box(this.scene, -110, 0, 450, config.HEIGHT).setOrigin(0, 0)
    this.scene.add.existing(b)
    const g = new ExpGauge(this.scene, 120, 100, 180, 9, 120)
    g.addExp(50)
    g.on('lvUp', (e) => console.log(e))
    this.scene.add.existing(g)
  }
  increaceExp () {
    const sumExp = this.group.reduce((before, current) => (before + current.lv * 3), 0)
    const alives = storage.state.battlers.filter(v => v.hp > 0)
    alives.forEach(v => {
      v.exp += sumExp / alives.length
    })
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
}
