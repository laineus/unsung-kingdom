import generateBattler from '../util/generateBattler'
export const MANDRAKE_COUNT = 5
export const drystan = (scene, door, drystan) => {
  const state1 = scene.storage.state.event.m1_3
  const state2 = scene.storage.state.event.m1_4
  // Door
  const canStart = scene.storage.state.event.m1_2.completed
  if (canStart) {
    door.destroy()
  } else {
    drystan.destroy()
    door.setTapEvent(async () => {
      await scene.talk([{ chara: 'ann', text: t('drystan.door') }])
    })
    return
  }
  // Drystan
  if (state2.completed) return drystan.destroy()
  drystan.setDisplayName(t('chara.drystan')).setTapEvent(async chara => {
    const hasMandrake = state1.count >= MANDRAKE_COUNT
    if (!state1.started) {
      await scene.talk([
        { chara: 'ann', text: t('drystan.start.0') },
        { chara, text: t('drystan.start.1') },
        { chara: 'ann', text: t('drystan.start.2') },
        { chara, text: t('drystan.start.3') },
        { chara: 'ann', text: t('drystan.start.4') },
        { chara, text: t('drystan.start.5') },
        { chara, text: t('drystan.start.6') },
        { chara, text: t('drystan.start.7') },
        { chara: 'ann', text: t('drystan.start.8') },
        { chara, text: t('drystan.start.9') },
        { chara, text: t('drystan.start.10') },
        { chara, text: t('drystan.start.11', { MANDRAKE_COUNT }) },
        { chara: 'ann', text: t('drystan.start.12') },
        { chara, text: t('drystan.start.13') },
        { chara, text: t('drystan.start.14') }
      ])
      scene.ui.missionUpdate('m1_3')
    } else if (!state1.completed && !hasMandrake) {
      await scene.talk([
        { chara, text: t('drystan.progress.0', { MANDRAKE_COUNT }) },
        { chara, text: t('drystan.progress.1') }
      ])
    } else if (!state1.completed && hasMandrake) {
      await scene.talk([
        { chara: 'ann', text: t('drystan.solve.0') },
        { chara, text: t('drystan.solve.1') },
        { chara, text: t('drystan.solve.2') }
      ])
      scene.ui.missionUpdate('m1_3', true)
      await scene.talk([
        { chara: 'ann', text: t('bear.start.0') },
        { chara, text: t('bear.start.1') },
        { chara, text: t('bear.start.2') },
        { chara, text: t('bear.start.3') },
        { chara: 'ann', text: t('bear.start.4') },
        { chara, text: t('bear.start.5') },
        { chara, text: t('bear.start.6') },
        { chara, text: t('bear.start.7') },
        { chara: 'ann', text: t('bear.start.8') },
        { chara: 'ann', text: t('bear.start.9') }
      ])
      scene.ui.missionUpdate('m1_4')
    } else if (!state2.solved) {
      await scene.talk([
        { chara, text: t('bear.progress') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('bear.solve.0') },
        { chara, text: t('bear.solve.1') }
      ])
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara, text: t('bear.solve.2') },
        { chara, text: t('bear.solve.3') },
        { chara: 'ann', text: t('bear.solve.4') },
        { chara, text: t('bear.solve.5') },
        { chara, text: t('bear.solve.6') },
        { chara: 'ann', text: t('bear.solve.7') },
        { chara, text: t('bear.solve.8') },
        { chara, text: t('bear.solve.9') },
        { chara: 'ann', text: t('bear.solve.10') },
        { chara, text: t('bear.solve.11') },
        { chara, text: t('bear.solve.12') },
        { chara, text: t('bear.solve.13') },
        { chara, text: t('bear.solve.14') },
        { chara: 'ann', text: t('bear.solve.15') },
        { chara: 'ann', text: t('bear.solve.16') },
        { chara, text: t('bear.solve.17') },
        { chara, text: t('bear.solve.18') },
        { chara: 'ann', text: t('bear.solve.19') },
        { chara, text: t('bear.solve.20') },
        { chara, text: t('bear.solve.21') },
        { chara: 'ann', text: t('bear.solve.22') },
        { chara, text: t('bear.solve.23') },
        { chara, text: t('bear.solve.24') },
        { chara, text: t('bear.solve.25') },
        { chara: 'ann', text: t('bear.solve.26') },
        { chara, text: t('bear.solve.27') },
        { chara: 'ann', text: t('bear.solve.28') },
        { chara, text: t('bear.solve.29') },
        { chara: 'ann', text: t('bear.solve.30') },
        { chara, text: t('bear.solve.31') },
        { chara, text: t('bear.solve.32') },
        { chara, text: t('bear.solve.33') },
        { chara, text: t('bear.solve.34') }
      ])
      await scene.ui.transition('slow')
      drystan.destroy()
      scene.player.setR('down')
      await scene.ui.sleep(1000)
      scene.ui.missionUpdate('m1_4', true)
      await scene.talk([
        { chara: 'ann', text: t('bear.end.0') },
        { chara: 'jaquelyn', text: t('bear.end.1') },
        { chara: 'francisca', text: t('bear.end.2') },
        { chara: 'francisca', text: t('bear.end.3') }
      ])
      await scene.ui.sleep(1000)
      scene.storage.state.chapter = 2
      await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    }
  })
}
export const rexBear = (scene, area, bear) => {
  const state2 = scene.storage.state.event.m1_4
  if (!state2.started || state2.solved) {
    area.destroy()
    bear.destroy()
    return
  }
  if (!state2.area) {
    scene.ui.autoEvent(async () => {
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: 'ann', text: t('bear.bearArea.0') },
        { chara: 'francisca', text: t('bear.bearArea.1') }
      ])
      state2.area = true
    })
  }
  area.setEvent(async () => {
    await scene.talk([
      { chara: 'ann', text: t('bear.bear.0') }
    ])
    scene.francisca.setAllowWalkingWhileEvent(true)
    scene.jaquelyn.setAllowWalkingWhileEvent(true)
    await scene.player.setTargetPosition(795, 490)
    await scene.player.setR('up')
    await scene.ui.sleep(500)
    area.setEvent(null)
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: t('bear.bear.1') }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('bear', 11, { hp: 600 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('rex_bear')
    area.destroy()
    await bear.die()
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'francisca', text: t('bear.bear.2') }
    ])
    await scene.ui.sleep(500)
    await scene.ui.transition('slow')
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: t('bear.bear.3') }
    ])
    state2.solved = true
  })
}
