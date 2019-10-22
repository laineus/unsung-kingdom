import loadAssets from '../util/loadAssets'
import registerShaders from '../util/registerShaders'
import registerAnims from '../util/registerAnims'
export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    registerShaders(this)
    this.scene.start('Title')
    this.scene.start('UI')
  }
  preload () {
    loadAssets(this)
  }
}
