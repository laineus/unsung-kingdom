export const KELUNNE_COUNT = 5

export const allsRight = (scene, zi) => {
  const state = scene.storage.state.event.m4_2
  zi.setDisplayName(t('chara.zi'))
  zi.setTapEvent(async chara => {
    if (scene.storage.state.event.m4_3.completed) {
      await scene.talk([
        { chara, text: t('allsRight.solved2.0') },
        { chara, text: t('allsRight.solved2.1') }
      ])
    } else if (state.completed) {
      await scene.talk([
        { chara, text: t('allsRight.solved1.0') },
        { chara, text: t('allsRight.solved1.1') }
      ])
    } else if (state.count >= KELUNNE_COUNT) {
      await scene.talk([
        { chara: 'ann', text: t('allsRight.solve.0') },
        { chara, text: t('allsRight.solve.1') },
        { chara, text: t('allsRight.solve.2') }
      ])
      await scene.ui.transition('slow')
      await scene.ui.sleep(1500)
      await scene.talk([
        { chara, text: t('allsRight.solve.3') },
        { chara: 'ann', text: t('allsRight.solve.4') },
        { chara, text: t('allsRight.solve.5') },
        { chara: 'ann', text: t('allsRight.solve.6') },
        { chara: 'ann', text: t('allsRight.solve.7') },
        { chara, text: t('allsRight.solve.8') },
        { chara: 'ann', text: t('allsRight.solve.9') },
        { chara, text: t('allsRight.solve.10') },
        { chara, text: t('allsRight.solve.11') },
        { chara: 'ann', text: t('allsRight.solve.12') }
      ])
      state.completed = true
      scene.storage.state.event.m4_3.started = true
      scene.ui.missionUpdate('m4_2', true).then(() => {
        scene.ui.missionUpdate('m4_3')
      })
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('allsRight.start.62', { KELUNNE_COUNT }) },
        { chara, text: t('allsRight.start.63') }
      ])
    } else {
      await scene.talk([
        { chara, text: t('allsRight.start.0') },
        { chara, text: t('allsRight.start.1') },
        { chara: 'ann', text: t('allsRight.start.2') },
        { chara, text: t('allsRight.start.3') },
        { chara: 'ann', text: t('allsRight.start.4') },
        { chara: 'ann', text: t('allsRight.start.5') },
        { chara, text: t('allsRight.start.6') },
        { chara, text: t('allsRight.start.7') },
        { chara: 'ann', text: t('allsRight.start.8') },
        { chara, text: t('allsRight.start.9') },
        { chara, text: t('allsRight.start.10') },
        { chara, text: t('allsRight.start.11') },
        { chara, text: t('allsRight.start.12') },
        { chara, text: t('allsRight.start.13') },
        { chara: 'ann', text: t('allsRight.start.14') },
        { chara: 'ann', text: t('allsRight.start.15') },
        { chara, text: t('allsRight.start.16') },
        { chara, text: t('allsRight.start.17') },
        { chara, text: t('allsRight.start.18') },
        { chara, text: t('allsRight.start.19') },
        { chara: 'ann', text: t('allsRight.start.20') },
        { chara: 'ann', text: t('allsRight.start.21') },
        { chara, text: t('allsRight.start.22') },
        { chara, text: t('allsRight.start.23') },
        { chara, text: t('allsRight.start.24') },
        { chara, text: t('allsRight.start.25') },
        { chara, text: t('allsRight.start.26') },
        { chara: 'ann', text: t('allsRight.start.27') },
        { chara, text: t('allsRight.start.28') },
        { chara, text: t('allsRight.start.29') },
        { chara, text: t('allsRight.start.30') },
        { chara, text: t('allsRight.start.31') },
        { chara, text: t('allsRight.start.32') },
        { chara: 'ann', text: t('allsRight.start.33') },
        { chara, text: t('allsRight.start.34') },
        { chara, text: t('allsRight.start.35') },
        { chara, text: t('allsRight.start.36') },
        { chara, text: t('allsRight.start.37') },
        { chara: 'ann', text: t('allsRight.start.38') },
        { chara: 'ann', text: t('allsRight.start.39') },
        { chara, text: t('allsRight.start.40') },
        { chara: 'ann', text: t('allsRight.start.41') },
        { chara, text: t('allsRight.start.42') },
        { chara, text: t('allsRight.start.43') },
        { chara, text: t('allsRight.start.44') },
        { chara: 'ann', text: t('allsRight.start.45') },
        { chara: 'ann', text: t('allsRight.start.46') },
        { chara: 'ann', text: t('allsRight.start.47') },
        { chara, text: t('allsRight.start.48') },
        { chara, text: t('allsRight.start.49') },
        { chara, text: t('allsRight.start.50') },
        { chara: 'ann', text: t('allsRight.start.51') },
        { chara: 'ann', text: t('allsRight.start.52') },
        { chara, text: t('allsRight.start.53') },
        { chara, text: t('allsRight.start.54') },
        { chara: 'ann', text: t('allsRight.start.55') },
        { chara, text: t('allsRight.start.56') },
        { chara, text: t('allsRight.start.57') },
        { chara, text: t('allsRight.start.58') },
        { chara: 'ann', text: t('allsRight.start.59') },
        { chara, text: t('allsRight.start.60') },
        { chara: 'ann', text: t('allsRight.start.61') },
        { chara, text: t('allsRight.start.62', { KELUNNE_COUNT }) },
        { chara, text: t('allsRight.start.63') },
        { chara: 'ann', text: t('allsRight.start.64') },
        { chara: 'ann', text: t('allsRight.start.65') }
      ])
      state.started = true
      scene.ui.missionUpdate('m4_2')
    }
  })
}
