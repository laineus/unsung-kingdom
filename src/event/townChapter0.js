import { annabelle, elliott, max } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m0
  if (!eState.area) {
    charas.area1.setEvent(async () => {
      await scene.talk([
        { chara: 'ann', text: t('townChapter0.ann.0') },
        { chara: 'francisca', text: t('townChapter0.ann.1') },
        { chara: 'francisca', text: t('townChapter0.ann.2') }
      ])
      eState.area = true
      charas.area1.setEvent(null)
    })
  }
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (!eState.talked_amber) {
      await scene.talk([
        { chara, text: t('townChapter0.amber.0') },
        { chara, text: t('townChapter0.amber.1') },
        { chara: 'ann', text: t('townChapter0.amber.2') },
        { chara, text: t('townChapter0.amber.3') },
        { chara, text: t('townChapter0.amber.4') },
        { chara: 'ann', text: t('townChapter0.amber.5') },
        { chara, text: t('townChapter0.amber.6') },
        { chara: 'ann', text: t('townChapter0.amber.7') },
        { chara: 'ann', text: t('townChapter0.amber.8') },
        { chara, text: t('townChapter0.amber.9') },
        { chara, text: t('townChapter0.amber.10') },
        { chara: 'ann', text: t('townChapter0.amber.11') },
        { chara, text: t('townChapter0.amber.12') },
        { chara, text: t('townChapter0.amber.13') },
        { chara: 'ann', text: t('townChapter0.amber.14') }
      ])
      eState.talked_amber = true
    } else {
      await scene.talk([
        { chara, text: t('townChapter0.amber.13') },
        { chara: 'ann', text: t('townChapter0.amber.14') }
      ])
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (!eState.talked_matilda) return annabelle(scene, chara)
    if (!eState.talked_annabelle) {
      await scene.talk([
        { chara, text: t('townChapter0.annabelle.0') },
        { chara, text: t('townChapter0.annabelle.1') },
        { chara: 'ann', text: t('townChapter0.annabelle.2') },
        { chara, text: t('townChapter0.annabelle.3') },
        { chara, text: t('townChapter0.annabelle.4') },
        { chara: 'ann', text: t('townChapter0.annabelle.5') },
        { chara, text: t('townChapter0.annabelle.6') },
        { chara: 'ann', text: t('townChapter0.annabelle.7') },
        { chara, text: t('townChapter0.annabelle.8') },
        { chara, text: t('townChapter0.annabelle.9') },
        { chara: 'ann', text: t('townChapter0.annabelle.10') }
      ])
      eState.talked_annabelle = true
      scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 1)
      scene.ui.announce(t('unlockArea', t('area.castle')))
    } else {
      await scene.talk([
        { chara, text: t('townChapter0.annabelle.11') }
      ])
    }
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    if (!eState.talked_matilda) {
      await scene.talk([
        { chara: 'ann', text: t('townChapter0.matilda.0') },
        { chara, text: t('townChapter0.matilda.1') },
        { chara: 'ann', text: t('townChapter0.matilda.2') },
        { chara, text: t('townChapter0.matilda.3') },
        { chara, text: t('townChapter0.matilda.4') },
        { chara, text: t('townChapter0.matilda.5') },
        { chara: 'ann', text: t('townChapter0.matilda.6') },
        { chara, text: t('townChapter0.matilda.7') },
        { chara: 'ann', text: t('townChapter0.matilda.8') },
        { chara, text: t('townChapter0.matilda.9') },
        { chara, text: t('townChapter0.matilda.10') },
        { chara: 'ann', text: t('townChapter0.matilda.11') },
        { chara, text: t('townChapter0.matilda.12') },
        { chara, text: t('townChapter0.matilda.13') },
        { chara, text: t('townChapter0.matilda.14') },
        { chara: 'jaquelyn', text: t('townChapter0.matilda.15') },
        { chara: 'jaquelyn', text: t('townChapter0.matilda.16') },
        { chara: 'jaquelyn', text: t('townChapter0.matilda.17') },
        { chara, text: t('townChapter0.matilda.18') },
        { chara, text: t('townChapter0.matilda.19') }
      ])
      eState.talked_matilda = true
    } else {
      await scene.talk([
        { chara, text: t('townChapter0.matilda.20') }
      ])
    }
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => elliott(scene, chara))
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => max(scene, chara))
}
