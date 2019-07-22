import Substance from '../class/Substance'
export default {
  create (scene) {
    const eState = scene.storage.state.event
    // doorToRoom
    this.doorToRoom = new Substance(scene, (17).toPixelCenter, (34).toPixelCenter)
    this.doorToRoom.setTapEvent().on('tap', () => scene.mapChange('room1', (18).toPixelCenter, (20).toPixelCenter))
    // chapter1
    if (!eState.talked_sick) scene.map.getObjectById(1).setBlocked(() => {
      scene.talk([{ chara: 'ann', text: 'こっちに用はない' }])
    })
    scene.map.getObjectById(2).setDisplayName('市民').setTapEvent().on('tap', async chara => {
      if (!eState.talked_sick) {
        scene.talk([
          { chara: 'ann', text: 'こんにちは、お兄さん。' },
          { chara, text: 'やあ。何か用かい？お姉さんたち。' },
          { chara: 'ann', text: '国王の病気について聞いてもいいですか？' },
          { chara, text: '君たちよそから来たのかい？' },
          { chara, text: '国王は知っての通り病気だ。ある日突然病を患ったんだ。' },
          { chara, text: '混乱を避けるためか、あまり表沙汰にしていないみたいだけど、かなり状態が良くないらしい。' },
          { chara: 'jaquelyn', text: '治らないんですか？' },
          { chara, text: 'どんな病気かは知らないが、ドリスタンという森の賢人なら大抵の病を治せる。' },
          { chara, text: '今回も彼を頼っているはずだが、何故だか難航しているようだ。' },
          { chara: 'ann', text: 'そうなんですね。ありがとうございました。' }
        ])
        eState.talked_sick = true
        scene.map.getObjectById(1).setBlocked(false)
      } else {
        scene.talk([
          { chara, text: 'ワン！' }
        ])
      }
    })
  },
  update () {
    this.doorToRoom.update()
  }
}
