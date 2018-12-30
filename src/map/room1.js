import Character from '../class/Character'
import Gate from '../class/Gate'
export default {
  create () {
    new Gate(this, [18, 23, 19, 24], 'town1', [17, 35])
    // npc
    this.npc = new Character(this, (12).toPixel, (17).toPixel, 'player')
    this.npc.setTalk()
    this.map.addCollider(this.npc)
    this.physics.add.collider(this.player, this.npc)
  },
  update () {
    this.npc.update()
  }
}
