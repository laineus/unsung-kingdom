import config from '../data/config'
import Slider from './Slider'
import { slideIn } from '../util/animations'
import Radio from './Radio'
import Button from './Button'
export default class MenuSetting extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SETTINGS', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 25, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, '設定', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    const bgm = this.getVolumeSetting(220, 100, 'bgm', 'BGM')
    const se = this.getVolumeSetting(220, 180, 'se', 'SE')
    const controlMode = this.getControlMode(220, 260)
    const toTitle = this.getBackToTitle(220, 380)
    this.add([bgm, se, controlMode, toTitle])
    slideIn(scene, [bgm, se, controlMode, toTitle], { x: -100 })
  }
  getVolumeSetting (x, y, key, name) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, `${name} Volume :`, { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    const slider = new Slider(this.scene, 200, 35, 400, 10, { value: this.scene.setting.state[key] })
    const valueLabel = this.scene.add.text(430, 26, `${this.scene.setting.state[key]}%`, { fill: config.COLORS.white.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    slider.on('updated', value => {
      const v = Math.round(value)
      valueLabel.setText(`${v}%`)
      this.scene.setting.state[key] = v
      this.scene.setting.save()
      if (key === 'bgm') this.scene.audio.updateBgmVolume()
    }).on('pointerup', () => {
      if (key === 'se') this.scene.audio.se('announce')
    })
    container.add([title, slider, valueLabel])
    return container
  }
  getControlMode (x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, 'UI Type :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    const radio = new Radio(this.scene, 0, 40, ['Auto Detection', 'Click to Walk', 'Virtual Stick'])
    container.add([title, radio])
    radio.setValue(this.scene.setting.state.controller)
    radio.on('updated', index => {
      this.scene.setting.state.controller = index
      this.scene.setting.save()
    })
    return container
  }
  getBackToTitle (x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, 'Back to Title :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    const confirm = this.scene.add.text(title.width + 13, 0, 'Confirm', { fill: config.COLORS.theme.toColorString, fontSize: 13, fontFamily: config.FONTS.TEXT })
    const underline = this.scene.add.rectangle(title.width + 13, 15, confirm.width, 1, config.COLORS.theme).setOrigin(0, 0)
    const button = new Button(this.scene, 85, 50, 'Back to Title', 160, 30).setVisible(false)
    confirm.setInteractive().on('pointerdown', () => {
      this.scene.audio.se('click')
      button.setVisible(true)
      confirm.setVisible(false)
      underline.setVisible(false)
    })
    button.setInteractive().on('pointerdown', () => {
      window.location.reload()
    })
    container.add([title, confirm, underline, button])
    return container
  }
}
