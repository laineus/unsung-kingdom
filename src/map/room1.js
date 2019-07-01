import Character from '../class/Character'
export default {
  create (scene) {
    // npc
    this.npc = new Character(scene, (12).toPixelCenter, (17).toPixelCenter, 'player')
    this.npc.setTalk([
      ['ann', 'francisca'],
      { name: 'ann', text: 'こんにちは。' },
      { name: 'francisca', text: 'はいこんにちは。' },
      ['ann', 'francisca', 'jaquelyn'],
      { name: 'francisca', text: 'こんばんは。' },
      null
    ])
  }
}
