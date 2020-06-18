import generateBattler from '../util/generateBattler'
export const evangelina = (scene, queen, queen2, grave) => {
  const state = scene.storage.state.event.m3_5
  queen.setDisplayName(t('chara.queen'))
  queen2.setDisplayName(t('chara.queen')).setFaceKey('queen').setVisible(false)
  if (!state.started) {
    grave.setTapEvent(async () => {
      await scene.talk([
        { chara: 'jaquelyn', text: t('evangelina.unavailable.0') },
        { chara: 'francisca', text: t('evangelina.unavailable.1') },
        { chara: 'ann', text: t('evangelina.unavailable.2') }
      ])
    })
  }
  if (!state.started || state.completed) {
    queen.destroy()
    queen2.destroy()
    return
  }
  queen.setTapEvent(async chara => {
    await scene.camera.look(chara.x, chara.y + 50, 600)
    await scene.talk([
      { chara: 'ann', text: t('evangelina.boss1.0') },
      { chara: 'ann', text: t('evangelina.boss1.1') },
      { chara, text: t('evangelina.boss1.2') },
      { chara: 'ann', text: t('evangelina.boss1.3') },
      { chara, text: t('evangelina.boss1.4') },
      { chara, text: t('evangelina.boss1.5') },
      { chara, text: t('evangelina.boss1.6') },
      { chara: 'ann', text: t('evangelina.boss1.7') },
      { chara, text: t('evangelina.boss1.8') }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('queen', 32, { hp: 1700 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('evangelina')
    chara.die()
    await scene.camera.revert(600)
    await scene.talk([
      { chara: 'ann', text: t('evangelina.boss2.0') },
      { chara: 'jaquelyn', text: t('evangelina.boss2.1') },
      { chara: 'ann', text: t('evangelina.boss2.2') },
      { chara: 'francisca', text: t('evangelina.boss2.3') },
      { chara: 'ann', text: t('evangelina.boss2.4') },
      { chara: 'ann', text: t('evangelina.boss2.5') },
      { chara: 'ann', text: t('evangelina.boss2.6') },
      { chara: 'jaquelyn', text: t('evangelina.boss2.7') },
      { chara: 'jaquelyn', text: t('evangelina.boss2.8') },
      { chara: 'ann', text: t('evangelina.boss2.9') }
    ])
    queen2.setVisible(true)
    scene.francisca.setAllowWalkingWhileEvent(true)
    scene.jaquelyn.setAllowWalkingWhileEvent(true)
    await scene.player.setSpeed(200).setTargetPosition((15).toPixelCenter, (21).toPixelCenter)
    chara = queen2
    await scene.talk([
      { chara, text: t('evangelina.solve1.0') },
      { chara: 'ann', text: t('evangelina.solve1.1') }
    ])
    await scene.camera.look(chara.x, chara.y - 60, 600)
    await scene.talk([
      { chara, text: t('evangelina.solve1.2') },
      { chara, text: t('evangelina.solve1.3') },
      { chara: 'ann', text: t('evangelina.solve1.4') },
      { chara: 'ann', text: t('evangelina.solve1.5') },
      { chara, text: t('evangelina.solve1.6') },
      { chara, text: t('evangelina.solve1.7') },
      { chara, text: t('evangelina.solve1.8') },
      { chara: 'ann', text: t('evangelina.solve1.9') },
      { chara: 'ann', text: t('evangelina.solve1.10') },
      { chara: 'ann', text: t('evangelina.solve1.11') },
      { chara, text: t('evangelina.solve1.12') },
      { chara, text: t('evangelina.solve1.13') },
      { chara, text: t('evangelina.solve1.14') },
      { chara, text: t('evangelina.solve1.15') },
      { chara, text: t('evangelina.solve1.16') },
      { chara, text: t('evangelina.solve1.17') },
      { chara, text: t('evangelina.solve1.18') },
      { chara, text: t('evangelina.solve1.19') },
      { chara: 'ann', text: t('evangelina.solve1.20') },
      { chara, text: t('evangelina.solve1.21') },
      { chara, text: t('evangelina.solve1.22') },
      { chara, text: t('evangelina.solve1.23') },
      { chara, text: t('evangelina.solve1.24') },
      { chara, text: t('evangelina.solve1.25') },
      { chara: 'ann', text: t('evangelina.solve1.26') },
      { chara: 'ann', text: t('evangelina.solve1.27') },
      { chara, text: t('evangelina.solve1.28') },
      { chara, text: t('evangelina.solve1.29') },
      { chara, text: t('evangelina.solve1.30') },
      { chara, text: t('evangelina.solve1.31') },
      { chara, text: t('evangelina.solve1.32') },
      { chara, text: t('evangelina.solve1.33') },
      { chara, text: t('evangelina.solve1.34') },
      { chara, text: t('evangelina.solve1.35') },
      { chara, text: t('evangelina.solve1.36') },
      { chara, text: t('evangelina.solve1.37') }
    ])
    state.completed = true
    scene.ui.missionUpdate('m3_5', true)
    scene.add.tween({
      targets: queen2, duration: 500, alpha: 0,
      onComplete: () => queen2.destroy()
    })
    scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: t('evangelina.solve2.0') },
      { chara: 'ann', text: t('evangelina.solve2.1') },
      { chara: 'ann', text: t('evangelina.solve2.2') },
      { chara: 'francisca', text: t('evangelina.solve2.3') }
    ])
    await scene.ui.sleep(1000)
    scene.storage.state.chapter = 4
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
  })
}
