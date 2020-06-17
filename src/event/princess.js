import Talker from '../class/Talker'
export const MAGIC_STONES = 5
export const princess = (scene, mary, loretta) => {
  const state = scene.storage.state.event.m2_2
  if (scene.storage.state.event.m2_4.started) {
    mary.destroy()
    loretta.destroy()
    return
  }
  const event = async () => {
    if (state.completed) {
      await scene.talk([
        { chara: mary, text: t('princess.solved.0') },
        { chara: loretta, text: t('princess.solved.1') }
      ])
    } else if (state.count >= MAGIC_STONES) {
      await scene.talk([
        { chara: mary, text: t('princess.solve.0') },
        { chara: loretta, text: t('princess.solve.1') },
        { chara: mary, text: t('princess.solve.2') },
        { chara: 'ann', text: t('princess.solve.3') },
        { chara: 'ann', text: t('princess.solve.4') },
        { chara: 'ann', text: t('princess.solve.5') },
        { chara: mary, text: t('princess.solve.6') },
        { chara: mary, text: t('princess.solve.7') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_2', true).then(() => {
        scene.ui.increaseWeapon(8)
      })
    } else if (state.started) {
      await scene.talk([
        { chara: mary, text: t('princess.progress.0', { MAGIC_STONES }) },
        { chara: loretta, text: t('princess.progress.1') }
      ])
    } else {
      await scene.talk([
        { chara: loretta, text: t('princess.talk1.0') },
        { chara: mary, text: t('princess.talk1.1') },
        { chara: loretta, text: t('princess.talk1.2') },
        { chara: 'ann', text: t('princess.talk1.3') },
        { chara: 'ann', text: t('princess.talk1.4') },
        { chara: 'ann', text: t('princess.talk1.5') },
        { chara: loretta, text: t('princess.talk1.6') },
        { chara: loretta, text: t('princess.talk1.7') },
        { chara: 'ann', text: t('princess.talk1.8') },
        { chara: loretta, text: t('princess.talk1.9') },
        { chara: loretta, text: t('princess.talk1.10') },
        { chara: 'ann', text: t('princess.talk1.11') },
        { chara: mary, text: t('princess.talk1.12') },
        { chara: mary, text: t('princess.talk1.13') },
        { chara: 'ann', text: t('princess.talk1.14') },
        { chara: 'ann', text: t('princess.talk1.15') },
        { chara: loretta, text: t('princess.talk1.16') },
        { chara: loretta, text: t('princess.talk1.17') },
        { chara: loretta, text: t('princess.talk1.18') },
        { chara: mary, text: t('princess.talk1.19') },
        { chara: mary, text: t('princess.talk1.20') },
        { chara: mary, text: t('princess.talk1.21') },
        { chara: loretta, text: t('princess.talk1.22') },
        { chara: mary, text: t('princess.talk1.23') },
        { chara: 'ann', text: t('princess.talk1.24') },
        { chara: 'ann', text: t('princess.talk1.25') },
        { chara: 'ann', text: t('princess.talk1.26') },
        { chara: mary, text: t('princess.talk1.27') },
        { chara: loretta, text: t('princess.talk1.28') },
        { chara: loretta, text: t('princess.talk1.29') },
        { chara: 'ann', text: t('princess.talk1.30') },
        { chara: mary, text: t('princess.talk1.31') },
        { chara: 'ann', text: t('princess.talk1.32') },
        { chara: mary, text: t('princess.talk1.33') },
        { chara: mary, text: t('princess.talk1.34') },
        { chara: 'ann', text: t('princess.talk1.35') },
        { chara: mary, text: t('princess.talk1.36') },
        { chara: 'ann', text: t('princess.talk1.37') },
        { chara: mary, text: t('princess.talk1.38') },
        { chara: 'ann', text: t('princess.talk1.39') },
        { chara: 'ann', text: t('princess.talk1.40') },
        { chara: mary, text: t('princess.talk1.41') },
        { chara: 'ann', text: t('princess.talk1.42') },
        { chara: mary, text: t('princess.talk1.43') },
        { chara: loretta, text: t('princess.talk1.44') },
        { chara: mary, text: t('princess.talk1.45') },
        { chara: loretta, text: t('princess.talk1.46') },
        { chara: loretta, text: t('princess.talk1.47') },
        { chara: 'ann', text: t('princess.talk1.48') },
        { chara: 'ann', text: t('princess.talk1.49') },
        { chara: mary, text: t('princess.talk1.50') },
        { chara: mary, text: t('princess.talk1.51') },
        { chara: mary, text: t('princess.talk1.52') },
        { chara: mary, text: t('princess.talk1.53') },
        { chara: mary, text: t('princess.talk1.54') },
        { chara: mary, text: t('princess.talk1.55') },
        { chara: mary, text: t('princess.talk1.56') },
        { chara: mary, text: t('princess.talk1.57') },
        { chara: mary, text: t('princess.talk1.58') },
        { chara: mary, text: t('princess.talk1.59') },
        { chara: mary, text: t('princess.talk1.60') },
        { chara: 'ann', text: t('princess.talk1.61') },
        { chara: mary, text: t('princess.talk1.62') },
        { chara: mary, text: t('princess.talk1.63') },
        { chara: mary, text: t('princess.talk1.64') },
        { chara: mary, text: t('princess.talk1.65') },
        { chara: mary, text: t('princess.talk1.66') },
        { chara: 'ann', text: t('princess.talk1.67') },
        { chara: loretta, text: t('princess.talk1.68') },
        { chara: 'ann', text: t('princess.talk1.69') },
        { chara: mary, text: t('princess.talk1.70') },
        { chara: 'ann', text: t('princess.talk1.71') },
        { chara: loretta, text: t('princess.talk1.72') },
        { chara: mary, text: t('princess.talk1.73') },
        { chara: mary, text: t('princess.talk1.74') },
        { chara: loretta, text: t('princess.talk1.75') },
        { chara: mary, text: t('princess.talk1.76') },
        { chara: 'ann', text: t('princess.talk1.77') },
        { chara: mary, text: t('princess.talk1.78', { MAGIC_STONES }) },
        { chara: loretta, text: t('princess.talk1.79') },
        { chara: loretta, text: t('princess.talk1.80') }
      ])
      const i = await scene.select([t('princess.talk1.81.0'), t('princess.talk1.81.1')])
      await scene.talk([
        ...(i === 0 ? [
          { chara: mary, text: t('princess.talk1.82') }
        ] : [
          { chara: loretta, text: t('princess.talk1.83') }
        ]),
        { chara: mary, text: t('princess.talk1.84') }
      ])
      state.started = true
      scene.ui.missionUpdate('m2_2')
    }
  }
  mary.setDisplayName(t('chara.mary')).setTapEvent(event)
  loretta.setDisplayName(t('chara.loretta')).setTapEvent(event)
}

export const doorEvent = (scene, door) => {
  const state = scene.storage.state.event
  const loretta = new Talker('loretta', t('chara.loretta'), door)
  door.setTapEvent(async () => {
    if (state.m2_2.started && state.m2_2.count < MAGIC_STONES) {
      await scene.talk([
        { chara: loretta, text: t('princess.door.0') },
        { chara: loretta, text: t('princess.door.1') }
      ])
    } else if (state.m2_2.completed && !state.m2_4.started) {
      await scene.talk([
        { chara: loretta, text: t('princess.door.2') },
        { chara: loretta, text: t('princess.door.3') }
      ])
    } else {
      scene.mapChange('underpass4', (16).toPixel, (16).toPixelCenter, { r: 'up' })
    }
  })
}
