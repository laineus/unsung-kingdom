export const dionysus = (scene, dionysus, area, gate) => {
  const state = scene.storage.state.event.m2_3
  const chara = dionysus
  dionysus.setSpeed(180)
  const origin = { x: dionysus.x, y: dionysus.y }
  gate.setActive(state.started)
  area.setEvent(async () => {
    await scene.talk([
      { chara, text: '行くの？' }
    ])
    await dionysus.setTargetPosition((8).toPixelCenter, (0).toPixelCenter)
    dionysus.setVisible(false)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: 'どこいくねん' }
    ])
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    dionysus.setR('down').setVisible(true)
    await scene.ui.sleep(500)
    await dionysus.setTargetPosition(origin.x, origin.y)
    await scene.talk([
      { chara, text: 'どこいくねん' }
    ])
    state.started = true
    area.setActive(false)
    gate.setActive(true)
    scene.ui.missionUpdate('m2_3')
  }).setActive(state.talked && !state.started)
  dionysus.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'よう' }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: 'せんきゅー' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_3', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'いい感じや' }
      ])
    } else if (state.talked) {
      await scene.talk([
        { chara, text: '誰や2' }
      ])
    } else {
      await scene.talk([
        { chara, text: '誰や' }
      ])
      state.talked = true
      area.setActive(true)
    }
  })
}
