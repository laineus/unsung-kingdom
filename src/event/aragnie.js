export const jack = (scene, jack, area) => {
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.jack) {
    jack.destroy()
    return
  }
  const chara = jack
  area.setEvent(async () => {
    await jack.setSpeed(140).setTargetPosition(jack.x, jack.y + (9).toPixel)
    await scene.talk([
      { chara, text: 'やあ' }
    ])
    state.jack = true
    await scene.ui.transition('normal')
    jack.destroy()
  })
}

export const hector = (scene, hector, mary, loretta) => {
  mary.setVisible(false)
  loretta.setVisible(false)
  const charas = [hector, mary, loretta]
  const state = scene.storage.state.event.m2_4
  if (!scene.storage.state.event.m2_1.completed || state.started) {
    charas.forEach(c => c.destroy())
    return
  }
  hector.setTapEvent(async chara => {
    if (!state.talked) {
      await scene.talk([
        { chara, text: '何者だ！' },
        { chara: 'ann', text: 'ええと…、' },
        { chara, text: 'さてはお前たちだな、私の鍵を持ち出したのは。' },
        { chara: 'ann', text: 'これは、借りたものです。' },
        { chara: 'ann', text: 'あなたは、カサンドラのお兄さんですか？' },
        { chara, text: 'なるほど。妹が勝手をしたようだね。' },
        { chara, text: 'いかにも、私がカサンドラの兄だ。' },
        { chara, text: '何か用があるのか？' },
        { chara: 'ann', text: '彼女から話を聞きました。' },
        { chara: 'ann', text: 'カサンドラを牢獄から出すために、アラグニエを探しているんですよね？' },
        { chara, text: 'ああ、探していた時期もあったな。' },
        { chara, text: 'でもずいぶん前に探すのは諦めたよ。' },
        { chara: 'ann', text: 'では何故ここに居るんですか？' },
        { chara, text: 'それは…、' },
        { chara, text: '私は…、' },
        { chara, text: '私はよからぬことを考えている。' },
        { chara, text: '私は、王を恨んでいる。' },
        { chara, text: '王に復讐したい。' },
        { chara: 'ann', text: 'そんなこと…。' },
        { chara, text: 'だが最初はそうではなかった！' },
        { chara, text: '一度は騎士として王に忠誠を誓った身。' },
        { chara, text: 'あの事故で王が私を除名した日、私は王を恨む自由を得たが、' },
        { chara, text: 'それでも私はただ、アラグニエを倒して妹を解放することだけを考えていた。' },
        { chara, text: 'しかし数年間この地下通路を探したが、ついに見つけることはできなかった。' },
        { chara, text: 'そしてアラグニエ探しを諦めて腐っていた私のもとに、ある男が訪れてきた。' },
        { chara, text: 'そうだ、さっきの黒いローブの男だ。お前も会ったはずだ。' },
        { chara: 'ann', text: 'あいつね！' },
        { chara: 'ann', text: 'あいつと何を話したの？' },
        { chara, text: 'あいつは蛇だ。' },
        { chara, text: 'あいつが私の中にある王への小さな怒りを煽り立てた。' },
        { chara, text: '奴が酒の密売人のことを私に吹き込んだのだ。' },
        { chara, text: 'ここに20バレルの酒が並んだ日の夜、城への扉が開く、と。' },
        { chara, text: 'その言葉に導かれ、私は今ここにいる。' },
        { chara, text: '私の気は既に狂ってしまったのだ。' },
        { chara: 'ann', text: 'あいつ…、人の弱みを利用するなんて。' },
        { chara: 'ann', text: 'ねえ、もしアラグニエを倒してカサンドラを出すことができたら、あなたは復讐を辞める？' },
        { chara, text: '…分からない。' },
        { chara, text: 'かもしれないな。' },
        { chara: 'ann', text: 'それなら私たちが探すのを手伝います。' },
        { chara, text: '無理だ。アラグニエは見つからないよ。' },
        { chara, text: 'もういいんだ。向こうへ行ってくれ。' }
      ])
      state.talked = true
    } else {
      await scene.talk([
        { chara: 'ann', text: '私たちが探すのを手伝います。' },
        { chara, text: '無理だ。アラグニエは見つからないよ。' },
        { chara, text: 'もういいんだ。向こうへ行ってくれ。' }
      ])
    }
    if (scene.storage.state.event.m2_2.completed) {
      mary.setSpeed(180).setVisible(true)
      loretta.setSpeed(180).setVisible(true)
      await scene.talk([
        { chara: mary, text: '見つかるわ！' }
      ])
      await Promise.all([
        mary.setTargetPosition(mary.x, mary.y - (8).toPixel),
        loretta.setTargetPosition(loretta.x, loretta.y - (8).toPixel)
      ])
      await scene.talk([
        { chara: mary, text: 'ヘクター、久しぶりね。' },
        { chara, text: 'メアリー王女！' },
        { chara, text: 'レディロレッタまで！' },
        { chara: loretta, text: 'エドガー王を殺そうだなんていい度胸だわ。' },
        { chara: mary, text: 'ヘクター、どうかお父様を恨まないで。' },
        { chara: mary, text: 'カサンドラの投獄も、あなたの解雇も、全て私のせいよ。' },
        { chara: mary, text: '私を恨みなさい。' },
        { chara, text: '…。' },
        { chara: mary, text: 'でも一度だけチャンスをちょうだい。' },
        { chara, text: 'チャンス…？' },
        { chara: mary, text: 'そう、これを見て。' },
        { chara, text: 'それは、ランタン？' },
        { chara: mary, text: 'これは魔石のランタン。' },
        { chara: mary, text: 'この光がアラグニエの痕跡を照らし出すわ。' },
        { chara, text: 'そんなことが…、' },
        { chara: loretta, text: '私とメアリーが何年も勉強して作ったの。' },
        { chara: loretta, text: 'そこのあなたたちも、魔石を探すのを手伝ってくれて助かったわ。' },
        { chara: 'ann', text: 'それを作るために必要だったのね。' },
        { chara, text: '妹が…、出られる？' },
        { chara: loretta, text: 'そうよ！' },
        { chara: loretta, text: '復讐だなんて女々しいことを考えるのは辞めなさい。' },
        { chara: mary, text: 'さあ、カサンドラの元へ行きましょう。' },
        { chara: mary, text: 'そこのあなたたち、一緒について来て。' },
        { chara: 'ann', text: 'え？' },
        { chara: loretta, text: '何よ、勝手に侵入している身分で断るっていうの？' },
        { chara: loretta, text: 'この落ちぶれたナイトだけでは不安だわ。' },
        { chara: 'ann', text: 'アラグニエを倒すんだね、任せて！' }
      ])
      charas.forEach(c => c.setSpeed(100).setTargetPosition(scene.player.x, scene.player.y))
      await scene.ui.transition('normal')
      charas.forEach(c => c.destroy())
      state.started = true
      scene.ui.missionUpdate('m2_4')
    }
  })
}
