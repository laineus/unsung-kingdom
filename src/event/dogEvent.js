export const dogEventHunter = (scene, hunter) => {
  hunter.setDisplayName('狩猟家マシュー').setTapEvent().on('tap', async chara => {
    if (scene.storage.state.event.dogs.completed) {
      scene.talk([{ chara, text: '助かったよ。本当にありがとう。' }])
    } else if (!scene.storage.state.event.dogs.started) {
      const last = '悪いんだけど、もしみかけたら連れてきてくれないかな？'
      const t = await scene.talk(!scene.storage.state.event.dogs.talked ? [
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
      scene.storage.state.event.dogs.talked = true
      t.destroy()
      scene.talk([
        { chara, text: i === 0 ? '助かるよ。よろしく頼んだよ。' : 'そうか。' }
      ])
      if (i === 0) scene.storage.state.event.dogs.started = true
    } else {
      const keys = ['1', '2', '3', '4', '5']
      const found = keys.reduce((result, key) => {
        if (scene.storage.state.event.dogs[key] === 1) {
          scene.storage.state.event.dogs[key] = 2
          return true
        }
        return result
      }, false)
      const count = keys.filter(key => scene.storage.state.event.dogs[key] === 0).length
      if (count === 0) {
        scene.talk([
          { chara, text: 'ありがとう！これで全員だ。' }
        ])
        scene.storage.state.event.dogs.completed = true
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

export const dogEvenFound = (scene, dog, key) => {
  if (scene.storage.state.event.dogs[key] === 1) {
    dog.destroy()
  } else {
    dog.setDisplayName('ワンさん').setTapEvent().on('tap', wansan => {
      if (!scene.storage.state.event.dogs.started) {
        scene.talk([{ chara: wansan, text: 'ワン！' }])
      } else {
        scene.talk([{ chara: wansan, text: 'ワンワン！' }])
        scene.storage.state.event.dogs[key] = 1
        dog.destroy()
      }
    })
  }
}
