import { annabelle, matilda, max, elliott } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m2
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (eState.talked_annabelle) {
      if (eState.talked_amber2) {
        await scene.talk([
          { chara, text: t('townChapter2.amber.solve.18') }
        ])
      } else {
        await scene.talk([
          { chara: 'ann', text: t('townChapter2.amber.solve.0') },
          { chara, text: t('townChapter2.amber.solve.1') },
          { chara: 'ann', text: t('townChapter2.amber.solve.2') },
          { chara, text: t('townChapter2.amber.solve.3') },
          { chara, text: t('townChapter2.amber.solve.4') },
          { chara: 'ann', text: t('townChapter2.amber.solve.5') },
          { chara, text: t('townChapter2.amber.solve.6') },
          { chara, text: t('townChapter2.amber.solve.7') },
          { chara: 'ann', text: t('townChapter2.amber.solve.8') },
          { chara, text: t('townChapter2.amber.solve.9') },
          { chara, text: t('townChapter2.amber.solve.10') },
          { chara: 'ann', text: t('townChapter2.amber.solve.11') },
          { chara, text: t('townChapter2.amber.solve.12') },
          { chara, text: t('townChapter2.amber.solve.13') },
          { chara: 'ann', text: t('townChapter2.amber.solve.14') },
          { chara, text: t('townChapter2.amber.solve.15') },
          { chara, text: t('townChapter2.amber.solve.16') },
          { chara, text: t('townChapter2.amber.solve.17') }
        ])
        eState.talked_amber2 = true
        scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 3)
        scene.ui.announce(t('unlockArea', t('area.underpass')))
      }
    } else {
      const i = await scene.select([t('townChapter2.amber.question.0'), t('townChapter2.amber.question.1'), t('townChapter2.amber.question.2')])
      if (i === 2) return
      await scene.talk(i === 0 ? [
        { chara, text: t('townChapter2.amber.answer0.0') },
        { chara, text: t('townChapter2.amber.answer0.1') },
        { chara: 'ann', text: t('townChapter2.amber.answer0.2') },
        { chara, text: t('townChapter2.amber.answer0.3') },
        { chara, text: t('townChapter2.amber.answer0.4') },
        { chara: 'ann', text: t('townChapter2.amber.answer0.5') }
      ] : [
        { chara, text: t('townChapter2.amber.answer1.0') },
        { chara, text: t('townChapter2.amber.answer1.1') },
        { chara, text: t('townChapter2.amber.answer1.2') },
        { chara: 'ann', text: t('townChapter2.amber.answer1.3') },
        { chara, text: t('townChapter2.amber.answer1.4') },
        { chara, text: t('townChapter2.amber.answer1.5') },
        { chara, text: t('townChapter2.amber.answer1.6') },
        { chara, text: t('townChapter2.amber.answer1.7') },
        { chara: 'francisca', text: t('townChapter2.amber.answer1.8') },
        { chara: 'ann', text: t('townChapter2.amber.answer1.9') },
        { chara, text: t('townChapter2.amber.answer1.10') },
        { chara, text: t('townChapter2.amber.answer1.11') },
        { chara, text: t('townChapter2.amber.answer1.12') }
      ])
      if (i === 1) eState.talked_amber1 = true
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (eState.talked_elliott && !eState.talked_amber2) {
      await scene.talk([
        ...(eState.talked_annabelle ? [] : [
          { chara, text: t('townChapter2.annabelle.0') },
          { chara, text: t('townChapter2.annabelle.1') },
          { chara, text: t('townChapter2.annabelle.2') },
          { chara, text: t('townChapter2.annabelle.3') },
          { chara: 'ann', text: t('townChapter2.annabelle.4') },
          { chara, text: t('townChapter2.annabelle.5') },
          { chara, text: t('townChapter2.annabelle.6') },
          { chara: 'ann', text: t('townChapter2.annabelle.7') },
          { chara, text: t('townChapter2.annabelle.8') },
          { chara: 'ann', text: t('townChapter2.annabelle.9') },
          { chara, text: t('townChapter2.annabelle.10') }
        ]),
        { chara, text: t('townChapter2.annabelle.11') }
      ])
      eState.talked_annabelle = true
    } else {
      return annabelle(scene, chara)
    }
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => matilda(scene, chara))
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    if (eState.talked_amber1 && !eState.talked_annabelle) {
      await scene.talk([
        ...(eState.talked_elliott ? [] : [
          { chara, text: t('townChapter2.elliott.0') },
          { chara, text: t('townChapter2.elliott.1') },
          { chara: 'ann', text: t('townChapter2.elliott.2') },
          { chara, text: t('townChapter2.elliott.3') },
          { chara, text: t('townChapter2.elliott.4') },
          { chara, text: t('townChapter2.elliott.5') },
          { chara: 'ann', text: t('townChapter2.elliott.6') },
          { chara, text: t('townChapter2.elliott.7') }
        ]),
        { chara, text: t('townChapter2.elliott.8') },
        { chara, text: t('townChapter2.elliott.9') }
      ])
      eState.talked_elliott = true
    } else {
      return elliott(scene, chara)
    }
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    if (eState.talked_amber1 && !eState.talked_elliott) {
      await scene.talk([
        { chara, text: t('townChapter2.max.0') },
        { chara, text: t('townChapter2.max.1') }
      ])
    } else {
      return max(scene, chara)
    }
  })
}
