export const hector = (scene, hector, mary, loretta) => {
  mary.setVisible(false)
  loretta.setVisible(false)
  const charas = [hector, mary, loretta]
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.started) {
    charas.forEach(c => c.destroy())
    return
  }
  hector.setTapEvent(async chara => {
    if (!state.talked) {
      await scene.talk([
        { chara, text: 'はなし' }
      ])
      state.talked = true
    } else {
      await scene.talk([
        { chara, text: 'はなしshort' }
      ])
    }
    if (!scene.storage.state.event.m2_2.completed) {
      mary.setSpeed(180).setVisible(true)
      loretta.setSpeed(180).setVisible(true)
      await scene.talk([
        { chara: mary, text: 'メアリーくる' }
      ])
      await Promise.all([
        mary.setTargetPosition(mary.x, mary.y - (8).toPixel),
        loretta.setTargetPosition(loretta.x, loretta.y - (8).toPixel)
      ])
      await scene.talk([
        { chara: mary, text: 'メアリーくる' }
      ])
      await scene.ui.transition('normal')
      charas.forEach(c => c.destroy())
      state.started = true
    }
  })
}
