export const APPLES_COUNT = 5
export const GOOD_APPLES = ['a8_5', 'a8_6', 'a8_7', 'a8_9', 'a9_4']

export const lute = (scene, poets) => {
  const state = scene.storage.state.event.m4_4
  poets.setDisplayName('ライラ')
  poets.image.anims.play('poets_lute', true)
  poets.setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'やあ' }
      ])
    } else if (state.apples.length >= APPLES_COUNT) {
      const completedGoodApples = state.apples.count(v => GOOD_APPLES.includes(v)) >= APPLES_COUNT
      await scene.talk([
        { chara: 'ann', text: 'リンゴ集めてきたよ！' },
        { chara, text: 'お、いいね。' }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: completedGoodApples ? 'うん、美味しい。' : 'うーん、あんまり美味しくないリンゴだね。' },
        { chara, text: completedGoodApples ? 'ありがとう。' : 'まあ、仕方ないか。' }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: 'じゃあ約束だね、' },
        { chara, text: '開けるよ。' },
        { chara: 'ann', text: 'どういう仕掛けなの？' },
        { chara, text: 'リュートを鳴らすんだ。' },
        { chara, text: 'その音に反応して地下への扉が開く。' },
        { chara: 'ann', text: 'へー。' },
        { chara, text: 'じゃあ、聞いていてね。' }
      ])
      await scene.talk([
        { chara, text: 'さて、開いたはずだよ。' },
        { chara: 'ann', text: 'すごい！' },
        { chara: 'ann', text: 'どうして音で仕掛けが動くの？' },
        { chara, text: '私もよく分からないんだよね。' },
        { chara, text: '私が女神さま大好きだからかな。' },
        { chara, text: '同じ音を出しても、ちゃんと心をこめてないと開かないんだ。' },
        { chara, text: '女神さまに向けて、しっかり心を込めて弾けば開くんだ。' },
        { chara, text: 'きっと大昔にこの仕掛けを作った人も、女神さまが大好きだったのさ。' },
        { chara: 'ann', text: 'それは素敵だね。' },
        ...(completedGoodApples ? [
          { chara, text: 'お嬢さんが持ってきてくれたリンゴだってそうだ。' },
          { chara, text: 'かなり美味しいよ。' },
          { chara, text: 'ちゃんと私のことを思って持ってきくれたに違いない。' },
          { chara: 'ann', text: 'へへ。' }
        ] : []),
        { chara, text: 'さあ、' },
        { chara, text: 'じゃあ気をつけて行っておいで。' },
        { chara: 'ann', text: 'ありがとう！' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m4_4', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'リンゴはまだかな？' },
        { chara, text: '楽しみにしてるよ。' }
      ])
    } else if (scene.storage.state.event.m4_3.completed) {
      await scene.talk([
        { chara, text: 'こんにちはお嬢さん。' },
        { chara, text: '格好良い剣を持っているね。' },
        { chara, text: 'それでドラゴンでも倒しにきたのかい？' },
        { chara: 'ann', text: 'そうなんだけど、' },
        { chara: 'ann', text: '地下へ行く方法が見つからなくて…、' },
        { chara, text: 'ああ、なるほどね。' },
        { chara, text: 'キミが探しているのはこの女神像だよ。' },
        { chara: 'ann', text: 'ほんと！？' },
        { chara: 'ann', text: 'ってことはライラさん？' },
        { chara, text: 'いかにも。' },
        { chara, text: '石掘りの男に聞いたのかな？' },
        { chara: 'ann', text: 'あなたしか仕掛けを動かせないって。' },
        { chara, text: 'そうだよ。' },
        { chara, text: '開けてほしいの？' },
        { chara: 'ann', text: '開けてほしい！' },
        { chara, text: '開けたら何してくれる？' },
        { chara: 'ann', text: 'えーと、' },
        { chara: 'ann', text: '何でも！' },
        { chara, text: '何でも？' },
        { chara: 'ann', text: 'うん。' },
        { chara, text: 'そう言われると特にしてもらいたいことないな…。' },
        { chara: 'ann', text: 'そっか、' },
        { chara: 'ann', text: 'じゃあ開けてくれる？' },
        { chara, text: 'いや、何かはしてもらわないと。' },
        { chara: 'ann', text: 'えぇ…。' },
        { chara: 'ann', text: 'じゃあ、うーん、' },
        { chara: 'ann', text: 'リンゴでも集めてきます？' },
        { chara, text: 'お、いいね。' },
        { chara, text: 'それで！' },
        { chara, text: 'ちゃんと綺麗なやつを頼むよ。' },
        { chara: 'ann', text: '任せて！' }
      ])
      state.started = true
      scene.ui.missionUpdate('m4_4')
    } else {
      await scene.talk([
        { chara, text: 'こんにちはお嬢さん。' },
        { chara: 'ann', text: 'どうも！' }
      ])
    }
  })
}

export const appleCollection = (scene, apple, appleName) => {
  const state = scene.storage.state.event.m4_4
  const good = GOOD_APPLES.includes(appleName)
  apple.image.setFrame(good ? 0 : 1)
  if (state.apples.includes(appleName)) return apple.destroy()
  if (!state.started || state.completed) return
  apple.setTapEvent(async () => {
    const i = await scene.select(['拾う', 'いらない'])
    if (i === 1) return
    state.apples.push(appleName)
    scene.ui.announce('『リンゴ』を手に入れた')
    apple.destroy()
  })
}
