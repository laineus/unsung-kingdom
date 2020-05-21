import config from '../data/config'
export default class Pager extends Phaser.GameObjects.Container {
  constructor (scene, x, y, width) {
    super(scene, x, y)
    this.scene = scene
    this.width = width
  }
  set (prev = true, next = true) {
    if (this.pagerPrevious) this.pagerPrevious.destroy()
    if (this.pagerNext) this.pagerNext.destroy()
    if (prev) {
      this.pagerPrevious = this.scene.add.container(50, 0).setSize(100, 30).setInteractive().on('pointerdown', () => {
        this.scene.audio.se('click')
        this.emit('prev')
      })
      this.pagerPrevious.add(this.scene.add.text(-10, -1, 'Prev', { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONTS.UI, fill: config.COLORS.gray.toColorString }).setOrigin(0, 0.5))
      this.pagerPrevious.add(this.scene.add.sprite(-45, 0, 'arrow').setScale(0.5).setOrigin(0, 0.5))
      this.add(this.pagerPrevious)
    }
    if (next) {
      this.pagerNext = this.scene.add.container(this.width - 50, 0).setSize(100, 30).setInteractive().on('pointerdown', () => {
        this.scene.audio.se('click')
        this.emit('next')
      })
      this.pagerNext.add(this.scene.add.text(10, -1, 'Next', { fontSize: 13, fontStyle: 'bold', fontFamily: config.FONTS.UI, fill: config.COLORS.gray.toColorString }).setOrigin(1, 0.5))
      this.pagerNext.add(this.scene.add.sprite(45, 0, 'arrow').setScale(-0.5, 0.5).setOrigin(0, 0.5))
      this.add(this.pagerNext)
    }
  }
}
