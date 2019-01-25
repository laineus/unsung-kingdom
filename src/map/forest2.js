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
        scene.talk([
          ['ann'],
          { name: 'ann', text: 'よろしく頼んだよー。' }
        ])
      }
    })
  }
}
