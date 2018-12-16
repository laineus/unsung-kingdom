import loadAssets from './loadAssets'
import registerAnims from './registerAnims'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    this.scene.start('Game')
    this.scene.start('UI')
  }
  preload () {
    loadAssets(this)
  }
}
