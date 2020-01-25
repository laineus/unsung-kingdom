import loadAssets from '../util/loadAssets'
export default class GuideBootScene extends Phaser.Scene {
  constructor () {
    super({ key: 'GuideBoot', active: true })
  }
  create () {
    this.scene.start('Guide')
  }
  preload () {
    loadAssets(this)
  }
}
