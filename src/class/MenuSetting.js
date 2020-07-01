import config from '../data/config'
import Slider from './Slider'
import { slideIn } from '../util/animations'
import Radio from './Radio'
import Button from './Button'
import locales from '../locales/index'
export default class MenuSetting extends Phaser.GameObjects.Container {
  constructor (scene, titleMode = false) {
    super(scene)
    this.scene = scene
    const title = scene.add.text(20, 15, 'SETTINGS', { align: 'center', fill: config.COLORS.theme.toColorString, fontSize: 21, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const sub = scene.add.text(20, 41, t('ui.sub.settings'), { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 10, fontStyle: 'bold', fontFamily: config.FONTS.TEXT })
    this.add([title, sub])
    const bgm = this.getVolumeSetting(220, 80, 'bgm', 'BGM')
    const se = this.getVolumeSetting(220, 160, 'se', 'SE')
    const controlMode = this.getControlMode(220, 240)
    const lang = this.getLanguage(220, 320)
    const toTitle = this.getBackToTitle(220, 410).setVisible(!titleMode)
    this.add([bgm, se, controlMode, lang, toTitle])
    slideIn(scene, [bgm, se, controlMode, lang, toTitle], { x: -100 })
  }
  getVolumeSetting (x, y, key, name) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, `${name} Volume :`, { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI })
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
    const title = this.scene.add.text(0, 0, 'UI Type :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const radio = new Radio(this.scene, 0, 40, ['Auto Detection', 'Click to Walk', 'Virtual Stick'])
    container.add([title, radio])
    radio.setValue(this.scene.setting.state.controller)
    radio.on('updated', index => {
      this.scene.setting.state.controller = index
      this.scene.setting.save()
    })
    return container
  }
  getLanguage (x, y) {
    const langs = Object.keys(locales).map(k => {
      return { value: k, label: locales[k].langLabel }
    })
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, 'Language :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const radio = new Radio(this.scene, 0, 40, langs.map(v => v.label))
    container.add([title, radio])
    radio.setValue(langs.findIndex(v => this.scene.setting.state.lang === v.value))
    radio.on('updated', index => {
      this.scene.setting.state.lang = langs[index].value
      this.scene.setting.save()
      if (this.scene.menuButton) this.scene.menuButton.updateLabel()
    })
    return container
  }
  getBackToTitle (x, y) {
    const container = this.scene.add.container(x, y)
    const title = this.scene.add.text(0, 0, 'Back to Title :', { fill: config.COLORS.gray.toColorString, fontSize: 14, fontStyle: 'bold', fontFamily: config.FONTS.UI })
    const confirm = this.scene.add.text(title.width + 13, 0, 'Confirm', { fill: config.COLORS.theme.toColorString, fontSize: 14, fontFamily: config.FONTS.UI })
    const underline = this.scene.add.rectangle(title.width + 13, 15, confirm.width, 1, config.COLORS.theme).setOrigin(0, 0)
    const button = new Button(this.scene, 85, 50, 'Back to Title', 160, 30).setVisible(false)
    confirm.setInteractive().on('pointerdown', () => {
      this.scene.audio.se('click')
      button.setVisible(true)
      confirm.setVisible(false)
      underline.setVisible(false)
    })
    button.setInteractive().on('pointerdown', () => {
      this.emit('backToTitle')
    })
    container.add([title, confirm, underline, button])
    return container
  }
}
