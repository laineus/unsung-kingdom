export const cassandra = (scene, gate, cassandra, door, doorEvent, candle) => {
  const state = scene.storage.state.event.m2_1
  door.setVisible(!state.opened)
  gate.setActive(state.opened)
  if (scene.storage.state.event.m2_4.started) return
  candle.setTapEvent(async () => {
    const i = await scene.select([t('cassandra.util.door.0'), t('cassandra.util.door.1')])
    if (i === 1) return
    state.key = true
    candle.setVisible(false)
    scene.ui.announce(t('cassandra.util.key'))
  }).setVisible(state.started && !state.key)
  doorEvent.setTapEvent(async () => {
    if (state.key) {
      scene.ui.announce(t('cassandra.util.unlock'))
      state.opened = true
      door.setVisible(false)
      doorEvent.setVisible(false)
      gate.setActive(true)
    } else {
      await scene.talk([{ chara: 'ann', text: t('cassandra.util.locked') }])
    }
  }).setVisible(!state.opened)
  if (scene.storage.state.event.m2_4.started) return
  cassandra.setDisplayName(t('chara.cassandra')).setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: t('cassandra.solved') }
      ])
    } else if (state.wine.length >= 3) {
      await scene.talk([
        { chara, text: t('cassandra.solve.0') },
        { chara: 'ann', text: t('cassandra.solve.1') },
        { chara, text: t('cassandra.solve.2') },
        { chara, text: t('cassandra.solve.3') },
        { chara, text: t('cassandra.solve.4') },
        { chara: 'ann', text: t('cassandra.solve.5') },
        { chara: 'ann', text: t('cassandra.solve.6') },
        { chara, text: t('cassandra.solve.7') },
        { chara, text: t('cassandra.solve.8') },
        { chara: 'ann', text: t('cassandra.solve.9') },
        { chara, text: t('cassandra.solve.10') },
        { chara, text: t('cassandra.solve.11') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_1', true)
    } else if (state.started) {
      if (state.key) {
        await scene.talk([
          { chara, text: t('cassandra.progress.2') }
        ])
      } else {
        await scene.talk([
          { chara, text: t('cassandra.progress.0') },
          { chara, text: t('cassandra.progress.1') }
        ])
      }
    } else if (state.talked) {
      await scene.talk([
        { chara, text: t('cassandra.talk2.0') },
        { chara, text: t('cassandra.talk2.1') },
        { chara, text: t('cassandra.talk2.2') },
        { chara, text: t('cassandra.talk2.3') }
      ])
      const i = await scene.select([t('cassandra.talk2.4.0'), t('cassandra.talk2.4.1')])
      if (i === 1) {
        await scene.talk([{ chara, text: t('cassandra.talk2.5') }])
        return
      }
      await scene.talk([
        { chara, text: t('cassandra.talk2.6') },
        { chara: 'ann', text: t('cassandra.talk2.7') },
        { chara, text: t('cassandra.talk2.8') },
        { chara: 'ann', text: t('cassandra.talk2.9') },
        { chara, text: t('cassandra.talk2.10') },
        { chara, text: t('cassandra.talk2.11') },
        { chara: 'ann', text: t('cassandra.talk2.12') },
        { chara, text: t('cassandra.talk2.13') },
        { chara, text: t('cassandra.talk2.14') },
        { chara: 'ann', text: t('cassandra.talk2.15') },
        { chara: 'ann', text: t('cassandra.talk2.16') },
        { chara, text: t('cassandra.talk2.17') },
        { chara, text: t('cassandra.talk2.18') },
        { chara, text: t('cassandra.talk2.19') }
      ])
      state.started = true
      candle.setVisible(true)
      scene.ui.missionUpdate('m2_1')
    } else if (!state.talked) {
      await scene.talk([
        { chara, text: t('cassandra.talk1.0') },
        { chara, text: t('cassandra.talk1.1') },
        { chara: 'ann', text: t('cassandra.talk1.2') },
        { chara, text: t('cassandra.talk1.3') },
        { chara, text: t('cassandra.talk1.4') },
        { chara: 'ann', text: t('cassandra.talk1.5') },
        { chara, text: t('cassandra.talk1.6') },
        { chara, text: t('cassandra.talk1.7') },
        { chara: 'ann', text: t('cassandra.talk1.8') },
        { chara, text: t('cassandra.talk1.9') },
        { chara, text: t('cassandra.talk1.10') },
        { chara: 'ann', text: t('cassandra.talk1.11') },
        { chara, text: t('cassandra.talk1.12') },
        { chara, text: t('cassandra.talk1.13') },
        { chara, text: t('cassandra.talk1.14') },
        { chara, text: t('cassandra.talk1.15') }
      ])
      state.talked = true
    }
  })
}

export const wine = (scene, barrel, number) => {
  const state = scene.storage.state.event.m2_1
  if (state.wine.includes(number)) {
    barrel.destroy()
    return
  }
  barrel.setTapEvent(async () => {
    state.wine.push(number)
    scene.ui.announce(t('cassandra.util.wine'))
    if (state.wine.length === 1) {
      scene.player.tweet(t('cassandra.tweet.0')).then(() => scene.jaquelyn.tweet(t('cassandra.tweet.1')))
    } else if (state.wine.length === 2) {
      scene.francisca.tweet(t('cassandra.tweet.2'))
    } else if (state.wine.length === 3) {
      scene.jaquelyn.tweet(t('cassandra.tweet.3'))
    }
    barrel.destroy()
  })
}
