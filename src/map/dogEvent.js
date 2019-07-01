export default (scene, dog, key) => {
  if (scene.storage.state.quest.five[key] === 1) {
    dog.destroy()
  } else {
    dog.setTapEvent().on('tap', () => {
      if (!scene.storage.state.quest.five.started) {
        scene.talk([['ann'], { name: 'ann', text: 'ワン！' }, null])
      } else {
        scene.talk([['ann'], { name: 'ann', text: 'ワンワン！' }, null])
        scene.storage.state.quest.five[key] = 1
        dog.destroy()
      }
    })
  }
}
