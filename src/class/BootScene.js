import loadAssets from '../util/loadAssets'
import registerShaders from '../util/registerShaders'
import registerAnims from '../util/registerAnims'
import config from '../data/config'
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
    const bg = this.add.rectangle(config.WIDTH.half - 100, config.HEIGHT.half, 200, 2, config.COLORS.ghost).setOrigin(0)
    const progress = this.add.rectangle(config.WIDTH.half - 100, config.HEIGHT.half, 200, 2, config.COLORS.theme).setOrigin(0).setScale(0, 1)
    const text = this.add.text(config.WIDTH.half, config.HEIGHT.half - 15, '', { align: 'center', fill: config.COLORS.gray.toColorString, fontSize: 13, fontFamily: config.FONTS.UI }).setOrigin(0.5)
    this.load.on('progress', value => {
      progress.scaleX = Math.max(value, progress.scaleX)
      text.text = `Loading ${Math.round(value * 100)}%`
    })
    this.load.on('complete', () => {
      bg.destroy()
      progress.destroy()
      text.destroy()
    })
    loadAssets(this)
  }
}
