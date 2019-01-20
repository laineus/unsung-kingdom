export default {
  create (scene) {
    const five = scene.map.getCharaById(4)
    five.setTapEvent(() => {
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
        })
      }, false)
    })
  }
}
