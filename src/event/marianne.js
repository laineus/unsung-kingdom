export const WATER_COUNT = 5

export const marianne = (scene, sister) => {
  const state = scene.storage.state.event.m3_2
  if (state.completed && scene.storage.state.chapter !== 3) {
    return sister.destroy()
  }
  sister.setDisplayName(t('chara.sister'))
  sister.setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: t('marianne.solved.0') }
      ])
    } else if (state.count >= WATER_COUNT) {
      await scene.talk([
        { chara: 'ann', text: t('marianne.solve.0') },
        { chara: 'ann', text: t('marianne.solve.1') },
        { chara, text: t('marianne.solve.2') },
        { chara, text: t('marianne.solve.3') },
        { chara, text: t('marianne.solve.4') },
        { chara: 'ann', text: t('marianne.solve.5') }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: t('marianne.solve.6') },
        { chara: 'ann', text: t('marianne.solve.7') },
        { chara, text: t('marianne.solve.8') },
        { chara, text: t('marianne.solve.9') }
      ])
      scene.ui.announce(t('marianne.item'))
      await scene.talk([
        { chara: 'ann', text: t('marianne.solve.10') },
        { chara: 'ann', text: t('marianne.solve.11') },
        { chara: 'ann', text: t('marianne.solve.12') },
        { chara, text: t('marianne.solve.13') },
        { chara: 'ann', text: t('marianne.solve.14') },
        { chara: 'ann', text: t('marianne.solve.15') },
        { chara, text: t('marianne.solve.16') },
        { chara, text: t('marianne.solve.17') },
        { chara: 'ann', text: t('marianne.solve.18') },
        { chara: 'ann', text: t('marianne.solve.19') }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: t('marianne.solve.20') },
        { chara: 'ann', text: t('marianne.solve.21') },
        { chara, text: t('marianne.solve.22') },
        { chara, text: t('marianne.solve.23') },
        { chara: 'ann', text: t('marianne.solve.24') },
        { chara, text: t('marianne.solve.25') },
        { chara, text: t('marianne.solve.26') },
        { chara, text: t('marianne.solve.27') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_2', true)
    } else if (state.started) {
      await scene.talk([
        { chara: 'ann', text: t('marianne.started.0') },
        { chara: 'ann', text: t('marianne.started.1') },
        { chara, text: t('marianne.started.2') },
        { chara: 'ann', text: t('marianne.started.3') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('marianne.start.0') },
        { chara: 'ann', text: t('marianne.start.1') },
        { chara, text: t('marianne.start.2') },
        { chara: 'ann', text: t('marianne.start.3') },
        { chara, text: t('marianne.start.4') },
        { chara: 'ann', text: t('marianne.start.5') },
        { chara, text: t('marianne.start.6') },
        { chara: 'ann', text: t('marianne.start.7') },
        { chara: 'ann', text: t('marianne.start.8') },
        { chara: 'ann', text: t('marianne.start.9') },
        { chara, text: t('marianne.start.10') },
        { chara, text: t('marianne.start.11') },
        { chara: 'ann', text: t('marianne.start.12') },
        { chara: 'ann', text: t('marianne.start.13') },
        { chara, text: t('marianne.start.14') },
        { chara: 'ann', text: t('marianne.start.15') },
        { chara, text: t('marianne.start.16') },
        { chara, text: t('marianne.start.17') },
        { chara: 'ann', text: t('marianne.start.18') },
        { chara, text: t('marianne.start.19') },
        { chara, text: t('marianne.start.20') },
        { chara, text: t('marianne.start.21') },
        { chara: 'ann', text: t('marianne.start.22') },
        { chara: 'ann', text: t('marianne.start.23') },
        { chara, text: t('marianne.start.24') },
        { chara, text: t('marianne.start.25') },
        { chara, text: t('marianne.start.26') },
        { chara, text: t('marianne.start.27') },
        { chara: 'ann', text: t('marianne.start.28') },
        { chara, text: t('marianne.start.29') },
        { chara, text: t('marianne.start.30') },
        { chara, text: t('marianne.start.31') },
        { chara, text: t('marianne.start.32') },
        { chara, text: t('marianne.start.33') },
        { chara, text: t('marianne.start.34') },
        { chara: 'ann', text: t('marianne.start.35') },
        { chara: 'ann', text: t('marianne.start.36') },
        { chara, text: t('marianne.start.37') },
        { chara, text: t('marianne.start.38') },
        { chara: 'ann', text: t('marianne.start.39') },
        { chara: 'ann', text: t('marianne.start.40') },
        { chara: 'ann', text: t('marianne.start.41') },
        { chara, text: t('marianne.start.42') },
        { chara: 'ann', text: t('marianne.start.43') }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_2')
    }
  })
}
