import storage from '../data/storage'
import config from '../data/config'
import chapters from '../data/chapters'
import MenuSave from './MenuSave'
import Button from './Button'
import { slideIn, slideOut, fadeIn, fadeOut } from '../util/animations'
import UICloseButton from './UICloseButton'
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Title', active: false })
  }
  create () {
    this.storage = storage
    this.ui.showController(false)
    this.content()
    // this.logo()
    // DEBUG
    if (location.query.load) {
      const data = storage.getRow(Number(location.query.load))
      this.storage.load(data.number)
      this.continueGame(data.state.map, data.state.x, data.state.y)
    }
  }
  get ui () {
    return this.scene.get('UI')
  }
  async logo () {
    const bg = this.add.rectangle(0, 0, config.WIDTH, config.HEIGHT, 0x111111).setOrigin(0, 0)
    await this.delay(200)
    const logo1 = this.add.sprite(config.WIDTH.half, config.HEIGHT.half, 'logo_laineus').setScale(0.66).setOrigin(0.5, 0.5)
    await fadeIn(this, logo1)
    await this.delay(800)
    await fadeOut(this, logo1)
    await this.delay(400)
    const logo2 = this.add.sprite(config.WIDTH.half, config.HEIGHT.half, 'logo_mafu').setScale(0.66).setOrigin(0.5, 0.5)
    await fadeIn(this, logo2)
    await this.delay(800)
    await fadeOut(this, logo2)
    await this.delay(400)
    await fadeOut(this, bg)
  }
  delay (time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  content () {
    this.add.sprite(0, 0, 'title').setOrigin(0, 0)
    // this.title = this.add.text(config.WIDTH.half, config.HEIGHT.half -120, 'UNSUNG KINGDOM', { align: 'center', fontSize: 50, fontFamily: config.FONTS.UI, fill: 0xAAAAAA.toColorString }).setOrigin(0.5, 0.5)
    this.list = [
      { text: 'New Game', callback: this.newGame },
      { text: 'Continue', callback: this.loadData }
    ].map((v, i) => {
      const row = new Button(this, config.WIDTH.half, (140).byBottom + i * 40, v.text, 200, 30).on('click', v.callback.bind(this))
      this.add.existing(row)
      return row
    })
  }
  continueGame (map, x, y) {
    this.ui.transition().then(this.runGame.bind(this, map, x, y))
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
    this.ui.showController(true)
    this.scene.start('Game', { map, x, y })
    this.scene.remove('Title')
  }
  loadData () {
    this.list.forEach(v => v.setVisible(false))
    const window = this.add.polygon(0, 0, [[0, 0], [(50).byRight, 0], [(150).byRight, (0).byBottom], [0, (0).byBottom]], config.COLORS.black, 0.7).setOrigin(0, 0)
    this.add.existing(window)
    const save = new MenuSave(this, true)
    this.add.existing(save)
    slideIn(this, [window, save], { x: -100 })
    const close = new UICloseButton(this, (70).byRight, (35).byBottom).on('click', () => {
      slideOut(this, [close], { x: 100 })
      slideOut(this, [save, window], { x: -100 })
      this.list.forEach(v => v.setVisible(true))
    })
    this.add.existing(close)
    slideIn(this, close, { x: 100 })
    save.on('loadData', data => {
      this.storage.load(data.number)
      this.continueGame(data.state.map, data.state.x, data.state.y)
    })
  }
}
