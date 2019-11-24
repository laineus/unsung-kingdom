import config from '../data/config'
import Box from './Box'
import Gauge from './Gauge'
import storage from '../data/storage'
export default class BattlerSummary extends Phaser.GameObjects.Container {
  constructor (scene, x, y, i) {
    super(scene, x, y)
    this.battlerIndex = i
    const chara = storage.state.battlers[this.battlerIndex]
    const box = new Box(scene, 0, 0, 140, 30)
    const sprite = scene.add.sprite(-48, -23, chara.key).setScale(0.25).setOrigin(0.5, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const text = scene.add.text(-23, 4, chara.name, { fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0, 1)
    this.lv = this.scene.add.text(-12 + chara.name.length * 5.4, -9, '', { fill: config.COLORS.theme.toColorString, fontSize: 12, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    this.gauge = new Gauge(this.scene, 78, 5, chara.maxHp, config.COLORS.theme).setPosition(14, 8)
    this.add([box, sprite, text, this.lv, this.gauge])
    this.reload()
  }
  reload () {
    const chara = storage.state.battlers[this.battlerIndex]
    this.gauge.value = chara.hp
    this.lv.text = `Lv ${chara.lv}`
  }
}
