export default (scene, charas) => {
  // const eState = scene.storage.state.event.m5
  const eState = scene.storage.state.event.m5_1
  const { soldier1, soldier2 } = charas
  soldier1.setVisible(!eState.started)
  soldier2.setVisible(!eState.started)
  // 兵士
  const soldierEvent = async () => {
    await scene.talk([
      { chara: soldier1, text: 'あ、おい見ろ。この者たちじゃないか？' },
      { chara: soldier2, text: 'ああ、間違いない。' },
      { chara: soldier2, text: '確かにグリファルデ神殿で王の救出を手伝った者たちだ。' },
      { chara: 'ann', text: 'なんですか？' },
      { chara: soldier1, text: '君たち、あのとき何故急に姿を消した？' },
      { chara: 'ann', text: 'あ、ええと、忙しくて…。' },
      { chara: soldier1, text: '王弟殿下がお礼をしたいとのことだ。' },
      { chara: soldier1, text: 'この手紙を預かっている。' },
      { chara: soldier2, text: '恐らく王城への招待のはずだ。' },
      { chara: soldier2, text: 'きっと来てくれよ。' }
    ])
    await scene.ui.transition('normal')
    soldier1.setVisible(false)
    soldier2.setVisible(false)
    await scene.ui.sleep(1000)
    await scene.talk([
      { chara: 'ann', text: '中身を読むね。' },
      { chara: 'ann', text: '「王城の裏庭で待つ」' },
      { chara: 'ann', text: '…。' },
      { chara: 'ann', text: 'おわり。' },
      { chara: 'francisca', text: 'え？なにそれ。それだけ？' },
      { chara: 'jaquelyn', text: '変ね。' },
      { chara: 'ann', text: '裏庭って最初にジャックの暗殺を止めたところだよね。' },
      { chara: 'ann', text: 'うーん。' },
      { chara: 'ann', text: 'よく分からないけど行くしかないね。' }
    ])
    eState.started = true
    scene.ui.missionUpdate('m5_1')
  }
  charas.soldier1.setTapEvent(soldierEvent)
  charas.soldier2.setTapEvent(soldierEvent)
  // 噂好きのアンバー婦人
  charas.amber.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: 'もちろん知っているだろうけど、' },
      { chara, text: '陛下がついにドラゴンを倒したのよ！' },
      { chara, text: 'ほんとに、本当によかったわ。' },
      { chara: 'ann', text: 'そうですね。' },
      { chara, text: '平和が何より一番ね。' },
      { chara, text: 'ところで、' },
      { chara, text: 'ドラゴンを倒したのは本当に王なのか、って噂もあるわ。' },
      { chara, text: '陛下はもう若くないし、' },
      { chara, text: '実は王弟が倒したんじゃないかとか、' },
      { chara, text: '無名のナイトが倒したけど、' },
      { chara, text: 'それじゃあ格好がつかないからって、王の手柄になっただとか。' },
      { chara, text: 'おまけに旅人の女の子たちが倒しただなんて噂まであるわ。' },
      { chara: 'ann', text: 'あはは。' },
      { chara, text: 'まあ、私は陛下が倒したって信じているわ。' },
    ])
    chara.nextMessages = [{ chara, text: '平和が何より一番ね。' }]
  })
  // 宿屋のアナベル
  charas.annabelle.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: '♪' },
      { chara: 'ann', text: '鼻歌なんか歌って、今日はご機嫌だね。' },
      { chara, text: 'まあね。' },
      { chara: 'ann', text: '平和になってよかったね。' },
      { chara, text: 'もちろんそれも嬉しいけどね。' },
      { chara: 'ann', text: '「それも」？' },
      { chara, text: 'えっとね、ふふ、' },
      { chara: 'ann', text: 'え、なになに？' },
      { chara, text: 'マチルダ、わかる？' },
      { chara, text: 'いつもそこに隠れて私を見ている子。' },
      { chara: 'ann', text: 'ああ、あの子ね。' },
      { chara: 'ann', text: 'あの子がどうしたの？' },
      { chara, text: '私のことが好きみたい。' },
      { chara: 'ann', text: 'え！？' },
      { chara, text: 'いや、知ってはいたんだけど、' },
      { chara, text: 'いざ直接言われるとなんだか嬉しくって。' },
      { chara, text: '今度遊びに来るの。' },
      { chara: 'ann', text: 'そうなんだ！' },
      { chara: 'ann', text: 'よかったね！' },
      { chara, text: 'まあね。' }
    ])
    chara.nextMessages = [
      { chara: 'ann', text: 'よかったね！' },
      { chara, text: 'まあね。' }
    ]
  })
  // 内気なマチルダ
  charas.matilda.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: '…。' },
      { chara: 'ann', text: 'どうしたの？' },
      { chara, text: 'え、あ、ううん、' },
      { chara, text: '平和になってよかったな、って。' },
      { chara: 'ann', text: 'ほんとにね！' },
      { chara, text: 'それは凄く嬉しいことなんだけど、' },
      { chara, text: '私、浮かれすぎちゃったのかな…、' },
      { chara: 'ann', text: 'なにかあった？' },
      { chara, text: 'えっと、アナベルとね、久しぶりに話したんだけど…、' },
      { chara, text: 'なんていうか、変なこと言っちゃった…。' },
      { chara: 'ann', text: 'そうなの？' },
      { chara: 'ann', text: 'なんて？' },
      { chara, text: 'それは…、内緒なんだけど…、' },
      { chara, text: 'でも、また仲良くできそうで、嬉しいなって。' },
      { chara: 'ann', text: 'そっか！' },
      { chara: 'ann', text: 'よかったね。' },
      { chara, text: 'うん…！' }
    ])
    chara.nextMessages = [
      { chara: 'ann', text: 'よかったね。' },
      { chara, text: 'うん…！' }
    ]
  })
  // 卑劣なエリオット
  charas.elliott.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: '信じられるか？' },
      { chara, text: 'エドガー王がドラゴンを倒したんだ。' },
      { chara, text: 'ほんと、ベリオン人として誇らしく思うぜ。' },
      { chara, text: '国民のために自ら命がけで戦うなんてな。' },
      { chara, text: '俺も、なんというか、' },
      { chara, text: 'もっと人のために生きてみてもいいんじゃないかって、' },
      { chara, text: 'ちょっと考えさせられたよ。' },
    ])
    chara.nextMessages = [{ chara, text: 'ほんと、ベリオン人として誇らしく思うぜ。' }]
  })
  // 賞金稼ぎのマックス
  charas.max.setTapEvent(async chara => {
    if (chara.nextMessages) return await scene.talk(chara.nextMessages)
    await scene.talk([
      { chara, text: 'な？俺の言った通りだったろ。' },
      { chara, text: 'エドガー王がついにやってくれたぜ。' },
      { chara, text: '…。' },
      { chara, text: 'いや、正直言うと俺も無理なんじゃないかって思ってたよ。' },
      { chara, text: 'だが、俺達の平和王エドガーは、また見事に平和を守り抜いてくれた。' },
      { chara, text: 'この国の民はまた王にベタボレさ。' },
      { chara, text: 'もちろん俺も含めてな。' }
    ])
    chara.nextMessages = [
      { chara, text: 'この国の民はまた王にベタボレさ。' },
      { chara, text: 'もちろん俺も含めてな。' }
    ]
  })
}
