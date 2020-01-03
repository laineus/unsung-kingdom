export const princess = (scene, mary, loretta) => {
  const state = scene.storage.state.event.m2_2
  const event = async () => {
    if (state.completed) {
    } else if (state.count >= 5) {
      state.completed = true
    } else if (state.started) {
      await scene.talk([
        { chara: mary, text: '早く持ってきなさい。' }
      ])
    } else {
      await scene.talk([
        { chara: mary, text: '依頼' }
      ])
      state.started = true
      scene.ui.missionUpdate('m2_2')
    }
  }
  mary.setTapEvent(event)
  loretta.setTapEvent(event)
}
