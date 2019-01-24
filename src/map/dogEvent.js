export default (scene, dog, key) => {
  if (scene.storage.state.quest.five[key] === 1) {
    dog.destroy()
  } else {
    dog.setTapEvent(() => {
      if (!scene.storage.state.quest.five.begin) {
        scene.talk([['ann'], { name: 'ann', text: 'ワン！' }])
      } else {
        scene.talk([['ann'], { name: 'ann', text: 'ワンワン！' }])
        scene.storage.state.quest.five[key] = 1
        dog.destroy()
      }
    })
  }
}
