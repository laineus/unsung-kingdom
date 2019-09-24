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
      { text: 'Load Data', callback: this.loadData }
    ].map((v, i) => {
      const row = this.row(config.WIDTH.half, 60 + i * 40, v.text, v.callback)
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
  loadData () {
    this.list.forEach(v => v.setVisible(false))
    const save = new MenuSave(this)
    this.add.existing(save)
    save.on('loadData', data => {
      this.storage.load(data.number)
      this.scene.start('UI')
      this.ui.transition().then(() => {
        this.scene.start('Game', { map: data.state.map, x: data.state.x, y: data.state.y })
        this.scene.remove('Title')
      })
    })
  }
}
