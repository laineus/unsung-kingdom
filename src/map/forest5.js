export default {
  create (scene) {
    const dog = scene.map.getCharaById(3)
    if (scene.storage.state.quest.five['2'] === 1) {
      dog.destroy()
    } else {
      dog.setTapEvent(() => {
        if (!scene.storage.state.quest.five.begin) {
          scene.talk([['ann'], { name: 'ann', text: 'ワン！' }])
        } else {
          scene.talk([['ann'], { name: 'ann', text: 'ワンワン！' }])
          scene.storage.state.quest.five['2'] = 1
          dog.destroy()
        }
      })
    }
  }
}
