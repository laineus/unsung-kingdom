export const peaceful = (scene, area1, area2, soldier1, soldier2, jack) => {
  jack.setVisible(false).setDisplayName(t('chara.jack'))
  soldier1.setDisplayName(t('chara.guard')).setR('right')
  soldier2.setDisplayName(t('chara.guard')).setR('left')
  const state = scene.storage.state.event.m5_1
  const afterSawSoldiers = () => {
    jack.setVisible(true)
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    area1.setActive(true)
    area2.setActive(false)
  }
  area2.setEvent(async () => {
    await scene.camera.look((16).toPixel, (15).toPixel, 800)
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: soldier1, text: t('peaceful.soldier.0') },
      { chara: soldier1, text: t('peaceful.soldier.1') },
      { chara: soldier2, text: t('peaceful.soldier.2') }
    ], { angle: false })
    await scene.ui.sleep(500)
    await scene.ui.transition('normal')
    await scene.camera.revert(0)
    scene.setMembersPosition((26).toPixelCenter, (20).toPixelCenter, 'right')
    state.soldiers = true
    afterSawSoldiers()
  })
  area1.setEvent(async () => {
    scene.player.tweet('！')
    await scene.ui.sleep(400)
    await scene.camera.look(jack.x - 70, jack.y, 800)
    await scene.ui.sleep(1000)
    await scene.ui.transition('normal')
    scene.setMembersPosition((48).toPixelCenter, (19).toPixelCenter, 'right')
    scene.francisca.setPosition((47).toPixelCenter, (18).toPixelCenter)
    scene.jaquelyn.setPosition((47).toPixelCenter, (20).toPixelCenter)
    scene.camera.look(jack.x - 70, jack.y, 0)
    await scene.ui.sleep(1500)
    jack.setFaceKey('jack2')
    const chara = jack
    await scene.talk([
      { chara, text: t('peaceful.talk1.0') },
      { chara: 'ann', text: t('peaceful.talk1.1') },
      { chara, text: t('peaceful.talk1.2') },
      { chara: 'ann', text: t('peaceful.talk1.3') },
      { chara: 'ann', text: t('peaceful.talk1.4') },
      { chara, text: t('peaceful.talk1.5') },
      { chara, text: t('peaceful.talk1.6') }
    ])
    await scene.ui.sleep(500)
    await scene.ui.transition('fast')
    jack.initImage('kingbrother').setFaceKey('kingbrother3').setDisplayName(t('chara.ethel'))
    await scene.ui.sleep(500)
    const tk = await scene.talk([
      { chara, text: t('peaceful.talk2.0') },
      { chara: 'ann', text: t('peaceful.talk2.1') },
      { chara, text: t('peaceful.talk2.2') },
      { chara, text: t('peaceful.talk2.3') },
      { chara: 'ann', text: t('peaceful.talk2.4') },
      { chara: 'ann', text: t('peaceful.talk2.5') },
      { chara, text: t('peaceful.talk2.6') },
      { chara, text: t('peaceful.talk2.7') },
      { chara, text: t('peaceful.talk2.8') },
      { chara, text: t('peaceful.talk2.9') },
      null
    ])
    const i = await scene.select([t('peaceful.question.0'), t('peaceful.question.1')])
    tk.destroy()
    await scene.talk([
      ...(i === 0 ? [{ chara, text: t('peaceful.talk3.0') }] : []),
      { chara, text: t('peaceful.talk3.1') },
      { chara, text: t('peaceful.talk3.2') },
      { chara, text: t('peaceful.talk3.3') },
      { chara, text: t('peaceful.talk3.4') },
      { chara, text: t('peaceful.talk3.5') },
      { chara, text: t('peaceful.talk3.6') },
      { chara, text: t('peaceful.talk3.7') },
      { chara, text: t('peaceful.talk3.8') },
      { chara, text: t('peaceful.talk3.9') },
      { chara, text: t('peaceful.talk3.10') },
      { chara, text: t('peaceful.talk3.11') },
      { chara: 'ann', text: t('peaceful.talk3.12') },
      { chara, text: t('peaceful.talk3.13') },
      { chara, text: t('peaceful.talk3.14') },
      { chara, text: t('peaceful.talk3.15') },
      { chara, text: t('peaceful.talk3.16') },
      { chara: 'ann', text: t('peaceful.talk3.17') },
      { chara, text: t('peaceful.talk3.18') },
      { chara, text: t('peaceful.talk3.19') },
      { chara, text: t('peaceful.talk3.20') },
      { chara, text: t('peaceful.talk3.21') },
      { chara, text: t('peaceful.talk3.22') },
      { chara, text: t('peaceful.talk3.23') },
      { chara: 'ann', text: t('peaceful.talk3.24') },
      { chara: 'ann', text: t('peaceful.talk3.25') },
      { chara: 'ann', text: t('peaceful.talk3.26') },
      { chara: 'ann', text: t('peaceful.talk3.27') },
      { chara, text: t('peaceful.talk3.28') },
      { chara, text: t('peaceful.talk3.29') },
      { chara: 'ann', text: t('peaceful.talk3.30') },
      { chara: 'ann', text: t('peaceful.talk3.31') },
      { chara, text: t('peaceful.talk3.32') },
      { chara, text: t('peaceful.talk3.33') },
      { chara, text: t('peaceful.talk3.34') },
      { chara: 'ann', text: t('peaceful.talk3.35') },
      { chara, text: t('peaceful.talk3.36') },
      { chara, text: t('peaceful.talk3.37') },
      { chara, text: t('peaceful.talk3.38') },
      { chara, text: t('peaceful.talk3.39') },
      { chara: 'ann', text: t('peaceful.talk3.40') },
      { chara: 'ann', text: t('peaceful.talk3.41') },
      { chara, text: t('peaceful.talk3.42') },
      { chara, text: t('peaceful.talk3.43') },
      { chara, text: t('peaceful.talk3.44') },
      { chara, text: t('peaceful.talk3.45') },
      { chara, text: t('peaceful.talk3.46') },
      { chara: 'ann', text: t('peaceful.talk3.47') },
      { chara, text: t('peaceful.talk3.48') },
      { chara, text: t('peaceful.talk3.49') },
      { chara, text: t('peaceful.talk3.50') },
      { chara, text: t('peaceful.talk3.51') },
      { chara, text: t('peaceful.talk3.52') }
    ])
    await scene.ui.announce(t('gotItem', t('peaceful.item')))
    await scene.talk([
      { chara: 'ann', text: t('peaceful.talk4.0') },
      { chara: 'ann', text: t('peaceful.talk4.1') },
      { chara: 'ann', text: t('peaceful.talk4.2') },
      { chara: 'ann', text: t('peaceful.talk4.3') },
      { chara: 'ann', text: t('peaceful.talk4.4') },
      { chara: 'ann', text: t('peaceful.talk4.5') },
      { chara: 'ann', text: t('peaceful.talk4.6') },
      { chara: 'ann', text: t('peaceful.talk4.7') },
      { chara: 'ann', text: t('peaceful.talk4.8') },
      { chara: 'ann', text: t('peaceful.talk4.9') },
      { chara: 'ann', text: t('peaceful.talk4.10') },
      { chara, text: t('peaceful.talk4.11') },
      { chara, text: t('peaceful.talk4.12') },
      { chara, text: t('peaceful.talk4.13') },
      { chara: 'ann', text: t('peaceful.talk4.14') },
      { chara: 'ann', text: t('peaceful.talk4.15') },
      { chara: 'ann', text: t('peaceful.talk4.16') }
    ])
    await scene.ui.sleep(500)
    window.archiveManager.activate('saved_kingdom')
    await scene.ui.missionUpdate('m5_1', true)
    await scene.ui.sleep(1000)
    await scene.ui.transition('slow')
    scene.members.forEach(v => v.setVisible(false))
    jack.initImage('jack').setFaceKey('jack2')
    soldier1.setPosition((33).toPixelCenter, (19).toPixelCenter).setVisible(true)
    await soldier2.setPosition((32).toPixelCenter, (20).toPixelCenter).setVisible(true)
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara, text: t('peaceful.end1.0') },
      { chara, text: t('peaceful.end1.1') },
      { chara, text: t('peaceful.end1.2') },
      { chara, text: t('peaceful.end1.3') }
    ], { angle: false })
    await scene.ui.sleep(1500)
    soldier1.setSpeed(180).setTargetPosition(soldier1.x + 200, soldier1.y)
    await soldier2.setSpeed(180).setTargetPosition(soldier2.x + 200, soldier2.y)
    await scene.talk([
      { chara: soldier1, text: t('peaceful.end2.0') },
      { chara: soldier1, text: t('peaceful.end2.1') },
      { chara: soldier2, text: t('peaceful.end2.2') },
      { chara, text: t('peaceful.end2.3') }
    ], { angle: false })
    await scene.ui.sleep(800)
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xEE2200).setAlpha(0).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red, duration: 400, ease: 'Power2', alpha: 0.6, yoyo: true,
      onComplete () { jack.initImage('jack2') }
    })
    await scene.ui.sleep(2500)
    await scene.talk([
      { chara, text: t('peaceful.end3.0') },
      { chara, text: t('peaceful.end3.1') }
    ], { angle: false })
    await scene.ui.sleep(2000)
    await scene.ui.credit()
    scene.scene.start('Title')
  }).setActive(false)
  if (state.soldiers) afterSawSoldiers()
}
