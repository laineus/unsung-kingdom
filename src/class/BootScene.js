import loadAssets from '../util/loadAssets'
import registerShaders from '../util/registerShaders'
import registerAnims from '../util/registerAnims'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    registerShaders(this)
    this.scene.start('Title')
  }
  preload () {
    loadAssets(this)
  }
}
