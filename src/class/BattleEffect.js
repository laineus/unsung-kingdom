export default class BattleEffect extends Phaser.GameObjects.Sprite {
  constructor (scene, cri, type) {
    super(scene, 0, 0, 'battle_effects')
    this.scene = scene
    this.blendMode = 1
    this[type](cri)
  }
  hit (cri = false) {
    this.setFrame(1)
    this.setScale(0.5, 0.5)
    const scale = cri ? 1.7 : 1.2
    this.scene.add.tween({
      targets: this, duration: 120,
      scaleX: scale, scaleY: scale, alpha: 0.3,
      onComplete: () => this.destroy()
    })
  }
  shot (cri = false) {
    this.setFrame(0)
    const scale = cri ? 1.5 : 1
    this.setScale(scale, scale)
    this.scene.add.tween({
      targets: this, duration: 120,
      scaleX: 0.3, scaleY: 0.3, alpha: 0.3,
      onComplete: () => this.destroy()
    })
  }
  slash (cri = false) {
    this.setFrame(5)
    const scale = cri ? 1.5 : 1
    this.setScale(scale, scale)
    this.setPosition(70, -70)
    this.scene.add.tween({
      targets: this, duration: 120,
      rotation: -0.5,
      x: -70, y: 70, alpha: 0,
      onComplete: () => this.destroy()
    })
  }
  crash (cri = false) {
    this.setFrame(2)
    const scale = cri ? 1.5 : 1
    this.setScale(scale, scale)
    this.setPosition(10, -30)
    this.scene.add.tween({
      targets: this, duration: 120,
      x: -10, y: 30, alpha: 0,
      onComplete: () => this.destroy()
    })
  }
  scratch (cri = false) {
    this.setFrame(4)
    const scale = cri ? 1.5 : 1
    this.setScale(scale, scale)
    this.setPosition(40, -40)
    this.setRotation(0.5)
    this.scene.add.tween({
      targets: this, duration: 120,
      rotation: -0.5,
      x: -40, y: 40, alpha: 0,
      onComplete: () => this.destroy()
    })
  }
  stab (cri = false) {
    this.setFrame(3)
    const scale = cri ? 1.5 : 1
    this.setScale(scale, scale)
    this.setPosition(0, -100)
    this.scene.add.tween({
      targets: this, duration: 120,
      scaleX: 0.2, scaleY: 0.1,
      y: 100, alpha: 0,
      onComplete: () => this.destroy()
    })
  }
}
