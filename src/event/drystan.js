import generateBattler from '../util/generateBattler'
export const drystan = (scene, door, drystan) => {
  const state1 = scene.storage.state.event.m1_3
  const state2 = scene.storage.state.event.m1_4
  // Door
  const canStart = scene.storage.state.event.m1_1.completed || scene.storage.state.event.m1_2.completed
  if (canStart) {
    door.destroy()
  } else {
    door.setTapEvent.on('tap', async () => {
      scene.talk([{ chara: 'ann', text: '留守みたい。' }])
    })
  }
  // Drystan
  if (state2.completed) return drystan.destroy()
  drystan.setDisplayName('賢人ドリスタン').setTapEvent().on('tap', async chara => {
    const hasMandrake = true
    if (!state1.started) {
      scene.talk([
        { chara: 'ann', text: 'あなたがドリスタンですか？' },
        { chara, text: 'そうだが、何か用かね。' },
        { chara: 'ann', text: '王の病気を治すための薬を作れると聞きました。' },
        { chara, text: 'またか。' },
        { chara: 'ann', text: 'また？' },
        { chara, text: 'まずは王室からの遣いが来て、その後は薬を王室に売りつけようという考えのゴロツキが何人も来た。' },
        { chara, text: '今のところ、頼んだ材料は誰も持ち帰って来ないがな。' },
        { chara: 'ann', text: 'その材料を教えてもらえますか？' },
        { chara, text: '構わんよ。私は誰が材料を持ってくるかに興味はない。' },
        { chara, text: 'まずはマンドレイクの根が5つだ。' },
        { chara: 'ann', text: 'はい、他には？' },
        { chara, text: 'まずはそれを持ってきなさい。他の材料はその後だ。' },
        { chara: 'ann', text: 'さあ、あまり時間はないぞ。' },
      ])
      state1.started = true
    } else if(!state1.completed && !hasMandrake) {
      scene.talk([
        { chara, text: 'マンドレイクの根を5つだぞ。' },
        { chara: 'ann', text: '早いところ持ってきなさい。' }
      ])
    } else if(!state1.completed && hasMandrake) {
      scene.talk([
        { chara: 'ann', text: 'マンドレイクの根を集めてきました。' },
        { chara, text: '早かったな。' },
        { chara, text: 'うむ。確かに受け取った。' },
        { chara: 'ann', text: '次の材料はなんですか？' },
        { chara, text: '魔物の血液だ。' },
        { chara, text: 'それも、たくさんの人間を殺めた魔物の血液を持ってきなさい。' },
        { chara, text: '身近なところで言うと、ここ最近この森を騒がせているレックスベアがちょうどいいだろう。' },
        { chara: 'ann', text: 'レックスベアの血液ですか。' },
        { chara, text: 'そうだ。' },
        { chara, text: '多くの生命力を吸ったヤツの血があれば、王を治す薬など容易い。' },
        { chara, text: 'だが剣に付着した程度の量では足りぬぞ。仕留めて、瓶一杯に持ってこい。' },
        { chara: 'ann', text: 'わかりました。持ってきます。' }
      ])
      state1.completed = true
      state2.started = true
    } else if (!state2.solved) {
      scene.talk([
        { chara, text: 'レックスベアだぞ。確実に仕留めて、瓶一杯に持ってこい。' }
      ])
    } else {
      scene.talk([
        { chara: 'ann', text: '持ってきました。レックスベアの血液です。' },
        { chara, text: 'ふむ。確かにレックスベアを倒したようだな。' },
        { chara, text: 'よし、薬をやろう。これだ。' },
        { chara: 'ann', text: 'え、この血液が調薬に必要なのでは？' },
        { chara, text: 'そんなものはいらん。薬に血など混ぜるか。' },
        { chara: 'ann', text: 'ではどうしてレックスベアの血液を？' },
        { chara, text: 'ヤツが邪魔だったからに決まっているだろう。' },
        { chara, text: 'あんな人食い熊に森をうろつかれたのではろくに外出もできん。' },
        { chara: 'ann', text: '生命力がどうのとか、嘘だったの？' },
        { chara, text: 'だったらなんだ。' },
        { chara, text: '国王の命も大事だろうだろうが、自分の命だって大事だ。' },
        { chara, text: '薬をやると言っているんだから文句はないだろう。' },
        { chara: 'ann', text: '…そうですか。' },
        { chara, text: '薬、ありがとうございます。' },
        { chara, text: '自分で飲むなり王家に売りつけるなり好きにしろ。' },
        { chara, text: 'いえ、これは王室の遣いが戻ったときに渡してください。' },
        { chara, text: '…ふむ。' },
        { chara, text: 'わかった。何を目当てにしているかは知らんが、言うとおりにしよう。' },
        { chara: 'ann', text: 'ところで、王はどうして突然病気になったのですか？' },
        { chara, text: '突然病気になることは不思議なことではないだろう。' },
        { chara, text: 'あれが本当に病気なのかは怪しいがな。' },
        { chara: 'ann', text: 'どういうことですか？' },
        { chara, text: '修道士ごときに病気か毒による衰弱かの区別などつかん。' },
        { chara: 'ann', text: '毒？' },
        { chara, text: 'そういうことだ。' },
        { chara, text: 'さあ、薬は確かに渡しておくから、さっさと帰ってくれ。' }
      ])
      state2.completed = true
    }
  })
}
export const rexBear = (scene, bear) => {
  const state2 = scene.storage.state.event.m1_4
  if (state2.solved) return bear.destroy()
  flower.setTapEvent().on('tap', async () => {
    await scene.ui.sleep(300)
    await scene.ui.battle([generateBattler('torrent', 8)])
    bear.destroy()
    state2.solved = true
  })
}
