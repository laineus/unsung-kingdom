import Character from '../class/Character'
export default {
  gates: [
    { key: 'town1', x: 17, y: 35, area: [18, 23, 19, 24] }
  ],
  create (scene) {
    // npc
    this.npc = new Character(scene, (12).toPixelCenter, (17).toPixelCenter, 'player')
    this.npc.setTalk([
      ['ann', 'francisca'],
      { name: 'ann', text: 'こんにちは。' },
      { name: 'francisca', text: 'はいこんにちは。' },
      ['ann', 'francisca', 'jaquelyn'],
      { name: 'francisca', text: 'こんばんは。' }
    ])
    scene.map.addCollider(this.npc)
    scene.physics.add.collider(scene.player, this.npc)
  }
}
