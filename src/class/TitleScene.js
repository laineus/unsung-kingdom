import storage from '../data/storage'
import config from '../data/config'
import chapters from '../data/chapters'
import MenuSave from './MenuSave'
import MenuSetting from './MenuSetting'
import Button from './Button'
import { slideIn, slideOut, fadeIn, fadeOut } from '../util/animations'
import UICloseButton from './UICloseButton'
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Title', active: false })
  }
  create () {
    this.storage = storage
    this.storage.init()
    const background = this.add.sprite(0, 0, 'title').setOrigin(0, 0)
    this.add.sprite(config.WIDTH.half, 270, 'title_logo')
    this.getStartButton()
    this.logo().then(() => {
      background.setInteractive().on('pointerup', () => this.initContents())
      this.ui.audio.setBgm('theme')
    })
    // DEBUG
    if (location.query.load) {
      const data = storage.getRow(Number(location.query.load))
      this.storage.load(data.number).then(() => {
        this.continueGame(data.state.map, data.state.x, data.state.y)
      })
    }
  }
  get ui () {
    return this.scene.get('UI')
  }
  get audio () {
    return this.ui.audio
  }
  get setting () {
    return this.ui.setting
  }
  async logo () {
    const bg = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0)
    await this.delay(200)
    const logo1 = this.add.sprite(config.WIDTH.half, config.HEIGHT.half, 'logo_laineus').setOrigin(0.5, 0.5)
    await fadeIn(this, logo1)
    await this.delay(800)
    await fadeOut(this, logo1)
    await this.delay(400)
    const logo2 = this.add.sprite(config.WIDTH.half, config.HEIGHT.half, 'logo_mafu').setOrigin(0.5, 0.5)
    await fadeIn(this, logo2)
    await this.delay(800)
    await fadeOut(this, logo2)
    await this.delay(400)
    await fadeOut(this, bg)
  }
  delay (time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  getStartButton () {
    const text = this.add.sprite(config.WIDTH.half, (70).byBottom, 'taptostart')
    this.add.tween({ targets: text, duration: 600, alpha: 0.5, yoyo: true, loop: -1 })
    return text
  }
  initContents () {
    const bgBlur = this.add.sprite(0, 0, 'title_blur').setOrigin(0, 0).setInteractive()
    fadeIn(this, bgBlur)
    const dark = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, config.COLORS.black).setOrigin(0, 0).setAlpha(0.5)
    this.subLogo = this.add.sprite(25, 25, 'logo').setOrigin(0, 0).setScale(0.5, 0.5)
    this.version = this.add.text((10).byRight, (10).byBottom, `Version: ${APP_VERSION}`, { fontSize: 11, fontFamily: config.FONTS.TEXT, fill: config.COLORS.gray.toColorString }).setOrigin(1, 1)
    const close = () => {
      fadeOut(this, bgBlur)
      this.list.forEach(v => v.destroy())
      this.subLogo.destroy()
      this.version.destroy()
      dark.destroy()
    }
    this.list = [
      { text: 'New Game', callback: this.newGame },
      { text: 'Continue', callback: this.loadData },
      { text: 'Settings', callback: this.settings },
      { text: 'Close', callback: close }
    ].map((v, i) => {
      const row = new Button(this, config.WIDTH.half, (400).byBottom + i * 100, v.text, 420, 70, { fontSize: 17 }).on('click', v.callback.bind(this))
      this.add.existing(row)
      return row
    })
  }
  continueGame (map, x, y) {
    this.ui.transition('normal').then(this.runGame.bind(this, map, x, y))
  }
  newGame () {
    this.ui.storyTelling().then(() => {
      this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0)
      this.ui.chapterStart(`${chapters[0].name} ${chapters[0].title}`).then(() => {
        this.runGame('room1', (19).toPixelCenter, (11).toPixel)
      })
    })
  }
  runGame (map, x, y) {
    this.scene.start('Game', { map, x, y })
    this.scene.sleep('Title')
  }
  subContent (content) {
    this.subLogo.setVisible(false)
    this.version.setVisible(false)
    this.list.forEach(v => v.setVisible(false))
    const window = this.add.polygon(0, 0, [[0, 0], [(50).byRight, 0], [(150).byRight, (0).byBottom], [0, (0).byBottom]], config.COLORS.black, 0.7).setOrigin(0, 0)
    this.add.existing(window)
    this.add.existing(content)
    slideIn(this, [window, content], { x: -100 })
    const close = new UICloseButton(this, (70).byRight, (35).byBottom).on('click', () => {
      slideOut(this, [close], { x: 100 })
      slideOut(this, [content, window], { x: -100 })
      this.subLogo.setVisible(true)
      this.version.setVisible(true)
      this.list.forEach(v => v.setVisible(true))
    })
    this.add.existing(close)
    slideIn(this, close, { x: 100 })
  }
  settings () {
    const settings = new MenuSetting(this, true)
    this.subContent(settings)
  }
  loadData () {
    const save = new MenuSave(this, true)
    save.on('loadData', data => {
      this.storage.load(data.number).then(() => {
        this.continueGame(data.state.map, data.state.x, data.state.y)
      })
    })
    this.subContent(save)
  }
}
