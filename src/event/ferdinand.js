export const ferdinand = (scene, fdn) => {
  const state = scene.storage.state.event.m3_1
  fdn.setDisplayName(t('chara.fdn'))
  if (state.completed) {
    return fdn.destroy()
  }
  fdn.setTapEvent(async chara => {
    if (scene.storage.state.event.m3_2.completed) {
      await scene.talk([
        { chara, text: t('ferdinand.talk3.0') },
        { chara: 'ann', text: t('ferdinand.talk3.1') },
        { chara: 'ann', text: t('ferdinand.talk3.2') },
        { chara: 'ann', text: t('ferdinand.talk3.3') },
        { chara, text: t('ferdinand.talk3.4') },
        { chara: 'ann', text: t('ferdinand.talk3.5') },
        { chara, text: t('ferdinand.talk3.6') },
        { chara, text: t('ferdinand.talk3.7') },
        { chara: 'ann', text: t('ferdinand.talk3.8') },
        { chara, text: t('ferdinand.talk3.9') }
      ])
      await scene.ui.sleep(300)
      await scene.talk([
        { chara, text: t('ferdinand.talk4.0') }
      ])
      fdn.initImage('ferdinand_dragged')
      scene.substances.remove(fdn)
      await scene.talk([
        { chara, text: t('ferdinand.talk4.1') },
        { chara: 'ann', text: t('ferdinand.talk4.2') }
      ])
      await fdn.setSpeed(20).setTargetPosition(fdn.x - 20, fdn.y)
      await scene.talk([
        { chara, text: t('ferdinand.talk4.3') },
        { chara, text: t('ferdinand.talk4.4') }
      ])
      await fdn.setSpeed(50).setTargetPosition(fdn.x - (2.3).toPixel, fdn.y)
      scene.add.tween({ targets: fdn, duration: 200, alpha: 0, x: fdn.x - 15, y: fdn.y + 30, rotation: fdn.rotation - 1, onComplete: () => fdn.destroy() })
      await scene.ui.sleep(300)
      await scene.talk([
        { chara: 'ann', text: t('ferdinand.talk4.5') },
        { chara: 'ann', text: t('ferdinand.talk4.6') },
        { chara: 'ann', text: t('ferdinand.talk4.7') }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: t('ferdinand.talk4.8') },
        { chara: 'jaquelyn', text: t('ferdinand.talk4.9') },
        { chara: 'francisca', text: t('ferdinand.talk4.10') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_1', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('ferdinand.talk2.0') },
        { chara, text: t('ferdinand.talk2.1') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('ferdinand.talk1.0') },
        { chara, text: t('ferdinand.talk1.1') },
        { chara: 'jaquelyn', text: t('ferdinand.talk1.2') },
        { chara, text: t('ferdinand.talk1.3') },
        { chara: 'ann', text: t('ferdinand.talk1.4') }
      ], { angle: false })
      await scene.talk([
        { chara, text: t('ferdinand.talk1.5') },
        { chara, text: t('ferdinand.talk1.6') },
        { chara, text: t('ferdinand.talk1.7') },
        { chara, text: t('ferdinand.talk1.8') },
        { chara: 'ann', text: t('ferdinand.talk1.9') },
        { chara: 'ann', text: t('ferdinand.talk1.10') },
        { chara, text: t('ferdinand.talk1.11') },
        { chara: 'ann', text: t('ferdinand.talk1.12') },
        { chara, text: t('ferdinand.talk1.13') },
        { chara: 'ann', text: t('ferdinand.talk1.14') },
        { chara, text: t('ferdinand.talk1.15') },
        { chara, text: t('ferdinand.talk1.16') },
        { chara, text: t('ferdinand.talk1.17') },
        { chara: 'ann', text: t('ferdinand.talk1.18') },
        { chara: 'ann', text: t('ferdinand.talk1.19') },
        { chara, text: t('ferdinand.talk1.20') },
        { chara, text: t('ferdinand.talk1.21') },
        { chara, text: t('ferdinand.talk1.22') },
        { chara, text: t('ferdinand.talk1.23') },
        { chara, text: t('ferdinand.talk1.24') },
        { chara: 'ann', text: t('ferdinand.talk1.25') },
        { chara, text: t('ferdinand.talk1.26') },
        { chara, text: t('ferdinand.talk1.27') },
        { chara, text: t('ferdinand.talk1.28') },
        { chara, text: t('ferdinand.talk1.29') },
        { chara: 'ann', text: t('ferdinand.talk1.30') },
        { chara: 'ann', text: t('ferdinand.talk1.31') },
        { chara, text: t('ferdinand.talk1.32') },
        { chara, text: t('ferdinand.talk1.33') },
        { chara: 'ann', text: t('ferdinand.talk1.34') },
        { chara: 'ann', text: t('ferdinand.talk1.35') },
        { chara, text: t('ferdinand.talk1.36') },
        { chara, text: t('ferdinand.talk1.37') },
        { chara, text: t('ferdinand.talk1.38') },
        { chara: 'ann', text: t('ferdinand.talk1.39') },
        { chara: 'francisca', text: t('ferdinand.talk1.40') },
        { chara: 'jaquelyn', text: t('ferdinand.talk1.41') },
        { chara: 'jaquelyn', text: t('ferdinand.talk1.42') },
        { chara, text: t('ferdinand.talk1.43') },
        { chara, text: t('ferdinand.talk1.44') },
        { chara, text: t('ferdinand.talk1.45') },
        { chara, text: t('ferdinand.talk1.46') },
        { chara: 'ann', text: t('ferdinand.talk1.47') },
        { chara, text: t('ferdinand.talk1.48') },
        { chara, text: t('ferdinand.talk1.49') }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_1')
    }
  })
}
