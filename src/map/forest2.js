export default {
  create (scene) {
    scene.map.getCharaById(4).setTapEvent(() => {
      if (scene.storage.state.quest.five.completed) {
        scene.talk([
          ['ann'],
          { name: 'ann', text: 'ありがとうワン！' }
        ])
      } else if (!scene.storage.state.quest.five.started) {
        scene.talk([
          ['ann'],
          { name: 'ann', text: '犬が迷子になってしまったんだ。' }
        ], t => {
          scene.select(['はい', 'いいえ'], i => {
            t.destroy()
            scene.talk([
              ['ann'],
              { name: 'ann', text: i === 0 ? 'わーい' : 'しょんぼり' }
            ])
            if (i === 0) scene.storage.state.quest.five.started = true
          })
        }, false)
      } else {
        const keys = ['1', '2', '3', '4', '5']
        const found = keys.reduce((current, key) => {
          if (scene.storage.state.quest.five[key] === 1) {
            scene.storage.state.quest.five[key] = 2
            return true
          }
          return current
        }, false)
        const count = keys.filter(key => scene.storage.state.quest.five[key] === 0).length
        if (count === 0) {
          scene.talk([
            ['ann'],
            { name: 'ann', text: 'これで全部だワン！ありがとうだワン！' }
          ])
          scene.storage.state.quest.five.completed = true
        } else if (found) {
          scene.talk([
            ['ann'],
            { name: 'ann', text: `ありがとう！あと${count}匹だワン！` },
            { name: 'ann', text: 'よろしく頼んだよー。' }
          ])
        } else {
          scene.talk([
            ['ann'],
            { name: 'ann', text: 'よろしく頼んだよー。' }
          ])
        }
      }
    })
  }
}
