import config from '../data/config'
import Box from './Box'
export default class MenuStatus extends Phaser.GameObjects.Container {
  constructor (scene) {
    super(scene)
    this.scene = scene
    const tx = scene.add.text(15, 15, 'CHARACTER', { align: 'center', fontSize: 21, fontStyle: 'bold', fontFamily: config.FONT })
    this.add(tx)
    const players = scene.storage.state.battlers
    const tabs = players.map((p, i) => this.getTabItem(p, 400 + i * 130, (50).byBottom))
    this.add(tabs)
    this.setCharacter(players[0])
  }
  setCharacter (chara) {
    if (this.chara) {
      if (this.chara.battler === chara) return
      const beforeChara = this.chara
      this.scene.add.tween({ targets: beforeChara, duration: 200, ease: 'Power2', x: beforeChara.x - 50, alpha: 0, onComplete: () => beforeChara.destroy() })
    }
    this.chara = this.getCharacter(chara, 180, (30).byBottom)
    this.add(this.chara)
  }
  getCharacter (chara, x, y) {
    const container = this.scene.add.container(x - 50, y).setAlpha(0)
    container.battler = chara
    const imgBg = this.scene.add.sprite(-10, -5, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64).setTint(0).setAlpha(0.5)
    const img = this.scene.add.sprite(0, 0, chara.key).setOrigin(0.5, 1).setScale(0.64, 0.64)
    this.scene.add.tween({ targets: container, duration: 200, ease: 'Power2', x, alpha: 1 })
    container.add([imgBg, img])
    return container
  }
  getTabItem (chara, x, y) {
    const container = this.scene.add.container(x, y).setSize(120, 45)
    const box = new Box(this.scene, 0, 0, 120, 45)
    const text = this.scene.add.text(-45, 18, chara.name, { fontSize: 15, fontStyle: 'bold', fontFamily: config.FONT }).setOrigin(0, 1)
    container.setInteractive().on('pointerdown', () => this.setCharacter(chara))
    container.add([box, text])
    return container
  }
}
