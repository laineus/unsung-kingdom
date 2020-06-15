import generateBattler from '../util/generateBattler'
export const MANDRAKE_COUNT = 5
export const drystan = (scene, door, drystan) => {
  const state1 = scene.storage.state.event.m1_3
  const state2 = scene.storage.state.event.m1_4
  // Door
  const canStart = scene.storage.state.event.m1_2.completed
  if (canStart) {
    door.destroy()
  } else {
    drystan.destroy()
    door.setTapEvent(async () => {
      await scene.talk([{ chara: 'ann', text: '留守みたい。' }])
    })
    return
  }
  // Drystan
  if (state2.completed) return drystan.destroy()
  drystan.setDisplayName(t('chara.drystan')).setTapEvent(async chara => {
    const hasMandrake = state1.count >= MANDRAKE_COUNT
    if (!state1.started) {
      await scene.talk([
        { chara: 'ann', text: 'あなたがドリスタンですか？' },
        { chara, text: 'そうだが、何の用だ。' },
        { chara: 'ann', text: '病気を治すための薬を作れると聞いて来ました。' },
        { chara, text: 'またか。' },
        { chara: 'ann', text: 'また？' },
        { chara, text: 'まずは王室からの遣いが来て、' },
        { chara, text: 'その後は薬を王室に売りつけようという考えのゴロツキが何人も来た。' },
        { chara, text: '今のところ、頼んだ材料は誰も持ち帰って来ないがな。' },
        { chara: 'ann', text: 'その材料を教えてもらえますか？' },
        { chara, text: '構わんよ。' },
        { chara, text: '私は誰が材料を持ってくるかに興味はない。' },
        { chara, text: `まずはマンドレイクの根が${MANDRAKE_COUNT}つだ。` },
        { chara: 'ann', text: 'はい、他には？' },
        { chara, text: 'まずはそれを持ってきなさい。他の材料はその後だ。' },
        { chara, text: 'さあ、あまり時間はないぞ。' }
      ])
      scene.ui.missionUpdate('m1_3')
    } else if (!state1.completed && !hasMandrake) {
      await scene.talk([
        { chara, text: `マンドレイクの根を${MANDRAKE_COUNT}つだぞ。` },
        { chara, text: '早いところ持ってきなさい。' }
      ])
    } else if (!state1.completed && hasMandrake) {
      await scene.talk([
        { chara: 'ann', text: 'マンドレイクの根を集めてきました。' },
        { chara, text: '早かったな。' },
        { chara, text: 'うむ。確かに受け取った。' }
      ])
      scene.ui.missionUpdate('m1_3', true)
      await scene.talk([
        { chara: 'ann', text: '次の材料はなんですか？' },
        { chara, text: '魔物の血液だ。' },
        { chara, text: 'それも、たくさんの人間を殺めた魔物の血液を持ってきなさい。' },
        { chara, text: '身近なところで言うと、ここ最近この森を騒がせているレックスベアがちょうどいいだろう。' },
        { chara: 'ann', text: 'レックスベアの血液ですか。' },
        { chara, text: 'そうだ。' },
        { chara, text: '多くの生命力を吸ったヤツの血があれば、王を治す薬など容易い。' },
        { chara, text: 'だが剣に付着した程度の量では足りぬぞ。仕留めて、瓶一杯に持ってこい。' },
        { chara: 'ann', text: 'レックスベアを倒す必要があるんですね。' },
        { chara: 'ann', text: 'わかりました。持ってきます。' }
      ])
      scene.ui.missionUpdate('m1_4')
    } else if (!state2.solved) {
      await scene.talk([
        { chara, text: 'レックスベアだぞ。確実に仕留めて、血液を瓶一杯に持ってこい。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '持ってきました。レックスベアの血液です。' },
        { chara, text: '見せてみろ。' }
      ])
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara, text: 'ふむ。確かにレックスベアを倒したようだな。' },
        { chara, text: 'よし、薬をやろう。もう完成している。' },
        { chara: 'ann', text: 'え、薬を作るためにこの血液が必要なのでは？' },
        { chara, text: 'そんなものはいらん。' },
        { chara, text: '薬に血など混ぜるか。' },
        { chara: 'ann', text: 'ではどうしてレックスベアの血液を？' },
        { chara, text: 'ヤツが邪魔だったからに決まっているだろう。' },
        { chara, text: 'あんな人食い熊に森をうろつかれたのではろくに外出もできん。' },
        { chara: 'ann', text: '生命力がどうのとか、嘘だったの？' },
        { chara, text: 'だったらなんだ。' },
        { chara, text: '王族の命も大事だろうだろうが、自分の命だって大事だ。' },
        { chara, text: '薬をやると言っているんだから文句はないだろう。' },
        { chara, text: '金もいらんぞ。' },
        { chara: 'ann', text: '…そうですか。' },
        { chara: 'ann', text: '薬、ありがとうございます。' },
        { chara, text: '自分で飲むなり王家に売りつけるなり好きにしろ。' },
        { chara, text: 'どうせお前も知っているのだろうが、病気なのは王だ。高く売れるだろう。' },
        { chara: 'ann', text: 'いえ、これは王室の遣いが戻ったときに渡してください。' },
        { chara, text: '…ふむ。' },
        { chara, text: 'わかった。何を目当てにしているかは知らんが、言うとおりにしよう。' },
        { chara: 'ann', text: 'ところで、王はどうして突然病気になったのですか？' },
        { chara, text: '突然病気になることは不思議なことではないだろう。' },
        { chara, text: '一度城まで呼び出されて王を診てきたが、' },
        { chara, text: 'あれが本当に病気なのかは怪しいものだな。' },
        { chara: 'ann', text: 'どういうことですか？' },
        { chara, text: '例えばお前は、病気と毒による衰弱の区別がつくか？' },
        { chara: 'ann', text: '毒、ですか？' },
        { chara, text: '王室の修道士たちには分からなかったようだ。' },
        { chara: 'ann', text: '王は毒で苦しんでいるんですか？' },
        { chara, text: '知らんな。' },
        { chara, text: '私は厄介事には関わりたくない。' },
        { chara, text: 'そのためにこうして森の深くに引きこもっているんだ。' },
        { chara, text: 'さあ、薬は確かに渡しておくから、さっさと帰ってくれ。' }
      ])
      await scene.ui.transition('slow')
      drystan.destroy()
      scene.player.setR('down')
      await scene.ui.sleep(1000)
      scene.ui.missionUpdate('m1_4', true)
      await scene.talk([
        { chara: 'ann', text: 'よし、任務達成だね！' },
        { chara: 'jaquelyn', text: 'そうね。頑張ったわ、アン。' },
        { chara: 'francisca', text: 'さあ、さっさと戻ろう。' },
        { chara: 'francisca', text: '王国史を確認したいし。' }
      ])
      await scene.ui.sleep(1000)
      scene.storage.state.chapter = 2
      await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    }
  })
}
export const rexBear = (scene, area, bear) => {
  const state2 = scene.storage.state.event.m1_4
  if (!state2.started || state2.solved) {
    area.destroy()
    bear.destroy()
    return
  }
  if (!state2.area) {
    scene.ui.autoEvent(async () => {
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: 'ann', text: 'このエリア、モンスターが全然いない…？' },
        { chara: 'francisca', text: '怪しいね。注意して調べよう。' }
      ])
      state2.area = true
    })
  }
  area.setEvent(async () => {
    await scene.talk([
      { chara: 'ann', text: 'いた！' }
    ])
    scene.francisca.setAllowWalkingWhileEvent(true)
    scene.jaquelyn.setAllowWalkingWhileEvent(true)
    await scene.player.setTargetPosition(795, 490)
    await scene.player.setR('up')
    await scene.ui.sleep(500)
    area.setEvent(null)
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: 'みんな、行くよ！' }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('bear', 11, { hp: 600 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('rex_bear')
    area.destroy()
    await bear.die()
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'francisca', text: 'なんとか倒したね。' }
    ])
    await scene.ui.sleep(500)
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: 'よし、血液も回収したし、賢人のところに戻りましょう。' }
    ])
    state2.solved = true
  })
}
