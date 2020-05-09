// 噂好きのアンバー婦人
export const amber = async (scene, chara) => {
  await scene.talk([
    { chara, text: '今日もいい天気ね。' }
  ])
}

// 宿屋のアナベル
export const annabelle = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.annabelle
  if (!state.includes(0)) {
    await scene.talk([
      { chara, text: '旅人さんこんにちは。' },
      { chara, text: '今夜の宿はお決まりかしら？' },
      { chara, text: 'よかったらうちに泊まっていってね。' },
      { chara: 'ann', text: 'ありがとう。' },
      { chara: 'ann', text: 'でも宿はもうとってあるんだ。' },
      { chara, text: 'そっか、' },
      { chara, text: 'でもうちは、そのへんの宿よりもっとイイよ。' },
      { chara: 'ann', text: 'そうなの？' },
      { chara, text: 'ちょっと、というかかなり高めだけれど、' },
      { chara, text: 'いっぱいサービスするわ。' },
      { chara: 'ann', text: '高級な宿ってこと？' },
      { chara: 'ann', text: 'ちょっとそういう感じには見えないけどな…。' },
      { chara, text: 'そういうことじゃなくて。' },
      { chara, text: '来てみたら分かるよ。' },
      { chara, text: 'お姉さんには頑張っちゃう。' },
      { chara: 'ann', text: '？' },
      { chara, text: '気が向いたら来てね。' }
    ])
    chara.nextMessages = [{ chara, text: '気が向いたら来てね。' }]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara, text: 'あ、お姉さん、' },
      { chara, text: 'よかったらうちでお昼はいかが？' },
      { chara, text: '今ならパンが焼きたて。' },
      { chara: 'ann', text: 'あ、いいな！' },
      { chara, text: 'ぜひ。' },
      { chara, text: '私の焼くパンはファンも多いのよ。' },
      { chara: 'ann', text: 'そうなの？' },
      { chara, text: 'うん。' },
      { chara, text: '例えばほら、そこの影に隠れている女の子もそうだよ。' },
      { chara, text: 'なぜか私が居ないときにコソコソ買いに来るんだけど。' },
      { chara: 'ann', text: 'なんで？' },
      { chara, text: 'さあ、なんでだろうね。' }
    ])
    chara.nextMessages = [{ chara, text: 'あの子、マチルダっていうんだよ。' }, { chara, text: '可愛いでしょ。' }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: '十年くらい前に、ドラゴンがこの国を襲った話は知ってる？' },
      { chara, text: 'エドガー王がそのドラゴンと戦って、グリファルデ神殿に封じたの。' },
      { chara, text: 'パパやママはいつもこの話を私に聞かせたわ。' },
      { chara, text: 'うちの宿屋にもね、ドラゴンと戦うエドガー王の絵画が飾ってあるから、' },
      { chara, text: 'よかったら見ていってね。' },
      { chara, text: 'パパが高く買った絵なんだけど、とっても評判がいいの。' },
      { chara, text: 'ベリオン人にとってこの話は誇りみたい。' },
    ])
    chara.nextMessages = [{ chara, text: 'ベリオン人にとってこの話は誇りみたい。' }]
    state.push(2)
  } else if (!state.includes(3)) {
    const arr = [
      { chara, text: 'マチルダとはね、' },
      { chara, text: '昔は結構仲が良かったんだ。' },
      { chara, text: 'でもいつの間にか避けられるようになってね、' },
      { chara, text: 'さりげなーく近づくと、慌てて逃げていっちゃうの。' },
      { chara, text: '可愛いでしょ。' }
    ]
    await scene.talk(arr)
    chara.nextMessages = arr
    state.push(3)
  } else {
    await scene.talk([
      { chara, text: '今日もいい天気ですね。' }
    ])
  }
}
// 内気なマチルダ
export const matilda = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.matilda
  if (!state.includes(0)) {
    await scene.talk([
      { chara: 'ann', text: 'こんにちは。' },
      { chara: 'ann', text: 'キミはこんな建物の影で何してるの？' },
      { chara, text: 'あ、そ、そうだよね。怪しいよね…。' },
      { chara, text: 'えっと、そこにいる宿屋のアナベルを見張っているの。' },
      { chara, text: '悪いことしないように。' },
      { chara: 'ann', text: '悪い子なの？' },
      { chara, text: 'ううん。とっても良い子よ。' },
      { chara, text: '昔よく遊んだから…。' },
      { chara: 'ann', text: 'じゃあどうして？' },
      { chara, text: 'なんか、最近怪しいお仕事してるみたいなの。' },
      { chara, text: 'それで…、心配で…。' },
      { chara: 'ann', text: 'じゃあ直接止めに行けばいいじゃん。' },
      { chara: 'ann', text: '仲良かったんだよね？' },
      { chara, text: 'そうなんだけど…、' },
      { chara, text: 'なんか最近話しかけるのが恥ずかしくなっちゃって…、' },
      { chara, text: 'なんでかな…。' },
      { chara: 'ann', text: 'そうなんだ。' },
      { chara: 'ann', text: 'まあそういうときもあるさ。' },
      { chara: 'ann', text: 'きっとまたそのうち仲良くできると思うよ。' },
      { chara, text: 'そうなのかな…。ありがとう。' }
    ])
    chara.nextMessages = [
      { chara, text: 'アナベル、すごく良い子なの。' },
      { chara, text: 'また昔みたいに仲良くしたいな…。' }
    ]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara: 'ann', text: 'どうしたの？そんな怖い顔して。' },
      { chara, text: 'あ、あのね、えっと、' },
      { chara, text: 'グリファルデ神殿にはね、昔エドガー王が封印したドラゴンが眠っているの。' },
      { chara, text: 'そのドラゴンがね、目覚めたんじゃないかって噂を聞いたの。' },
      { chara, text: 'それで、怖いなって…。' },
      { chara: 'ann', text: 'そうなの？' },
      { chara, text: 'うん、直接見た人が居るわけじゃないみたいだけど、' },
      { chara, text: '最近、エゼルバルド王弟が頻繁に神殿を訪れているんだって。' },
      { chara, text: 'だから神殿で何か起きているんじゃないかって皆心配してるの…。' },
      { chara, text: 'いつかは目覚める、って私が小さい頃から言われていたけれど、' },
      { chara, text: '怖いな…。' },
      { chara: 'ann', text: 'そうなんだ…。怖いね。' }
    ])
    chara.nextMessages = [{ chara, text: '怖いな…。' }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: '…。' },
      { chara, text: '………。' },
      { chara, text: 'あ！ごめんね…、' },
      { chara, text: '気づかなった…。ぼうっとしてて…。' },
      { chara: 'ann', text: '大丈夫？' },
      { chara: 'ann', text: 'また宿屋の子見てたの？' },
      { chara, text: 'あ、うん…、' },
      { chara, text: 'いつも、見てる…。' },
      { chara: 'ann', text: 'そ、そうなんだ。' },
      { chara: 'ann', text: '話しかけたら？' },
      { chara, text: 'ううん…。緊張しちゃうから…。' }
    ])
    chara.nextMessages = [{ chara, text: 'アナベル…。' }]
    state.push(2)
  } else if (!state.includes(3)) {
    await scene.talk([
      { chara, text: '昔ね…、' },
      { chara, text: 'アナベルがふざけて私にキスしたことがあるの。' },
      { chara, text: 'ずるいよね。' },
      { chara, text: '自分だけ何もなかったみたいな顔して…。' },
      { chara, text: 'あれ、なんだったのかな…。' }
    ])
    chara.nextMessages = [{ chara, text: 'あれ、なんだったのかな…。' }]
    state.push(3)
  } else {
    await scene.talk([
      { chara, text: 'アナベル…。' },
      { chara, text: 'はあ…。' }
    ])
  }
}

// 卑劣なエリオット
export const elliott = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.elliott
  if (!state.includes(0)) {
    await scene.talk([
      { chara, text: 'あんた、どっから来た旅人さんか知らんが、金には不自由してなさそうだな。' },
      { chara, text: 'なあ、俺にちょっと金を預けてみないか？' },
      { chara, text: 'いい儲け話を手に入れたんだが、それをするための元手がないんだ。' }
    ])
    const i = await scene.select(['はい', 'いいえ'])
    await scene.talk([
      ...(i === 0 ? [
        { chara: 'francisca', text: 'やめなさいよ、アン。' },
        { chara: 'ann', text: 'でも儲かるみたいだよ？' },
        { chara: 'francisca', text: 'バカね。とにかくダメ。' }
      ] : []),
      { chara, text: 'ちっ、' }
    ])
    chara.nextMessages = [{ chara, text: '気は変わらないか？' }]
    state.push(0)
  } else if (!state.includes(1)) {
    const arr = [
      { chara, text: 'グリファルデ神殿って知ってるか？' },
      { chara, text: 'ずっと昔に作られて、今は使われていない神殿なんだけどな、' },
      { chara, text: '十年ほど前にこの国を襲ったドラゴンがそこに眠っているんだ。' },
      { chara, text: 'そのときドラゴンと戦ったのがエドガー王なんだが、' },
      { chara, text: '神殿のどこかには、王が切り落とした竜の鱗が落ちているって噂だ。' },
      { chara, text: 'さすがにちょっと嘘くさい気もするが、' },
      { chara, text: 'もし本当に見つかったら、相当高く売れるんだろうな。' }
    ]
    await scene.talk(arr)
    chara.nextMessages = arr
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: '聖アンテルスの墓地には、市民から王家に至るまで幅広く埋葬されている。' },
      { chara, text: 'もちろんその中で扱いに差はあるがな。' },
      { chara, text: 'だから上流階級のエリアには、' },
      { chara, text: '金目の物を漁りに墓荒らしが来ることもあるんだ。' },
      { chara: 'ann', text: 'へえ。' },
      { chara, text: '…おい、俺は流石にそこまで堕ちちゃいないぞ。' },
      { chara: 'ann', text: '何も言ってないよ。' },
      { chara, text: 'まあでもちゃんと衛兵が置かれているから被害は少ないらしい。' },
      { chara, text: 'だが、そんな衛兵の仕事に最近「悪霊退治」が加わったらしいぜ。' },
      { chara: 'ann', text: 'おばけが出るの？' },
      { chara, text: 'ああ。' },
      { chara, text: 'だから墓参りしたいときも、衛兵に金を払って護衛を頼む必要があるんだってよ。' },
      { chara, text: 'どちらかというと俺が興味があったのはそっちさ。' },
      { chara, text: '俺もマックスのように剣が扱えたなら、用心棒でもやるんだがな。' }
    ])
    chara.nextMessages = [{ chara, text: '俺もマックスのように剣が扱えたなら、用心棒でもやるんだがな。' }]
    state.push(2)
  } else {
    await scene.talk([
      { chara, text: 'よう、元気にしてるか？' }
    ])
  }
}

// 賞金稼ぎのマックス
export const max = async (scene, chara) => {
  if (chara.nextMessages) return await scene.talk(chara.nextMessages)
  const state = scene.storage.state.event.town.max
  if (!state.includes(0)) {
    await scene.talk([
      { chara: 'ann', text: 'エドガー王ってどんな人ですか？' },
      { chara, text: 'どんな人かって、エドガー王はみんなの英雄だ。' },
      { chara, text: '誰もが王を尊敬している。' },
      { chara: 'francisca', text: '王国を襲った竜を倒したって聞きました。' },
      { chara, text: 'その通り、この国の民ならみんな知っていることだ。' },
      { chara, text: '十年近く昔の話だが、王は王国まで飛んできた竜と直接戦った。' },
      { chara, text: '殺したわけではないが、追い払って、グリファルデ神殿に封じた。' },
      { chara: 'ann', text: '強いんですね。' },
      { chara, text: 'ああ。エドガー王が即位してからこの国はずっと平和だ。' },
      { chara: 'jaquelyn', text: 'だから〈平和王〉なんですね。' },
      { chara, text: 'そうだ。' }
    ])
    chara.nextMessages = [{ chara, text: 'エドガー王が即位してからこの国はずっと平和だ。' }]
    state.push(0)
  } else if (!state.includes(1)) {
    await scene.talk([
      { chara, text: '最近、グリファルデ神殿のドラゴンが目覚めたんじゃないかって噂があるらしい。' },
      { chara, text: 'もし本当だとしたら王国にとって一大事だ。' },
      { chara, text: 'あのドラゴンは王を恨んでいるはずだからな。' },
      { chara, text: 'いつここまで飛んできてもおかしくない。' }
    ])
    chara.nextMessages = [{ chara, text: 'もし本当だとしたら王国にとって一大事だ。' }]
    state.push(1)
  } else if (!state.includes(2)) {
    await scene.talk([
      { chara, text: '王にはエゼルバルドという弟が居てな、' },
      { chara, text: '彼も相当剣の腕が立つらしい。' },
      { chara, text: 'エドガー王はさすがに歳も歳だが、' },
      { chara, text: 'もしこの国に危険が訪れたら、今度は王弟がなんとしてくれると思うぜ。' }
    ])
    chara.nextMessages = [{ chara, text: 'もしこの国に危険が訪れたら、今度は王弟がなんとしてくれると思うぜ。' }]
    state.push(2)
  } else {
    await scene.talk([
      { chara, text: 'よお、元気かい？' }
    ])
  }
}
