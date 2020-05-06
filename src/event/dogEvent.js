export const dogEventHunter = (scene, hunter) => {
  if (scene.storage.state.chapter !== 1) {
    return hunter.destroy()
  }
  const state = scene.storage.state.event.m1_1
  hunter.setDisplayName('狩猟家マシュー').setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([{ chara, text: '助かったよ。本当にありがとう。' }])
    } else if (!state.started) {
      const last = '悪いんだけど、もしその辺でみかけたら連れてきてくれないかな？'
      const t = await scene.talk(!state.talked ? [
        { chara, text: 'この森は危ないから、特別な理由がないならあまり奥には進まないほうが良いよ。' },
        { chara: 'ann', text: 'どうしてですか？' },
        { chara, text: '人食い熊のレックスベアが出るからだ。' },
        { chara: 'ann', text: 'くま？' },
        { chara, text: 'ただの熊じゃない。飛び抜けて凶暴な奴だ。' },
        { chara, text: '元々はさして脅威ではなかったんだけど、ある個体が一度人間を捕食して以来、' },
        { chara, text: 'その味を覚えたのか、人を積極的に襲うようになったんだ。' },
        { chara: 'ann', text: 'こわ！' },
        { chara, text: '国の討伐隊や、名のある傭兵団がレックスベア討伐に来ているらしいが、どうなったかな。' },
        { chara: 'ann', text: 'レックスベアを倒すと何か良い事があるんですか？' },
        { chara: 'francisca', text: '人にとって危険だから賞金がかかっているのでは？' },
        { chara, text: 'うーん。それにしてはやけに大袈裟な気がする。' },
        { chara, text: '森に近づかなければいい話だし。' },
        { chara, text: 'まあ、僕らハンターとしてもレックスベアはあまり遭遇したくない相手だから、' },
        { chara, text: '誰かが倒してくれるならそれにこしたことはないんだけどね。' },
        { chara: 'ann', text: 'お兄さんはハンターなんですね。' },
        { chara: 'ann', text: '何を狩りに来ているんですか？' },
        { chara, text: '僕はレックスベアとかじゃなく、食肉用の動物とかだよ。' },
        { chara, text: 'でも今はただ逃げ出してしまった犬を探しているだけなんだ。' },
        { chara: 'ann', text: '犬が逃げちゃったんですか？' },
        { chara, text: 'ああ、相棒の狩猟犬が産んだ5匹の子犬たちだ。まだ1歳にもなっていない。' },
        { chara, text: `あ、${last}` },
        null
      ] : [{ chara, text: last }, null])
      const i = await scene.select(['はい', 'いいえ'])
      state.talked = true
      t.destroy()
      await scene.talk([
        { chara, text: i === 0 ? '助かるよ。よろしく頼んだよ。' : 'そうか。' }
      ])
      if (i === 0) scene.ui.missionUpdate('m1_1')
    } else {
      const keys = ['d1', 'd2', 'd3', 'd4', 'd5']
      const found = keys.reduce((result, key) => {
        if (state[key] === 1) {
          state[key] = 2
          return true
        }
        return result
      }, false)
      const count = keys.filter(key => state[key] === 0).length
      if (count === 0) {
        await scene.talk([
          { chara, text: 'ありがとう！これで全員だ。' },
          { chara, text: '正直全員無事で戻ってこられるとは思ってなかったよ。' },
          { chara, text: 'なんとお礼を言ったらいいか。' },
          { chara: 'ann', text: '気にしないでください！' },
          { chara, text: 'あ、気に入るか分からないけど、僕の予備の弓矢をもらってくれ。' }
        ])
        scene.ui.increaseWeapon(6)
        await scene.talk([
          { chara: 'ann', text: 'ありがとう。お兄さんの武器は弓なんですね。' },
          { chara, text: 'そうだよ。' },
          { chara, text: 'トラップや毒を塗った矢を使って獲物を仕留める。' },
          { chara, text: '時間はかかるけど、一番安全な狩り方だ。' },
          { chara: 'ann', text: 'へー。' },
          { chara, text: 'そういえばこの間、毒矢に使う毒液を分けてくれと訪ねてきた怪しい男が居たんだ。' },
          { chara, text: '不審に思って断ったけど…、' },
          { chara, text: '君たちもおかしな奴には気をつけるんだよ。' }
        ])
        scene.ui.missionUpdate('m1_1', true)
      } else if (found) {
        await scene.talk([
          { chara, text: 'ありがとう！' },
          { chara, text: `あと${count}匹いるはずなんだ。よろしく頼んだよ。` }
        ])
      } else {
        const countText = count < 5 ? `あと${count}匹いるはずなんだ。` : ''
        await scene.talk([
          { chara, text: `${countText}よろしく頼んだよ。` }
        ])
      }
    }
  })
}

export const dogEventFound = (scene, dog, key) => {
  if (scene.storage.state.chapter !== 1) {
    return dog.destroy()
  }
  const state = scene.storage.state.event.m1_1
  if (state[key] >= 1) {
    dog.destroy()
  } else {
    const dogs = {
      d1: { leave: false, speed: 80 },
      d2: { leave: true, speed: 90 },
      d3: { leave: false, speed: 90 },
      d4: { leave: true, speed: 110 },
      d5: { leave: true, speed: 130 }
    }
    dog.setTarget(scene.player, dogs[key].leave).setSpeed(dogs[key].speed).setTapEvent(async () => {
      dog.setTarget(null)
      if (!state.started) {
        await scene.talk([{ chara: 'ann', text: 'ワンちゃん、こんなところで何してるの？' }])
      } else {
        const messages = {
          d1: { chara: 'ann', text: 'ほら、こっちにおいで。' },
          d2: { chara: 'jaquelyn', text: 'いい子ね、こっちよ。' },
          d3: { chara: 'francisca', text: 'おいで、ワンちゃん。' },
          d4: { chara: 'ann', text: 'おいでー、ほら。' },
          d5: { chara: 'jaquelyn', text: 'おいで、ご主人が待ってるよ。' }
        }
        await scene.talk([messages[key]])
        state[key] = 1
        dog.destroy()
      }
    })
  }
}
