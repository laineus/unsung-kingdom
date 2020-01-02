export const cassandra = (scene, gate, cassandra, door, candle) => {
  const state = scene.storage.state.event.m2_1
  gate.setActive(state.started)
  candle.setTapEvent(async () => {
    const i = await scene.select(['調べる', '何もしない'])
    if (i === 1) return
    state.key = true
    candle.setVisible(false)
  }).setVisible(state.started && !state.key)
  door.setTapEvent(async () => {
    if (state.key) {
      await scene.talk([{ chara: 'ann', text: '鍵を開けた。' }])
      state.opened = true
      door.setVisible(false)
      gate.setActive(true)
    } else {
      await scene.talk([{ chara: 'ann', text: '鍵がかかってる。' }])
    }
  }).setVisible(!state.opened)
  cassandra.setDisplayName('カサンドラ').setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'ありがとう' }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: 'これこれ' }
      ])
    } else if (state.started) {
      if (state.key) {
        await scene.talk([
          { chara: 'ann', text: 'いってらっしゃい' }
        ])
      } else {
        await scene.talk([
          { chara: 'ann', text: '鍵の説明' }
        ])
      }
    } else if (state.talked) {
      await scene.talk([
        { chara: 'ann', text: '依頼' }
      ])
      state.started = true
      candle.setVisible(true)
    } else if (!state.talked) {
      await scene.talk([
        { chara: 'ann', text: 'あいさつ' }
      ])
      state.talked = true
    }
  })
}
