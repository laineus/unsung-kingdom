import config from '../data/config'
import Box from './Box'
import Gauge from './Gauge'
export default class BattlerSummary extends Phaser.GameObjects.Container {
  constructor (scene, x, y, i) {
    super(scene, x, y)
    this.scene = scene
    this.battlerIndex = i
    const chara = scene.storage.state.battlers[this.battlerIndex]
    const box = new Box(scene, 0, 0, 140, 30)
    const sprite = scene.add.sprite(-48, -23, chara.key).setScale(0.25).setOrigin(0.5, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const text = scene.add.text(-23, 4, chara.name, { fontSize: 11, fontStyle: 'bold', fontFamily: config.FONTS.UI }).setOrigin(0, 1)
    this.lv = null
    this.gauge = new Gauge(this.scene, 78, 5, { valueMax: chara.max_hp, color: config.COLORS.theme }).setPosition(14, 8)
    this.add([box, sprite, text, this.gauge])
    this.reload()
  }
  reload () {
    const chara = this.scene.storage.state.battlers[this.battlerIndex]
    this.gauge.valueMax = chara.max_hp
    this.gauge.value = chara.hp
    if (this.lv) this.lv.destroy()
    this.lv = this.scene.add.text(-12 + chara.name.length * 5.4, -8, `Lv ${chara.lv}`, { fill: config.COLORS.theme.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    this.add([this.lv])
  }
}
