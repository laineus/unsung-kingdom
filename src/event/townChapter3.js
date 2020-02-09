import { amber, annabelle, matilda, max, elliott } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m3
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (!eState.talked_matilda) {
      await scene.talk([
        ...(eState.talked_amber ? [] : [
          { chara, text: '王妃が亡くなった理由？' },
          { chara, text: 'ご病気らしいわ。' },
          { chara, text: 'ごめんね、私も王妃については詳しいことはあまり分からないの。' },
          { chara, text: '王妃はご交友が広くなくてね、' },
          { chara, text: '表に出てこられることも少なくて、' },
          { chara, text: '私も見かけたとこは数えるほどしかなかったわ。' }
        ]),
        { chara, text: '陛下とは不仲だったっていう噂もあるけど、' },
        { chara, text: 'どうかしらね。' }
      ])
      eState.talked_amber = true
    } else {
      amber(scene, chara)
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => annabelle(scene, chara))
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    if (eState.talked_amber && eState.talked_max && !eState.talked_matilda) {
      await scene.talk([
        { chara, text: '王妃のこと？' },
        { chara, text: 'ごめんね、よく知らないかな。' },
        { chara, text: '王妃が亡くなったのは私が小さい頃のことだし…。' },
        { chara, text: 'みんなは王様とは仲が悪かったって噂をするけど、' },
        { chara, text: 'そうなのかな。' },
        { chara, text: 'そんなことないと思うけどな…。' },
        { chara, text: 'だって結婚したんでしょ？' },
        { chara: 'ann', text: 'そうだね。' },
        { chara, text: 'もし王妃のことが気になるんだったら、' },
        { chara, text: '会いに行ってみたらいいんじゃないかな？' },
        { chara: 'ann', text: '会いに？' },
        { chara, text: 'うん、' },
        { chara, text: '王妃は聖アンテルスの墓地で眠っているよ。' },
        { chara: 'ann', text: 'なるほどね！' },
        { chara: 'ann', text: 'ありがとう！' }
      ])
      eState.talked_matilda = true
      scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 4)
      scene.ui.announce('マップ「聖アンテルスの墓地」が解放された')
    } else {
      matilda(scene, chara)
    }
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => elliott(scene, chara))
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    if (!eState.talked_matilda) {
      await scene.talk([
        ...(eState.talked_max ? [] : [
          { chara, text: '王と王妃の仲が悪かったかって？' },
          { chara, text: '知らないな。' },
          { chara, text: '確かに噂では仲が悪かったとは聞くが、' },
          { chara, text: 'そもそも王妃は滅多に人前に出てこなかったんだ。' },
          { chara, text: 'よく分からないな。' },
          { chara, text: 'よく分からないからこそ、' },
          { chara, text: '想像で色んな噂を勝手にたてられるんだろうな。' },
          { chara, text: 'ついでにもう一つ別の噂を教えてやろう。' }
        ]),
        { chara, text: '王妃はな、' },
        { chara, text: '王が自ら剣をとってドラゴンと戦ったその姿に心奪われたらしい。' },
        { chara, text: '噂、だがな。' },
        { chara, text: '俺はそっちは信じるぜ。' },
        { chara, text: 'なんせあの勇姿には誰もが心を揺さぶられたんだ。' }
      ])
      eState.talked_max = true
    } else {
      max(scene, chara)
    }
  })
}
