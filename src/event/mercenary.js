export const mercenary1 = (scene, leader, member) => {
  const state = scene.storage.state.event['1-2']
  if (!state.solved) member.visible = false
  member.setDisplayName('負傷した傭兵団員').setTapEvent().on('tap', async chara => {
    scene.talk([{ chara, text: 'さっきは本当に助かったよ。ありがとな。' }])
  })
  leader.setDisplayName('負傷した傭兵団長').setTapEvent().on('tap', async chara => {
    if (state.completed) {
      scene.talk([{ chara, text: 'レックスベアは諦めて撤退することにするよ。' }])
    } else if (state.solved) {
      scene.talk([{ chara, text: '仲間を助けてくれて助かった。これはお礼だ。' }])
      state.completed = true
    } else if (state.started) {
      scene.talk([{ chara, text: 'きっとそんなに遠くには行っていないはずだ。頼んだぜ。' }])
    } else {
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
      const t = await scene.talk(!state.talked ? messages[0].concat(messages[1], null) : messages[1].concat(null))
      const i = await scene.select(['はい', 'いいえ'])
      state.talked = true
      t.destroy()
      scene.talk([{ chara, text: i === 0 ? '助かる。礼ははずませてもらうぞ。' : 'そうか。' }])
      if (i === 0) state.started = true
    }
  })
}

export const mercenary2 = (scene, flower, mercenary) => {
  const state = scene.storage.state.event['1-2']
  if (state.completed || state.solved) {
    mercenary.destroy()
    flower.destroy()
    return
  }
  mercenary.visible = false
  flower.setTapEvent().on('tap', async () => {
    await scene.talk([{ chara: 'francisca', text: '何この花。へんなの。' }])
    if (!state.started) return
    await scene.ui.sleep(300)
    await scene.ui.battle(['torrent'])
    const chara = mercenary.setDisplayName('負傷した傭兵団員')
    flower.visible = false
    mercenary.visible = true
    await scene.talk([
      { chara: 'francisca', text: 'うわ、中から人が！' },
      { chara, text: 'うう…' },
      { chara: 'ann', text: 'だ、大丈夫ですか？' },
      { chara, text: '助かった…。' },
      { chara: 'jaquelyn', text: '花のモンスターに食べられてしまったの？' },
      { chara, text: 'いや、自分から飛び込んだんだ…。' },
      { chara: 'francisca', text: '自分から？へんなの。' },
      { chara, text: '実は、レックスベアから逃げる途中、仲間とはぐれてしまったんだ。' },
      { chara, text: 'その後ここまで追い込まれてしまって…、' },
      { chara, text: '目の前にはバグフラワーがいて、後ろにはレックスベア、' },
      { chara, text: '意を決して、逃げるようにバグフラワーの胃に飛び込んだんだ。' },
      { chara, text: 'その後自力で出られないことに気づいてから後悔したよ。' },
      { chara, text: '胃の中でゆっくり溶かされていくくらいなら、' },
      { chara, text: 'レックスベアにひと思いに殺されればよかったってね。' },
      { chara, text: 'でもあんたたちのおかげで助かったよ。' },
      { chara: 'ann', text: 'それは災難でしたね。' },
      { chara: 'ann', text: 'ところで、仲間というのが傭兵団の人たちのことでしたら、' },
      { chara: 'ann', text: '南のエリアで探していましたよ。' },
      { chara, text: '本当か？何から何までありがとう。' },
      { chara, text: 'あとでそっちに寄ってくれないか？お礼をさせてほしい。' },
      { chara, text: 'じゃあ、あんたたちも気をつけてな。' }
    ])
    state.solved = true
    await scene.ui.sleep(300)
    await scene.ui.transition()
    mercenary.visible = false
  })
}
