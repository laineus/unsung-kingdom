import loadAssets from '../util/loadAssets'
import registerShaders from '../util/registerShaders'
import registerAnims from '../util/registerAnims'
import storage from '../data/storage'
export default class GameScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    registerAnims(this)
    registerShaders(this)
    const state = storage.state
    this.scene.start('UI')
    this.scene.start('Game', { map: state.map, x: state.x, y: state.y })
  }
  preload () {
    loadAssets(this)
  }
}
