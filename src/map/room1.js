import Character from '../class/Character'
import Gate from '../class/Gate'
export default {
  create (scene) {
    new Gate(scene, 'town1', 17, 35, [18, 23, 19, 24])
    // npc
    this.npc = new Character(scene, (12).toPixelCenter, (17).toPixelCenter, 'player')
    this.npc.setTalk()
    scene.map.addCollider(this.npc)
    scene.physics.add.collider(scene.player, this.npc)
  },
  update () {
    this.npc.update()
  }
}
