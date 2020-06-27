export const APPLES_COUNT = 5
export const GOOD_APPLES = ['a8_5', 'a8_6', 'a8_7', 'a8_9', 'a9_4']

export const lute = (scene, poets, goddessLight) => {
  goddessLight.setVisible(false)
  if (scene.storage.state.chapter !== 4) {
    return poets.destroy()
  }
  const state = scene.storage.state.event.m4_4
  poets.setDisplayName(t('chara.lyla'))
  if (state.completed) {
    poets.image.anims.play('poets_lute', true)
  } else if (!scene.storage.state.event.m4_3.completed) {
    poets.image.setFrame(2)
  }
  poets.setTapEvent(async chara => {
    if (state.completed) {
      chara.tweet('♪')
      await scene.ui.sleep(1000)
    } else if (state.apples.length >= APPLES_COUNT) {
      const completedGoodApples = state.apples.count(v => GOOD_APPLES.includes(v)) >= APPLES_COUNT
      await scene.talk([
        { chara: 'ann', text: t('lute.solve1.0') },
        { chara, text: t('lute.solve1.1') }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: completedGoodApples ? t('lute.answer.0.0') : t('lute.answer.1.0') },
        { chara, text: completedGoodApples ? t('lute.answer.0.1') : t('lute.answer.1.1') }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: t('lute.solve2.0') },
        { chara, text: t('lute.solve2.1') },
        { chara: 'ann', text: t('lute.solve2.2') },
        { chara, text: t('lute.solve2.3') },
        { chara, text: t('lute.solve2.4') },
        { chara: 'ann', text: t('lute.solve2.5') },
        { chara, text: t('lute.solve2.6') }
      ])
      poets.image.anims.play('poets_lute', true)
      await scene.ui.sleep(3300)
      goddessLight.setVisible(true).setAlpha(0)
      scene.add.tween({
        targets: goddessLight, duration: 1200, yoyo: true, alpha: 1, loop: 3
      })
      await scene.ui.sleep(7200)
      goddessLight.setVisible(false)
      await scene.ui.sleep(2000)
      poets.image.anims.stop()
      poets.image.setFrame(1)
      await scene.talk([
        { chara, text: t('lute.solve3.0') },
        { chara: 'ann', text: t('lute.solve3.1') },
        { chara: 'ann', text: t('lute.solve3.2') },
        { chara, text: t('lute.solve3.3') },
        { chara, text: t('lute.solve3.4') },
        { chara: 'ann', text: t('lute.solve3.5') },
        { chara, text: t('lute.solve3.6') },
        { chara, text: t('lute.solve3.7') },
        { chara, text: t('lute.solve3.8') },
        { chara: 'ann', text: t('lute.solve3.9') },
        ...(completedGoodApples ? [
          { chara, text: t('lute.solve3.10') },
          { chara, text: t('lute.solve3.11') },
          { chara, text: t('lute.solve3.12') },
          { chara: 'ann', text: t('lute.solve3.13') }
        ] : []),
        { chara, text: t('lute.solve3.14') },
        { chara, text: t('lute.solve3.15') },
        { chara: 'ann', text: t('lute.solve3.16') }
      ])
      poets.image.anims.play('poets_lute', true)
      state.completed = true
      scene.ui.missionUpdate('m4_4', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('lute.started.0') },
        { chara, text: t('lute.started.1') }
      ])
    } else if (scene.storage.state.event.m4_3.completed) {
      await scene.talk([
        { chara, text: t('lute.start.0') },
        { chara, text: t('lute.start.1') },
        { chara, text: t('lute.start.2') },
        { chara: 'ann', text: t('lute.start.3') },
        { chara: 'ann', text: t('lute.start.4') },
        { chara, text: t('lute.start.5') },
        { chara, text: t('lute.start.6') },
        { chara: 'ann', text: t('lute.start.7') },
        { chara: 'ann', text: t('lute.start.8') },
        { chara, text: t('lute.start.9') },
        { chara, text: t('lute.start.10') },
        { chara: 'ann', text: t('lute.start.11') },
        { chara, text: t('lute.start.12') },
        { chara, text: t('lute.start.13') },
        { chara: 'ann', text: t('lute.start.14') },
        { chara, text: t('lute.start.15') },
        { chara: 'ann', text: t('lute.start.16') },
        { chara: 'ann', text: t('lute.start.17') },
        { chara, text: t('lute.start.18') },
        { chara: 'ann', text: t('lute.start.19') },
        { chara, text: t('lute.start.20') },
        { chara: 'ann', text: t('lute.start.21') },
        { chara: 'ann', text: t('lute.start.22') },
        { chara, text: t('lute.start.23') },
        { chara: 'ann', text: t('lute.start.24') },
        { chara: 'ann', text: t('lute.start.25') },
        { chara: 'ann', text: t('lute.start.26') },
        { chara, text: t('lute.start.27') },
        { chara, text: t('lute.start.28') },
        { chara, text: t('lute.start.29') },
        { chara: 'ann', text: t('lute.start.30') }
      ])
      state.started = true
      scene.ui.missionUpdate('m4_4')
    } else {
      await scene.talk([
        { chara: 'ann', text: t('lute.unavailable.0') }
      ])
      await scene.ui.sleep(700)
      await scene.talk([
        { chara: 'ann', text: t('lute.unavailable.1') }
      ])
    }
  })
}

export const appleCollection = (scene, apple, appleName) => {
  const state = scene.storage.state.event.m4_4
  const good = GOOD_APPLES.includes(appleName)
  apple.image.setFrame(good ? 0 : 1)
  if (state.apples.includes(appleName)) return apple.destroy()
  if (!state.started || state.completed) return
  apple.setTapEvent(async () => {
    const i = await scene.select([t('lute.option.0'), t('lute.option.1')])
    if (i === 1) return
    state.apples.push(appleName)
    scene.ui.announce(t('lute.apple'))
    apple.destroy()
    if (state.apples.length === APPLES_COUNT) {
      scene.tweetOnce(scene.francisca, t('lute.tweet'), 'apl')
    }
  })
}
