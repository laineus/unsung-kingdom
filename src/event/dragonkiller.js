import generateBattler from '../util/generateBattler'
const scriptsForSoldiers = [
  [t('dragonKiller.soldier.0')],
  [t('dragonKiller.soldier.1')],
  [t('dragonKiller.soldier.2')]
]

export const ethelbald = (scene, ethel, soldiers, gate) => {
  const state = scene.storage.state.event.m4_5
  if (!state.started) {
    gate.setBlocked(async () => {
      await scene.talk([
        { chara: 'francisca', text: t('dragonKiller.block.0') }
      ])
    })
  }
  soldiers.forEach((v, i) => {
    if (state.completed) return v.destroy()
    v.setDisplayName(t('chara.injuredSoldier')).setTapEvent(async chara => {
      await scene.talk(scriptsForSoldiers[i].map(text => ({ chara, text })))
    })
  })
  if (state.completed) {
    return ethel.destroy()
  }
  ethel.setDisplayName(t('chara.ethel')).setTapEvent(async chara => {
    if (state.started) {
      await scene.talk([
        { chara: 'ann', text: t('dragonKiller.started.0') },
        { chara, text: t('dragonKiller.started.1') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('dragonKiller.start.0') },
        { chara, text: t('dragonKiller.start.1') },
        { chara: 'ann', text: t('dragonKiller.start.2') },
        { chara, text: t('dragonKiller.start.3') },
        { chara, text: t('dragonKiller.start.4') },
        { chara, text: t('dragonKiller.start.5') },
        { chara: 'ann', text: t('dragonKiller.start.6') },
        { chara: 'ann', text: t('dragonKiller.start.7') },
        { chara, text: t('dragonKiller.start.8') },
        { chara, text: t('dragonKiller.start.9') },
        { chara: 'ann', text: t('dragonKiller.start.10') },
        { chara, text: t('dragonKiller.start.11') },
        { chara, text: t('dragonKiller.start.12') },
        { chara, text: t('dragonKiller.start.13') },
        { chara, text: t('dragonKiller.start.14') }
      ])
      scene.ui.missionUpdate('m4_5')
      state.started = true
      gate.setBlocked(false)
    }
  })
}

export const gateConfirm = (scene, gate) => {
  const state = scene.storage.state.event.m4_5
  if (state.area1) return
  gate.setBlocked(async go => {
    await scene.talk([
      { chara: 'francisca', text: t('dragonKiller.confirm.0') }
    ])
    const i = await scene.select([t('dragonKiller.confirmOption.0'), t('dragonKiller.confirmOption.1')])
    if (i === 1) return
    go()
  })
}

export const dragon = (scene, sonberk, king, area1, area2, area3) => {
  const state = scene.storage.state.event.m4_5
  if (state.area1) {
    area1.destroy()
  }
  if (state.area2) {
    king.y += (3).toPixel
    area2.destroy()
  }
  if (state.completed) {
    return [sonberk, king, area3].forEach(v => v.destroy())
  }
  king.setDisplayName(t('chara.king'))
  sonberk.setDisplayName(t('chara.sonberk'))
  area1.setEvent(async () => {
    scene.player.tweet('！')
    await scene.ui.sleep(800)
    await scene.camera.look((16).toPixelCenter, (9).toPixelCenter, 800)
    await scene.talk([
      { chara: sonberk, text: t('dragonKiller.king1.0') },
      { chara: sonberk, text: t('dragonKiller.king1.1') },
      { chara: sonberk, text: t('dragonKiller.king1.2') },
      { chara: king, text: t('dragonKiller.king1.3') },
      { chara: king, text: t('dragonKiller.king1.4') },
      { chara: king, text: t('dragonKiller.king1.5') },
      { chara: sonberk, text: t('dragonKiller.king1.6') },
      { chara: sonberk, text: t('dragonKiller.king1.7') },
      { chara: sonberk, text: t('dragonKiller.king1.8') },
      { chara: sonberk, text: t('dragonKiller.king1.9') },
      { chara: sonberk, text: t('dragonKiller.king1.10') },
      { chara: king, text: t('dragonKiller.king1.11') },
      { chara: king, text: t('dragonKiller.king1.12') },
      { chara: king, text: t('dragonKiller.king1.13') }
    ], { angle: false })
    await scene.camera.revert(600)
    state.area1 = true
    area1.destroy()
  })
  area2.setEvent(async () => {
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xCC2200)
    red.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red,
      duration: 700,
      ease: 'Power2',
      alpha: 1,
      yoyo: true,
      onComplete () {
        red.destroy()
      }
    })
    await new Promise(resolve => scene.camera.shake(1000, 0.03, undefined, resolve))
    await scene.talk([
      { chara: king, text: t('dragonKiller.king2.0') },
      { chara: 'ann', text: t('dragonKiller.king2.1') },
      { chara: 'ann', text: t('dragonKiller.king2.2') }
    ], { angle: false })
    king.y += (3).toPixel
    king.initImage('king2')
    state.area2 = true
    area2.destroy()
  })
  area3.setEvent(async () => {
    const chara = sonberk
    scene.jaquelyn.setAllowWalkingWhileEvent(true).setTargetPosition((16).toPixelCenter, (16).toPixelCenter)
    scene.francisca.setAllowWalkingWhileEvent(true).setTargetPosition((18).toPixelCenter, (16).toPixelCenter)
    await scene.player.setTargetPosition((17).toPixelCenter, (15).toPixel)
    scene.player.setR('left')
    await scene.talk([
      { chara: king, text: t('dragonKiller.king2.3') },
      { chara: 'ann', text: t('dragonKiller.king2.4') }
    ], { angle: false })
    await scene.camera.look((16).toPixelCenter, (9).toPixelCenter, 400)
    scene.jaquelyn.setTargetPosition((16).toPixelCenter, (13).toPixelCenter)
    scene.francisca.setTargetPosition((18).toPixelCenter, (13).toPixelCenter)
    await scene.player.setTargetPosition((17).toPixelCenter, (12).toPixelCenter)
    await scene.talk([
      { chara: 'ann', text: t('dragonKiller.sonberk.0') },
      { chara, text: t('dragonKiller.sonberk.1') },
      { chara, text: t('dragonKiller.sonberk.2') },
      { chara: 'ann', text: t('dragonKiller.sonberk.3') },
      { chara, text: t('dragonKiller.sonberk.4') },
      { chara, text: t('dragonKiller.sonberk.5') },
      { chara: 'ann', text: t('dragonKiller.sonberk.6') },
      { chara, text: t('dragonKiller.sonberk.7') },
      { chara: 'ann', text: t('dragonKiller.sonberk.8') },
      { chara: 'ann', text: t('dragonKiller.sonberk.9') },
      { chara, text: t('dragonKiller.sonberk.10') },
      { chara, text: t('dragonKiller.sonberk.11') },
      { chara, text: t('dragonKiller.sonberk.12') },
      { chara, text: t('dragonKiller.sonberk.13') },
      { chara, text: t('dragonKiller.sonberk.14') },
      { chara, text: t('dragonKiller.sonberk.15') },
      { chara, text: t('dragonKiller.sonberk.16') }
    ])
    await scene.player.setTargetPosition((17).toPixel, (11).toPixel)
    const result = await scene.ui.battle([generateBattler('dragon', 48, { hp: 2500 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('sonberk')
    scene.francisca.setAllowWalkingWhileEvent(false).stopWalk().setPosition(scene.player.x + 40, scene.player.y + 27).setR('up')
    scene.jaquelyn.setAllowWalkingWhileEvent(false).stopWalk().setPosition(scene.player.x + 20, scene.player.y + 70).setR('up')
    await scene.ui.sleep(200)
    const red = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0xCC8844)
    red.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
    scene.add.tween({
      targets: red, duration: 1200, ease: 'Power2', alpha: 1, yoyo: true,
      onComplete () {
        red.destroy()
      }
    })
    scene.camera.shake(2000, 0.03)
    await scene.ui.sleep(1800)
    await sonberk.die()
    await scene.ui.sleep(300)
    await scene.camera.look(0, (3).toPixelCenter, 400, true)
    await scene.talk([
      { chara: 'ann', text: t('dragonKiller.solve.0') },
      { chara: 'jaquelyn', text: t('dragonKiller.solve.1') },
      { chara: 'francisca', text: t('dragonKiller.solve.2') }
    ])
    scene.player.setR('down')
    scene.francisca.setR('left')
    await scene.talk([
      { chara: 'ann', text: t('dragonKiller.solve.3') },
      { chara: 'jaquelyn', text: t('dragonKiller.solve.4') },
      { chara: 'francisca', text: t('dragonKiller.solve.5') },
      { chara: 'ann', text: t('dragonKiller.solve.6') }
    ])
    scene.ui.missionUpdate('m4_5', true)
    state.completed = true
    await scene.ui.sleep(800)
    scene.storage.state.chapter = 5
    await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
  })
}
