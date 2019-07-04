export default {
  create (scene) {
    scene.map.getCharaById(4).setDisplayName('ワンさん').setTapEvent().on('tap', async wansan => {
      if (scene.storage.state.quest.five.completed) {
        scene.talk([
          { chara: wansan, text: 'ありがとうワン！' },
          null
        ])
      } else if (!scene.storage.state.quest.five.started) {
        const t = await scene.talk([
          { chara: wansan, text: '犬が迷子になってしまったんだ。' },
          { chara: 'ann', text: 'せやか' },
          { chara: 'ann', text: 'かわいそ' }
        ])
        const i = await scene.select(['はい', 'いいえ'])
        t.destroy()
        scene.talk([
          { chara: wansan, text: i === 0 ? 'わーい' : 'しょんぼり' },
          null
        ])
        if (i === 0) scene.storage.state.quest.five.started = true
      } else {
        const keys = ['1', '2', '3', '4', '5']
        const found = keys.reduce((result, key) => {
          if (scene.storage.state.quest.five[key] === 1) {
            scene.storage.state.quest.five[key] = 2
            return true
          }
          return result
        }, false)
        const count = keys.filter(key => scene.storage.state.quest.five[key] === 0).length
        if (count === 0) {
          scene.talk([
            { chara: wansan, text: 'これで全部だワン！ありがとうだワン！' },
            null
          ])
          scene.storage.state.quest.five.completed = true
        } else if (found) {
          scene.talk([
            { chara: wansan, text: `ありがとう！あと${count}匹だワン！` },
            { chara: wansan, text: 'よろしく頼んだよー。' },
            null
          ])
        } else {
          const countText = count < 5 ? `あと${count}匹だワン。\n` : ''
          scene.talk([
            { chara: wansan, text: `${countText}よろしく頼んだよー。` },
            null
          ])
        }
      }
    })
  }
}
