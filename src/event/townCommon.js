// 噂好きのアンバー婦人
export const amber = async (scene, chara) => {
  await scene.talk([
    { chara, text: t('townCommon.amber') }
  ])
}

// 宿屋のアナベル
export const annabelle = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.annabelle
  if (!state.includes(0)) {
    await scene.talk([
      { chara, text: t('townCommon.annabelle.0.0') },
      { chara, text: t('townCommon.annabelle.0.1') },
      { chara, text: t('townCommon.annabelle.0.2') },
      { chara: 'ann', text: t('townCommon.annabelle.0.3') },
      { chara: 'ann', text: t('townCommon.annabelle.0.4') },
      { chara, text: t('townCommon.annabelle.0.5') },
      { chara, text: t('townCommon.annabelle.0.6') },
      { chara: 'ann', text: t('townCommon.annabelle.0.7') },
      { chara, text: t('townCommon.annabelle.0.8') },
      { chara, text: t('townCommon.annabelle.0.9') },
      { chara: 'ann', text: t('townCommon.annabelle.0.10') },
      { chara: 'ann', text: t('townCommon.annabelle.0.11') },
      { chara, text: t('townCommon.annabelle.0.12') },
      { chara, text: t('townCommon.annabelle.0.13') },
      { chara, text: t('townCommon.annabelle.0.14') },
      { chara: 'ann', text: t('townCommon.annabelle.0.15') },
      { chara, text: t('townCommon.annabelle.0.16') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.annabelle.0.16') }]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara, text: t('townCommon.annabelle.1.0') },
      { chara, text: t('townCommon.annabelle.1.1') },
      { chara, text: t('townCommon.annabelle.1.2') },
      { chara: 'ann', text: t('townCommon.annabelle.1.3') },
      { chara, text: t('townCommon.annabelle.1.4') },
      { chara, text: t('townCommon.annabelle.1.5') },
      { chara: 'ann', text: t('townCommon.annabelle.1.6') },
      { chara, text: t('townCommon.annabelle.1.7') },
      { chara, text: t('townCommon.annabelle.1.8') },
      { chara, text: t('townCommon.annabelle.1.9') },
      { chara: 'ann', text: t('townCommon.annabelle.1.10') },
      { chara, text: t('townCommon.annabelle.1.11') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.annabelle.1.12') }, { chara, text: t('townCommon.annabelle.1.13') }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: t('townCommon.annabelle.2.0') },
      { chara, text: t('townCommon.annabelle.2.1') },
      { chara, text: t('townCommon.annabelle.2.2') },
      { chara, text: t('townCommon.annabelle.2.3') },
      { chara, text: t('townCommon.annabelle.2.4') },
      { chara, text: t('townCommon.annabelle.2.5') },
      { chara, text: t('townCommon.annabelle.2.6') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.annabelle.2.6') }]
    state.push(2)
  } else if (!state.includes(3)) {
    const arr = [
      { chara, text: t('townCommon.annabelle.3.0') },
      { chara, text: t('townCommon.annabelle.3.1') },
      { chara, text: t('townCommon.annabelle.3.2') },
      { chara, text: t('townCommon.annabelle.3.3') },
      { chara, text: t('townCommon.annabelle.3.4') }
    ]
    await scene.talk(arr)
    chara.nextMessages = arr
    state.push(3)
  } else {
    await scene.talk([
      { chara, text: t('townCommon.annabelle.4.0') }
    ])
  }
}
// 内気なマチルダ
export const matilda = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.matilda
  if (!state.includes(0)) {
    await scene.talk([
      { chara: 'ann', text: t('townCommon.matilda.0.0') },
      { chara: 'ann', text: t('townCommon.matilda.0.1') },
      { chara, text: t('townCommon.matilda.0.2') },
      { chara, text: t('townCommon.matilda.0.3') },
      { chara, text: t('townCommon.matilda.0.4') },
      { chara: 'ann', text: t('townCommon.matilda.0.5') },
      { chara, text: t('townCommon.matilda.0.6') },
      { chara, text: t('townCommon.matilda.0.7') },
      { chara: 'ann', text: t('townCommon.matilda.0.8') },
      { chara, text: t('townCommon.matilda.0.9') },
      { chara, text: t('townCommon.matilda.0.10') },
      { chara: 'ann', text: t('townCommon.matilda.0.11') },
      { chara: 'ann', text: t('townCommon.matilda.0.12') },
      { chara, text: t('townCommon.matilda.0.13') },
      { chara, text: t('townCommon.matilda.0.14') },
      { chara, text: t('townCommon.matilda.0.15') },
      { chara: 'ann', text: t('townCommon.matilda.0.16') },
      { chara: 'ann', text: t('townCommon.matilda.0.17') },
      { chara: 'ann', text: t('townCommon.matilda.0.18') },
      { chara, text: t('townCommon.matilda.0.19') }
    ])
    chara.nextMessages = [
      { chara, text: t('townCommon.matilda.0.20') },
      { chara, text: t('townCommon.matilda.0.21') }
    ]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara: 'ann', text: t('townCommon.matilda.1.0') },
      { chara, text: t('townCommon.matilda.1.1') },
      { chara, text: t('townCommon.matilda.1.2') },
      { chara, text: t('townCommon.matilda.1.3') },
      { chara, text: t('townCommon.matilda.1.4') },
      { chara: 'ann', text: t('townCommon.matilda.1.5') },
      { chara, text: t('townCommon.matilda.1.6') },
      { chara, text: t('townCommon.matilda.1.7') },
      { chara, text: t('townCommon.matilda.1.8') },
      { chara, text: t('townCommon.matilda.1.9') },
      { chara, text: t('townCommon.matilda.1.10') },
      { chara: 'ann', text: t('townCommon.matilda.1.11') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.matilda.1.10') }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: t('townCommon.matilda.2.0') },
      { chara, text: t('townCommon.matilda.2.1') },
      { chara, text: t('townCommon.matilda.2.2') },
      { chara, text: t('townCommon.matilda.2.3') },
      { chara: 'ann', text: t('townCommon.matilda.2.4') },
      { chara: 'ann', text: t('townCommon.matilda.2.5') },
      { chara, text: t('townCommon.matilda.2.6') },
      { chara, text: t('townCommon.matilda.2.7') },
      { chara: 'ann', text: t('townCommon.matilda.2.8') },
      { chara: 'ann', text: t('townCommon.matilda.2.9') },
      { chara, text: t('townCommon.matilda.2.10') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.matilda.2.11') }]
    state.push(2)
  } else if (!state.includes(3)) {
    await scene.talk([
      { chara, text: t('townCommon.matilda.3.0') },
      { chara, text: t('townCommon.matilda.3.1') },
      { chara, text: t('townCommon.matilda.3.2') },
      { chara, text: t('townCommon.matilda.3.3') },
      { chara, text: t('townCommon.matilda.3.4') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.matilda.3.4') }]
    state.push(3)
  } else {
    await scene.talk([
      { chara, text: t('townCommon.matilda.4.0') },
      { chara, text: t('townCommon.matilda.4.1') }
    ])
  }
}

// 卑劣なエリオット
export const elliott = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.elliott
  if (!state.includes(0)) {
    await scene.talk([
      { chara, text: t('townCommon.elliott.0.0') },
      { chara, text: t('townCommon.elliott.0.1') },
      { chara, text: t('townCommon.elliott.0.2') },
      { chara, text: t('townCommon.elliott.0.3') },
      { chara, text: t('townCommon.elliott.0.4') },
      { chara, text: t('townCommon.elliott.0.5') },
      { chara: 'ann', text: t('townCommon.elliott.0.6') },
      { chara, text: t('townCommon.elliott.0.7') },
      { chara, text: t('townCommon.elliott.0.8') },
      { chara, text: t('townCommon.elliott.0.9') },
      { chara, text: t('townCommon.elliott.0.10') },
      { chara, text: t('townCommon.elliott.0.11') },
      { chara, text: t('townCommon.elliott.0.12') },
      { chara: 'ann', text: t('townCommon.elliott.0.13') },
      { chara, text: t('townCommon.elliott.0.14') },
      { chara, text: t('townCommon.elliott.0.15') },
      { chara, text: t('townCommon.elliott.0.16') }
    ])
    const i = await scene.select([t('townCommon.elliott.0.17.0'), t('townCommon.elliott.0.17.1')])
    await scene.talk([
      ...(i === 0 ? [
        { chara: 'francisca', text: t('townCommon.elliott.0.18') }
      ] : []),
      { chara, text: t('townCommon.elliott.0.19') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.elliott.0.20') }]
    state.push(0)
  } else if (!state.includes(1)) {
    const arr = [
      { chara, text: t('townCommon.elliott.1.0') },
      { chara, text: t('townCommon.elliott.1.1') },
      { chara, text: t('townCommon.elliott.1.2') },
      { chara, text: t('townCommon.elliott.1.3') },
      { chara, text: t('townCommon.elliott.1.4') },
      { chara, text: t('townCommon.elliott.1.5') },
      { chara, text: t('townCommon.elliott.1.6') }
    ]
    await scene.talk(arr)
    chara.nextMessages = arr
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: t('townCommon.elliott.2.0') },
      { chara, text: t('townCommon.elliott.2.1') },
      { chara, text: t('townCommon.elliott.2.2') },
      { chara, text: t('townCommon.elliott.2.3') },
      { chara: 'ann', text: t('townCommon.elliott.2.4') },
      { chara, text: t('townCommon.elliott.2.5') },
      { chara: 'ann', text: t('townCommon.elliott.2.6') },
      { chara, text: t('townCommon.elliott.2.7') },
      { chara, text: t('townCommon.elliott.2.8') },
      { chara: 'ann', text: t('townCommon.elliott.2.9') },
      { chara, text: t('townCommon.elliott.2.10') },
      { chara, text: t('townCommon.elliott.2.11') },
      { chara, text: t('townCommon.elliott.2.12') },
      { chara, text: t('townCommon.elliott.2.13') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.elliott.2.13') }]
    state.push(2)
  } else {
    await scene.talk([
      { chara, text: t('townCommon.elliott.3.0') }
    ])
  }
}

// 賞金稼ぎのマックス
export const max = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.max
  if (!state.includes(0)) {
    await scene.talk([
      { chara: 'ann', text: t('townCommon.max.0.0') },
      { chara, text: t('townCommon.max.0.1') },
      { chara, text: t('townCommon.max.0.2') },
      { chara: 'francisca', text: t('townCommon.max.0.3') },
      { chara, text: t('townCommon.max.0.4') },
      { chara, text: t('townCommon.max.0.5') },
      { chara, text: t('townCommon.max.0.6') },
      { chara: 'ann', text: t('townCommon.max.0.7') },
      { chara, text: t('townCommon.max.0.8') },
      { chara: 'jaquelyn', text: t('townCommon.max.0.9') },
      { chara, text: t('townCommon.max.0.10') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.max.0.11') }]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara, text: t('townCommon.max.1.0') },
      { chara, text: t('townCommon.max.1.1') },
      { chara, text: t('townCommon.max.1.2') },
      { chara, text: t('townCommon.max.1.3') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.max.1.4') }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: t('townCommon.max.2.0') },
      { chara, text: t('townCommon.max.2.1') },
      { chara, text: t('townCommon.max.2.2') },
      { chara, text: t('townCommon.max.2.3') }
    ])
    chara.nextMessages = [{ chara, text: t('townCommon.max.2.3') }]
    state.push(2)
  } else {
    await scene.talk([
      { chara, text: t('townCommon.max.3.0') }
    ])
  }
}
