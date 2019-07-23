import config from '../data/config'
export default class MenuStatus extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const tx = scene.add.text(15, 15, 'CHARACTER', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    this.add(tx)
    const players = scene.storage.state.battlers
    const chara = this.getCharacter(players[0], 180, (30).byBottom)
    this.add(chara)
  }
  getCharacter (chara, x, y) {
    const container = this.scene.add.container(x, y)
    const imgBg = this.scene.add.sprite(-10, -5, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64).setTint(0).setAlpha(0.5)
    const img = this.scene.add.sprite(0, 0, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64)
    container.add([imgBg, img])
    return container
  }
}
