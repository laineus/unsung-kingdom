import { annabelle, matilda, elliott } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m3
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    await scene.talk([
      ...(eState.talked_amber ? [] : [
        { chara, text: t('townChapter3.amber.0') },
        { chara, text: t('townChapter3.amber.1') },
        { chara, text: t('townChapter3.amber.2') },
        { chara, text: t('townChapter3.amber.3') },
        { chara, text: t('townChapter3.amber.4') },
        { chara, text: t('townChapter3.amber.5') }
      ]),
      { chara, text: t('townChapter3.amber.6') },
      { chara, text: t('townChapter3.amber.7') }
    ])
    eState.talked_amber = true
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => annabelle(scene, chara))
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    if (eState.talked_amber && eState.talked_max && !eState.talked_matilda) {
      await scene.talk([
        { chara, text: t('townChapter3.matilda.0') },
        { chara, text: t('townChapter3.matilda.1') },
        { chara, text: t('townChapter3.matilda.2') },
        { chara, text: t('townChapter3.matilda.3') },
        { chara, text: t('townChapter3.matilda.4') },
        { chara, text: t('townChapter3.matilda.5') },
        { chara, text: t('townChapter3.matilda.6') },
        { chara: 'ann', text: t('townChapter3.matilda.7') },
        { chara, text: t('townChapter3.matilda.8') },
        { chara, text: t('townChapter3.matilda.9') },
        { chara: 'ann', text: t('townChapter3.matilda.10') },
        { chara, text: t('townChapter3.matilda.11') },
        { chara, text: t('townChapter3.matilda.12') },
        { chara: 'ann', text: t('townChapter3.matilda.13') },
        { chara: 'ann', text: t('townChapter3.matilda.14') }
      ])
      eState.talked_matilda = true
      scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 4)
      scene.ui.announce(t('unlockArea', t('area.catacomb')))
    } else {
      await matilda(scene, chara)
    }
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => elliott(scene, chara))
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    await scene.talk([
      ...(eState.talked_max ? [] : [
        { chara, text: t('townChapter3.max.0') },
        { chara, text: t('townChapter3.max.1') },
        { chara, text: t('townChapter3.max.2') },
        { chara, text: t('townChapter3.max.3') },
        { chara, text: t('townChapter3.max.4') },
        { chara, text: t('townChapter3.max.5') },
        { chara, text: t('townChapter3.max.6') },
        { chara, text: t('townChapter3.max.7') }
      ]),
      { chara, text: t('townChapter3.max.8') },
      { chara, text: t('townChapter3.max.9') },
      { chara, text: t('townChapter3.max.10') },
      { chara, text: t('townChapter3.max.11') },
      { chara, text: t('townChapter3.max.12') }
    ])
    eState.talked_max = true
  })
}
