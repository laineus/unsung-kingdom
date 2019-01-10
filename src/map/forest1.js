import Enemy from '../class/Enemy'
export default {
  create (scene) {
    // enemy
    new Enemy(scene, (19).toPixelCenter, (19).toPixelCenter, 'player')
  }
}
