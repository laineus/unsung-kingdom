import generateBattler from '../util/generateBattler'
import Talker from '../class/Talker'
export const jack = (scene, jack, area) => {
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.jack) {
    jack.destroy()
    area.destroy()
    return
  }
  const chara = jack.setDisplayName(t('chara.jack'))
  area.setEvent(async () => {
    await jack.setSpeed(140).setTargetPosition(jack.x, jack.y + (9).toPixel)
    await scene.talk([
      { chara: 'ann', text: t('aragnie.jack.0') },
      { chara, text: t('aragnie.jack.1') },
      { chara, text: t('aragnie.jack.2') },
      { chara: 'ann', text: t('aragnie.jack.3') },
      { chara: 'ann', text: t('aragnie.jack.4') },
      { chara, text: t('aragnie.jack.5') },
      { chara, text: t('aragnie.jack.6') },
      { chara, text: t('aragnie.jack.7') },
      { chara: 'ann', text: t('aragnie.jack.8') }
    ])
    state.jack = true
    await scene.ui.transition('normal')
    jack.destroy()
    area.destroy()
    await scene.ui.sleep(1500)
    await scene.talk([
      { chara: 'ann', text: t('aragnie.jack.9') },
      { chara: 'jaquelyn', text: t('aragnie.jack.10') },
      { chara: 'ann', text: t('aragnie.jack.11') },
      { chara: 'ann', text: t('aragnie.jack.12') }
    ])
  })
}

export const hector = (scene, hector, mary, loretta) => {
  mary.setDisplayName(t('chara.mary')).setVisible(false)
  loretta.setDisplayName(t('chara.loretta')).setVisible(false)
  const charas = [hector, mary, loretta]
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.started) {
    charas.forEach(c => c.destroy())
    return
  }
  hector.setDisplayName(t('chara.hector')).setTapEvent(async chara => {
    await scene.ui.transition('fast')
    scene.setMembersPosition((16).toPixelCenter, (11).toPixel, 'up')
    await scene.ui.sleep(300)
    if (!state.talked) {
      await scene.talk([
        { chara, text: t('aragnie.hector1.0') },
        { chara: 'ann', text: t('aragnie.hector1.1') },
        { chara, text: t('aragnie.hector1.2') },
        { chara: 'ann', text: t('aragnie.hector1.3') },
        { chara: 'ann', text: t('aragnie.hector1.4') },
        { chara, text: t('aragnie.hector1.5') },
        { chara, text: t('aragnie.hector1.6') },
        { chara, text: t('aragnie.hector1.7') },
        { chara: 'ann', text: t('aragnie.hector1.8') },
        { chara: 'ann', text: t('aragnie.hector1.9') },
        { chara, text: t('aragnie.hector1.10') },
        { chara, text: t('aragnie.hector1.11') },
        { chara: 'ann', text: t('aragnie.hector1.12') },
        { chara, text: t('aragnie.hector1.13') },
        { chara, text: t('aragnie.hector1.14') },
        { chara, text: t('aragnie.hector1.15') },
        { chara, text: t('aragnie.hector1.16') },
        { chara, text: t('aragnie.hector1.17') },
        { chara: 'ann', text: t('aragnie.hector1.18') },
        { chara, text: t('aragnie.hector1.19') },
        { chara, text: t('aragnie.hector1.20') },
        { chara, text: t('aragnie.hector1.21') },
        { chara, text: t('aragnie.hector1.22') },
        { chara, text: t('aragnie.hector1.23') },
        { chara, text: t('aragnie.hector1.24') },
        { chara, text: t('aragnie.hector1.25') },
        { chara: 'ann', text: t('aragnie.hector1.26') },
        { chara: 'ann', text: t('aragnie.hector1.27') },
        { chara, text: t('aragnie.hector1.28') },
        { chara, text: t('aragnie.hector1.29') },
        { chara, text: t('aragnie.hector1.30') },
        { chara, text: t('aragnie.hector1.31') },
        { chara, text: t('aragnie.hector1.32') },
        { chara, text: t('aragnie.hector1.33') },
        { chara: 'ann', text: t('aragnie.hector1.34') },
        { chara: 'ann', text: t('aragnie.hector1.35') },
        { chara, text: t('aragnie.hector1.36') },
        { chara, text: t('aragnie.hector1.37') },
        { chara: 'ann', text: t('aragnie.hector1.38') },
        { chara, text: t('aragnie.hector1.39') },
        { chara, text: t('aragnie.hector1.40') }
      ])
      state.talked = true
    } else {
      await scene.talk([
        { chara: 'ann', text: t('aragnie.hector1.38') },
        { chara, text: t('aragnie.hector1.39') },
        { chara, text: t('aragnie.hector1.40') }
      ])
    }
    if (scene.storage.state.event.m2_2.completed) {
      mary.setSpeed(180).setVisible(true)
      loretta.setSpeed(180).setVisible(true)
      await scene.talk([
        { chara: mary, text: t('aragnie.hector2.0') }
      ])
      await Promise.all([
        mary.setTargetPosition(mary.x, mary.y - (8).toPixel),
        loretta.setTargetPosition(loretta.x, loretta.y - (8).toPixel)
      ])
      await scene.talk([
        { chara: mary, text: t('aragnie.hector2.1') },
        { chara, text: t('aragnie.hector2.2') },
        { chara, text: t('aragnie.hector2.3') },
        { chara: loretta, text: t('aragnie.hector2.4') },
        { chara: mary, text: t('aragnie.hector2.5') },
        { chara: mary, text: t('aragnie.hector2.6') },
        { chara: mary, text: t('aragnie.hector2.7') },
        { chara, text: t('aragnie.hector2.8') },
        { chara: mary, text: t('aragnie.hector2.9') },
        { chara, text: t('aragnie.hector2.10') },
        { chara: mary, text: t('aragnie.hector2.11') },
        { chara, text: t('aragnie.hector2.12') },
        { chara: mary, text: t('aragnie.hector2.13') },
        { chara: mary, text: t('aragnie.hector2.14') },
        { chara, text: t('aragnie.hector2.15') },
        { chara: loretta, text: t('aragnie.hector2.16') },
        { chara: loretta, text: t('aragnie.hector2.17') },
        { chara: 'ann', text: t('aragnie.hector2.18') },
        { chara, text: t('aragnie.hector2.19') },
        { chara: loretta, text: t('aragnie.hector2.20') },
        { chara: loretta, text: t('aragnie.hector2.21') },
        { chara: mary, text: t('aragnie.hector2.22') },
        { chara: mary, text: t('aragnie.hector2.23') },
        { chara: 'ann', text: t('aragnie.hector2.24') },
        { chara: loretta, text: t('aragnie.hector2.25') },
        { chara: loretta, text: t('aragnie.hector2.26') },
        { chara: 'ann', text: t('aragnie.hector2.27') },
        { chara, text: t('aragnie.hector2.28') },
        { chara: mary, text: t('aragnie.hector2.29') },
        { chara, text: t('aragnie.hector2.30') },
        { chara, text: t('aragnie.hector2.31') },
        { chara, text: t('aragnie.hector2.32') },
        { chara, text: t('aragnie.hector2.33') }
      ], { angle: false })
      charas.forEach(c => c.setSpeed(100).setTargetPosition(scene.player.x, scene.player.y))
      await scene.ui.transition('normal')
      charas.forEach(c => c.destroy())
      state.started = true
      scene.ui.missionUpdate('m2_4')
    }
  })
}

export const lamp = (scene, cassandra, hector, mary, loretta, jail, wall, yarn) => {
  cassandra.setDisplayName(t('chara.cassandra'))
  hector.setDisplayName(t('chara.hector'))
  mary.setDisplayName(t('chara.mary'))
  loretta.setDisplayName(t('chara.loretta'))
  const state = scene.storage.state.event.m2_4
  wall.setTapEvent(async () => {
    const i = await scene.select([t('aragnie.lamp.0'), t('aragnie.lamp.1')])
    if (i === 1) return
    scene.mapChange('underpass10', (15).toPixelCenter, (52).toPixelCenter)
  }).setVisible(state.search)
  yarn.setVisible(false)
  const setCharaVisible = bool => [hector, mary, loretta].forEach(v => v.setVisible(bool))
  setCharaVisible(false)
  if (!state.started) return
  if (state.solved) {
    jail.destroy()
  }
  if (state.completed) {
    cassandra.destroy()
    return
  }
  if (state.search && !state.solved) setLamp(scene, scene.player, yarn)
  cassandra.setTapEvent(async () => {
    if (state.solved) {
      await scene.ui.transition('normal')
      scene.setMembersPosition((45).toPixelCenter, (16).toPixel, 'up')
      setCharaVisible(true)
      await scene.camera.look(cassandra.x, cassandra.y + 70, 1000)
      await scene.talk([
        { chara: loretta, text: t('aragnie.last1.0') },
        { chara: mary, text: t('aragnie.last1.1') },
        { chara: mary, text: t('aragnie.last1.2') },
        { chara: cassandra, text: t('aragnie.last1.3') },
        { chara: cassandra, text: t('aragnie.last1.4') },
        { chara: mary, text: t('aragnie.last1.5') },
        { chara: cassandra, text: t('aragnie.last1.6') },
        { chara: cassandra, text: t('aragnie.last1.7') },
        { chara: cassandra, text: t('aragnie.last1.8') },
        { chara: cassandra, text: t('aragnie.last1.9') },
        { chara: mary, text: t('aragnie.last1.10') },
        { chara: loretta, text: t('aragnie.last1.11') },
        { chara: loretta, text: t('aragnie.last1.12') },
        { chara: loretta, text: t('aragnie.last1.13') },
        { chara: cassandra, text: t('aragnie.last1.14') },
        { chara: hector, text: t('aragnie.last1.15') },
        { chara: hector, text: t('aragnie.last1.16') },
        { chara: cassandra, text: t('aragnie.last1.17') },
        { chara: cassandra, text: t('aragnie.last1.18') },
        { chara: mary, text: t('aragnie.last1.19') },
        { chara: mary, text: t('aragnie.last1.20') },
        { chara: mary, text: t('aragnie.last1.21') },
        { chara: cassandra, text: t('aragnie.last1.22') }
      ], { angle: false })
      await scene.ui.transition('slow')
      scene.camera.revert()
      cassandra.setVisible(false)
      hector.setVisible(false)
      mary.setR('right')
      loretta.setR('left')
      scene.player.setR('right')
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: loretta, text: t('aragnie.last2.0') },
        { chara: mary, text: t('aragnie.last2.1') },
        { chara: mary, text: t('aragnie.last2.2') },
        { chara: mary, text: t('aragnie.last2.3') },
        { chara: loretta, text: t('aragnie.last2.4') }
      ], { angle: false })
      await scene.ui.transition('slow')
      setCharaVisible(false)
      state.completed = true
      scene.ui.missionUpdate('m2_4', true)
      await scene.talk([
        { chara: 'ann', text: t('aragnie.last3.0') },
        { chara: 'jaquelyn', text: t('aragnie.last3.1') },
        { chara: 'francisca', text: t('aragnie.last3.2') }
      ])
      await scene.ui.sleep(1000)
      scene.storage.state.chapter = 3
      await scene.mapChange('room1', (19).toPixelCenter, (11).toPixel, { speed: 'slow' })
    } else if (state.search) {
      await scene.talk([
        { chara: cassandra, text: t('aragnie.cassandra2') }
      ])
    } else {
      await scene.ui.transition('normal')
      scene.setMembersPosition((45).toPixelCenter, (16).toPixel, 'up')
      setCharaVisible(true)
      await scene.camera.look(cassandra.x, cassandra.y + 70, 1000)
      await scene.talk([
        { chara: hector, text: t('aragnie.cassandra1.0') },
        { chara: cassandra, text: t('aragnie.cassandra1.1') },
        { chara: mary, text: t('aragnie.cassandra1.2') },
        { chara: cassandra, text: t('aragnie.cassandra1.3') },
        { chara: cassandra, text: t('aragnie.cassandra1.4') },
        { chara: mary, text: t('aragnie.cassandra1.5') },
        { chara: cassandra, text: t('aragnie.cassandra1.6') },
        { chara: mary, text: t('aragnie.cassandra1.7') },
        { chara: cassandra, text: t('aragnie.cassandra1.8') },
        { chara: cassandra, text: t('aragnie.cassandra1.9') },
        { chara: cassandra, text: t('aragnie.cassandra1.10') },
        { chara: hector, text: t('aragnie.cassandra1.11') },
        { chara: hector, text: t('aragnie.cassandra1.12') },
        { chara: cassandra, text: t('aragnie.cassandra1.13') },
        { chara: cassandra, text: t('aragnie.cassandra1.14') },
        { chara: hector, text: t('aragnie.cassandra1.15') },
        { chara: cassandra, text: t('aragnie.cassandra1.16') },
        { chara: hector, text: t('aragnie.cassandra1.17') },
        { chara: cassandra, text: t('aragnie.cassandra1.18') },
        { chara: loretta, text: t('aragnie.cassandra1.19') }
      ], { angle: false })
      await scene.ui.transition('normal')
      setCharaVisible(false)
      state.search = true
      wall.setVisible(true)
      setLamp(scene, scene.player, yarn)
      scene.player.setR('right')
      await scene.talk([
        { chara: 'ann', text: t('aragnie.cassandra1.20') },
        { chara: 'ann', text: t('aragnie.cassandra1.21') },
        { chara: 'ann', text: t('aragnie.cassandra1.22') }
      ])
    }
  })
}

export const aragnie = (scene, area, boss, hector, hectorInjured, scream) => {
  const state = scene.storage.state.event.m2_4
  // yarn.setVisible(false)
  if (state.found) {
    hector.destroy()
  }
  if (state.boss) {
    scream.destroy()
  }
  if (!state.search || state.solved) {
    area.destroy()
    boss.destroy()
    hectorInjured.destroy()
    return
  }
  hector.setDisplayName(t('chara.hector'))
  hectorInjured.setFaceKey('hector').setDisplayName(t('chara.hector'))
  if (!state.found) {
    (async () => {
      scene.ui.setEventMode(true)
      scene.player.setR('up')
      hector.tweet('！')
      await scene.ui.sleep(1000)
      await scene.talk([
        { chara: hector, text: t('aragnie.aragnie_hector.0') },
        { chara: hector, text: t('aragnie.aragnie_hector.1') }
      ], { angle: false })
      await hector.setSpeed(300).setTargetPosition((10).toPixel, (33).toPixel)
      hector.destroy()
      scene.player.tweet(t('aragnie.aragnie_hector.2'))
      scene.ui.setEventMode(false)
      state.found = true
    })()
  }
  if (!state.boss) {
    scream.setEvent(async () => {
      await scene.talk([
        { chara: hectorInjured, text: t('aragnie.aragnie_hector.3') }
      ])
      state.boss = true
      scream.destroy()
    })
  }
  hectorInjured.setFaceKey('hector').setDisplayName(t('chara.hector')).setTapEvent(async () => {
    await scene.talk([
      { chara: hectorInjured, text: t('aragnie.aragnie_hector.4') },
      { chara: 'francisca', text: t('aragnie.aragnie_hector.5') }
    ])
  })
  const talkerLoretta = new Talker('loretta', t('chara.loretta'), scene.player)
  const talkerMary = new Talker('mary', t('chara.mary'), scene.player)
  const talkerHector = new Talker('hector', t('chara.hector'), scene.player)
  area.setEvent(async () => {
    await scene.talk([
      { chara: talkerMary, text: t('aragnie.boss.0') },
      { chara: talkerMary, text: t('aragnie.boss.1') },
      { chara: talkerLoretta, text: t('aragnie.boss.2') },
      { chara: 'ann', text: t('aragnie.boss.3') }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('aragnie', 21, { hp: 1200 })], { boss: true, bgm: 'battle3' })
    if (!result) return
    window.archiveManager.activate('aragnie')
    hectorInjured.destroy()
    boss.die()
    // clearLamp(scene.player, yarn)
    await scene.talk([
      { chara: 'ann', text: t('aragnie.boss.4') },
      { chara: talkerLoretta, text: t('aragnie.boss.5') },
      { chara: talkerHector, text: t('aragnie.boss.6') },
      { chara: talkerHector, text: t('aragnie.boss.7') },
      { chara: talkerMary, text: t('aragnie.boss.8') }
    ])
    area.destroy()
    state.solved = true
  }).setVisible(state.search && !state.solved)
}

const setLamp = (scene, player, yarn) => {
  const mask = scene.make.graphics().fillCircle(0, 0, 100).createGeometryMask()
  yarn.setVisible(true).setMask(mask)
  scene.add.tween({ targets: yarn, duration: 1000, alpha: 0.6, yoyo: true, loop: -1 })
  const lamp = scene.add.sprite(0, -15, 'magic_lamp').setScale(1.1).setAlpha(0.7).setRotation(-Math.PI).setTint('#ff0000'.toColorInt)
  lamp.setMask(mask)
  lamp.setBlendMode(Phaser.BlendModes.ADD)
  lamp.color = 70
  lamp.colorBool = true
  lamp.preUpdate = () => {
    mask.geometryMask.x = player.x
    mask.geometryMask.y = player.y - 15
    // color anim
    lamp.color += lamp.colorBool ? 1 : -1
    if (lamp.color <= 70 || lamp.color >= 185) lamp.colorBool = !lamp.colorBool
    const g = lamp.color.toString(16).padStart(2, 0)
    const b = (255 - lamp.color).toString(16).padStart(2, 0)
    lamp.setTint(`#FF${g}${b}`.toColorInt)
  }
  player.add(lamp)
  player.lamp = lamp
}
