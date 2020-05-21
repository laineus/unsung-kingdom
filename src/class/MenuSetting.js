import config from '../data/config'
import Slider from './Slider'
export default class MenuSetting extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SETTINGS', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, '設定', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    const contentX = 200
    // BGM
    const bgmTitle = scene.add.text(contentX, 120, 'BGM Volume :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    const bgmSlider = new Slider(scene, contentX + 200, 150, 400, 10, { value: scene.setting.state.bgm })
    const bgmValue = scene.add.text(contentX + 430, 141, `${scene.setting.state.bgm}%`, { fill: config.COLORS.white.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    bgmSlider.on('updated', value => {
      const v = Math.round(value)
      bgmValue.setText(`${v}%`)
      scene.setting.state.bgm = v
      scene.setting.save()
      scene.audio.updateBgmVolume()
    })
    this.add([bgmTitle, bgmSlider, bgmValue])
  }
}
