import generateBattler from '../util/generateBattler'

const removeSword = scene => {
  const layer4 = scene.map.getLayerByName('layer4')
  layer4.layer.data[7][15].index = 326
  layer4.layer.data[7][16].index = 327
  layer4.layer.data[8][15].index = 336
  layer4.layer.data[8][16].index = 337
}

export const calibur = (scene, sword, nikke) => {
  const state = scene.storage.state.event.m4_3
  if (state.completed) removeSword(scene)
  if (!state.started || state.completed) {
    sword.destroy()
    nikke.destroy()
    return
  }
  const fixPosition = async () => {
    if (scene.player.y > (nikke.y + 40)) return
    await scene.ui.transition('fast')
    scene.setMembersPosition(nikke.x, nikke.y + 70, 'up')
    await scene.ui.sleep(300)
  }
  nikke.setDisplayName(t('chara.nikke')).setVisible(state.talked)
  const eventTarget = state.talked ? nikke : sword
  const event = async () => {
    await fixPosition()
    const chara = nikke
    const battle = async () => {
      const i = await scene.select([t('calibur.option.0'), t('calibur.option.1')])
      if (i === 1) {
        await scene.talk([
          { chara, text: t('calibur.cancel.0') }
        ])
        eventTarget.removeTapEvent()
        nikke.setTapEvent(event)
        await scene.camera.revert(500)
        return
      }
      const result = await scene.ui.battle([generateBattler('nikke', 41, { hp: 1200 })], { boss: true, bgm: 'battle2' })
      if (!result) return
      await scene.talk([
        { chara, text: t('calibur.solve.0') },
        { chara, text: t('calibur.solve.1') },
        { chara, text: t('calibur.solve.2') },
        { chara, text: t('calibur.solve.3') },
        { chara, text: t('calibur.solve.4') },
        { chara, text: t('calibur.solve.5') },
        { chara: 'ann', text: t('calibur.solve.6') }
      ])
      removeSword(scene)
      scene.ui.increaseWeapon(19)
      await scene.talk([
        { chara, text: t('calibur.solve.7') },
        { chara: 'ann', text: t('calibur.solve.8') },
        { chara, text: t('calibur.solve.9') },
        { chara, text: t('calibur.solve.10') },
        { chara, text: t('calibur.solve.11') },
        { chara, text: t('calibur.solve.12') }
      ])
      scene.substances.remove(chara)
      await chara.setSpeed(80).setTargetPosition(chara.x - 70, chara.y + 40)
      await scene.talk([
        { chara, text: t('calibur.solve.13') },
        { chara, text: t('calibur.solve.14') },
        { chara, text: t('calibur.solve.15') },
        { chara: 'ann', text: t('calibur.solve.16') },
        { chara, text: t('calibur.solve.17') },
        { chara: 'ann', text: t('calibur.solve.18') },
        { chara, text: t('calibur.solve.19') },
        { chara, text: t('calibur.solve.20') }
      ])
      await chara.setSpeed(200).setTargetPosition(chara.x - 20, chara.y + 150)
      await chara.setSpeed(400).setTargetPosition(chara.x - 30, chara.y + 300)
      state.completed = true
      scene.ui.missionUpdate('m4_3', true)
      sword.destroy()
      nikke.destroy()
      await scene.camera.revert(500)
    }
    if (state.talked) {
      await scene.camera.look((16).toPixel, (7).toPixelCenter, 500)
      await scene.talk([
        { chara, text: t('calibur.talked.0') }
      ])
      await battle()
    } else {
      state.talked = true
      await scene.talk([
        { chara: 'ann', text: t('calibur.start.0') }
      ])
      scene.ui.sleep(300)
      const mist = scene.add.rectangle(0, 0, scene.map.width, scene.map.height, 0x44CC88)
      mist.setAlpha(0).setBlendMode(Phaser.BlendModes.OVERLAY).setDepth(140000).setOrigin(0, 0)
      scene.add.tween({
        targets: mist, duration: 1200, ease: 'Power2', alpha: 0.7, yoyo: true, hold: 1200, onComplete () { mist.destroy() }
      })
      await scene.ui.sleep(2400)
      nikke.setVisible(true).setAlpha(0)
      scene.add.tween({ targets: nikke, duration: 1200, ease: 'Power2', alpha: 1 })
      await scene.ui.sleep(300)
      scene.player.tweet('！')
      await scene.ui.sleep(1200)
      await scene.camera.look((16).toPixel, (7).toPixel, 500)
      await scene.talk([
        { chara, text: t('calibur.start.1') },
        { chara, text: t('calibur.start.2') },
        { chara: 'ann', text: t('calibur.start.3') },
        { chara, text: t('calibur.start.4') },
        { chara, text: t('calibur.start.5') },
        { chara, text: t('calibur.start.6') },
        { chara: 'ann', text: t('calibur.start.7') },
        { chara, text: t('calibur.start.8') },
        { chara: 'ann', text: t('calibur.start.9') },
        { chara, text: t('calibur.start.10') },
        { chara, text: t('calibur.start.11') },
        { chara, text: t('calibur.start.12') },
        { chara: 'ann', text: t('calibur.start.13') },
        { chara, text: t('calibur.start.14') },
        { chara: 'ann', text: t('calibur.start.15') },
        { chara, text: t('calibur.start.16') },
        { chara: 'ann', text: t('calibur.start.17') },
        { chara, text: t('calibur.start.18') },
        { chara: 'ann', text: t('calibur.start.19') },
        { chara, text: t('calibur.start.20') },
        { chara: 'ann', text: t('calibur.start.21') },
        { chara, text: t('calibur.start.22') },
        { chara, text: t('calibur.start.23') },
        { chara, text: t('calibur.start.24') },
        { chara: 'ann', text: t('calibur.start.25') },
        { chara, text: t('calibur.start.26') },
        { chara, text: t('calibur.start.27') },
        { chara, text: t('calibur.start.28') },
        { chara: 'ann', text: t('calibur.start.29') },
        { chara, text: t('calibur.start.30') },
        { chara: 'ann', text: t('calibur.start.31') },
        { chara, text: t('calibur.start.32') },
        { chara, text: t('calibur.start.33') },
        { chara, text: t('calibur.start.34') },
        { chara: 'ann', text: t('calibur.start.35') },
        { chara: 'ann', text: t('calibur.start.36') },
        { chara, text: t('calibur.start.37') },
        { chara: 'ann', text: t('calibur.start.38') },
        { chara, text: t('calibur.start.39') },
        { chara, text: t('calibur.start.40') },
        { chara, text: t('calibur.start.41') },
        { chara, text: t('calibur.start.42') },
        { chara, text: t('calibur.start.43') },
        { chara, text: t('calibur.start.44') },
        { chara: 'ann', text: t('calibur.start.45') },
        { chara, text: t('calibur.start.46') },
        { chara, text: t('calibur.start.47') },
        { chara, text: t('calibur.start.48') },
        { chara, text: t('calibur.start.49') },
        { chara, text: t('calibur.start.50') },
        { chara, text: t('calibur.start.51') },
        { chara: 'ann', text: t('calibur.start.52') },
        { chara, text: t('calibur.start.53') },
        { chara: 'ann', text: t('calibur.start.54') },
        { chara, text: t('calibur.start.55') },
        { chara, text: t('calibur.start.56') }
      ])
      await battle()
    }
  }
  eventTarget.setTapEvent(event)
}
