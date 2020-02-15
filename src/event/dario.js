import generateBattler from '../util/generateBattler'
export const dario = (scene, dario) => {
  const state = scene.storage.state.event.m3_3
  dario.setDisplayName('ダリオ')
  if (state.completed) {
    return dario.destroy()
  }
  dario.setTapEvent(async chara => {
    if (state.completed) {
      await scene.talk([
      ])
    } else if (state.solved) {
      state.completed = true
      scene.ui.missionUpdate('m3_3', true)
      await scene.talk([
        { chara: 'ann', text: '短剣ってこれのことだよね？' },
        { chara: 'ann', text: '取り返してきたよ。' },
        { chara, text: '本当か？' },
        { chara, text: '一体どうやって…？' },
        { chara: 'ann', text: '私たちこう見えて強いの。' },
        { chara: 'ann', text: 'ねえ、王妃の亡霊、私たちに任せてみない？' },
        { chara: 'ann', text: 'きっと何とかするよ。' },
        { chara, text: '…。' },
        { chara, text: 'アレを止めようと言うのか…。' },
        { chara: 'ann', text: '何かいい方法はない？' },
        { chara, text: 'その短剣だ。' },
        { chara, text: 'その短剣を持ってアレに近づけば、' },
        { chara, text: '見ることも、触れることもできるだろう。' },
        { chara, text: '倒すことも、不可能ではないかもしれない。' },
        { chara: 'ann', text: 'ほんと！？' },
        { chara, text: 'ああ。' },
        { chara, text: 'だが、あの亡霊は本当に危険だ。' },
        { chara, text: 'それでも行くのか…？' },
        { chara: 'ann', text: '行くよ。' },
        { chara, text: 'そうか…、' },
        { chara, text: '本当にすまない…。' },
        { chara, text: '…どうか、負けないでくれ。' }
      ])
      scene.ui.missionUpdate('m3_5')
      scene.storage.state.event.m3_5.started = true
    } else if (state.started) {
      await scene.talk([
        { chara, text: 'あいつは、私が王妃の亡霊を作り出すときに使った短剣を持っている。' },
        { chara, text: 'もしも取り返すことができたら、それを私のところに持ってきてくれ。' },
        { chara: 'ann', text: '短剣ね。覚えておくよ。' }
      ])
    } else {
      await scene.talk([
        { chara, text: '君たち、用が済んだらできるだけ早くこの墓地を出ていくことだ。' },
        { chara: 'ann', text: 'どうして？' },
        { chara: 'ann', text: 'おばけが出るからですか？' },
        { chara, text: 'そんなやさしいものじゃないが、そんなところだ。' },
        { chara, text: 'ここ数年で、この墓地にはたくさんの悪霊が住み着くようになった。' },
        { chara, text: 'それ以来、この場所はあまりに哀しい。' },
        { chara, text: 'たくさんの哀しみに満ちている。' },
        { chara, text: '私は感じることができる。' },
        { chara, text: '君たちが陽の光や風を肌で感じるように、' },
        { chara, text: '私は死者たちの哀しみを体で浴び続けている。' },
        { chara, text: 'これは君たちにとっても無害ではない。' },
        { chara, text: '感じることができなくとも、ここにいる間、君たちも哀しみを浴びている。' },
        { chara, text: 'だから、長居せずに出ていくことだ。' },
        { chara, text: '特に、北側の王族や貴族の墓地の辺りには近づくな。' },
        { chara: 'ann', text: 'でも、' },
        { chara: 'ann', text: '私たち、王妃のお墓に行きたいと思っているの。' },
        { chara, text: 'なんだって？' },
        { chara, text: 'それは特におすすめしない。' },
        { chara: 'ann', text: 'え、どうして？' },
        { chara: 'ann', text: '王妃の亡霊でも出るの？' },
        { chara, text: 'そうだ。' },
        { chara, text: 'いや、そうなんだが、違う。' },
        { chara, text: 'あの亡霊は、王妃の姿をしているが、王妃ではない。' },
        { chara: 'ann', text: 'どういこと？' },
        { chara, text: 'あれは…、' },
        { chara, text: 'ここに住まう悪霊たちの魂を寄せ集めて作られたものだ。' },
        { chara, text: '私が…、私が作った…。' },
        { chara: 'ann', text: 'ええと、ちょっと待って、' },
        { chara: 'ann', text: 'あなたが、この墓地にいた悪霊を使って、' },
        { chara: 'ann', text: '王妃の姿をした亡霊を作った、ってそういうわけ？' },
        { chara, text: 'そうだ。' },
        { chara: 'ann', text: 'そんなことができるの？' },
        { chara: 'ann', text: 'というか何のために？' },
        { chara, text: '私は、死者を操ることができる。' },
        { chara, text: 'ある男に脅されて、王妃の亡霊を作らされたんだ。' },
        { chara, text: '理由は分からないが、あいつはあの亡霊を使って、国王陛下を殺すつもりだ。' },
        { chara, text: 'もし陛下が死んだら、…私のせいだ。' },
        { chara: 'ann', text: 'その亡霊はあなたの言うことは聞かないの？あなたが作ったんでしょ？' },
        { chara, text: '無理だ。' },
        { chara, text: 'もうどうすることもできない。' },
        { chara, text: 'あれは私の力の範囲を超えて凶悪な存在になった。' },
        { chara, text: '気をつけろ、' },
        { chara, text: '今あの亡霊の恨みは国王陛下に向けられているが、近づけば君たちも危険だ。' },
        { chara: 'ann', text: 'そんなに強力なんだ。' },
        { chara: 'ann', text: 'あのさ、' },
        { chara: 'ann', text: 'あなたを脅した男って、黒いローブの男？' },
        { chara, text: '知っているのか！？' },
        { chara: 'ann', text: 'よくは知らないけど、私たちも会ったことがある。' },
        { chara, text: 'あいつは何者だ？何故王を殺そうとしている？' },
        { chara: 'ann', text: '分からない。' },
        { chara: 'ann', text: 'あいつの居場所は知っている？' },
        { chara, text: 'ああ、' },
        { chara, text: 'あいつならまだこの墓地に居る。' },
        { chara: 'ann', text: 'ほんと！？' },
        { chara, text: '会いに行くつもりか？' },
        { chara, text: '王妃の亡霊も危険だが、あいつも危険だ。' },
        { chara: 'ann', text: 'それは知っているけど…、' },
        { chara: 'ann', text: '私たちはあいつを止めなくちゃいけない。' },
        { chara, text: '…。' },
        { chara, text: 'そうか。' },
        { chara, text: 'あいつは、私が王妃の亡霊を作り出すときに使った短剣を持っている。' },
        { chara, text: 'もし、' },
        { chara, text: 'もしも取り返すことができたら、それを私のところに持ってきてくれ。' },
        { chara: 'ann', text: '短剣ね。覚えておくよ。' }
      ])
      state.started = true
      scene.ui.missionUpdate('m3_3')
    }
  })
}

export const jack = (scene, jk, area1, area2) => {
  const state = scene.storage.state.event.m3_3
  if (!state.started || state.solved) {
    area1.destroy()
    area2.destroy()
    jk.destroy()
    return
  }
  area1.setActive(false)
  jk.setVisible(false)
  area2.setEvent(async () => {
    area1.setActive(true)
    area2.destroy()
  })
  area1.setEvent(async () => {
    const chara = jk
    jk.setVisible(true)
    await scene.talk([
      { chara, text: 'ここで何をしている？' },
      { chara: 'ann', text: '！！' }
    ])
    await jk.setSpeed(140).setTargetPosition(jk.x + (-11).toPixel, jk.y)
    await scene.talk([
      { chara: 'ann', text: 'どこに隠れていたの！？' },
      { chara, text: 'お前たち、地下通路でも私の邪魔をしてくれたようだな。' },
      { chara: 'ann', text: 'そうよ！' },
      { chara: 'ann', text: '今度はなに？' },
      { chara: 'ann', text: '王妃の偽物の悪霊を作って王を殺そうだなんて。' },
      { chara, text: 'あのネクロマンサーが喋ったのか。' },
      { chara: 'ann', text: 'あんた、どうして王を殺そうとしているの？' },
      { chara, text: 'しつこいようだから端的に答えてやる。' },
      { chara, text: 'この国を守るためだ。' },
      { chara: 'ann', text: '守るため…？' },
      { chara: 'ann', text: '平和王エドガーを殺すことが何で国を守ることになるっていうの？' },
      { chara, text: '説明したら、お前らは俺の邪魔を辞めるのか？' },
      { chara: 'ann', text: '…。' },
      { chara, text: 'そうだ、無駄だろう。' },
      { chara, text: '俺もお前たちとお喋りするつもりはない。' },
      { chara, text: 'これ以上時間を無駄にするわけにはいかないんだ。' },
      { chara, text: 'いい加減決着をつけよう。' },
      { chara: 'ann', text: '望むところよ。' },
      { chara, text: '今度は生かしては帰さないぞ。' },
      { chara: 'ann', text: 'あんたこそ、残念だけど前のようにはいかないよ。覚悟しなさい。' }
    ])
    await scene.ui.sleep(500)
    const result = await scene.ui.battle([generateBattler('orthrus', 15, { hp: 800 })], { boss: true })
    if (!result) return
    await scene.talk([
      { chara, text: '負けた…、だと？' },
      { chara: 'ann', text: 'そう、あなたの負けよ。' },
      { chara: 'ann', text: 'さて、じゃあまずあの水晶を返して貰おうかな。' },
      { chara: 'ann', text: '王城の裏庭で私たちから奪ったやつ。無くしてないよね？' },
      { chara, text: '…まだだ、' },
      { chara: 'ann', text: 'なんて？' },
      { chara, text: 'ここで終わるわけにはいかない…。' }
    ])
    jk.destroy()
    await scene.talk([
      { chara: 'ann', text: '！！' },
      { chara: 'jaquelyn', text: '飛び降りるなんて…。' },
      { chara: 'francisca', text: 'まずいね…。' },
      { chara: 'ann', text: 'どうしよう…。' },
      { chara: 'ann', text: '追いかける…？' },
      { chara: 'jaquelyn', text: 'え、この穴に？' },
      { chara: 'francisca', text: '無理でしょ。' },
      { chara: 'ann', text: 'そうだよね。' },
      { chara: 'ann', text: 'この穴、底が見えないけど、どうなってるんだろう…？' },
      { chara: 'francisca', text: '死んだかもね。' },
      { chara: 'ann', text: 'うう…。' },
      { chara: 'jaquelyn', text: '追いかけるのは無理そうだし、' },
      { chara: 'jaquelyn', text: 'ひとまず今は先を急ぎましょう。' },
      { chara: 'jaquelyn', text: '王妃の亡霊の件をなんとかしないと…。' },
      { chara: 'ann', text: 'そうだね、そうしよう。' }
    ])
    state.solved = true
    area1.destroy()
  })
}
