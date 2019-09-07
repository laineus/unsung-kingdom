import config from '../data/config'
import Box from './Box'
import Gauge from './Gauge'
export default class BattlerSummary extends Phaser.GameObjects.Container {
  constructor (scene, x, y, chara) {
    super(scene, x, y)
    const box = new Box(scene, 0, 0, 140, 30)
    const sprite = scene.add.sprite(-48, -23, chara.key).setScale(0.25).setOrigin(0.5, 0)
    sprite.setCrop(0, 0, sprite.width, 150)
    const text = scene.add.text(-23, 4, chara.name, { fontSize: 12, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 1)
    const lv = this.scene.add.text(-12 + chara.name.length * 4, -12, `Lv ${chara.lv}`, { fill: config.COLORS.theme.toColorString, fontSize: 11, fontStyle: 'bold', fontFamily: config.FONT })
    const gauge = new Gauge(this.scene, 78, 5, chara.maxHp, config.COLORS.theme).setPosition(14, 8)
    gauge.value = chara.hp
    this.add([box, sprite, text, lv, gauge])
  }
}
