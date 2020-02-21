import loadAssets from '../util/loadAssets'
import registerShaders from '../util/registerShaders'
import registerAnims from '../util/registerAnims'
export default class BootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'Boot', active: true })
  }
  create () {
    Phaser.BlendModes.OVERLAY = this.sys.game.renderer.addBlendMode([WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE], WebGLRenderingContext.FUNC_ADD)
    registerAnims(this)
    registerShaders(this)
    this.scene.start('UI')
    this.scene.start('Title')
  }
  preload () {
    loadAssets(this)
  }
}
