import Character from '../class/Character'
export default {
  create () {
    // npc
    this.npc = new Character(this, 160, 210, 'player')
    this.npc.setTalk()
    this.map.addCollider(this.npc)
    this.physics.add.collider(this.player, this.npc)
  },
  update () {
    this.npc.update()
  }
}
