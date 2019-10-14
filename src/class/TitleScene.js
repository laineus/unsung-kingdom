import storage from '../data/storage'
import config from '../data/config'
import MenuSave from './MenuSave'
import Button from './Button'
import { slideIn, slideOut } from '../util/animations'
import UICloseButton from './UICloseButton'
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Title', active: false })
  }
  create () {
    this.storage = storage
    this.add.sprite(0, 0, 'title').setOrigin(0, 0)
    this.list = [
      { text: 'New Game', callback: this.newGame },
      { text: 'Continue', callback: this.loadData }
    ].map((v, i) => {
      const row = new Button(this, config.WIDTH.half, (100).byBottom + i * 40, v.text, 200, 30).on('click', v.callback.bind(this))
      this.add.existing(row)
      return row
    })
  }
  get ui () {
    return this.scene.get('UI')
  }
  startGame (map, x, y) {
    this.scene.start('UI')
    this.ui.transition().then(() => {
      this.scene.start('Game', { map, x, y })
      this.scene.remove('Title')
    })
  }
  newGame () {
    this.startGame('room1', (20).toPixel, (18).toPixel)
  }
  loadData () {
    this.list.forEach(v => v.setVisible(false))
    const window = this.add.polygon(0, 0, [[0, 0], [(50).byRight, 0], [(150).byRight, (0).byBottom], [0, (0).byBottom]], config.COLORS.black, 0.7).setOrigin(0, 0)
    this.add.existing(window)
    const save = new MenuSave(this)
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
      this.startGame(data.state.map, data.state.x, data.state.y)
    })
  }
}
