export default (scene, charas) => {
  const eState = scene.storage.state.event.m4
  const allowArea = async () => {
    if (!['talked_amber', 'talked_elliott', 'talked_max', 'talked_matilda', 'talked_annabelle'].every(key => eState[key])) return
    if (scene.storage.state.allowed_area >= 5) return
    await scene.ui.sleep(500)
    await scene.talk([
      { chara: 'ann', text: t('townChapter4.ann.0') },
      { chara: 'ann', text: t('townChapter4.ann.1') },
      { chara: 'ann', text: t('townChapter4.ann.2') }
    ])
    scene.storage.state.allowed_area = 5
    scene.ui.announce('マップ「グリファルデ神殿」が解放された')
  }
  const charaKeys = ['annabelle', 'elliott', 'max', 'amber', 'matilda']
  Array.range(13, 17).map(id => scene.map.getObjectById(id)).forEach((pos, i) => {
    charas[charaKeys[i]].setPosition(pos.x, pos.y).setR('left').setRandomWalk(false)
  })
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('townChapter4.amber.0') },
      { chara, text: t('townChapter4.amber.1') },
      { chara, text: t('townChapter4.amber.2') },
      { chara, text: t('townChapter4.amber.3') },
      { chara, text: t('townChapter4.amber.4') },
      { chara, text: t('townChapter4.amber.5') }
    ])
    eState.talked_amber = true
    await allowArea()
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('townChapter4.annabelle.0') },
      { chara, text: t('townChapter4.annabelle.1') },
      { chara, text: t('townChapter4.annabelle.2') },
      { chara, text: t('townChapter4.annabelle.3') },
      { chara, text: t('townChapter4.annabelle.4') }
    ])
    eState.talked_annabelle = true
    await allowArea()
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('townChapter4.matilda.0') },
      { chara, text: t('townChapter4.matilda.1') },
      { chara, text: t('townChapter4.matilda.2') },
      { chara, text: t('townChapter4.matilda.3') },
      { chara, text: t('townChapter4.matilda.4') }
    ])
    eState.talked_matilda = true
    await allowArea()
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('townChapter4.elliott.0') },
      { chara, text: t('townChapter4.elliott.1') },
      { chara, text: t('townChapter4.elliott.2') },
      { chara, text: t('townChapter4.elliott.3') },
      { chara, text: t('townChapter4.elliott.4') },
      { chara, text: t('townChapter4.elliott.5') }
    ])
    eState.talked_elliott = true
    await allowArea()
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    await scene.talk([
      { chara, text: t('townChapter4.max.0') },
      { chara, text: t('townChapter4.max.1') },
      { chara, text: t('townChapter4.max.2') },
      { chara, text: t('townChapter4.max.3') },
      { chara, text: t('townChapter4.max.4') },
      { chara, text: t('townChapter4.max.5') },
      { chara, text: t('townChapter4.max.6') }
    ])
    eState.talked_max = true
    await allowArea()
  })
}
