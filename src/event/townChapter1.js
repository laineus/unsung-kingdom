import { annabelle, matilda, max } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m1
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (!eState.talked_amber) {
      await scene.talk([
        { chara, text: t('townChapter1.amber.0') },
        { chara: 'ann', text: t('townChapter1.amber.1') },
        { chara, text: t('townChapter1.amber.2') },
        { chara, text: t('townChapter1.amber.3') },
        { chara: 'ann', text: t('townChapter1.amber.4') },
        { chara, text: t('townChapter1.amber.5') },
        { chara, text: t('townChapter1.amber.6') },
        { chara: 'ann', text: t('townChapter1.amber.7') }
      ])
      eState.talked_amber = true
    } else {
      await scene.talk([
        { chara, text: t('townChapter1.amber.0') }
      ])
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (!eState.talked_amber) return annabelle(scene, chara)
    if (!eState.talked_annabelle) {
      await scene.talk([
        { chara, text: t('townChapter1.annabelle.0') },
        { chara: 'ann', text: t('townChapter1.annabelle.1') },
        { chara, text: t('townChapter1.annabelle.2') },
        { chara, text: t('townChapter1.annabelle.3') },
        { chara: 'ann', text: t('townChapter1.annabelle.4') },
        { chara, text: t('townChapter1.annabelle.5') },
        { chara: 'ann', text: t('townChapter1.annabelle.6') },
        { chara, text: t('townChapter1.annabelle.7') },
        { chara, text: t('townChapter1.annabelle.8') },
        { chara: 'ann', text: t('townChapter1.annabelle.9') },
        { chara: 'ann', text: t('townChapter1.annabelle.10') },
        { chara, text: t('townChapter1.annabelle.11') },
        { chara: 'ann', text: t('townChapter1.annabelle.12') }
      ])
      eState.talked_annabelle = true
    } else {
      await scene.talk([
        { chara, text: t('townChapter1.annabelle.13') },
        { chara: 'ann', text: t('townChapter1.annabelle.14') }
      ])
    }
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => matilda(scene, chara))
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    const c2 = charas.max
    if (!eState.talked_annabelle) {
      await scene.talk([
        { chara: 'ann', text: t('townChapter1.elliott.0.0') },
        { chara, text: t('townChapter1.elliott.0.1') },
        { chara, text: t('townChapter1.elliott.0.2') },
        { chara, text: t('townChapter1.elliott.0.3') }
      ])
    } else if (!eState.talked_elliott) {
      await scene.talk([
        { chara: 'ann', text: t('townChapter1.elliott.1.0') },
        { chara, text: t('townChapter1.elliott.1.1') },
        { chara, text: t('townChapter1.elliott.1.2') },
        { chara, text: t('townChapter1.elliott.1.3') },
        { chara: 'ann', text: t('townChapter1.elliott.1.4') },
        { chara, text: t('townChapter1.elliott.1.5') }
      ])
      const i = await scene.select([t('townChapter1.elliott.1.6'), t('townChapter1.elliott.1.7')])
      await scene.talk([
        ...(i === 0 ? [
          { chara: 'francisca', text: t('townChapter1.elliott.1.8') },
          { chara: 'ann', text: t('townChapter1.elliott.1.9') },
          { chara: c2, text: t('townChapter1.elliott.1.10') }
        ] : [
          { chara: c2, text: t('townChapter1.elliott.1.11') }
        ]),
        { chara: c2, text: t('townChapter1.elliott.1.12') },
        { chara, text: t('townChapter1.elliott.1.13') },
        { chara, text: t('townChapter1.elliott.1.14') },
        { chara: c2, text: t('townChapter1.elliott.1.15') },
        { chara: c2, text: t('townChapter1.elliott.1.16') },
        { chara: c2, text: t('townChapter1.elliott.1.17') },
        { chara, text: t('townChapter1.elliott.1.18') },
        { chara: c2, text: t('townChapter1.elliott.1.19') },
        { chara: c2, text: t('townChapter1.elliott.1.20') },
        { chara: c2, text: t('townChapter1.elliott.1.21') },
        { chara: 'ann', text: t('townChapter1.elliott.1.22') },
        { chara: c2, text: t('townChapter1.elliott.1.23') },
        { chara: c2, text: t('townChapter1.elliott.1.24') },
        { chara, text: t('townChapter1.elliott.1.25') },
        { chara, text: t('townChapter1.elliott.1.26') },
        { chara, text: t('townChapter1.elliott.1.27') },
        { chara: 'ann', text: t('townChapter1.elliott.1.28') }
      ])
      eState.talked_elliott = true
      scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 2)
      scene.ui.announce('マップ「ワルコフォレンスの森」が解放された')
    } else {
      await scene.talk([
        { chara, text: t('townChapter1.elliott.2.0') },
        { chara, text: t('townChapter1.elliott.2.1') }
      ])
    }
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => max(scene, chara))
}
