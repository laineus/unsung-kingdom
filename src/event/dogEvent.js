import increaseWeapon from "../util/increaseWeapon"

export const dogEventHunter = (scene, hunter) => {
  const state = scene.storage.state.event.m1_1
  hunter.setDisplayName('狩猟家マシュー').setTapEvent().on('tap', async chara => {
    if (state.completed) {
      scene.talk([{ chara, text: '助かったよ。本当にありがとう。' }])
    } else if (!state.started) {
      const last = '悪いんだけど、もしみかけたら連れてきてくれないかな？'
      const t = await scene.talk(!state.talked ? [
        { chara, text: 'この森は危ないから、特別な理由がないならあまり奥には進まないほうが良いよ。' },
        { chara: 'ann', text: 'どうしてですか？' },
        { chara, text: '人食い熊のレックスベアだ。' },
        { chara, text: '元々はさして脅威ではなかったんだけど、ある個体が一度人間を捕食して以来、' },
        { chara, text: 'その味を覚えたのか、人を積極的に襲うようになったんだ。' },
        { chara: 'francisca', text: 'こわ。' },
        { chara, text: 'ある傭兵団がレックスベア目当てに来ているらしいが、どうなったかな。' },
        { chara: 'jaquelyn', text: 'お兄さんはハンター？獲物は何ですか？' },
        { chara, text: 'そうだよ。でも今はただ逃げ出してしまった犬を探しているだけだよ。' },
        { chara: 'ann', text: '犬が逃げちゃったんですか？' },
        { chara, text: 'ああ、相棒の狩猟犬が産んだ5匹の子犬たちだ。まだ1歳にもなっていない。' },
        { chara, text: `あ、${last}` },
        null
      ] : [ { chara, text: last }, null ])
      const i = await scene.select(['はい', 'いいえ'])
      state.talked = true
      t.destroy()
      scene.talk([
        { chara, text: i === 0 ? '助かるよ。よろしく頼んだよ。' : 'そうか。' }
      ])
      if (i === 0) state.started = true
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
        scene.talk([
          { chara, text: 'ありがとう！これで全員だ。' },
          { chara, text: '正直全員無事で戻ってこられるとは思ってなかったよ。' },
          { chara, text: 'なんとお礼を言ったらいいか。' },
          { chara, text: 'せめてものお礼にこれを受け取ってくれ。' }
        ])
        increaseWeapon(6)
        state.completed = true
      } else if (found) {
        scene.talk([
          { chara, text: 'ありがとう！' },
          { chara, text: `あと${count}匹いるはずなんだ。よろしく頼んだよ。` }
        ])
      } else {
        const countText = count < 5 ? `あと${count}匹いるはずなんだ。` : ''
        scene.talk([
          { chara, text: `${countText}よろしく頼んだよ。` }
        ])
      }
    }
  })
}

export const dogEventFound = (scene, dog, key) => {
  const state = scene.storage.state.event.m1_1
  if (state[key] >= 1) {
    dog.destroy()
  } else {
    dog.setDisplayName('ワンさん').setTapEvent().on('tap', async wansan => {
      if (!state.started) {
        scene.talk([{ chara: wansan, text: 'ワン！' }, { chara: 'ann', text: 'ワンちゃん、こんなところで何してるの？' }])
      } else {
        const messages = {
          d1: { chara: 'ann', text: 'ほら、こっちにおいで。' },
          d2: { chara: 'jaquelyn', text: 'いい子ね、こっちよ。' },
          d3: { chara: 'francisca', text: 'おいで、ワンちゃん。' },
          d4: { chara: 'ann', text: 'おいでー、ほら。' },
          d5: { chara: 'jaquelyn', text: 'おいで、ご主人がお待ちよ。' }
        }
        await scene.talk([{ chara: wansan, text: 'ワンワン！' }, messages[key]])
        state[key] = 1
        dog.destroy()
      }
    })
  }
}
