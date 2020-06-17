export default (scene, charas) => {
  // const eState = scene.storage.state.event.m5
  const eState = scene.storage.state.event.m5_1
  const { soldier1, soldier2 } = charas
  soldier1.setVisible(!eState.started)
  soldier2.setVisible(!eState.started)
  // 兵士
  const soldierEvent = async () => {
    await scene.talk([
      { chara: soldier1, text: t('townChapter5.soldier.0.0') },
      { chara: soldier2, text: t('townChapter5.soldier.0.1') },
      { chara: soldier2, text: t('townChapter5.soldier.0.2') },
      { chara: 'ann', text: t('townChapter5.soldier.0.3') },
      { chara: soldier1, text: t('townChapter5.soldier.0.4') },
      { chara: 'ann', text: t('townChapter5.soldier.0.5') },
      { chara: soldier1, text: t('townChapter5.soldier.0.6') },
      { chara: soldier1, text: t('townChapter5.soldier.0.7') },
      { chara: soldier2, text: t('townChapter5.soldier.0.8') },
      { chara: soldier2, text: t('townChapter5.soldier.0.9') }
    ])
    await scene.ui.transition('normal')
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: t('townChapter5.soldier.1.0') },
      { chara: 'ann', text: t('townChapter5.soldier.1.1') },
      { chara: 'ann', text: t('townChapter5.soldier.1.2') },
      { chara: 'ann', text: t('townChapter5.soldier.1.3') },
      { chara: 'francisca', text: t('townChapter5.soldier.1.4') },
      { chara: 'jaquelyn', text: t('townChapter5.soldier.1.5') },
      { chara: 'ann', text: t('townChapter5.soldier.1.6') },
      { chara: 'ann', text: t('townChapter5.soldier.1.7') },
      { chara: 'ann', text: t('townChapter5.soldier.1.8') }
    ])
    eState.started = true
    scene.ui.missionUpdate('m5_1')
  }
  charas.soldier1.setTapEvent(soldierEvent)
  charas.soldier2.setTapEvent(soldierEvent)
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: t('townChapter5.amber.0') },
      { chara, text: t('townChapter5.amber.1') },
      { chara, text: t('townChapter5.amber.2') },
      { chara: 'ann', text: t('townChapter5.amber.3') },
      { chara, text: t('townChapter5.amber.4') },
      { chara, text: t('townChapter5.amber.5') },
      { chara, text: t('townChapter5.amber.6') },
      { chara, text: t('townChapter5.amber.7') },
      { chara, text: t('townChapter5.amber.8') },
      { chara, text: t('townChapter5.amber.9') },
      { chara, text: t('townChapter5.amber.10') },
      { chara, text: t('townChapter5.amber.11') },
      { chara: 'ann', text: t('townChapter5.amber.12') },
      { chara, text: t('townChapter5.amber.13') }
    ])
    chara.nextMessages = [{ chara, text: t('townChapter5.amber.14') }]
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: t('townChapter5.annabelle.0') },
      { chara: 'ann', text: t('townChapter5.annabelle.1') },
      { chara, text: t('townChapter5.annabelle.2') },
      { chara: 'ann', text: t('townChapter5.annabelle.3') },
      { chara, text: t('townChapter5.annabelle.4') },
      { chara: 'ann', text: t('townChapter5.annabelle.5') },
      { chara, text: t('townChapter5.annabelle.6') },
      { chara: 'ann', text: t('townChapter5.annabelle.7') },
      { chara, text: t('townChapter5.annabelle.8') },
      { chara, text: t('townChapter5.annabelle.9') },
      { chara: 'ann', text: t('townChapter5.annabelle.10') },
      { chara: 'ann', text: t('townChapter5.annabelle.11') },
      { chara, text: t('townChapter5.annabelle.12') },
      { chara: 'ann', text: t('townChapter5.annabelle.13') },
      { chara, text: t('townChapter5.annabelle.14') },
      { chara, text: t('townChapter5.annabelle.15') },
      { chara, text: t('townChapter5.annabelle.16') },
      { chara: 'ann', text: t('townChapter5.annabelle.17') },
      { chara: 'ann', text: t('townChapter5.annabelle.18') },
      { chara, text: t('townChapter5.annabelle.19') }
    ])
    chara.nextMessages = [
      { chara: 'ann', text: t('townChapter5.annabelle.18') },
      { chara, text: t('townChapter5.annabelle.19') }
    ]
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: t('townChapter5.matilda.0') },
      { chara: 'ann', text: t('townChapter5.matilda.1') },
      { chara, text: t('townChapter5.matilda.2') },
      { chara, text: t('townChapter5.matilda.3') },
      { chara: 'ann', text: t('townChapter5.matilda.4') },
      { chara, text: t('townChapter5.matilda.5') },
      { chara, text: t('townChapter5.matilda.6') },
      { chara: 'ann', text: t('townChapter5.matilda.7') },
      { chara, text: t('townChapter5.matilda.8') },
      { chara, text: t('townChapter5.matilda.9') },
      { chara: 'ann', text: t('townChapter5.matilda.10') },
      { chara: 'ann', text: t('townChapter5.matilda.11') },
      { chara, text: t('townChapter5.matilda.12') },
      { chara, text: t('townChapter5.matilda.13') },
      { chara: 'ann', text: t('townChapter5.matilda.14') },
      { chara: 'ann', text: t('townChapter5.matilda.15') },
      { chara, text: t('townChapter5.matilda.16') }
    ])
    chara.nextMessages = [
      { chara: 'ann', text: t('townChapter5.matilda.15') },
      { chara, text: t('townChapter5.matilda.16') }
    ]
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: t('townChapter5.elliott.0') },
      { chara, text: t('townChapter5.elliott.1') },
      { chara, text: t('townChapter5.elliott.2') },
      { chara, text: t('townChapter5.elliott.3') },
      { chara, text: t('townChapter5.elliott.4') },
      { chara, text: t('townChapter5.elliott.5') },
      { chara, text: t('townChapter5.elliott.6') }
    ])
    chara.nextMessages = [{ chara, text: t('townChapter5.elliott.7') }]
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: t('townChapter5.max.0') },
      { chara, text: t('townChapter5.max.1') },
      { chara, text: t('townChapter5.max.2') },
      { chara, text: t('townChapter5.max.3') },
      { chara, text: t('townChapter5.max.4') },
      { chara, text: t('townChapter5.max.5') },
      { chara, text: t('townChapter5.max.6') }
    ])
    chara.nextMessages = [
      { chara, text: t('townChapter5.max.5') },
      { chara, text: t('townChapter5.max.6') }
    ]
  })
}
