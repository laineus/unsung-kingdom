export const ferdinand = (scene, fdn) => {
  const state = scene.storage.state.event.m3_1
  fdn.setDisplayName('フェルディナンド卿')
  if (state.completed) {
    return fdn.destroy()
  }
  fdn.setTapEvent(async chara => {
    if (scene.storage.state.event.m3_2.completed) {
      await scene.talk([
        { chara, text: 'おい、何とかできそうか？' },
        { chara: 'ann', text: 'うーん…、' },
        { chara: 'ann', text: 'このお守りなんてどうかな？' },
        { chara: 'ann', text: 'さっきシスターさんにもらったんだけど。' },
        { chara, text: 'そんなもので助かるはずがないだろう！' },
        { chara: 'ann', text: 'じゃあいらないの？' },
        { chara, text: '…。' },
        { chara, text: '一応もらっておこうか…。' },
        { chara: 'ann', text: 'やっぱ要るんじゃない。' },
        { chara, text: 'うるさい！ほら、早くよこせ。' }
      ])
      await scene.ui.sleep(300)
      await scene.talk([
        { chara, text: 'うわ！！' }
      ])
      fdn.initImage('ferdinand_dragged')
      await scene.talk([
        { chara, text: '誰だ！？私の足を掴むな！' },
        { chara: 'ann', text: 'え！なに！？' }
      ])
      await fdn.setSpeed(20).setTargetPosition(fdn.x - 20, fdn.y)
      await scene.talk([
        { chara, text: 'お、おい！！やめろ！！' },
        { chara, text: 'うわあああああ！！！！' }
      ])
      await fdn.setSpeed(50).setTargetPosition(fdn.x - (2.3).toPixel, fdn.y)
      scene.add.tween({ targets: fdn, duration: 200, alpha: 0, x: fdn.x - 15, y: fdn.y + 30, rotation: fdn.rotation - 1, onComplete: () => fdn.destroy() })
      await scene.ui.sleep(300)
      await scene.talk([
        { chara: 'ann', text: 'え…！？' },
        { chara: 'ann', text: 'なに今の……、' },
        { chara: 'ann', text: 'なにか手みたいなものに引っ張られて…、' }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: '死んじゃったの…？' },
        { chara: 'jaquelyn', text: 'この崖の深さなら、…きっとそうね。' },
        { chara: 'francisca', text: 'こわ。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_1', true)
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'とにかく頼む。' },
        { chara, text: 'なんとかしてくれ。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: '大丈夫ですか？顔色が悪いみたいだけど。' },
        { chara, text: '…………。' },
        { chara: 'jaquelyn', text: 'こんな崖のそばにいたら危ないですよ。' },
        { chara, text: '…………。' },
        { chara: 'ann', text: 'ねえ！' }
      ], { angle: false })
      await scene.talk([
        { chara, text: '………、な、なんだ………？' },
        { chara, text: '誰だお前たちは…？' },
        { chara, text: '………、' },
        { chara, text: 'おい、どこだここは！？' },
        { chara: 'ann', text: 'え？' },
        { chara: 'ann', text: '大丈夫？' },
        { chara, text: 'どこなんだここは？' },
        { chara: 'ann', text: 'どこって、墓地ですけど。' },
        { chara, text: '墓地だと？' },
        { chara: 'ann', text: '聖アンテルスの墓地。' },
        { chara, text: 'なんだって…？' },
        { chara, text: 'べリオンじゃないか…。' },
        { chara, text: '私はなぜこんなところに………。' },
        { chara: 'ann', text: 'ほんとに大丈夫？' },
        { chara: 'ann', text: '誰かに連れてこられたの？' },
        { chara, text: 'ち、違う。' },
        { chara, text: '私はまともだ。' },
        { chara, text: 'そうだ、何か用があったはずなんだ。' },
        { chara, text: '声だ！声が聴こえたんだ。' },
        { chara, text: 'それでわざわざここまで来たんだ。' },
        { chara: 'ann', text: 'それで？' },
        { chara, text: 'それで、そうだ、ここでその声を聴いていたんだ。' },
        { chara, text: 'そしたらお前たちが話しかけてきた。' },
        { chara, text: 'おい、ほら、この声だ。聴こえるだろ？' },
        { chara, text: 'こんなに大勢の声が、一体どこから？' },
        { chara: 'ann', text: '何それ、怖い。' },
        { chara: 'ann', text: 'そんなの聞こえないよ。' },
        { chara, text: 'ふざけるな！' },
        { chara, text: 'くそっ！くそっ！' },
        { chara: 'ann', text: 'やっぱり変ですよ。' },
        { chara: 'ann', text: '家に帰ったほうがいいんじゃない？' },
        { chara, text: 'ちくしょう。' },
        { chara, text: '私がこうなったのは全てレンフィールド家のせいだ。' },
        { chara, text: 'きっとやつらに売りつけられた奴隷や女の霊が俺を恨んでいるんだ。' },
        { chara: 'ann', text: '人を買っていたの？' },
        { chara: 'francisca', text: 'そりゃあ怨みも買うね。' },
        { chara: 'jaquelyn', text: '怨みや呪いだなんて…、' },
        { chara: 'jaquelyn', text: 'きっと自らの罪悪感が生み出した幻覚じゃないかしら。' },
        { chara, text: 'おい！好き勝手言うな。' },
        { chara, text: 'くそ、呪いだかなんだか知らんが、' },
        { chara, text: 'おかげでフェルディナンド家は無茶苦茶だ。' },
        { chara, text: 'おい、あんたら、なんとかしてくれないか？' },
        { chara: 'ann', text: 'なんとかってどういうこと？' },
        { chara, text: 'そんなもん分からん！' },
        { chara, text: 'とにかく頼む！' }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_1')
    }
  })
}
