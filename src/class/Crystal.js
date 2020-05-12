import Substance from './Substance'
export default class Character extends Substance {
  constructor (scene, x, y) {
    super(scene, x, y, 'crystal')
    this.shadow.y -= 3
    this.shadow.setScale(1.3, 0.5)
    const light = scene.add.sprite(0, 0, 'chara_sprite/crystal').setFrame(2).setOrigin(0.5, 1).setBlendMode(Phaser.BlendModes.OVERLAY).setAlpha(0.4)
    const tween = scene.add.tween({
      targets: light, duration: 900, yoyo: true, alpha: 0.9, loop: -1
    })
    this.add(light)
    this.setTapEvent(async () => {
      scene.storage.state.battlers.forEach(v => v.hp = v.max_hp)
      scene.ui.announce('HPが全回復した')
      tween.stop()
      light.setAlpha(1)
      scene.add.tween({
        targets: light, duration: 900, alpha: 0, onComplete: () => light.destroy()
      })
      this.image.setFrame(1)
      this.removeTapEvent()
    })
  }
}
