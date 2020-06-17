import generateBattler from '../util/generateBattler'
export const dionysus = (scene, dionysus, area, gate) => {
  if (!scene.storage.state.event.m2_1.completed || scene.storage.state.event.m2_4.jack) {
    dionysus.destroy()
    return
  }
  const state = scene.storage.state.event.m2_3
  const chara = dionysus.setDisplayName(t('chara.dionysus'))
  dionysus.setSpeed(180)
  const origin = { x: dionysus.x, y: dionysus.y }
  gate.setActive(state.started)
  area.setEvent(async () => {
    await scene.talk([
      { chara, text: t('moonshine.talk3.0') },
      { chara, text: t('moonshine.talk3.1') },
      { chara, text: t('moonshine.talk3.2') },
      { chara: 'ann', text: t('moonshine.talk3.3') },
      { chara, text: t('moonshine.talk3.4') },
      { chara: 'ann', text: t('moonshine.talk3.5') },
      { chara, text: t('moonshine.talk3.6') },
      { chara, text: t('moonshine.talk3.7') },
      { chara, text: t('moonshine.talk3.8') },
      { chara: 'ann', text: t('moonshine.talk3.9') },
      { chara, text: t('moonshine.talk3.10') },
      { chara, text: t('moonshine.talk3.11') },
      { chara: 'ann', text: t('moonshine.talk3.12') },
      { chara, text: t('moonshine.talk3.13') },
      { chara, text: t('moonshine.talk3.14') },
      { chara, text: t('moonshine.talk3.15') }
    ])
    await dionysus.setTargetPosition((9).toPixelCenter, (2).toPixelCenter)
    dionysus.setVisible(false)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'jaquelyn', text: t('moonshine.talk3.16') },
      { chara: 'ann', text: t('moonshine.talk3.17') }
    ])
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    dionysus.setR('down').setVisible(true)
    await scene.ui.sleep(500)
    await dionysus.setTargetPosition(origin.x, origin.y)
    await scene.talk([
      { chara, text: t('moonshine.talk3.18') },
      { chara, text: t('moonshine.talk3.19') },
      { chara: 'ann', text: t('moonshine.talk3.20') },
      { chara, text: t('moonshine.talk3.21') },
      { chara, text: t('moonshine.talk3.22') },
      { chara, text: t('moonshine.talk3.23') },
      { chara, text: t('moonshine.talk3.24') }
    ])
    state.started = true
    area.setActive(false)
    gate.setActive(true)
    scene.ui.missionUpdate('m2_3')
  }).setActive(state.talked && !state.started)
  dionysus.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara, text: t('moonshine.talk5.0') }
      ])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: t('moonshine.talk5.1') },
        { chara, text: t('moonshine.talk5.2') },
        { chara, text: t('moonshine.talk5.3') },
        { chara, text: t('moonshine.talk5.4') },
        { chara: 'ann', text: t('moonshine.talk5.5') },
        { chara, text: t('moonshine.talk5.6') },
        { chara, text: t('moonshine.talk5.7') }
      ])
      scene.ui.increaseWeapon(7)
      await scene.talk([
        { chara, text: t('moonshine.talk5.8') },
        { chara: 'ann', text: t('moonshine.talk5.9') },
        { chara, text: t('moonshine.talk5.10') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m2_3', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('moonshine.talk4.0') },
        { chara, text: t('moonshine.talk4.1') }
      ])
    } else if (state.talked) {
      await scene.talk([
        { chara, text: t('moonshine.talk2.0') },
        { chara, text: t('moonshine.talk2.1') }
      ])
    } else {
      await scene.talk([
        { chara, text: t('moonshine.talk1.0') },
        { chara, text: t('moonshine.talk1.1') },
        { chara: 'ann', text: t('moonshine.talk1.2') },
        { chara: 'ann', text: t('moonshine.talk1.3') },
        { chara, text: t('moonshine.talk1.4') },
        { chara: 'ann', text: t('moonshine.talk1.5') },
        { chara, text: t('moonshine.talk1.6') },
        { chara, text: t('moonshine.talk1.7') },
        { chara: 'ann', text: t('moonshine.talk1.8') },
        { chara, text: t('moonshine.talk1.9') },
        { chara, text: t('moonshine.talk1.10') },
        { chara: 'ann', text: t('moonshine.talk1.11') },
        { chara: 'ann', text: t('moonshine.talk1.12') },
        { chara: 'ann', text: t('moonshine.talk1.13') },
        { chara, text: t('moonshine.talk1.14') },
        { chara, text: t('moonshine.talk1.15') },
        { chara, text: t('moonshine.talk1.16') },
        { chara: 'ann', text: t('moonshine.talk1.17') },
        { chara, text: t('moonshine.talk1.18') },
        { chara, text: t('moonshine.talk1.19') },
        { chara, text: t('moonshine.talk1.20') },
        { chara: 'francisca', text: t('moonshine.talk1.21') },
        { chara: 'francisca', text: t('moonshine.talk1.22') },
        { chara, text: t('moonshine.talk1.23') },
        { chara, text: t('moonshine.talk1.24') },
        { chara, text: t('moonshine.talk1.25') },
        { chara: 'ann', text: t('moonshine.talk1.26') },
        { chara, text: t('moonshine.talk1.27') },
        { chara, text: t('moonshine.talk1.28') },
        { chara: 'ann', text: t('moonshine.talk1.29') },
        { chara, text: t('moonshine.talk1.30') },
        { chara, text: t('moonshine.talk1.31') },
        { chara, text: t('moonshine.talk1.32') }
      ])
      state.talked = true
      area.setActive(true)
    }
  })
}

export const orthrus = (scene, boss, area, barrel) => {
  const state = scene.storage.state.event.m2_3
  if (state.solved) {
    area.destroy()
    boss.destroy()
    return
  }
  if (!state.started) barrel.destroy()
  area.setEvent(async () => {
    if (state.started) {
      await scene.camera.look(0, -180, 1000, true)
      await scene.ui.sleep(1200)
      await scene.talk([
        { chara: 'ann', text: t('moonshine.orthrus2.0') },
        { chara: 'ann', text: t('moonshine.orthrus2.1') }
      ])
      await scene.ui.sleep(500)
      const result = await scene.ui.battle([generateBattler('orthrus', 18, { hp: 800 })], { boss: true, bgm: 'battle2' })
      if (!result) return
      area.destroy()
      await boss.die()
      await scene.camera.revert(500)
      await scene.talk([
        { chara: 'ann', text: t('moonshine.orthrus2.2') },
        { chara: 'jaquelyn', text: t('moonshine.orthrus2.3') }
      ])
      state.solved = true
    } else {
      await scene.talk([
        { chara: 'ann', text: t('moonshine.orthrus1.0') },
        { chara: 'jaquelyn', text: t('moonshine.orthrus1.1') },
        { chara: 'francisca', text: t('moonshine.orthrus1.2') }
      ])
      await scene.ui.transition('fast')
      scene.player.setPosition(scene.player.x, (22).toPixelCenter).setR('down')
    }
  })
}
