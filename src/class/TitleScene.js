import storage from '../data/storage'
import config from '../data/config'
import MenuSave from './MenuSave'
import Box from './Box'
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
      const row = this.row(config.WIDTH.half, (100).byBottom + i * 40, v.text, v.callback)
      this.add.existing(row)
      return row
    })
  }
  row (x, y, text, callback) {
    const container = this.add.container(x, y).setSize(200, 30)
    container.add(new Box(this, 0, 0, 200, 30))
    container.add(this.add.text(0, 0, text, { fontSize: 16, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0.5, 0.5))
    container.setInteractive().on('pointerdown', callback.bind(this))
    return container
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
    const save = new MenuSave(this)
    this.add.existing(save)
    save.on('loadData', data => {
      this.storage.load(data.number)
      this.startGame(data.state.map, data.state.x, data.state.y)
    })
  }
}
