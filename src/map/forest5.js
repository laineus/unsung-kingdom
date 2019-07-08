import dogEvent from './dogEvent'
export default {
  create (scene) {
    dogEvent(scene, scene.map.getObjectById(3), '2')
    scene.map.getObjectById(4).setDisplayName('負傷した傭兵団長').setTapEvent().on('tap', async chara => {
      if (!scene.storage.state.event.mercenary.started) {
        const messages = [
          [
            { chara: 'ann', text: '大丈夫ですか？' },
            { chara, text: 'ああ、大丈夫だ。' },
            { chara: 'jaquelyn', text: '怪我をしているように見えますけど。' },
            { chara, text: '人食い熊のレックスベアの討伐に来たんだが、圧倒的に力不足だったようだ。' },
            { chara, text: '情けねえ。' },
            { chara: 'ann', text: 'どうしてレックスベアを？' },
            { chara, text: 'ただの報酬目当てさ。' },
            { chara, text: '国王の病気が関係してるみたいでな、奴の討伐報酬はかなりのものなんだ。' },
            { chara: 'jaquelyn', text: '国王の病気がどう関係してるんですか？' },
            { chara, text: 'この森の奥に住むドリスタンという老人が、王の治療のための調薬を頼まれているんだが、' },
            { chara, text: 'その材料にレックスベアの死体を要求しているらしい。' },
            { chara, text: 'なんでかは知らん。' },
            { chara: 'ann', text: 'そうなんですね。' },
            { chara, text: 'ところであんたら、' }
          ],
          [
            { chara, text: 'この先で俺達の仲間を見かけたら、この場所を伝えてやってくれないか？' },
            { chara, text: 'ここまで逃げてくる途中ではぐれちまったんだよ。' },
            { chara, text: 'おかげでこうして森から撤退できずにいるんだ。' }
          ]
        ]
        const t = await scene.talk(!scene.storage.state.event.mercenary.talked ? messages[0].concat(messages[1], null) : messages[1].concat(null))
        const i = await scene.select(['はい', 'いいえ'])
        scene.storage.state.event.mercenary.talked = true
        t.destroy()
        scene.talk([{ chara, text: i === 0 ? '助かる。礼ははずませてもらうぞ。' : 'そうか。' }])
        if (i === 0) scene.storage.state.event.mercenary.started = true
      } else {
        scene.talk([{ chara, text: 'きっとそんなに遠くには行っていないはずだ。頼んだぜ。' }])
      }
    })
  }
}
