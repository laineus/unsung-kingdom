import { annabelle, matilda, max } from './townCommon'
export default (scene, charas) => {
  const eState = scene.storage.state.event.m1
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (!eState.talked_amber) {
      await scene.talk([
        { chara, text: 'エドガー王、心配だわ…。' },
        { chara: 'ann', text: '王に何かあったんですか？' },
        { chara, text: '王家と仲の良い夫から聞いた話なんだけれど、' },
        { chara, text: 'ここ最近、エドガー王が突然病を患ったらしいの。' },
        { chara: 'ann', text: 'そうなんですね。' },
        { chara, text: '良くなるといいんだけれど…。' },
        { chara, text: 'あ、これはあまり表沙汰にしてほしくない話みたいだから、内緒にしてね？' },
        { chara: 'ann', text: 'わ、分かりました。' }
      ])
      eState.talked_amber = true
    } else {
      await scene.talk([
        { chara, text: 'エドガー王、心配だわ…。' }
      ])
    }
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (!eState.talked_amber) return annabelle(scene, chara)
    if (!eState.talked_annabelle) {
      await scene.talk([
        { chara, text: '薬？' },
        { chara: 'ann', text: 'そう、病気によく効くやつ。ないかな？' },
        { chara, text: 'ないよ。' },
        { chara, text: 'あ、飲むとムラムラするやつならあるけど。' },
        { chara: 'ann', text: 'そんなのいらないよ！' },
        { chara, text: 'うちにはそれしかないかな。' },
        { chara: 'ann', text: 'そっか…。' },
        { chara, text: 'あ！エリオットが最近怪しい商売を始めたみたいだけど、' },
        { chara, text: '確か万能薬がどうとか言ってたかも。' },
        { chara: 'ann', text: 'ほんと！？' },
        { chara: 'ann', text: '万能薬って何でも治るっるてことだよね？' },
        { chara, text: 'どうかな、私はあんなやつの売り物なんて口にしたくないけど。' },
        { chara: 'ann', text: 'そ、そうなんだ。' }
      ])
      eState.talked_annabelle = true
    } else {
      await scene.talk([
        { chara, text: 'あ、もしうちの薬が欲しくなったら、言ってね。' },
        { chara: 'ann', text: 'それはいらないかな…。' }
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
        { chara: 'ann', text: '街商さん、何を売っているんですか？' },
        { chara, text: 'よう。' },
        { chara, text: '今は観光の旅人さんが喜ぶもんは売ってねえよ。' },
        { chara, text: 'ごめんな。' }
      ])
    } else if (!eState.talked_elliott) {
      await scene.talk([
        { chara: 'ann', text: 'あの、お薬を売っているって聞いたんですけど。' },
        { chara, text: 'お！なんだ、あんたも薬を探していたのか！' },
        { chara, text: '見ろよ、なんにでも効く魔法の万能薬があるぜ。' },
        { chara, text: '今なら特別に40シリングで売ってやる。' },
        { chara: 'ann', text: 'どんな病気でも治るの？' },
        { chara, text: 'もちろんだ。' }
      ])
      const i = await scene.select(['買う', '買わない'])
      await scene.talk([
        ...(i === 0 ? [
          { chara: 'francisca', text: 'バカねアン、明らかにインチキじゃない。' },
          { chara: 'ann', text: 'でも、本当かもしれないよ？' },
          { chara: c2, text: 'やめておきなお嬢ちゃん。' }
        ] : [
          { chara: c2, text: '賢い判断だお嬢ちゃん。' }
        ]),
        { chara: c2, text: 'そんなろくでなしの売るモンは怪しさ満点だ。' },
        { chara, text: 'おい！人の商売の邪魔をするなマックス！' },
        { chara, text: '脳みそが筋肉でできたお前には解らんだろうが、こいつは本物だ。' },
        { chara: c2, text: 'いいや、嘘だね。' },
        { chara: c2, text: 'どうせお前もあの噂を聞いてそんな商売を始めたんだろ？' },
        { chara: c2, text: '王族の誰かが病気でヤバいってな。' },
        { chara, text: 'なんだ、お前も知っていやがったか。' },
        { chara: c2, text: 'お嬢ちゃん、この話は稼ぎ屋界隈で最近よく聞く。' },
        { chara: c2, text: 'ホンモノはワルコフォレンスの森に住む賢人だ。' },
        { chara: c2, text: '万能薬を作れるのは彼だけさ。' },
        { chara: 'ann', text: '森の賢人が薬を作れるんですね？' },
        { chara: c2, text: 'ああ、腕の立つ奴らはそれ目当てでみんな森へ向かった。' },
        { chara: c2, text: '王室へ薬を売りつけるつもりらしい。' },
        { chara, text: 'へへへ、そういうことだ姉ちゃん。' },
        { chara, text: '騙して悪かったな。' },
        { chara, text: '代わりにワルコフォレンスの森の地図を格安で売ってやるよ。' },
        { chara: 'ann', text: 'うーん、結構です…。' }
      ])
      eState.talked_elliott = true
      scene.storage.state.allowed_area = Math.max(scene.storage.state.allowed_area, 2)
      scene.ui.announce('マップ「ワルコフォレンスの森」が解放された')
    } else {
      await scene.talk([
        { chara, text: 'ワルコフォレンスの森には凶暴な熊が出るらしいから、' },
        { chara, text: 'もし本当に行くなら気をつけろよ。' }
      ])
    }
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => max(scene, chara))
}
