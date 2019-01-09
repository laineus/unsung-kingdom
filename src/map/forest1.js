import Enemy from '../class/Enemy'
export default {
  create (scene) {
    // enemy
    this.enemy = new Enemy(scene, (19).toPixelCenter, (19).toPixelCenter, 'player')
    this.enemy.setTarget(scene.player)
  }
}
