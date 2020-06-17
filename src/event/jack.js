import generateBattler from '../util/generateBattler'
export const jackEvent = (scene, area, chara) => {
  const state = scene.storage.state.event.m0_1
  if (state.battled) {
    chara.destroy()
    area.destroy()
    return
  }
  chara.setVisible(false).setR('up').setSpeed(180).setDisplayName(t('chara.unknown'))
  area.setEvent(async () => {
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.setMembersPosition((50).toPixel, (29).toPixelCenter, 'up')
    scene.camera.updateFollow()
    await scene.ui.sleep(500)
    await scene.camera.look(0, -180, 1000, true)
    await scene.talk([
      { chara: 'jaquelyn', text: t('jack.0.0') },
      { chara: 'ann', text: t('jack.0.1') },
      { chara: 'francisca', text: t('jack.0.2') },
      { chara: 'ann', text: t('jack.0.3') },
      { chara: 'francisca', text: t('jack.0.4') },
      { chara: 'francisca', text: t('jack.0.5') },
      { chara: 'ann', text: t('jack.0.6') },
      { chara: 'jaquelyn', text: t('jack.0.7') },
      { chara: 'ann', text: t('jack.0.8') }
    ])
    await scene.talk([{ chara, text: t('jack.1.0') }])
    scene.francisca.setR('down')
    scene.jaquelyn.setR('down')
    chara.setVisible(true)
    await scene.camera.revert(300)
    await scene.talk([
      { chara: 'ann', text: t('jack.1.1') },
      { chara: 'ann', text: t('jack.1.2') },
      { chara, text: t('jack.1.3') },
      { chara: 'ann', text: t('jack.1.4') },
      { chara: 'ann', text: t('jack.1.5') },
      { chara: 'jaquelyn', text: t('jack.1.6') },
      { chara: 'ann', text: t('jack.1.7') },
      { chara, text: t('jack.1.8') },
      { chara, text: t('jack.1.9') },
      { chara: 'ann', text: t('jack.1.10') },
      { chara: 'francisca', text: t('jack.1.11') },
      { chara: 'francisca', text: t('jack.1.12') },
      { chara: 'francisca', text: t('jack.1.13') },
      { chara: 'ann', text: t('jack.1.14') },
      { chara, text: t('jack.1.15') },
      { chara, text: t('jack.1.16') },
      { chara: 'ann', text: t('jack.1.17') },
      { chara: 'ann', text: t('jack.1.18') },
      { chara, text: t('jack.1.19') },
      { chara, text: t('jack.1.20') },
      { chara, text: t('jack.1.21') },
      { chara: 'francisca', text: t('jack.1.22') },
      { chara: 'jaquelyn', text: t('jack.1.23') },
      { chara: 'ann', text: t('jack.1.24') },
      { chara: 'ann', text: t('jack.1.25') }
    ])
    scene.francisca.setAllowWalkingWhileEvent(true).setTargetPosition((48).toPixelCenter, (31).toPixel)
    scene.jaquelyn.setAllowWalkingWhileEvent(true).setTargetPosition((50).toPixelCenter, (31).toPixel)
    await scene.player.setTargetPosition((49).toPixelCenter, (31).toPixelCenter)
    scene.francisca.stopWalk().setR('down')
    scene.jaquelyn.stopWalk().setR('down')
    await scene.ui.sleep(500)
    await scene.ui.battle([generateBattler('jack', 5, { hp: 1000 })], { boss: true, defeatEvent: true })
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: t('jack.2.0') },
      { chara: 'francisca', text: t('jack.2.1') },
      { chara, text: t('jack.2.2') }
    ])
    scene.ui.announce(t('jack.2.3') )
    scene.storage.state.weapons.length = 0
    scene.storage.state.battlers.forEach(v => v.weapon = null)
    await scene.ui.sleep(2000)
    await chara.setTargetPosition((41).toPixelCenter, (26).toPixelCenter)
    scene.player.setR('left')
    scene.francisca.setR('left')
    scene.jaquelyn.setR('left')
    await chara.setTargetPosition((32).toPixelCenter, (26).toPixelCenter)
    chara.destroy()
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'jaquelyn', text: t('jack.2.4') }
    ])
    scene.jaquelyn.setR('down')
    await scene.talk([
      { chara: 'jaquelyn', text: t('jack.2.5') },
      { chara: 'ann', text: t('jack.2.6') },
      { chara: 'ann', text: t('jack.2.7') }
    ])
    scene.francisca.setR('down')
    await scene.talk([
      { chara: 'francisca', text: t('jack.2.8') },
      { chara: 'francisca', text: t('jack.2.9') }
    ])
    scene.camera.revert()
    state.battled = true
    area.destroy()
  })
}

export const kingEvent = (scene, area, chara, soldier) => {
  chara.setDisplayName(t('chara.king'))
  soldier.setDisplayName(t('chara.guard'))
  const state = scene.storage.state.event.m0_1
  if (state.completed) {
    chara.destroy()
    area.destroy()
    return
  }
  area.setEvent(async () => {
    scene.player.stopWalk()
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    scene.setMembersPosition((18).toPixelCenter, (26).toPixelCenter, 'up')
    scene.camera.updateFollow()
    await scene.ui.sleep(500)
    scene.camera.look((16).toPixel, (18).toPixel, 1000)
    await chara.setTargetPosition((16).toPixel, (17).toPixelCenter)
    await scene.talk([
      { chara: 'ann', text: t('jack.3.0') }
    ])
    await scene.ui.sleep(500)
    await scene.talk([
      { chara, text: t('jack.3.1') },
      { chara: soldier, text: t('jack.3.2') }
    ], { angle: false })
    await scene.ui.sleep(300)
    await chara.setTargetPosition((16).toPixel, (19).toPixel)
    await scene.ui.sleep(300)
    await scene.talk([
      { chara, text: t('jack.3.3') },
      { chara: soldier, text: t('jack.3.4') }
    ], { angle: false })
    await scene.ui.sleep(500)
    chara.setR('right')
    await scene.ui.sleep(800)
    await scene.talk([
      { chara, text: t('jack.3.5') }
    ], { angle: false })
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'jaquelyn', text: t('jack.3.6') },
      { chara: 'francisca', text: t('jack.3.7') },
      { chara: 'jaquelyn', text: t('jack.3.8') },
      { chara: 'ann', text: t('jack.3.9') }
    ])
    window.archiveManager.activate('saved_king')
    await scene.ui.missionUpdate('m0_1', true)
    scene.storage.state.chapter = 1
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    scene.camera.revert()
  })
}
