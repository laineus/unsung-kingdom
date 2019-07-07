export default {
  create (scene) {
    scene.map.getObjectById(4).setDisplayName('ワンさん').setTapEvent().on('tap', async chara => {
      if (scene.storage.state.event.dogs.completed) {
        scene.talk([
          { chara, text: 'ありがとうワン！' }
        ])
      } else if (!scene.storage.state.event.dogs.started) {
        const t = await scene.talk([
          { chara, text: 'この森は危ないから、特別な理由がないならあまり奥には進まないほうが良いよ。' },
          { chara: 'ann', text: 'どうしてですか？' },
          { chara, text: '人食い熊のレックスベアだ。' },
          { chara, text: '元々はさして脅威ではなかったんだけど、ある個体が一度人間を捕食して以来、' },
          { chara, text: 'その味を覚えたのか、人を積極的に襲うようになったんだ。' },
          { chara, text: 'ある傭兵団がレックスベア目当てに来ているらしいが、どうなったかな。' },
          { chara: 'jaquelyn', text: 'お兄さんはハンター？獲物は何ですか？' },
          { chara, text: 'ああ、僕はただ逃げ出してしまった犬を探しているだけだよ。' },
          { chara: 'ann', text: '犬ですか？' },
          { chara, text: '相棒の狩猟犬が産んだまだ1歳にもなっていない5匹の子犬たちだ。' },
          { chara, text: 'あ、悪いんだけど、もしみかけたら連れてきてくれないかな？' },
          null
        ])
        const i = await scene.select(['はい', 'いいえ'])
        t.destroy()
        scene.talk([
          { chara, text: i === 0 ? 'わーい' : 'しょんぼり' }
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
            { chara, text: 'これで全部だワン！ありがとうだワン！' }
          ])
          scene.storage.state.event.dogs.completed = true
        } else if (found) {
          scene.talk([
            { chara, text: `ありがとう！あと${count}匹だワン！` },
            { chara, text: 'よろしく頼んだよー。' }
          ])
        } else {
          const countText = count < 5 ? `あと${count}匹だワン。\n` : ''
          scene.talk([
            { chara, text: `${countText}よろしく頼んだよー。` }
          ])
        }
      }
    })
  }
}
