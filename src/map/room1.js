import Character from '../class/Character'
export default {
  create (scene) {
    // npc
    this.npc = new Character(scene, (12).toPixelCenter, (17).toPixelCenter, 'player')
    this.npc.setTalk([
      { chara: 'ann', text: 'こんにちは。' },
      { chara: 'francisca', text: 'はいこんにちは。' },
      { chara: 'francisca', text: 'こんばんは。' }
    ])
  }
}
