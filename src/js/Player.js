export default class Player extends Phaser.GameObjects.Sprite {
  constructor (scene, x, y) {
    super(scene, x, y, 'player')
    scene.physics.world.enable(this)
    scene.add.existing(this)
  }
  update (cursors) {
    this.body.setVelocity(0)
    if (cursors.left.isDown) {
      this.body.setVelocityX(-100)
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(100)
    }
    if (cursors.up.isDown) {
      this.body.setVelocityY(-100)
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(100)
    }
    this.body.velocity.normalize().scale(100)
  }
}
