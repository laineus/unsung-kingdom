import config from '../data/config'
import Slider from './Slider'
import { slideIn } from '../util/animations'
export default class MenuSetting extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SETTINGS', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, '設定', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    const bgm = this.getVolumeSetting(220, 120, 'bgm', 'BGM')
    const se = this.getVolumeSetting(220, 200, 'se', 'SE')
    this.add([bgm, se])
    slideIn(scene, [bgm, se], { x: -100 })
  }
  getVolumeSetting (x, y, key, name) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, `${name} Volume :`, { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    const slider = new Slider(this.scene, 200, 33, 400, 10, { value: this.scene.setting.state[key] })
    const valueLabel = this.scene.add.text(430, 24, `${this.scene.setting.state[key]}%`, { fill: config.COLORS.white.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    slider.on('updated', value => {
      const v = Math.round(value)
      valueLabel.setText(`${v}%`)
      this.scene.setting.state[key] = v
      this.scene.setting.save()
      if (key === 'bgm') this.scene.audio.updateBgmVolume()
    })
    container.add([title, slider, valueLabel])
    return container
  }
}
