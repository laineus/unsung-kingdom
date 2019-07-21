import config from '../data/config'
export default class MenuStatus extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const tx = scene.add.text(15, 15, 'CHARACTER', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    this.add(tx)
  }
}
