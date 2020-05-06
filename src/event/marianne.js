export const WATER_COUNT = 5

export const marianne = (scene, sister) => {
  const state = scene.storage.state.event.m3_2
  if (state.completed && scene.storage.state.chapter !== 3) {
    return sister.destroy()
  }
  sister.setDisplayName('シスター')
  sister.setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
        { chara, text: 'マリアンヌ…。' }
      ])
    } else if (state.count >= WATER_COUNT) {
      await scene.talk([
        { chara: 'ann', text: 'はいシスター、' },
        { chara: 'ann', text: '余計なお世話かもしれないけど…、お水を持ってきたよ。' },
        { chara, text: '…。' },
        { chara, text: 'ありがとう…。' },
        { chara, text: 'いただきますね。' },
        { chara: 'ann', text: 'うん。' }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara, text: 'おいしい…。' },
        { chara: 'ann', text: 'よかった。' },
        { chara, text: 'あの、' },
        { chara, text: '親切にしていただいたお礼に、このお守りを受け取ってください。' }
      ])
      scene.ui.announce('『十字のお守り』を手に入れた')
      await scene.talk([
        { chara: 'ann', text: 'お礼なんていいのに。' },
        { chara: 'ann', text: 'あ、そういえばマリアンヌは王妃と仲がよかったって言っていたよね？' },
        { chara: 'ann', text: '王妃のこと、少しだけ聞いてもいいかな？' },
        { chara, text: 'ええ、マリアンヌがたまに話してくれたので、知っていることでしたら。' },
        { chara: 'ann', text: 'えっと、' },
        { chara: 'ann', text: '王妃は王を恨んでいたの？' },
        { chara, text: 'え、そんなことはありえません。' },
        { chara, text: '王妃は病気で亡くなるその瞬間まで、陛下を愛していたはずです。' },
        { chara: 'ann', text: 'そ、そうだよね。' },
        { chara: 'ann', text: '変なこと聞いてごめん。' }
      ])
      await scene.ui.sleep(500)
      await scene.talk([
        { chara: 'ann', text: 'さあ、立ち上がれる？' },
        { chara: 'ann', text: '辛かったら街まで送るよ。' },
        { chara, text: 'いえ…、' },
        { chara, text: '私の気持ちは変わりません。' },
        { chara: 'ann', text: 'そんな…、' },
        { chara, text: '私はマリアンヌのそばで、' },
        { chara, text: 'マリアンヌの歌を聞けるのなら、' },
        { chara, text: '地獄へだって行きたいのです。' }
      ])
      state.completed = true
      scene.ui.missionUpdate('m3_2', true)
    } else if (state.started) {
      await scene.talk([
        { chara: 'ann', text: 'ちょっと待っていてね。' },
        { chara: 'ann', text: '飲み物か何かを探してくるよ。' },
        { chara, text: 'え、いえ、いいんです。' },
        { chara: 'ann', text: 'いいから。' }
      ])
    } else {
      await scene.talk([
        { chara: 'ann', text: 'あの、シスターさん、大丈夫？' },
        { chara: 'ann', text: 'かなり具合が悪そうだけど。' },
        { chara, text: '…。' },
        { chara: 'ann', text: 'あのー、' },
        { chara, text: 'あ…、はい…。' },
        { chara: 'ann', text: 'どうしたんですか？' },
        { chara, text: 'なにも…、大丈夫です。' },
        { chara: 'ann', text: '大丈夫なことないよ！' },
        { chara: 'ann', text: '今にも死んじゃいそうだよ！' },
        { chara: 'ann', text: 'ちゃんとご飯食べてる？' },
        { chara, text: 'いえ…、いいんです。' },
        { chara, text: '私は、好きで死にたいのです。' },
        { chara: 'ann', text: 'そんな。' },
        { chara: 'ann', text: 'どうして？' },
        { chara, text: 'マリアンヌのところに行くのです。' },
        { chara: 'ann', text: 'マリアンヌ？' },
        { chara, text: 'ええ、' },
        { chara, text: 'このお墓に眠る、私の愛するマリアンヌ…。' },
        { chara: 'ann', text: 'その人を追いかけて死にたいの？' },
        { chara, text: 'ええ、' },
        { chara, text: '彼女の歌声が聞けない世界など…、' },
        { chara, text: '未練はありません。' },
        { chara: 'ann', text: 'うーん…、そんなに好きだったんだね。' },
        { chara: 'ann', text: 'どんな人だったの？' },
        { chara, text: '素敵な歌声の持ち主。' },
        { chara, text: 'マリアンヌは、聖堂でも、お城でも歌うことが許された特別な人。' },
        { chara, text: 'ご交友の少ない王妃殿下さえも、マリアンヌにはお心開いていたほどです。' },
        { chara, text: '彼女の歌はそれほどまでに特別でした。' },
        { chara: 'ann', text: 'すごい人なんだね。' },
        { chara, text: 'はい。' },
        { chara, text: 'そして私は、そんな彼女に恋をしました。' },
        { chara, text: '修道女の私は神様と結婚した身。' },
        { chara, text: '許されることではありません。' },
        { chara, text: '彼女が亡くなってから、私は心の在り処を失い、' },
        { chara, text: 'ここへ来ました。' },
        { chara: 'ann', text: 'そうだったんだ。' },
        { chara: 'ann', text: 'いつからここにいるの？' },
        { chara, text: '数日前だと思いますが、' },
        { chara, text: '時間の感覚がぼんやりしてきて、正確には…分かりません。' },
        { chara: 'ann', text: 'そっか、' },
        { chara: 'ann', text: 'ちょっと待っていてね。' },
        { chara: 'ann', text: '飲み物か何かを探してくるよ。' },
        { chara, text: 'え、いえ、いいんです。' },
        { chara: 'ann', text: 'いいから。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_2')
    }
  })
}
