export default (scene, characters) => {
  const {
    soldier1,
    soldier2,
    mary,
    loretta,
    dario,
    drystan,
    ray
  } = characters
  if (scene.storage.state.chapter !== 4) {
    return [soldier1, soldier2, mary, loretta, dario, drystan, ray].forEach(v => v.destroy())
  }
  const state = scene.storage.state.event.m4
  soldier1.setDisplayName(t('chara.guard'))
  soldier2.setDisplayName(t('chara.guard'))
  mary.setDisplayName(t('chara.mary'))
  loretta.setDisplayName(t('chara.loretta'))
  dario.setDisplayName(t('chara.dario'))
  drystan.setDisplayName(t('chara.drystan'))
  ray.setDisplayName(t('chara.ray'))
  // events
  soldier1.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('templeCharacters.soldier1.0') },
      { chara, text: t('templeCharacters.soldier1.1') },
      { chara, text: t('templeCharacters.soldier1.2') },
      { chara, text: t('templeCharacters.soldier1.3') }
    ])
  })
  soldier2.setTapEvent(async chara => {
    mary.setR('right')
    await scene.talk([
      { chara, text: t('templeCharacters.soldier2.0') },
      { chara: mary, text: t('templeCharacters.soldier2.1') },
      { chara, text: t('templeCharacters.soldier2.2') },
      { chara, text: t('templeCharacters.soldier2.3') }
    ], { angle: false })
  })
  mary.setTapEvent(async chara => {
    if (state.talked_mary) {
      await scene.talk([
        { chara, text: t('templeCharacters.mary.7') },
        { chara: 'ann', text: t('templeCharacters.mary.8') }
      ])
    } else {
      await scene.talk([
        { chara, text: t('templeCharacters.mary.0') },
        { chara: 'ann', text: t('templeCharacters.mary.1') },
        { chara: 'ann', text: t('templeCharacters.mary.2') },
        { chara: 'ann', text: t('templeCharacters.mary.3') },
        { chara, text: t('templeCharacters.mary.4') },
        { chara, text: t('templeCharacters.mary.5') },
        { chara, text: t('templeCharacters.mary.6') },
        { chara, text: t('templeCharacters.mary.7') },
        { chara: 'ann', text: t('templeCharacters.mary.8') }
      ])
      state.talked_mary = true
    }
  })
  loretta.setTapEvent(async chara => {
    if (state.talked_loretta) {
      await scene.talk([
        { chara, text: t('templeCharacters.loretta.9') },
        { chara, text: t('templeCharacters.loretta.10') }
      ])
    } else {
      await scene.talk([
        { chara, text: t('templeCharacters.loretta.0') },
        { chara, text: t('templeCharacters.loretta.1') },
        { chara: 'ann', text: t('templeCharacters.loretta.2') },
        { chara: 'ann', text: t('templeCharacters.loretta.3') },
        { chara, text: t('templeCharacters.loretta.4') },
        { chara: 'ann', text: t('templeCharacters.loretta.5') },
        { chara, text: t('templeCharacters.loretta.6') },
        { chara, text: t('templeCharacters.loretta.7') },
        { chara: 'ann', text: t('templeCharacters.loretta.8') },
        { chara, text: t('templeCharacters.loretta.9') },
        { chara, text: t('templeCharacters.loretta.10') },
        { chara: 'ann', text: t('templeCharacters.loretta.11') }
      ])
      state.talked_loretta = true
    }
  })
  dario.setTapEvent(async chara => {
    if (state.talked_dario) {
      const t = await scene.talk([
        { chara, text: t('templeCharacters.dario.talk2.0') },
        null
      ])
      const i = await scene.ui.select([t('templeCharacters.dario.option.0'), t('templeCharacters.dario.option.1')])
      t.destroy()
      if (i === 1) return
      scene.storage.state.battlers.forEach(v => v.hp = v.max_hp)
      scene.ui.announce(t('hpRecovered'))
      await scene.talk([
        { chara: 'ann', text: t('templeCharacters.dario.talk1.11') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('templeCharacters.dario.talk1.0') },
        { chara, text: t('templeCharacters.dario.talk1.1') },
        { chara, text: t('templeCharacters.dario.talk1.2') },
        { chara, text: t('templeCharacters.dario.talk1.3') },
        { chara, text: t('templeCharacters.dario.talk1.4') },
        { chara, text: t('templeCharacters.dario.talk1.5') },
        { chara: 'ann', text: t('templeCharacters.dario.talk1.6') },
        { chara: 'ann', text: t('templeCharacters.dario.talk1.7') },
        { chara, text: t('templeCharacters.dario.talk1.8') },
        { chara, text: t('templeCharacters.dario.talk1.9') },
        { chara, text: t('templeCharacters.dario.talk1.10') },
        { chara: 'ann', text: t('templeCharacters.dario.talk1.11') }
      ])
      state.talked_dario = true
    }
  })
  drystan.setTapEvent(async chara => {
    if (state.talked_drystan) {
      await scene.talk([
        { chara, text: t('templeCharacters.drystan.17') }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: t('templeCharacters.drystan.0') },
        { chara: 'ann', text: t('templeCharacters.drystan.1') },
        { chara, text: t('templeCharacters.drystan.2') },
        { chara, text: t('templeCharacters.drystan.3') },
        { chara: 'ann', text: t('templeCharacters.drystan.4') },
        { chara, text: t('templeCharacters.drystan.5') },
        { chara, text: t('templeCharacters.drystan.6') },
        { chara: 'ann', text: t('templeCharacters.drystan.7') },
        { chara, text: t('templeCharacters.drystan.8') },
        { chara, text: t('templeCharacters.drystan.9') },
        { chara: 'ann', text: t('templeCharacters.drystan.10') },
        { chara, text: t('templeCharacters.drystan.11') },
        { chara, text: t('templeCharacters.drystan.12') },
        { chara, text: t('templeCharacters.drystan.13') },
        { chara, text: t('templeCharacters.drystan.14') },
        { chara, text: t('templeCharacters.drystan.15') },
        { chara: 'ann', text: t('templeCharacters.drystan.16') },
        { chara, text: t('templeCharacters.drystan.17') },
        { chara, text: t('templeCharacters.drystan.18') }
      ])
      state.talked_drystan = true
    }
  })
  if (scene.storage.state.event.m3_4.completed) {
    ray.setTapEvent(async chara => {
      if (state.talked_ray) {
        await scene.talk([
          { chara: 'ann', text: t('templeCharacters.ray.10') },
          { chara, text: t('templeCharacters.ray.11') }
        ])
      } else {
        await scene.talk([
          { chara: 'ann', text: t('templeCharacters.ray.0') },
          { chara, text: t('templeCharacters.ray.1') },
          { chara, text: t('templeCharacters.ray.2') },
          { chara: 'ann', text: t('templeCharacters.ray.3') },
          { chara, text: t('templeCharacters.ray.4') },
          { chara, text: t('templeCharacters.ray.5') },
          { chara: 'ann', text: t('templeCharacters.ray.6') },
          { chara: 'ann', text: t('templeCharacters.ray.7') },
          { chara, text: t('templeCharacters.ray.8') },
          { chara: 'ann', text: t('templeCharacters.ray.9') },
          { chara: 'ann', text: t('templeCharacters.ray.10') },
          { chara, text: t('templeCharacters.ray.11') }
        ])
        state.talked_ray = true
      }
    })
  } else {
    ray.destroy()
  }
}
