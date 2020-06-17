import generateBattler from '../util/generateBattler'
export const mercenary1 = (scene, leader, member, member2) => {
  if (scene.storage.state.chapter !== 1) {
    return [leader, member, member2].forEach(v => v.destroy())
  }
  const state = scene.storage.state.event.m1_2
  if (!state.solved) member2.setVisible(false)
  member2.setDisplayName(t('chara.injuredMercenary')).setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('mercenary.member2.0') },
      ...(state.completed ? [] : [
        { chara, text: t('mercenary.member2.1') }
      ])
    ])
  })
  member.setDisplayName(t('chara.injuredMercenary')).setTapEvent(async chara => {
    await scene.talk(state.solved ? [
      { chara, text: t('mercenary.member1.2') },
      { chara, text: t('mercenary.member1.3') }
    ] : [
      { chara, text: t('mercenary.member1.0') },
      { chara, text: t('mercenary.member1.1') }
    ])
  })
  leader.setDisplayName(t('chara.injuredLeader')).setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([{ chara, text: t('mercenary.leader.5') }])
    } else if (state.solved) {
      await scene.talk([
        { chara, text: t('mercenary.leader.0') },
        { chara, text: t('mercenary.leader.1') },
        { chara, text: t('mercenary.leader.2') },
        { chara, text: t('mercenary.leader.3') },
        { chara, text: t('mercenary.leader.4') }
      ])
      scene.ui.missionUpdate('m1_2', true).then(() => {
        scene.ui.increaseWeapon(3)
      })
    } else if (state.started) {
      await scene.talk([{ chara, text: t('mercenary.started') }])
    } else {
      const messages = [
        [
          { chara: 'ann', text: t('mercenary.start.0') },
          { chara, text: t('mercenary.start.1') },
          { chara: 'jaquelyn', text: t('mercenary.start.2') },
          { chara, text: t('mercenary.start.3') },
          { chara, text: t('mercenary.start.4') },
          { chara: 'ann', text: t('mercenary.start.5') },
          { chara, text: t('mercenary.start.6') },
          { chara, text: t('mercenary.start.7') },
          { chara: 'jaquelyn', text: t('mercenary.start.8') },
          { chara, text: t('mercenary.start.9') },
          { chara, text: t('mercenary.start.10') },
          { chara: 'jaquelyn', text: t('mercenary.start.11') },
          { chara, text: t('mercenary.start.12') },
          { chara, text: t('mercenary.start.13') },
          { chara: 'francisca', text: t('mercenary.start.14') },
          { chara: 'francisca', text: t('mercenary.start.15') },
          { chara, text: t('mercenary.start.16') },
          { chara, text: t('mercenary.start.17') },
          { chara, text: t('mercenary.start.18') },
          { chara, text: t('mercenary.start.19') },
          { chara: 'ann', text: t('mercenary.start.20') },
          { chara, text: t('mercenary.start.21') }
        ],
        [
          { chara, text: t('mercenary.start.22') },
          { chara, text: t('mercenary.start.23') },
          { chara, text: t('mercenary.start.24') },
          null
        ]
      ]
      const t = await scene.talk(!state.talked ? messages[0].concat(messages[1]) : messages[1])
      const i = await scene.select([t('mercenary.start.25.0'), t('mercenary.start.25.1')])
      t.destroy()
      state.talked = true
      await scene.talk([{ chara, text: i === 0 ? t('mercenary.start.26.0') : t('mercenary.start.26.1') }])
      if (i === 0) scene.ui.missionUpdate('m1_2')
    }
  })
}

export const mercenary2 = (scene, flower, mercenary) => {
  const state = scene.storage.state.event.m1_2
  if (state.completed || state.solved) {
    mercenary.destroy()
    flower.destroy()
    return
  }
  mercenary.setVisible(false)
  flower.setTapEvent(async () => {
    await scene.talk([{ chara: 'ann', text: t('mercenary.flower.0') }])
    if (!state.started) return
    const i = await scene.select([t('mercenary.flower.1'), t('mercenary.flower.2')])
    if (i === 1) return
    await scene.ui.sleep(300)
    const result = await scene.ui.battle([generateBattler('flower', 5, { hp: 270 })], { boss: true, bgm: 'battle2' })
    if (!result) return
    const chara = mercenary.setDisplayName(t('chara.injuredMercenary'))
    mercenary.setVisible(true)
    await flower.die()
    await scene.talk([
      { chara: 'ann', text: t('mercenary.battle.0') },
      { chara: 'francisca', text: t('mercenary.battle.1') },
      { chara, text: t('mercenary.battle.2') },
      { chara: 'ann', text: t('mercenary.battle.3') },
      { chara: 'jaquelyn', text: t('mercenary.battle.4') },
      { chara, text: t('mercenary.battle.5') },
      { chara: 'jaquelyn', text: t('mercenary.battle.6') },
      { chara, text: t('mercenary.battle.7') },
      { chara: 'francisca', text: t('mercenary.battle.8') },
      { chara: 'francisca', text: t('mercenary.battle.9') },
      { chara: 'ann', text: t('mercenary.battle.10') },
      { chara, text: t('mercenary.battle.11') },
      { chara, text: t('mercenary.battle.12') },
      { chara, text: t('mercenary.battle.13') },
      { chara, text: t('mercenary.battle.14') },
      { chara: 'ann', text: t('mercenary.battle.15') },
      { chara, text: t('mercenary.battle.16') },
      { chara, text: t('mercenary.battle.17') },
      { chara, text: t('mercenary.battle.18') },
      { chara: 'ann', text: t('mercenary.battle.19') },
      { chara, text: t('mercenary.battle.20') },
      { chara: 'jaquelyn', text: t('mercenary.battle.21') },
      { chara: 'jaquelyn', text: t('mercenary.battle.22') },
      { chara: 'jaquelyn', text: t('mercenary.battle.23') },
      { chara, text: t('mercenary.battle.24') },
      { chara, text: t('mercenary.battle.25') },
      { chara, text: t('mercenary.battle.26') }
    ])
    state.solved = true
    await scene.ui.sleep(300)
    await scene.ui.transition('normal')
    mercenary.setVisible(false)
  })
}
