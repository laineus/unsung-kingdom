import storage from '../data/storage'
import MenuSave from './MenuSave'
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Title', active: false })
  }
  create () {
    this.storage = storage
    this.add.sprite(0, 0, 'title').setOrigin(0, 0)
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
  get ui () {
    return this.scene.get('UI')
  }
}
