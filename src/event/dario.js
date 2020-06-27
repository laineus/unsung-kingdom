import generateBattler from '../util/generateBattler'
export const dario = (scene, dario) => {
  const state = scene.storage.state.event.m3_3
  dario.setDisplayName(t('chara.dario'))
  if (state.completed) {
    return dario.destroy()
  }
  dario.setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: t('dario.solved.0') }
      ])
    } else if (state.solved) {
      state.completed = true
      scene.ui.missionUpdate('m3_3', true)
      await scene.talk([
        { chara: 'ann', text: t('dario.solve.0') },
        { chara: 'ann', text: t('dario.solve.1') },
        { chara, text: t('dario.solve.2') },
        { chara, text: t('dario.solve.3') },
        { chara: 'ann', text: t('dario.solve.4') },
        { chara: 'ann', text: t('dario.solve.5') },
        { chara: 'ann', text: t('dario.solve.6') },
        { chara, text: t('dario.solve.7') },
        { chara, text: t('dario.solve.8') },
        { chara: 'ann', text: t('dario.solve.9') },
        { chara, text: t('dario.solve.10') },
        { chara, text: t('dario.solve.11') },
        { chara, text: t('dario.solve.12') },
        { chara, text: t('dario.solve.13') },
        { chara: 'ann', text: t('dario.solve.14') },
        { chara, text: t('dario.solve.15') },
        { chara, text: t('dario.solve.16') },
        { chara, text: t('dario.solve.17') },
        { chara: 'ann', text: t('dario.solve.18') },
        { chara, text: t('dario.solve.19') },
        { chara, text: t('dario.solve.20') },
        { chara, text: t('dario.solve.21') },
        { chara: 'ann', text: t('dario.solve.22') },
        { chara, text: t('dario.solve.23') },
        { chara, text: t('dario.solve.24') }
      ])
      scene.ui.missionUpdate('m3_5')
      scene.storage.state.event.m3_5.started = true
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('dario.started.0') },
        { chara, text: t('dario.started.1') },
        { chara: 'ann', text: t('dario.started.2') }
      ])
    } else if (scene.storage.state.event.m3_1.started) { // フェルディナンドに話しかけて以降開始
      await scene.talk([
        { chara, text: t('dario.start.0') },
        { chara: 'ann', text: t('dario.start.1') },
        { chara: 'ann', text: t('dario.start.2') },
        { chara, text: t('dario.start.3') },
        { chara, text: t('dario.start.4') },
        { chara, text: t('dario.start.5') },
        { chara, text: t('dario.start.6') },
        { chara, text: t('dario.start.7') },
        { chara, text: t('dario.start.8') },
        { chara, text: t('dario.start.9') },
        { chara, text: t('dario.start.10') },
        { chara, text: t('dario.start.11') },
        { chara, text: t('dario.start.12') },
        { chara, text: t('dario.start.13') },
        { chara: 'ann', text: t('dario.start.14') },
        { chara: 'ann', text: t('dario.start.15') },
        { chara, text: t('dario.start.16') },
        { chara, text: t('dario.start.17') },
        { chara: 'ann', text: t('dario.start.18') },
        { chara: 'ann', text: t('dario.start.19') },
        { chara, text: t('dario.start.20') },
        { chara, text: t('dario.start.21') },
        { chara, text: t('dario.start.22') },
        { chara: 'ann', text: t('dario.start.23') },
        { chara, text: t('dario.start.24') },
        { chara, text: t('dario.start.25') },
        { chara, text: t('dario.start.26') },
        { chara: 'ann', text: t('dario.start.27') },
        { chara: 'ann', text: t('dario.start.28') },
        { chara: 'ann', text: t('dario.start.29') },
        { chara, text: t('dario.start.30') },
        { chara: 'ann', text: t('dario.start.31') },
        { chara: 'ann', text: t('dario.start.32') },
        { chara, text: t('dario.start.33') },
        { chara, text: t('dario.start.34') },
        { chara, text: t('dario.start.35') },
        { chara, text: t('dario.start.36') },
        { chara: 'ann', text: t('dario.start.37') },
        { chara, text: t('dario.start.38') },
        { chara, text: t('dario.start.39') },
        { chara, text: t('dario.start.40') },
        { chara, text: t('dario.start.41') },
        { chara, text: t('dario.start.42') },
        { chara: 'ann', text: t('dario.start.43') },
        { chara: 'ann', text: t('dario.start.44') },
        { chara: 'ann', text: t('dario.start.45') },
        { chara, text: t('dario.start.46') },
        { chara: 'ann', text: t('dario.start.47') },
        { chara, text: t('dario.start.48') },
        { chara: 'ann', text: t('dario.start.49') },
        { chara: 'ann', text: t('dario.start.50') },
        { chara, text: t('dario.start.51') },
        { chara, text: t('dario.start.52') },
        { chara: 'ann', text: t('dario.start.53') },
        { chara, text: t('dario.start.54') },
        { chara, text: t('dario.start.55') },
        { chara: 'ann', text: t('dario.start.56') },
        { chara: 'ann', text: t('dario.start.57') },
        { chara, text: t('dario.start.58') },
        { chara, text: t('dario.start.59') },
        { chara, text: t('dario.start.60') },
        { chara, text: t('dario.start.61') },
        { chara, text: t('dario.start.62') },
        { chara: 'ann', text: t('dario.start.63') }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_3')
    } else {
      await scene.talk([
        { chara: 'ann', text: t('dario.unavailable.0') },
        { chara, text: t('dario.unavailable.1') },
        { chara: 'ann', text: t('dario.unavailable.2') },
        { chara: 'ann', text: t('dario.unavailable.3') }
      ], { angle: false })
    }
  })
}

export const jack = (scene, jk, area1, area2, area3) => {
  const state = scene.storage.state.event.m3_3
  if (!state.started || state.solved) {
    area1.destroy()
    area2.destroy()
    area3.destroy()
    jk.destroy()
    return
  }
  area3.setEvent(async () => {
    await scene.talk([
      { chara: 'jaquelyn', text: t('dario.jack1.0') },
      { chara: 'ann', text: t('dario.jack1.1') }
    ])
    area3.destroy()
  })
  area1.setActive(false)
  jk.setVisible(false)
  area2.setEvent(async () => {
    area1.setActive(true)
    area2.destroy()
    area3.destroy()
  })
  area1.setEvent(async () => {
    const chara = jk
    jk.setDisplayName(t('chara.jack')).setVisible(true)
    await scene.talk([
      { chara, text: t('dario.jack2.0') },
      { chara: 'ann', text: t('dario.jack2.1') }
    ])
    scene.francisca.setR('right')
    scene.jaquelyn.setR('right')
    await jk.setSpeed(140).setTargetPosition(jk.x + (-10).toPixel, jk.y)
    await scene.talk([
      { chara: 'ann', text: t('dario.jack2.2') },
      { chara, text: t('dario.jack2.3') },
      { chara: 'ann', text: t('dario.jack2.4') },
      { chara: 'ann', text: t('dario.jack2.5') },
      { chara: 'ann', text: t('dario.jack2.6') },
      { chara, text: t('dario.jack2.7') },
      { chara: 'ann', text: t('dario.jack2.8') },
      { chara, text: t('dario.jack2.9') },
      { chara, text: t('dario.jack2.10') },
      { chara: 'ann', text: t('dario.jack2.11') },
      { chara: 'ann', text: t('dario.jack2.12') },
      { chara, text: t('dario.jack2.13') },
      { chara: 'ann', text: t('dario.jack2.14') },
      { chara, text: t('dario.jack2.15') },
      { chara, text: t('dario.jack2.16') },
      { chara, text: t('dario.jack2.17') },
      { chara, text: t('dario.jack2.18') },
      { chara: 'ann', text: t('dario.jack2.19') },
      { chara, text: t('dario.jack2.20') },
      { chara: 'ann', text: t('dario.jack2.21') }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('jack', 27, { hp: 1300 })], { boss: true, bgm: 'battle2' })
    if (!result) return
    await scene.ui.sleep(500)
    await scene.talk([
      { chara, text: t('dario.jack3.0') },
      { chara: 'ann', text: t('dario.jack3.1') },
      { chara: 'ann', text: t('dario.jack3.2') },
      { chara: 'ann', text: t('dario.jack3.3') },
      { chara, text: t('dario.jack3.4') },
      { chara: 'ann', text: t('dario.jack3.5') },
      { chara, text: t('dario.jack3.6') }
    ])
    await scene.ui.sleep(700)
    jk.setR('up')
    await scene.ui.sleep(500)
    scene.add.tween({
      targets: jk, duration: 200, y: jk.y - 70, ease: 'Power2',
      onComplete: () => {
        scene.add.tween({ targets: jk, duration: 200, alpha: 0, y: jk.y + 55, ease: 'Cubic.easeIn', onComplete: () => jk.destroy() })
      }
    })
    await scene.ui.sleep(200)
    scene.player.setTargetPosition(scene.player.x + 50, scene.player.y)
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: t('dario.jack4.0') },
      { chara: 'jaquelyn', text: t('dario.jack4.1') },
      { chara: 'francisca', text: t('dario.jack4.2') },
      { chara: 'ann', text: t('dario.jack4.3') },
      { chara: 'ann', text: t('dario.jack4.4') },
      { chara: 'jaquelyn', text: t('dario.jack4.5') },
      { chara: 'francisca', text: t('dario.jack4.6') },
      { chara: 'ann', text: t('dario.jack4.7') },
      { chara: 'ann', text: t('dario.jack4.8') },
      { chara: 'francisca', text: t('dario.jack4.9') },
      { chara: 'ann', text: t('dario.jack4.10') },
      { chara: 'ann', text: t('dario.jack4.11') },
      { chara: 'francisca', text: t('dario.jack4.12') },
      { chara: 'francisca', text: t('dario.jack4.13') },
      { chara: 'ann', text: t('dario.jack4.14') },
      { chara: 'jaquelyn', text: t('dario.jack4.15') },
      { chara: 'jaquelyn', text: t('dario.jack4.16') },
      { chara: 'ann', text: t('dario.jack4.17') }
    ])
    state.solved = true
    area1.destroy()
  })
}
