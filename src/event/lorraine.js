export const architect = (scene, chara) => {
  const state = scene.storage.state.event.m4_1
  if (state.completed && scene.storage.state.chapter !== 4) {
    return chara.destroy()
  }
  chara.setDisplayName(t('chara.klaus'))
  chara.setTapEvent(async () => {
    if (state.completed) {
      await scene.talk([
        { chara, text: t('lorraine.solved.0') },
        { chara, text: t('lorraine.solved.1') }
      ])
    } else if (state.started) {
      await scene.talk([
        { chara, text: t('lorraine.started.0') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('lorraine.start1.0') },
        { chara, text: t('lorraine.start1.1') },
        { chara: 'ann', text: t('lorraine.start1.2') },
        { chara, text: t('lorraine.start1.3') },
        { chara, text: t('lorraine.start1.4') },
        { chara: 'ann', text: t('lorraine.start1.5') },
        { chara, text: t('lorraine.start1.6') },
        { chara, text: t('lorraine.start1.7') },
        { chara, text: t('lorraine.start1.8') },
        { chara, text: t('lorraine.start1.9') },
        { chara: 'ann', text: t('lorraine.start1.10') },
        { chara, text: t('lorraine.start1.11') },
        { chara, text: t('lorraine.start1.12') },
        { chara, text: t('lorraine.start1.13') },
        { chara, text: t('lorraine.start1.14') },
        { chara: 'ann', text: t('lorraine.start1.15') },
        { chara, text: t('lorraine.start1.16') },
        { chara, text: t('lorraine.start1.17') },
        { chara, text: t('lorraine.start1.18') },
        { chara: 'ann', text: t('lorraine.start1.19') },
        { chara, text: t('lorraine.start1.20') }
      ])
      const next = async () => {
        chara.setTalking(true)
        const i = await scene.select([t('lorraine.option.0'), t('lorraine.option.1')])
        if (i === 0) {
          await scene.camera.look((25).toPixelCenter, (22).toPixelCenter, 600)
          await scene.ui.sleep(1000)
          await scene.talk([
            { chara: 'ann', text: t('lorraine.start2.0') },
            { chara, text: t('lorraine.start2.1') },
            { chara, text: t('lorraine.start2.2') },
            { chara, text: t('lorraine.start2.3') },
            { chara, text: t('lorraine.start2.4') },
            { chara, text: t('lorraine.start2.5') },
            { chara, text: t('lorraine.start2.6') },
            { chara: 'ann', text: t('lorraine.start2.7') },
            { chara, text: t('lorraine.start2.8') }
          ])
          await scene.camera.revert(600)
          await next()
        } else {
          await scene.talk([
            { chara: 'ann', text: t('lorraine.start3.0') },
            { chara, text: t('lorraine.start3.1') },
            { chara, text: t('lorraine.start3.2') },
            { chara, text: t('lorraine.start3.3') },
            { chara: 'ann', text: t('lorraine.start3.4') },
            { chara, text: t('lorraine.start3.5') },
            { chara, text: t('lorraine.start3.6') },
            { chara: 'ann', text: t('lorraine.start3.7') },
            { chara: 'ann', text: t('lorraine.start3.8') },
            { chara: 'ann', text: t('lorraine.start3.9') },
            { chara, text: t('lorraine.start3.10') },
            { chara, text: t('lorraine.start3.11') },
            { chara, text: t('lorraine.start3.12') },
            { chara: 'ann', text: t('lorraine.start3.13') },
            { chara, text: t('lorraine.start3.14') },
            { chara, text: t('lorraine.start3.15') }
          ])
          scene.ui.announce(t('gotItem', t('lorraine.item')))
          await scene.talk([
            { chara: 'ann', text: t('lorraine.start3.16') },
            { chara, text: t('lorraine.start3.17') },
            { chara, text: t('lorraine.start3.18') },
            { chara: 'ann', text: t('lorraine.start3.19') }
          ])
          scene.ui.missionUpdate('m4_1')
          state.started = true
        }
      }
      await next()
    }
  })
}

class LorraineGimmick {
  constructor () {
    this.keys = [false, true, true, false]
    this.buttons = [
      { state: false, affects: [0, 2] },
      { state: false, affects: [1, 2] },
      { state: false, affects: [2, 3] }
    ]
  }
  push (buttonIndex) {
    this.buttons[buttonIndex].affects.forEach(i => this.keys[i] = !this.keys[i])
    return this.keys
  }
  get unlocked () {
    return this.keys.every(Boolean)
  }
}

export const gimmick = (scene, buttons, doorContainer, doors, lights, area) => {
  const state = scene.storage.state.event.m4_1
  const removeCollidesForDoor = () => {
    const layer3 = scene.map.getLayerByName('layer3')
    const positions = [[17, 2], [18, 2], [19, 2]]
    positions.forEach(pos => {
      layer3.layer.data[pos[1]][pos[0]].setCollision(false)
    })
  }
  if (state.completed) {
    doorContainer.destroy()
    removeCollidesForDoor()
    return
  }
  const lorraineGimmick = new LorraineGimmick()
  const applyToPicutres = () => lights.forEach((pic, i) => pic.setVisible(lorraineGimmick.keys[i]))
  applyToPicutres()
  if (!state.started) return
  area.setEvent(async () => {
    area.destroy()
    await scene.jaquelyn.tweet(t('lorraine.tweet.0'))
    if (lorraineGimmick.unlocked) return
    await scene.francisca.tweet(t('lorraine.tweet.1'))
    if (lorraineGimmick.unlocked) return
    await scene.jaquelyn.tweet(t('lorraine.tweet.2'))
  }, false)
  buttons.forEach((button, i) => {
    button.setTapEvent(async () => {
      lorraineGimmick.push(i)
      applyToPicutres()
      if (lorraineGimmick.unlocked) {
        state.completed = true
        buttons.forEach(b => b.removeTapEvent())
        await scene.ui.sleep(500)
        await scene.camera.look((18).toPixelCenter, (1).toPixelCenter, 500)
        const left = [doors[0], lights[0], lights[2]]
        const right = [doors[1], lights[1], lights[3]]
        left.forEach(v => {
          scene.add.tween({ targets: v, duration: 2000, x: v.x - 48, ease: 'Power2' })
        })
        right.forEach(v => {
          scene.add.tween({ targets: v, duration: 2000, x: v.x + 48, ease: 'Power2' })
        })
        removeCollidesForDoor()
        await scene.ui.sleep(2000)
        scene.player.tweet(t('lorraine.tweet.3'))
        scene.ui.missionUpdate('m4_1', true)
        state.completed = true
        await scene.camera.revert(500)
      }
    })
  })
}
