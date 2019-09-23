import storage from '../data/storage'
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Title', active: false })
  }
  create () {
    const bg = this.add.sprite(0, 0, 'title').setOrigin(0, 0)
    bg.setInteractive().on('pointerdown', () => {
      const state = storage.state
      this.scene.start('UI')
      this.scene.start('Game', { map: state.map, x: state.x, y: state.y })
      this.scene.remove('Title')
    })
  }
}
