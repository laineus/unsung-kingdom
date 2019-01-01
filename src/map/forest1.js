import Enemy from '../class/Enemy'
export default {
  gates: [
    { key: 'town1', x: 2, y: 20, area: [46, 16, 47, 19] },
    { key: 'forest2', x: 41, y: 2, area: [9, 30, 14, 31] }
  ],
  create (scene) {
    // enemy
    this.enemy = new Enemy(scene, (19).toPixelCenter, (19).toPixelCenter, 'player')
    this.enemy.setTarget(scene.player)
    scene.map.addCollider(this.enemy)
    scene.physics.add.collider(scene.player, this.enemy)
  },
  update () {
    this.enemy.update()
  }
}
