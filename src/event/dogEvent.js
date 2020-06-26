export const dogEventHunter = (scene, hunter) => {
  const state = scene.storage.state.event.m1_1
  if (state.completed && scene.storage.state.chapter !== 1) {
    return hunter.destroy()
  }
  hunter.setDisplayName(t('chara.hunter')).setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([{ chara, text: t('dog.solved.0') }])
    } else if (!state.started) {
      const tk = await scene.talk(!state.talked ? [
        { chara, text: t('dog.start.0') },
        { chara: 'ann', text: t('dog.start.1') },
        { chara, text: t('dog.start.2') },
        { chara: 'ann', text: t('dog.start.3') },
        { chara, text: t('dog.start.4') },
        { chara, text: t('dog.start.5') },
        { chara, text: t('dog.start.6') },
        { chara: 'ann', text: t('dog.start.7') },
        { chara, text: t('dog.start.8') },
        { chara: 'ann', text: t('dog.start.9') },
        { chara: 'francisca', text: t('dog.start.10') },
        { chara, text: t('dog.start.11') },
        { chara, text: t('dog.start.12') },
        { chara, text: t('dog.start.13') },
        { chara, text: t('dog.start.14') },
        { chara: 'ann', text: t('dog.start.15') },
        { chara: 'ann', text: t('dog.start.16') },
        { chara, text: t('dog.start.17') },
        { chara, text: t('dog.start.18') },
        { chara: 'ann', text: t('dog.start.19') },
        { chara, text: t('dog.start.20') },
        { chara, text: t('dog.start.21') },
        null
      ] : [{ chara, text: t('dog.start.21') }, null])
      const i = await scene.select([t('dog.start.22.0'), t('dog.start.22.1')])
      state.talked = true
      tk.destroy()
      await scene.talk([
        { chara, text: i === 0 ? t('dog.start.23.0') : t('dog.start.23.1') }
      ])
      if (i === 0) scene.ui.missionUpdate('m1_1')
    } else {
      const keys = ['d1', 'd2', 'd3', 'd4', 'd5']
      const found = keys.reduce((result, key) => {
        if (state[key] === 1) {
          state[key] = 2
          return true
        }
        return result
      }, false)
      const count = keys.filter(key => state[key] === 0).length
      if (count === 0) {
        await scene.talk([
          { chara, text: t('dog.solve.0') },
          { chara, text: t('dog.solve.1') },
          { chara, text: t('dog.solve.2') },
          { chara: 'ann', text: t('dog.solve.3') },
          { chara, text: t('dog.solve.4') }
        ])
        scene.ui.increaseWeapon(6)
        await scene.talk([
          { chara: 'ann', text: t('dog.solve.5') },
          { chara, text: t('dog.solve.6') },
          { chara, text: t('dog.solve.7') },
          { chara, text: t('dog.solve.8') },
          { chara: 'ann', text: t('dog.solve.9') },
          { chara, text: t('dog.solve.10') },
          { chara, text: t('dog.solve.11') },
          { chara, text: t('dog.solve.12') }
        ])
        scene.ui.missionUpdate('m1_1', true)
      } else if (found) {
        await scene.talk([
          { chara, text: t('dog.started.0') },
          { chara, text: `${t('dog.started.1', { count })}${t('dog.started.2')}` }
        ])
      } else {
        const countText = count < 5 ? t('dog.started.1', { count }) : ''
        await scene.talk([
          { chara, text: `${countText}${t('dog.started.2')}` }
        ])
      }
    }
  })
}

export const dogEventFound = (scene, dog, key) => {
  const state = scene.storage.state.event.m1_1
  if (state[key] >= 1) {
    dog.destroy()
  } else {
    const dogs = {
      d1: { leave: false, speed: 80 },
      d2: { leave: true, speed: 90 },
      d3: { leave: false, speed: 90 },
      d4: { leave: true, speed: 110 },
      d5: { leave: true, speed: 130 }
    }
    dog.setTarget(scene.player, dogs[key].leave).setSpeed(dogs[key].speed).setTapEvent(async () => {
      dog.setTarget(null)
      if (!state.started) {
        await scene.talk([{ chara: 'ann', text: t('dog.dog.notStarted') }])
      } else {
        const messages = {
          d1: { chara: 'ann', text: t('dog.dog.d1') },
          d2: { chara: 'jaquelyn', text: t('dog.dog.d2') },
          d3: { chara: 'francisca', text: t('dog.dog.d3') },
          d4: { chara: 'ann', text: t('dog.dog.d4') },
          d5: { chara: 'jaquelyn', text: t('dog.dog.d5') }
        }
        await scene.talk([messages[key]])
        state[key] = 1
        dog.destroy()
        const remain = Object.keys(messages).count(k => state[k] === 0)
        if (remain) {
          Math.chance(50) ? scene.jaquelyn.tweet(t('dog.dog.jaquelyn')) : scene.francisca.tweet(t('dog.dog.francisca'))
        } else {
          scene.jaquelyn.tweet(t('dog.dog.foundAll'))
        }
      }
    })
  }
}
