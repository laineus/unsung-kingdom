export default {
  create (scene) {
    const five = scene.map.getCharaById(4)
    five.setTalk([
      ['ann'],
      { name: 'ann', text: '犬が迷子になってしまったんだ。' }
    ])
  }
}
