import loadAssets from './loadAssets'
import registerAnims from './registerAnims'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    this.scene.start('UI')
    this.scene.start('Game', { map: 'room1' })
  }
  preload () {
    loadAssets(this)
  }
}
