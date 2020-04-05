const scriptsForSoldiers = [
  [
    'ドラゴンは…、我々が想定していたよりもずっと強力だった…。'
  ],
  [
    '十年前、王はどうやってアイツに勝ったというのだ…。'
  ],
  [
    '王を助けに行きたいが…、体が動いてくれない…。'
  ]
]
export const ethelbald = (scene, ethel, soldiers) => {
  const state = scene.storage.state.event.m4_5
  soldiers.forEach((v, i) => {
    if (state.completed) return v.destroy()
    v.setDisplayName('負傷した兵士').setTapEvent(async chara => {
      await scene.talk(scriptsForSoldiers[i].map(text => ({ chara, text })))
    })
  })
  ethel.setDisplayName('王弟エゼルバルド').setTapEvent(async chara => {
    if (state.started) {
      await scene.talk([
        { chara: 'ann', text: 'あの、どこかで会ったことないです…？' },
        { chara, text: '無駄話をしている場合ではないはずだ。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '大丈夫ですか！？' },
        { chara, text: 'お前たちは…。' },
        { chara: 'ann', text: 'ドラゴンにやられたんですね？' },
        { chara, text: 'そうだ…。' },
        { chara, text: '兄を…、' },
        { chara, text: 'エドガーを助けに来たのか？' },
        { chara: 'ann', text: 'はい。' },
        { chara: 'ann', text: 'あなたは、王弟？' },
        { chara, text: '俺のことはいい。' },
        { chara, text: 'エドガーと、ドラゴンはこの先だ、' },
        { chara: 'ann', text: 'でも、ひどい傷、' },
        { chara, text: '構うな。' },
        { chara, text: '彼は今、独りで戦っている。' },
        { chara, text: '兄を…、' },
        { chara, text: '兄を頼む…。' }
      ])
      scene.ui.missionUpdate('m4_5')
      state.started = true
    }
  })
}

export const dragon = (scene, sonberk, king, area1, area2) => {
  const state = scene.storage.state.event.m4_5
  area1.setEvent(async () => {
    await scene.talk([
      { chara: sonberk, text: 'エドガーよ、貴様自ら現れるとは、良い度胸だ。' },
      { chara: sonberk, text: 'この俺を十年も封じておきながら、ただで帰れるとは思っていまいな。' },
      { chara: sonberk, text: 'それとも、十年前のように俺を倒せるとでも思っているのか？' },
      { chara: king, text: 'そこまで慢心してはおらん。' },
      { chara: king, text: 'ソンベルクよ、一つ聞かせてくれ。' },
      { chara: king, text: '今ここで私の首を差し出せば、お前の怒りは鎮まるか？' },
      { chara: sonberk, text: 'この期に及んで貴様の王国を心配しているな？' },
      { chara: sonberk, text: '安心しろ。' },
      { chara: sonberk, text: '貴様が今ここにいること、' },
      { chara: sonberk, text: '弟のエゼルバルドは約束を果たしたも同然。' },
      { chara: sonberk, text: '約束通り貴様の首で王国のことは見逃してやろう。' },
      { chara: king, text: 'そうか。' },
      { chara: king, text: '弟とどのような交渉をしたのかは存ぜぬが、それこそ私の望むところだ。' },
      { chara: king, text: 'さあ、気の済むまで私を焼くがよい。' }
    ])
  })
  area2.setEvent(async () => {
    const chara = sonberk
    await scene.talk([
      { chara: 'ann', text: 'ソンベルク！覚悟しなさい！' },
      { chara, text: '誰だ？' },
      { chara, text: '騎士共の生き残りじゃないな。' },
      { chara: 'ann', text: '私たちはただの市民。' },
      { chara, text: 'ただの市民がなんの用だ。' },
      { chara, text: '王を助けに来たとでも言うのか？' },
      { chara: 'ann', text: 'その通りよ！' },
      { chara, text: 'ナメられたものだ。小娘ごときに何ができる？' },
      { chara: 'ann', text: 'あなたを倒す。' },
      { chara: 'ann', text: 'この剣でね。' },
      { chara, text: 'その剣は…、' },
      { chara, text: '知っているぞ。' },
      { chara, text: '何故お前たちが持っている？' },
      { chara, text: 'まあいい。' },
      { chara, text: '小娘ごときが剣を手にしたから何だという。' },
      { chara, text: '立ち去る気がないのなら相手になってやろう。' },
      { chara, text: '来い！' }
    ])
  })
}
