export const dionysus = (scene, dionysus, area, gate) => {
  const state = scene.storage.state.event.m2_3
  gate.setActive(state.started)
  area.setEvent(async () => {
    await scene.talk([
      { chara: 'ann', text: '行くの？' }
    ])
    state.started = true
    area.setActive(false)
    gate.setActive(true)
    scene.ui.missionUpdate('m2_3')
  }).setActive(state.talked && !state.started)
  dionysus.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara: 'ann', text: 'よう' }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara: 'ann', text: 'せんきゅー' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_3', true)
    } else if (state.started) {
      await scene.talk([
        { chara: 'ann', text: 'いい感じや' }
      ])
    } else if (state.talked) {
      await scene.talk([
        { chara: 'ann', text: '誰や2' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '誰や' }
      ])
      state.talked = true
      area.setActive(true)
    }
  })
}
