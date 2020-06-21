import generateBattler from '../util/generateBattler'
export const renfield = (scene, ray, spectres) => {
  const state = scene.storage.state.event.m3_4
  ray.setDisplayName(t('chara.ray'))
  if (state.completed) {
    ray.destroy()
    spectres.forEach(s => s.destroy())
    return
  }
  ray.setTapEvent(async chara => {
    if (state.ghosts.length === 5) {
      await scene.talk([
        { chara, text: t('renfield.solve.0') },
        { chara, text: t('renfield.solve.1') },
        { chara, text: t('renfield.solve.2') },
        { chara, text: t('renfield.solve.3') },
        { chara, text: t('renfield.solve.4') },
        { chara: 'ann', text: t('renfield.solve.5') }
      ])
      scene.ui.announce(t('gotItem', t('renfield.item')))
      await scene.talk([
        { chara: 'ann', text: t('renfield.solve.6') },
        { chara: 'ann', text: t('renfield.solve.7') },
        { chara: 'ann', text: t('renfield.solve.8') },
        { chara, text: t('renfield.solve.9') },
        { chara, text: t('renfield.solve.10') },
        { chara: 'ann', text: t('renfield.solve.11') },
        { chara, text: t('renfield.solve.12') },
        { chara, text: t('renfield.solve.13') },
        { chara, text: t('renfield.solve.14') },
        { chara: 'ann', text: t('renfield.solve.15') },
        { chara, text: t('renfield.solve.16') },
        { chara, text: t('renfield.solve.17') }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_4', true)
      await chara.setSpeed(140).setTargetPosition(chara.x + (7).toPixel, chara.y + (5).toPixel)
      await chara.setSpeed(140).setTargetPosition(chara.x, chara.y + (4).toPixel)
      chara.destroy()
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('renfield.started.0') },
        { chara: 'ann', text: t('renfield.started.1') },
        { chara, text: t('renfield.started.2') },
        { chara, text: t('renfield.started.3') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('renfield.start.0') },
        { chara, text: t('renfield.start.1') },
        { chara, text: t('renfield.start.2') },
        { chara: 'ann', text: t('renfield.start.3') },
        { chara, text: t('renfield.start.4') },
        { chara, text: t('renfield.start.5') },
        { chara: 'ann', text: t('renfield.start.6') },
        { chara: 'ann', text: t('renfield.start.7') },
        { chara, text: t('renfield.start.8') },
        { chara, text: t('renfield.start.9') },
        { chara, text: t('renfield.start.10') },
        { chara: 'ann', text: t('renfield.start.11') },
        { chara: 'ann', text: t('renfield.start.12') },
        { chara, text: t('renfield.start.13') },
        { chara, text: t('renfield.start.14') },
        { chara, text: t('renfield.start.15') },
        { chara, text: t('renfield.start.16') },
        { chara, text: t('renfield.start.17') },
        { chara: 'ann', text: t('renfield.start.18') },
        { chara, text: t('renfield.start.19') },
        { chara, text: t('renfield.start.20') },
        { chara, text: t('renfield.start.21') },
        { chara, text: t('renfield.start.22') },
        { chara, text: t('renfield.start.23') },
        { chara: 'ann', text: t('renfield.start.24') }
      ])
      await scene.camera.look(0, -150, 300, true)
      spectres.forEach(s => s.setVisible(true))
      await scene.talk([
        { chara: 'ann', text: t('renfield.start.0') },
        { chara: 'ann', text: t('renfield.start.1') }
      ])
      chara.setR('left')
      await scene.talk([
        { chara, text: t('renfield.start.2') },
        { chara, text: t('renfield.start.3') },
        { chara: 'ann', text: t('renfield.start.4') },
        { chara, text: t('renfield.start.5') },
        { chara, text: t('renfield.start.6') },
        { chara, text: t('renfield.start.7') }
      ], { angle: false })
      await scene.talk([
        { chara, text: t('renfield.start.8') },
        { chara: 'ann', text: t('renfield.start.9') },
        { chara: 'ann', text: t('renfield.start.10') },
        { chara, text: t('renfield.start.11') },
        { chara, text: t('renfield.start.12') },
        { chara, text: t('renfield.start.13') }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_4')
      await scene.camera.revert(300)
    }
  })
  const spectreEvent = async (spectre, i) => {
    const result = await scene.ui.battle([generateBattler('spectre', 22, { hp: 100 })])
    if (!result) return
    if (!state.ghosts.includes(i)) state.ghosts.push(i)
    spectre.destroy()
  }
  spectres.forEach((spectre, i) => {
    spectre.setTapEvent(spectre => spectreEvent(spectre, i)).setBlendMode(Phaser.BlendModes.ADD).setAlpha(0.8)
    spectre.setVisible(state.started && !state.ghosts.includes(i))
  })
  scene.add.tween({ targets: spectres, duration: 800, loop: -1, yoyo: true, alpha: 0.4 })
}
