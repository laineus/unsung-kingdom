import loadAssets from '../util/loadAssets'
import registerAnims from '../util/registerAnims'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    this.scene.start('UI')
    this.scene.start('Game', { map: 'room1', x: 100, y: 200 })
  }
  preload () {
    loadAssets(this)
  }
}
