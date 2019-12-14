import generateBattler from '../util/generateBattler'
export const mercenary1 = (scene, leader, member, member2) => {
  const state = scene.storage.state.event.m1_2
  if (!state.solved) member2.setVisible(false)
  member2.setDisplayName('負傷した傭兵団員').setTapEvent(async chara => {
    await scene.talk([
      { chara, text: 'さっきは本当に助かったよ。ありがとな。' },
      ...(state.completed ? [] : [
        { chara, text: '団長からお礼を受け取ってくれるか？' }
      ])
    ])
  })
  member.setDisplayName('負傷した傭兵団員').setTapEvent(async chara => {
    await scene.talk(state.solved ? [
      { chara, text: '仲間を助けてくれて本当にありがとう。' },
      { chara, text: 'まさかあいつ、サニズマスクの胃の中に隠れていたなんてな。' }
    ] : [
      { chara, text: 'これだけ探して見つからないなんて…、' },
      { chara, text: 'あいつはきっと…。' }
    ])
  })
  leader.setDisplayName('負傷した傭兵団長').setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([{ chara, text: 'レックスベアは諦めて撤退することにするよ。' }])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: 'おお、あんた！' },
        { chara, text: '仲間から話は聞いたぞ。' },
        { chara, text: '花のモンスターに飲み込まれていたなんて、' },
        { chara, text: 'どうりで見つからなかったわけだ。' },
        { chara, text: '彼を助けてくれてありがとう。これはお礼だ。' }
      ])
      scene.ui.missionUpdate('m1_2', true).then(() => {
        scene.ui.increaseWeapon(3)
      })
    } else if (state.started) {
      await scene.talk([{ chara, text: 'きっとそんなに遠くには行っていないはずだ。頼んだぜ。' }])
    } else {
      const messages = [
        [
          { chara: 'ann', text: '大丈夫ですか！？' },
          { chara, text: 'ああ、大丈夫だ。' },
          { chara: 'jaquelyn', text: 'みんな怪我をしているように見えますけど…。' },
          { chara, text: 'レックスベアという人食い熊の討伐に来たんだが、圧倒的に力不足だったようだ。' },
          { chara, text: '返り討ちにされちまったよ。情けねえ。' },
          { chara: 'ann', text: 'レックスベアを討伐するとお金になるんですか？' },
          { chara, text: 'その通りだ。' },
          { chara, text: 'レックスベアには国から高額な討伐報酬がかけられている。' },
          { chara: 'jaquelyn', text: '国もレックスベアの脅威を排除したいんですね。' },
          { chara, text: 'いいや、これはただの厄介払いじゃない。' },
          { chara, text: '王族の病気が関係しているんだ。' },
          { chara: 'jaquelyn', text: 'レックスベアに病気がどう関係してるんですか？' },
          { chara, text: 'この森の奥に住むドリスタンという老人が目当ての薬を調薬できるというんだが、' },
          { chara, text: 'その材料にレックスベアの血液を要求しているらしい。' },
          { chara: 'francisca', text: '薬の材料にモンスターの血液を使うなんて聞いたことないけど。' },
          { chara: 'francisca', text: 'ヤブ医者じゃないの？' },
          { chara, text: 'そんなことは知らん。' },
          { chara, text: '俺たちは報酬目当てできてるんだ。' },
          { chara, text: '「王族」とだけ聞いているが、恐らくはエドガー王のことだろう。' },
          { chara, text: '彼らの慌てぶりと、討伐報酬の額から察しがつく。' },
          { chara: 'ann', text: 'なるほど…。' },
          { chara, text: 'ところであんたら、' }
        ],
        [
          { chara, text: 'この先で俺達の仲間を見かけたら、この場所を伝えてやってくれないか？' },
          { chara, text: 'ここまで逃げてくる途中ではぐれちまったんだよ。' },
          { chara, text: 'おかげでこうして森から撤退できずにいるんだ。' },
          null
        ]
      ]
      const t = await scene.talk(!state.talked ? messages[0].concat(messages[1]) : messages[1])
      const i = await scene.select(['はい', 'いいえ'])
      t.destroy()
      state.talked = true
      await scene.talk([{ chara, text: i === 0 ? '助かる。礼ははずませてもらうぞ。' : 'そうか。' }])
      if (i === 0) scene.ui.missionUpdate('m1_2')
    }
  })
}

export const mercenary2 = (scene, flower, mercenary) => {
  const state = scene.storage.state.event.m1_2
  if (state.completed || state.solved) {
    mercenary.destroy()
    flower.destroy()
    return
  }
  mercenary.setVisible(false)
  flower.setTapEvent(async () => {
    await scene.talk([{ chara: 'ann', text: '何この花。へんなの。' }])
    if (!state.started) return
    const i = await scene.select(['調べる', 'そっとしておく'])
    if (i === 1) return
    await scene.ui.sleep(300)
    const result = await scene.ui.battle([generateBattler('flower', 5, { hp: 270 })], { boss: true })
    if (!result) return
    const chara = mercenary.setDisplayName('負傷した傭兵団員')
    flower.setVisible(false)
    mercenary.setVisible(true)
    await scene.talk([
      { chara: 'ann', text: 'びっくりした…。モンスターだったなんて。' },
      { chara: 'francisca', text: 'ちょっとアン、中から人が出てきたんだけど…。' },
      { chara, text: 'うう…' },
      { chara: 'ann', text: 'わ！ほんとだ！' },
      { chara: 'jaquelyn', text: 'だ、大丈夫ですか？' },
      { chara, text: '助かった…。' },
      { chara: 'jaquelyn', text: '花のモンスターに食べられてしまったの？' },
      { chara, text: 'いや、自分から飛び込んだんだ…。' },
      { chara: 'francisca', text: '自分から？' },
      { chara: 'francisca', text: '何でそんなアンみたいなことを。' },
      { chara: 'ann', text: 'ちょっと！' },
      { chara, text: '実は、レックスベアに負けて仲間と逃げ回っていたんだが、' },
      { chara, text: '俺だけはぐれた挙句ここまで追い詰められてしまったんだ。' },
      { chara, text: '目の前にはさっきのサニズマスクがいて、後ろにはレックスベア、' },
      { chara, text: '意を決して、逃げるようにサニズマスクの胃に飛び込んだんだ。' },
      { chara: 'ann', text: 'な、なるほど…。' },
      { chara, text: 'その後自力で出られないことに気づいてから後悔したよ。' },
      { chara, text: '胃の中でゆっくり溶かされていくくらいなら、' },
      { chara, text: 'レックスベアにひと思いに殺されればよかったってね。' },
      { chara: 'ann', text: 'うわー…。' },
      { chara, text: 'でもあんたたちのおかげで助かったよ。' },
      { chara: 'jaquelyn', text: 'それは災難でしたね。' },
      { chara: 'jaquelyn', text: 'ところで、仲間というのが傭兵団の人たちのことでしたら、' },
      { chara: 'jaquelyn', text: '南のエリアで探していましたよ。' },
      { chara, text: '本当か？何から何までありがとう。' },
      { chara, text: 'あとでそっちに寄ってくれないか？お礼をさせてほしい。' },
      { chara, text: 'じゃあ、あんたたちも気をつけてな。' }
    ])
    state.solved = true
    await scene.ui.sleep(300)
    await scene.ui.transition('normal')
    mercenary.setVisible(false)
  })
}
